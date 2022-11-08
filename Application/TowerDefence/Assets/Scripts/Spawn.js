// JavaScript source code
    var round = -1;
    var objCount = 0;
    var tierAr = [];
    var timeingAr = [];
    var popped = 0;
    var life = 100;
    var idShot = 0;
    var cash = 0;
    var clickTier = 1;
    var cashGrowth = 1;
    var bobPrKlik = 100;
    var monPrKlik = 100;
    var waveRunningVar = false;


    function nextWave() {
        createWave();
        document.getElementById("ironBarUi").style.height = "9%";
        document.getElementById("waveButton").className = "laneNotFree";
        document.getElementById("waveButton").onclick = "";
        document.getElementById("waveButton").innerHTML = "You've gotta wait..";
        document.getElementById("dispRound").innerHTML = "Round: " + (round + 1);
        document.getElementById("testBut").disabled = true;
    }
    function setLevel() {
        //Create round int
        var dispRound = document.createElement("h2");
        dispRound.id = "dispRound";
        dispRound.innerHTML = "Round: " + (round + 1);
        document.getElementById("UI").appendChild(dispRound);
        //Create popped int
        var dispPopped = document.createElement("h2");
        dispPopped.id = "dispPopped";
        dispPopped.innerHTML = popped;
        document.getElementById("UI").appendChild(dispPopped);
        //Create life int 
        var dispLife = document.createElement("h2");
        dispLife.id = "dispLife";
        dispLife.innerHTML = life;
        document.getElementById("UI").appendChild(dispLife);
        //Create sidebar
        var sideBarUi = document.createElement("img");
        sideBarUi.id = "sideUI";
        sideBarUi.src = "Assets/Img/Seperator.png";
        document.getElementById("UI").appendChild(sideBarUi);
        //Create iron bars
        var IronBars = document.createElement("div");
        IronBars.id = "ironBarUi";
        document.getElementById("UI").appendChild(IronBars);
        //Create UI BG
        var UIBg = document.createElement("div");
        UIBg.id = "UIbg";
        document.getElementById("UI").appendChild(UIBg);


        //Kun brugt til at debugge
        //Add test shop button
        var speedBut = document.createElement("input");
        speedBut.type = "button";
        speedBut.id = "speedBut";
        speedBut.value = "Speed"
        speedBut.onclick = function () { 
            if (speed == 5)
                speed = 45;
            else if (speed == 45)
                speed = 5;
        };
        document.getElementById("UI").appendChild(speedBut);
    }
    setLevel();
