// JavaScript source code

//If twoer can be paced
var placeable;
var towersAr = [];
var towers = 0;

//Add test shop button
var testBut = document.createElement("input");
testBut.type = "button";
testBut.id = "testBut";
testBut.value = "Kob tower"
testBut.onclick = function () { shop("test", 250, 70, this, 1000); };


function moneyUpdate() {
    if (cash >= monPrKlik) {
        document.getElementById("upgradeClickMon").style.backgroundColor = "#a1dcf4";
        document.getElementById("upgradeClickMon").style.cursor = "pointer";
        document.getElementById("upgradeClickMon").onclick = function () { kobshop("mon"); };
    }
    else {
        document.getElementById("upgradeClickMon").style.backgroundColor = "#fb4444";
        document.getElementById("upgradeClickMon").style.cursor = "not-allowed";
        document.getElementById("upgradeClickMon").onclick = function () { };
    }
    if (cash >= bobPrKlik) {
        document.getElementById("upgradeClickBob").style.backgroundColor = "#a1dcf4";
        document.getElementById("upgradeClickBob").style.cursor = "pointer";
        document.getElementById("upgradeClickBob").onclick = function () { kobshop("bob"); };
    }
    else {
        document.getElementById("upgradeClickBob").style.backgroundColor = "#fb4444";
        document.getElementById("upgradeClickBob").style.cursor = "not-allowed";
        document.getElementById("upgradeClickBob").onclick = function () {  };
    }
}

var butCan = document.createElement("div");
butCan.id = "towerCont";

butCan.appendChild(testBut);
document.getElementById("UI").appendChild(butCan);

var clickRB = document.createElement("div");
clickRB.id = "upgradeClickBob";
clickRB.innerHTML = "$100";
clickRB.onclick = function () { kobshop("bob"); };
document.getElementById("UI").appendChild(clickRB);

var clickMB = document.createElement("div");
clickMB.id = "upgradeClickMon";
clickMB.innerHTML = "$100";
clickMB.onclick = function () { kobshop("mon"); };
document.getElementById("UI").appendChild(clickMB);

moneyUpdate();

//function shop(id, radiusRange, size, but, price) {
//    //Disables button
//    but.disabled = true;
//    //Cancles startwave button
//    document.getElementById("ironBarUi").style.height = "9%";
//    document.getElementById("waveButton").className = "laneNotFree";
//    document.getElementById("waveButton").onclick = "";
//    document.getElementById("waveButton").innerHTML = "You've gotta wait..";

//    //Adds range visual
//    var range = document.createElement("div");
//    range.id = "range_" + id;
//    range.style.height = 2 * radiusRange + "px";
//    range.style.width = 2 * radiusRange + "px";
//    range.style.left = canvas.width - size - radiusRange+ "px";

//    //Adds obj
//    var obj = document.createElement("div");
//    obj.id = "obj_" + id;
//    obj.style.height = 2 * size + "px";
//    obj.style.width = 2 * size + "px";
//    obj.style.cursor = "crosshair";
//    obj.style.left = canvas.width - size - size + "px";

//    //Appends visuals and activates onclick and on movemouse
//    var e = e || window.event;
//    document.getElementsByTagName('body')[0].appendChild(range);
//    document.getElementsByTagName('body')[0].appendChild(obj);
//    $(document).mousemove(function (e) { moveTower(range, radiusRange, obj, size, e, id); });
//    $(document).mousedown(function (e) { placeTower(range, radiusRange, obj, size, e, but, price, id); });
//    //Bind
//    $(document).keydown(function (e) {
//        if (e.keyCode == 27) {
//            undo(but, range, radiusRange, obj, size, e, price, id);
//        }
//    });
//}

////folow mouse function
//function moveTower(range, radiusRange, obj, size, e, id) {
//    //If mouse is widthin the sides of canvas, move obj with mouse
//    if (e.pageX - size >= 0 && e.pageX + size <= canvas.width) {
//        range.style.left = e.pageX - radiusRange + "px";
//        obj.style.left = e.pageX - size + "px";
//    }
//    //If mouse is widthin the top and button of canvas, move obj with mouse
//    if (e.pageY - size >= 0 && e.pageY + size <= canvas.height) {
//        range.style.top = e.pageY - radiusRange + "px";
//        obj.style.top = e.pageY - size + "px";
//    }

