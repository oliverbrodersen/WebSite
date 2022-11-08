var l = ["Y", "R", "G"],
    list = ["yello", "re", "gree"],
    hands = ["L", "R"],
    compliments = ["Great job!", "Great!", "So close!", "Well done!", "So fast!", "Super", "Keep on going!", "You've got it!"],
    i = 0,
    iOld = i,
    down = false,
    verify,
    verified = false,
    counter,
    count = 0,
    started = false,
    times = [1254,1024,1141,1021,2154,1059,1158,1059,1212,1203],
    timesRanked = [1254,1024,1141,1021,2154,1059,1158,1059,1212,1203],
    hold = false,
    u_mail = "",
    undo = [];

//Color
function colorShift(c, v) {
    if (c == "red")
        i = 0
    else if (c == "green")
        i = 1
    else
        i = 2

    if (v == true)
        verified = true;
    
    iOld = i;
    if (i == 2)
        i = 0;
    else
        i++;
    for (var j = 0; j < 2; j++) {
        document.getElementById("hand" + hands[j] + l[i]).className = "show";
        document.getElementById("left" + hands[j] ).style.background = "var(--" + list[iOld] + ")";

        if (i == 0)
            document.getElementById("hand" + hands[j] + l[2]).className = "hide";
        else if (i == 1)
            document.getElementById("hand" + hands[j] + l[0]).className = "hide";
        else
            document.getElementById("hand" + hands[j] + l[1]).className = "hide";

    }
}
$(document).ready(function () {
    downloadTasks(u_mail);
    timesRanked.sort(function (a, b) { return a - b });
    $("body").keydown(function (event) {
         //Press to init start
         if (down == false && hold == false && event.keyCode !== 18 && event.keyCode !== 17) {
             $("#timer").text("0:00.00");
             $("#undo").css("top", "-45px");
             $("#message").text("");
             down = true;
             colorShift("red");
             $("#highscore").remove();
             $("#highscoreB").remove();
             $("#progress").addClass("anim");
             verify = setTimeout(colorShift, 1000, "green", true)
         }
         //Press to init stop
         if (started) {
             hold = true;
             setTimeout(resume, 500);
             started = false;
             clearInterval(counter);
             colorShift("yellow");
             verified = false;
             if (count < timesRanked[0])
                $("#body").prepend("<div id='highscoreB'>New best!</div><div id='highscore'>New best!</div>");
            
             times.push(count);
             timesRanked.push(count);
             timesRanked.sort(function (a, b) { return a - b });
             if (count < timesRanked[4] && count > timesRanked[0] && times.length > 5){
                 $("#message").text(compliments[Math.floor(Math.random() * compliments.length)]);
             }
             addTime(count);
             //make php request for post of data
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.open("POST", "upload.php?q=" + count + "&e=" + u_mail, true);
			xmlhttp.send();

         }
     });
     $("body").keyup(function (event) {
         //Detect premature keyup ind verification
         if (verified == false) {
             clearTimeout(verify);
             down = false;
             colorShift("green");
             colorShift("yellow");
             $("#progress").removeClass("anim");
         }
         //start
         else {
             startTimer();
         }
     });
     for (let i = 0; i < times.length; i++) {
         addTime(times[i], i+1);
     }
     checkLow();
 });

//Start timer
function startTimer() {
    counter = setInterval(timer, 10);
    started = true;
    count = 0;
}
//running timer
function timer() {
    count++;
    $("#timer").text(toMin(count));
}

//Miliseconds to timestamp
function toMin(s) {
    var min = Math.floor(s / 6000);
    var sec = Math.floor((s - (6000 * min)) / 100);
    var mili = Math.floor(s - (sec * 100 + min * 6000));
    //Set 0 infront of int if <10
    if (sec.toString().length < 2)
        sec = "0" + sec;
    if (mili.toString().length < 2)
        mili = "0" + mili;

    if (min > 0)
        return min + ":" + sec + "." + mili;
    else
        return sec + "." + mili;
}

//Reanable timer to prevent early pass
function resume(){
    hold = false;
}
 function addTime(c, i, z) {
     if (i == undefined)
        i = times.length;

    $('#TimesCont').prepend('<div id="' + i + '" class="times"><h6 class="num"><span>' + i + '</span>' + toMin(c) + '</h6><input type="button" class="delete" value="x" onclick="deleteInt(' + c + ')"></div>'); 
    if(z !== false)
        checkLow();
 }

 function checkLow() {

     //Checks ranked list and finds nr 1 and 2 to then find id for normal list and add or delete "best" class
    var a = times.indexOf(timesRanked[0]) + 1,
        b = times.indexOf(timesRanked[1]) + 1;
    $("#" + a).addClass("best");
    $("#" + b).removeClass("best");
 }

 function downloadTasks(str) {
	if (str != ""){
        var nArray = [], isDifferent;
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var per = this.responseText.slice(0,-1);
                if (per != "") {
                    var timesDB = per.split("+");
                    for (let i = 0; i < timesDB.length; i++) {
                        times.push(parseInt(timesDB[i]));
                        timesRanked.push(parseInt(timesDB[i]));
                        addTime(parseInt(timesDB[i]), undefined, false);
                    }
                    timesRanked.sort(function (a, b) { return a - b });
                    checkLow();
                }
            }
        };
        xmlhttp.open("GET", "download.php?e=" + str, true);
        xmlhttp.send();
    }
}
//works like ARRAY.insert(index, Item to add);
Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};
function deleteInt(i) {
    //Index is location of time in the array. Aka, 1 less than the shown rank and id
    var index = times.indexOf(i);
    var indexR = timesRanked.indexOf(i);
    var countD = i;
    undo = [index, i];
    if (index > -1) {
        times.splice(index, 1);
        timesRanked.splice(indexR, 1);
    }
    if (index == times.length) {
        index++;
        $("#" + index).remove();
    }
    else{
        //Empty times display
        $("#TimesCont").text("");
        //Add Times again
        for (let i = 0; i < times.length; i++) {
            addTime(times[i], i+1);
        }
    }
    //Slet database item
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "delete.php?q=" + countD + "&e=" + u_mail, true);
    xmlhttp.send();
    checkLow();
    $("#undo").css("top", "0");
}

function doUndo (){
    $("#undo").css("top", "-45px");
    times.insert(undo[0], undo[1]);
    timesRanked.insert(undo[0], undo[1]);
    timesRanked.sort(function (a, b) { return a - b });

    //Empty times display
    $("#TimesCont").text("");
    //Add Times again
    for (let i = 0; i < times.length; i++) {
        addTime(times[i], i+1);
    }
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "upload.php?q=" + undo[1] + "&e=" + u_mail, true);
    xmlhttp.send();
    undo = [];
}