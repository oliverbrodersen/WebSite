
var cursorX; //Cursor x position ved klik
var cursorY; //Cursor x position ved klik
var w = window.innerWidth * 0.7; //Breden af viewporten i px
var h = window.innerHeight; //Højden af viewporten i px
var bulletSize = 10; //Bullet size i px !!Hvis ændret skal css'en også ændres 
var shootX = w/2 - bulletSize/2; //X positopn fra hvor skudene bliver affyret
var shootY = h - bulletSize; //Y position fra hvor skudene bliver affyret
var enemySize = 100; //Enemy size i px !!mprotent Hvis ændret skal css'en også ændres 
var enemyLife = 100; //Enemy liv
var enemyList = []; //Listen over fjender
var bulletImpact = 21; //Impact en kugle gør på enemy
var bullets = 100; //antal bullets
var value = 0; //value
var bulletsBackRate = 5; //Antal kugler du får tilbage efter død fjende
var revenue = 10; //Value du får tilbage ved død enemy
var autoRange = 300;


//createEnemy();
setInterval(createEnemy, 3000);

document.onmousedown = function (e) {
        cursorX = e.pageX - 5;
        cursorY = e.pageY - 5;
        var shot = document.createElement("div");
        shot.className = "shot";
        shot.style.top = shootY + "px";
        shot.style.left = shootX + "px";
        document.getElementsByTagName('body')[0].appendChild(shot);

        var deg = Math.atan((shootY - cursorY) / (shootX - cursorX)) * (180 / Math.PI);
        if (deg > 0)
            deg += 180;
        var mX = Math.cos(deg / 180 * Math.PI);
        var mY = Math.sin(deg / 180 * Math.PI);

        shoot(cursorX, cursorY, shot, shootX, shootY, false, mX, mY);
        bullets -= 1;
        document.getElementById("bullets").innerHTML = bullets;
}

function shoot(x, y, obj, curPosX, curPosY, hit, mX, mY) {
    if (!hit) {
        curPosX += 5*mX;
        curPosY += 5 * mY;
        obj.style.top = curPosY + "px";
        obj.style.left = curPosX + "px";
        for (var i = 0; i < enemyList.length; i++) {
            if (Math.pow((curPosX + (bulletSize / 2)) - (enemyList[i].currentX + (enemySize / 2)), 2) + Math.pow((curPosY + (bulletSize / 2)) - (enemyList[i].currentY + (enemySize / 2)), 2) <= Math.pow((bulletSize + enemySize) / 2, 2)) {
                if (!hit) {
                    hit = true;
                    enemyList[i].life -= bulletImpact;
                    enemyList[i].lifeObj.style.width = enemyList[i].life + "px";
                    if (enemyList[i].life < 20)
                        enemyList[i].lifeObj.style.backgroundColor = "#ff6868";
                    else if (enemyList[i].life < 40)
                        enemyList[i].lifeObj.style.backgroundColor = "#ffa468";
                    else if (enemyList[i].life < 60)
                        enemyList[i].lifeObj.style.backgroundColor = "#ffdd68";
                    else if (enemyList[i].life < 80)
                        enemyList[i].lifeObj.style.backgroundColor = "#ddff68";

                    if (enemyList[i].life <= 0) {
                        enemyList[i].obj.remove();
                        enemyList[i].stop = true;
                        enemyList[i].curPosX = -1000;
                        enemyList[i].curPosY = -1000;
                        enemyList[i].moveX = 0;
                        enemyList[i].moveY = 0;
                        value += revenue;
                        document.getElementById("value").innerHTML = value;
                        bullets += bulletsBackRate;
                        document.getElementById("bullets").innerHTML = bullets;
                    }
                }
                obj.remove();
            }
        }
    }
    if (curPosX < 0 - bulletSize || curPosX > w || curPosY < 0 - bulletSize)
      obj.remove();
    setTimeout(shoot, 1, x, y, obj, curPosX, curPosY, hit, mX, mY)
}
function createEnemy() {
    var enemy = document.createElement("div");
    var life = document.createElement("div");
    enemy.className = "enemy";
    life.className = "enemyLife";
    var pos = Math.floor((Math.random() * (h + w + h - enemySize - enemySize - enemySize)) + 1);
    var x;
    var y;
    if (pos <= h - enemySize) {
        y = pos;
        x = 0;
    }
    else if (pos > h - enemySize && pos < h - enemySize + w - enemySize) {
        y = 0;
        x = pos - h - enemySize;
    }
    else if (pos >= h - enemySize + w) {
        y = pos - h - enemySize - w - enemySize;
        x = w - enemySize;
    }
    else
        console.log(pos)
    enemy.style.top = y + "px";
    enemy.style.left = x + "px";
    enemy.appendChild(life);
    document.getElementsByTagName('body')[0].appendChild(enemy);
    var deg = Math.atan((shootY - y) / (shootX - x)) * (180 / Math.PI);
    if (deg <= 0) {
        deg += 180;
    }
    var xM = Math.cos(deg / 180 * Math.PI);
    var yM = Math.sin(deg / 180 * Math.PI);
    
    enemyList.push({obj: enemy, currentX: x, currentY: y, life: enemyLife, lifeObj: life, stop: false});
}
function moveEnemy() {
    for (var i = 0; i < enemyList.length; i++) {
        w = window.innerWidth * 0.7;
        h = window.innerHeight;
        var shootX = w / 2 - bulletSize / 2; //X positopn fra hvor skudene bliver affyret
        var shootY = h - bulletSize; //Y position fra hvor skudene bliver affyret
        document.getElementById("player").style.left = shootX - 50 + "px";
        document.getElementById("autoShoot").style.left = shootX - (autoRange / 2) + "px";
        document.getElementById("autoShoot").style.top = shootY - (autoRange / 2) + "px";
        document.getElementById("autoShoot").style.width = autoRange + "px";
        document.getElementById("autoShoot").style.height = autoRange + "px";

        var deg = Math.atan((shootY - enemyList[i].currentY) / (shootX - enemyList[i].currentX)) * (180 / Math.PI);
        if (deg <= 0) {
            deg += 180;
        }
        var xM = Math.cos(deg / 180 * Math.PI);
        var yM = Math.sin(deg / 180 * Math.PI);

        if (!enemyList[i].stop) {
            enemyList[i].currentX += xM;
            enemyList[i].currentY += yM;
            enemyList[i].obj.style.top = enemyList[i].currentY + "px";
            enemyList[i].obj.style.left = enemyList[i].currentX + "px";
        }
        else {
            enemyList[i].currentX = -1000;
        }
    }
    setTimeout(moveEnemy, 10);
}
moveEnemy();