//Gets textdocuent dat
    function createWave() {
        $.get('Assets/Scripts/Difficulty/normal.txt', function (data) {
            //Splits for each line
            var waveCount = data.split('\n');
            //Logs how many lines
            //Splits line for each comma
            var tierNcount = waveCount[round].split(',');
            //Foreach comma
            for (var i = 0; i < tierNcount.length; i++) {
                //Splits for each collon inbetween each comma
                var count = tierNcount[i].split(':');
                //For each collon (always three because there's a tier, a count and a time)
                for (var k = 0; k < count[0]; k++) {
                    //Log tier
                    tierAr.push({ tier: count[1] });
                }
                //For each collon (always three because there's a tier, a count and a time)
                for (var k = 0; k < count[0]; k++) {
                    //Log tier
                    timeingAr.push({ time: count[2] });
                }
            }
            createObj();
        });
        round++;
        //createObj();
    }
    function createObj() {
        var obj = document.createElement("div");
        var color;
        var size;
        obj.className = "object";
        if (tierAr[objCount].tier == "1" || tierAr[objCount].tier ==1) {
            size = 100; color = "red";
        }
        else if (tierAr[objCount].tier == 2) {
            size = 90; color = "blue";
        }
        else if (tierAr[objCount].tier == 3) {
            size = 80; color = "green";
        }
        else if (tierAr[objCount].tier == 4) {
            size = 70; color = "yellow";
        }
        else if (tierAr[objCount].tier == 5) {
            size = 60; color = "magenta";
        }
        else if (tierAr[objCount].tier == 6) {
            size = 50; color = "Orchid";
        }
        else if (tierAr[objCount].tier == 7) {
            size = 40; color = "Salmon";
        }
        else if (tierAr[objCount].tier == 8) {
            size = 30; color = "Orange";
        }
        else if (tierAr[objCount].tier == 9) {
            size = 20; color = "GoldenRod";
        }
        else {
            alert(tierAr[objCount].tier);
        }
        obj.style.top = spawnpoint - (size / 2) + "px";
        obj.style.left = 0 + "px";
        obj.style.backgroundColor = color;
        obj.style.borderColor = "dark" + color;
        obj.style.height = size + "px";
        obj.style.width = size + "px";
        var id = objCount;
        obj.onclick = function () { poppedFunc(id, "shot"); };
        objList.push({ obj: obj, railX: 0, railY: spawnpoint, height: size, width: size, direction: "right", moveX: 1, moveY: 0, cordArray: [], poped: false, deg: "", lastDeg: "", arrayDeg: [], point: 1, tier: tierAr[objCount].tier, id: objCount});
        document.getElementsByTagName('body')[0].appendChild(obj);
        objCount++;
        if (!moving) {
            moveObj();
        }
        waveRunning();
        setTimeout(createObj, parseInt(timeingAr[objCount - 1].time/(speed/5)));
    }
    function waveRunning() {
        if ($('.object').length == 0 && objList.length > 1) {
            document.getElementById("waveButton").className = "laneFree";
            document.getElementById("waveButton").onclick = function () { nextWave(); };
            document.getElementById("waveButton").innerHTML = "START!";
            document.getElementById("ironBarUi").style.height = "0%";
            document.getElementById("testBut").disabled = false;
            waveRunningVar = false;
        }
        else {
            document.getElementById("waveButton").className = "laneNotFree";
            document.getElementById("waveButton").onclick = "";
            document.getElementById("waveButton").innerHTML = "You've gotta wait..";
            document.getElementById("ironBarUi").style.height = "9%";
            document.getElementById("testBut").disabled = true;
            waveRunningVar = true;
        }
    }
    //function towerShoot() {
    //    if (towers > 0 && waveRunningVar == true) {
    //        for (var i = 0; i < towersAr.length; i++) {
    //            var bang = 0;
    //            var shot = document.createElement("div");
    //            shot.className = "shot";
    //            shot.id = idShot;
    //            idShot++;
    //            shot.style.top = towersAr[i].y + "px";
    //            shot.style.left = towersAr[i].x + "px";
    //            document.getElementsByTagName('body')[0].appendChild(shot);

    //            for (var j = 1; j < objList.length; j++) {
    //                if (typeof objList[j].poped !== true && bang==0) {
    //                    bang = 1;
    //                    console.log(objList[j].id + " " + objList[j].railX );
    //                    var deg = Math.atan((objList[j].railY - towersAr[i].y) / (towersAr[i].x - objList[j].railX)) * (180 / Math.PI);
    //                    console.log(deg);
    //                    var mY = Math.cos(deg) * 40;
    //                    var mX = Math.sin(deg) * 40;
    //                    shootshoot(shot, towersAr[i].x, towersAr[i].y, mX, mY);
    //                }
    //            }
    //        }
    //        setTimeout(towerShoot, 1000);
    //    }

    //}
    //function shootshoot(obj, x, y, mx, my) {
    //    if (x > 0 && x < window.innerWidth && y > 0 && y < window.innerHeight) {
    //        x += mx;
    //        y += my;
    //        obj.style.top = y + "px";
    //        obj.style.left = x + "px";
    //        setTimeout(shootshoot, 1000 / 30, obj, x, y, mx, my);
    //    }
    //    else {
    //        obj.remove();
    //    }
    //}
    function poppedFunc(i, death) {
        if (death == "end") {
            objList[i].obj.remove();
            objList[i].poped = true;
            popped += parseInt(objList[i].tier);
            life -= objList[i].tier;
            if (life <= 0)
                youDead();
            document.getElementById("dispLife").innerHTML = life;
        }
        else if (death == "shot") {
            if (objList[i].tier - clickTier < 1) {
                objList[i].obj.remove();
                objList[i].poped = true;
                cash += objList[i].tier * cashGrowth;
                popped += objList[i].tier * 1;
            }
            else {
                objList[i].tier -= clickTier;
                cash += clickTier * cashGrowth;
                popped += clickTier;
                setTierVisual(i);
            }

            document.getElementById("CashDisp").innerHTML = "$" + cash;
        }
        document.getElementById("dispPopped").innerHTML = popped;
        waveRunning();
        moneyUpdate();
    }
    //Make visual Tier
    function setTierVisual(i) {
        var Isize, Icolor;
        if (objList[i].tier == "1" || objList[i].tier == 1) {
            Isize = 100; Icolor = "red";
        }
        else if (objList[i].tier == 2) {
            Isize = 90; Icolor = "blue";
        }
        else if (objList[i].tier == 3) {
            Isize = 80; Icolor = "green";
        }
        else if (objList[i].tier == 4) {
            Isize = 70; Icolor = "yellow";
        }
        else if (objList[i].tier == 5) {
            Isize = 60; Icolor = "magenta";
        }
        else if (objList[i].tier == 6) {
            Isize = 50; Icolor = "Orchid";
        }
        else if (objList[i].tier == 7) {
            Isize = 40; Icolor = "Salmon";
        }
        else if (objList[i].tier == 8) {
            Isize = 30; Icolor = "Orange";
        }
        else if (objList[i].tier == 9) {
            Isize = 20; Icolor = "GoldenRod";
        }
        objList[i].height = Isize;
        objList[i].width = Isize;
        objList[i].obj.style.width = Isize + "px";
        objList[i].obj.style.height = Isize + "px";
        objList[i].obj.style.backgroundColor = Icolor;
        objList[i].obj.style.borderColor = "dark" + Icolor;
    }
    function youDead() {
        speed = 0;
        var deadBg = document.createElement("div");
        deadBg.id = "deadBg";
        document.getElementsByTagName('body')[0].appendChild(deadBg);

        var deadText = document.createElement("h4");
        deadText.textContent = "Du har ikke rigtigt flere liv mester";
        deadBg.appendChild(deadText);
    }