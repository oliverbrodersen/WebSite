//8888888b.  888                                 
//888   Y88b 888                                 
//888    888 888                                 
//888   d88P 88888b.   .d88b.  88888b.   .d88b.  
//8888888P"  888 "88b d88""88b 888 "88b d8P  Y8b 
//888        888  888 888  888 888  888 88888888 
//888        888  888 Y88..88P 888  888 Y8b.     
//888        888  888  "Y88P"  888  888  "Y8888  
var senderId;
var myVar;
var timerr;
var open = false;
var gravity;
var vol;
var height;
var pipeTimer;
var b = 0;
var n = 0;
var score = 0;
var ingame;
var gameStart = false;
var dead = false;
var not = 0;
window.onkeypress = listenToTheKey;
function openPhone() {
    if (!open) {
        document.getElementById("phone").style.top = "7vw";
        document.getElementById("phone").style.left = "42vw";
        var backdrop = document.createElement("div");
        backdrop.id = "phoneBackdrop";
        document.getElementsByTagName('body')[0].appendChild(backdrop);
        open = true;
        setNot(0);
        document.getElementById('title').innerHTML = numberWithCommas(value) + ' Honey money';
    }
    else {
        document.getElementById("phone").style.left = "-17vw";
        open = false;
        senderId = "";
        document.getElementById('contacts').style.left = '0%'; senderId = '';
        document.getElementById("phoneBackdrop").remove();
    }
}
function setNot(num, message, from) {
    if (num == 0) {
        not = 0;
        document.getElementById("spanPhone").innerHTML = not;
        document.getElementById("spanPhone").style.visibility = "hidden";
    }
    else if(num == 1){
        document.getElementById("spanPhone").style.visibility = "visible";
        not++;
        document.getElementById("spanPhone").innerHTML = not;
        document.getElementById('title').innerHTML = numberWithCommas(value) + ' Honey money [' + not + "]";

        var out = document.createElement("div");
        out.id = "messageIndicator";
        var inn = document.createElement("h20");
        if (from == "sd")
            inn.innerHTML = "Sugar daddy";
        if (from == "a")
            inn.innerHTML = "achievements";
        document.getElementById("but").appendChild(out);
        out.appendChild(inn);
        out.addEventListener('webkitAnimationEnd', function (event) { out.remove(); }, false);
    }
}
function listenToTheKey(e) {
    if (e.keyCode == 32 && ingame == true) {
        gravity = 2;
        if (gameStart == false) {
            gravityF();
        }
    }
}
$(document).keyup(function (e) {
    if (e.keyCode == 27 && ingame == true) {document.getElementById("snakeBG").remove(); ingame = false;} // esc
    if (e.keyCode == 27 && senderId !== "" && ingame !== true) { document.getElementById('contacts').style.left = '0%'; senderId = ''; }
    if (e.keyCode == 27 && open == true && ingame !== true) { openPhone(); }
});
function showDaddy(object, sender) {
    object.className = "message";
    document.getElementById("contacts").style.left = "-110%";
    senderId = sender;
    document.getElementById("screen").className = sender;
    if (senderId == "sd") {
        $('#sd.holder').css('height', 'initial');
        $('#a.holder').css('height', '0');
    }
    if (senderId == "a") {
        $('#a.holder').css('height', 'initial');
        $('#sd.holder').css('height', '0');
    }
}
function sendMessage(who, message, from) {
    if (document.getElementById("typetype").value !== "" || who == "send") {
        if (!open) {
            setNot(1, message, from);
        }
        clearInterval(myVar);
        var type = document.getElementById("typetype").value;
        var outer = document.createElement("div");
        outer.className = "holder";
        if(from !== "")
            outer.id = from;
        else
            outer.id = senderId;
        outer.style.height = "initial";
        var text = document.createElement("h8");
        if (who !== "send") {
            text.className = "me";
            text.innerHTML = document.getElementById("typetype").value;
            outer.id = senderId;
        }
        
        else { text.innerHTML = message; }
        if (from == "sd")
            document.getElementById("sdMes").className += " new";
        else if (from == "a")
            document.getElementById("aMes").className += " new";
        outer.appendChild(text);
        document.getElementById("textField").appendChild(outer);
        document.getElementById("typetype").value = "";
        checkGame(type);
        if (senderId == "a" && outer.id !== "a")
            outer.style.height = "0";
        else if (senderId == "sd" && outer.id !== "sd")
            outer.style.height = "0";
        $('#textField').animate({
            scrollTop: $('#textField')[0].scrollHeight
        }, 200);
    }
}
function checkGame(value) {
    var str = value;
    var res = str.split(" ");
    for (var i = 0; i < res.length; i++) {
        if (res[i] == "hey" && senderId == "sd") { sendMessage("send", "Nej", "sd"); }
        else if (res[i] == "Game" || res[i] == "play" || res[i] == "Play" || res[i] == "game") { if (senderId == "sd") document.getElementById("askBG").style.bottom = "0%"; }
        else if (res[i] == "Highscore" || res[i] == "highscore" || res[i] == "high score") { if (senderId == "sd") sendMessage("send", highscore, "sd"); }
        else if (res[i] == "Help" || res[i] == "help" || res[i] == "what to write") { if (senderId == "sd") sendMessage("send", "'Game': Play JumpyCoin \ 'Highscore': Get JumpyCoin Highscore", "sd"); }
    }
}
function playSnake() {
    document.getElementById('askBG').style.bottom = '-50%';
    var bg = document.createElement("div");
    bg.id = "snakeBG";
    var score = document.createElement("div");
    score.id = "flappyScore";
    score.innerHTML = "0";
    document.getElementById("screen").appendChild(bg);
    var char = document.createElement("img");
    char.id = "char";
    char.src = "ect/billeder/mont.png";
    bg.appendChild(score);
    bg.appendChild(char);
    var esc = document.createElement("h18");
    esc.className = "esc";
    esc.id = "esc";
    esc.innerHTML = "esc";
    esc.addEventListener('webkitAnimationEnd', function (event) { esc.remove(); }, false);
    var space = document.createElement("h18");
    space.className = "space";
    space.id = "space";
    space.innerHTML = "space";
    space.addEventListener('webkitAnimationEnd', function (event) { space.remove(); }, false);
    bg.appendChild(esc);
    bg.appendChild(space);
    score = 0;
    document.getElementById("char").style.webkitAnimation = "FlappyAnim 2s running infinite ease";
    document.getElementById("snakeBG").style.animation = "bgRun running 8s linear infinite";
    ingame = true;
}
function addPipes() {
    var pipeTop = document.createElement("img");
    var pipeBund = document.createElement("img");
    var topLength = Math.floor((Math.random() * 60) + 1);
    var bundLength = topLength + 40;
    pipeTop.id = "pipet";
    pipeBund.id = "pipeb";
    pipeTop.src = "ect/billeder/tPipe.png";
    pipeBund.src = "ect/billeder/bPipe.png";
    pipeBund.style.top = bundLength + "%";
    pipeTop.style.bottom = 100 - topLength + "%";
    document.getElementById("snakeBG").appendChild(pipeTop);
    document.getElementById("snakeBG").appendChild(pipeBund);
    movePipes(pipeTop, pipeBund, -10, topLength, bundLength);
}

