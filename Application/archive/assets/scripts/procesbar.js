$(document).ready(function () {
    //get and return time and date for clock
    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var d = today.getDate();
        var mo = today.getMonth() + 1;
        var y = today.getFullYear();
        m = checkTime(m);
        d = checkTime(d);
        mo = checkTime(mo);
        document.getElementById('time').innerHTML =
        h + ":" + m;
        
        document.getElementById('date').innerHTML =
        d + "-" + mo + "-" + y;
        var t = setTimeout(startTime, 500);
    }
    // add zero in front of numbers < 10
    function checkTime(i) {
        if (i < 10) { i = "0" + i };  
        return i;
    }
    startTime();

});
var libTogVar = true;
var libX = "7%"
var libY = "7%"

function libClose(cased) {
    if (cased == "imageView") {
        document.getElementById("imagePrevIcon").remove();
        document.getElementById("imageView").remove();
    }
}

function libTog(id) {
    if (libTogVar == true) {
        document.getElementById(id).style.transform = "scale(0)";
        if (document.getElementById(id).style.left !== "") {
            libX = document.getElementById(id).style.left;
            libY = document.getElementById(id).style.top;
        }
        libTogVar = false;
    }

    else {
        document.getElementById(id).style.transform = "scale(1)";
        document.getElementById(id).style.top = libY;
        document.getElementById(id).style.left = libX;
        libTogVar = true;
    }
}
var h, w, t, l;
function libMax(id) {
    document.getElementById(id).style.transition = "all ease 0.1s";

    if (document.getElementById(id).style.width !== "100%" ||
        document.getElementById(id).style.height !== "calc(100% - 4.9em)" ||
        document.getElementById(id).style.top !== "1.9em" ||
        document.getElementById(id).style.left !== "0em") {
        libMaxTwo(id);
    }
    else
        libMaxFour(id);
}
function libMaxTwo(id) {
    h = document.getElementById(id).style.height;
    w = document.getElementById(id).style.width;
    t = document.getElementById(id).style.top;
    l = document.getElementById(id).style.left;

    document.getElementById(id).style.top = "1.9em";
    document.getElementById(id).style.left = "0em";
    document.getElementById(id).style.height = "calc(100% - 4.9em)";
    document.getElementById(id).style.width = "100%";
    setTimeout(libMaxThree, 100);
}

function libMaxThree(id) {
    document.getElementById(id).style.transition = "transform 200ms ease-in";
}
function libMaxFour(id) {
    document.getElementById(id).style.transition = "all ease 0.1s";

    libMaxFive(id);
}
function libMaxFive() {
    console.log(h + "" + w + "" + t + "" + l)
    document.getElementById(id).style.top = t;
    document.getElementById(id).style.left = l;
    document.getElementById(id).style.height = h;
    document.getElementById(id).style.width = w;

    setTimeout(libMaxThree, 100, id);
}