//    //Check 32 points on the peramiter of the obj (every 11.5deg)
//    for (var i = 0; i < 32; i++) {
//        //Calcs the points
//        var v = (i * 11.5) / 180 * Math.PI;
//        var x = e.pageX - Math.sin(v) * size;
//        var y = e.pageY - Math.cos(v) * size;

//        //If one of the points is over a set value in the alpha map, make the obj unplacable and make range red
//        if (canvas.getContext('2d').getImageData(x, y, 1, 1).data[0] >= 76) {
//            range.style.backgroundColor = "rgba(255,0,0,.3)";
//            placeable = false;
//            break;
//        }
//        else {
//            range.style.backgroundColor = "rgba(0,0,0,.3)";
//            placeable = true;
//        }
//    }
//}

//function undo(but, range, radiusRange, obj, size, e, price, id) {
//    //Disable mousemove function
//    but.disabled = false;
//    //Remove range
//    range.remove();
//    obj.style.cursor = "normal";
//    //Remove obj
//    obj.remove();
//    $(document).off(moveTower(range, radiusRange, obj, size, e, price, id));
//    //Activetes nextwave button
//    document.getElementById("waveButton").className = "laneFree";
//    document.getElementById("waveButton").onclick = function () { nextWave(); };
//    document.getElementById("waveButton").innerHTML = "START!";
//    document.getElementById("ironBarUi").style.height = "0%";
//}

////Onclick place tower function
//function placeTower(range, radiusRange, obj, size, e, but, price, id) {
//    //if it isn't over a path
//    if (placeable) {
//        var context = canvas.getContext('2d');
//        context.beginPath();
//        context.arc(e.pageX, e.pageY, size, 0, 2 * Math.PI);
//        context.fillStyle = "#4c4c4c";
//        context.fill();
//        obj.className = "shadow";
//        obj.style.cursor = "pointer";
//        obj.onclick = function () { towerMenu(range, radiusRange, obj, id, false ,e.pageX, e.pageY); };
//        obj.oncontextmenu = function () { rightClickTower(radiusRange, obj, size, e, price, e.pageX, e.pageY, id); };
//        //Undisable button
//        but.disabled = false;
//        //Remove range
//        range.remove();
//        towers++;
//        towersAr.push({ obj: obj, size: size, x: e.pageX, y: e.pageY, id: id});
//        //Disable mousemove function
//        $(document).off(moveTower(range, radiusRange, obj, size, e));
//        //Activetes nextwave button
//        document.getElementById("waveButton").className = "laneFree";
//        document.getElementById("waveButton").onclick = function () { nextWave(); };
//        document.getElementById("waveButton").innerHTML = "START!";
//        document.getElementById("ironBarUi").style.height = "0%";
//    }
//}

//function towerMenu(range, radiusRange, obj, id, active, x, y) {
//    if (active==false) {
//        active = true;
//        var rangeVis = document.createElement("div");
//        rangeVis.id = "range_" + id;
//        rangeVis.style.height = 2 * radiusRange + "px";
//        rangeVis.style.width = 2 * radiusRange + "px";
//        rangeVis.style.left = x - radiusRange + "px";
//        rangeVis.style.top = y - radiusRange + "px";
//        rangeVis.style.zIndex = "0";
//        obj.style.zIndex = "1";
//        range = rangeVis;
//        document.getElementsByTagName('body')[0].appendChild(range);
//        obj.onclick = function () { towerMenu(range, radiusRange, obj, id, active, x, y); };
//    }
//    else {
//        active = false;
//        range.remove();
//        obj.onclick = function () { towerMenu(range, radiusRange, obj, id, active, x, y); };
//        }
//}

//function rightClickTower(radiusRange, obj, size, e, price, x, y, id) {
//    alert(x + ", " + y);
//}


function kobshop(obj) {
    if (obj == "bob") {
        cash -= bobPrKlik;
        bobPrKlik *= 1.7;
        clickTier++;
        console.log(bobPrKlik);
        document.getElementById("upgradeClickBob").innerHTML = "$" + bobPrKlik;
    }
    else if (obj == "mon") {
        cash -= monPrKlik;
        monPrKlik *= 1.7;
        cashGrowth++;
        document.getElementById("upgradeClickMon").innerHTML = "$" + monPrKlik;
    }
    document.getElementById("CashDisp").innerHTML = "$" + cash;
    moneyUpdate();
}