function gravityF() {
    if (gameStart == false) {
        gameStart = true;
        gravity = 2;
        vol = 0;
        height = 40;
        dead = false;
        document.getElementById("char").style.webkitAnimation = "none";
        document.getElementById("esc").style.webkitAnimationPlayState = "running";
        document.getElementById("space").style.webkitAnimationPlayState = "running";
        pipeTimer = setInterval(addPipes, 1800);
    }
    gravity -= 0.1;
    vol -= gravity;
    document.getElementById("char").style.top = height + vol + "%";
    if (vol <= -40 && dead == false) {
        vol = -40;
        setTimeout(gravityF, 20);
    }
    else if (vol <= 60 && dead==false) {
        setTimeout(gravityF, 20);
    }
    else if (dead == true) {
        gravity -= 0.5;
        setTimeout(gravityF, 20);

    }
    else if (vol > 60 && dead == false) {
        dead = true;
        clearInterval(pipeTimer);
        document.getElementById("snakeBG").style.webkitAnimationPlayState = "paused";
        setTimeout(gameOver, 1000);
    }
}
function movePipes(top, bund, i, th, bh) {
    i++;
    if (i > 60 && i < 90) {
        if ((vol + 40) <= th || (vol + 40 + document.getElementById("char").style.height) >= bh) {
            dead = true;
            clearInterval(pipeTimer);
            document.getElementById("snakeBG").style.webkitAnimationPlayState = "paused";
            setTimeout(gameOver, 1000);
        }
    }
    if (i <= 121 && dead == false) {
        top.style.right = i + "%";
        bund.style.right = i + "%";
        setTimeout(movePipes, 20, top, bund, i, th, bh);
    }
    if (i == 100 && dead == false) {
        score++;
        document.getElementById("flappyScore").innerHTML = score;
    }
    if (i > 120 && dead == false) {
        top.remove();
        bund.remove();
    }
    
}
function gameOver() {
    document.getElementById("snakeBG").style.webkitAnimation = "none";
    document.getElementById("snakeBG").remove();
    if (highscore == 0) {
        sendMessage("send", "Good girl! you got " + score + "! I'm proud!", "sd");
        highscore = score;
    }
    else if (score == highscore) {
        sendMessage("send", "Uhh tat was close! One more and you had beat your highscore of " + score + "! I know you can do it!", "sd");
    }
    else if (score > highscore) {
        sendMessage("send", "That's how you do it! Great job, you just beat your own highscore! I wouldn't be able to get a score of " + score + " like you! I'm proud!", "sd");
        highscore = score;
    }
    else if (score < highscore) {
        sendMessage("send", "Good girl! you got " + score + "! I'm proud!", "sd");
    }
    gameStart = false;
    ingame = false;
    dead = false;
    n = 0;
    document.cookie = "highscore=" + highscore;
    score = 0;
    playSnake();
}
