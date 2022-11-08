//Create snake
var ship = document.createElement("div");
ship.id = "ship";
document.getElementsByTagName('body')[0].appendChild(ship);
//Create var
var ax = 200,
    ay = 200,
    x = 0,
    y = 0;
var speed = 5;
var deg = 0;
var size = 100;
var life = 200;
var w = window.innerWidth;
var h = window.innerHeight;


//Check for key presses
window.onkeydown = listenToKey;
window.onclick = shoot;
function listenToKey(e) {
    if (e.keyCode == 39 || e.keyCode ==68) { //left
        deg += speed;
        ship.style.transform = "rotate(" + deg + "deg)";
    }
    if (e.keyCode == 37 || e.keyCode ==65) { //right
        deg -= speed;
        ship.style.transform = "rotate(" + deg + "deg)";
    }
}

//Moves snake
function move() {
    //Calc direction
    x = Math.cos(deg / 180 * Math.PI);
    y = Math.sin(deg / 180 * Math.PI);
    //apply speed
    ax += (x*speed);
    ay += (y*speed);
    ship.style.top = ay + "px";
    ship.style.left = ax + "px";
    //Check if snake if in viewport
    if (ax <= w && ay <= h && ax > -size && ay > -size) {
        setTimeout(move, 30);
    }
    //Check if snake is out
    else if(ax>w){
        ax = -size;
        move();
    }
    else if (ay > h) {
        ay = -size;
        move();
    }
    else if (ax <= -size) {
        ax = w;
        move();
    }
    else if (ay <= -size) {
        ay = h;
        move();
    }

}
//Makes the snake tail
function afterburn() {
    var burn = document.createElement("div");
    burn.className = "burn";
    burn.style.top = ay + "px";
    burn.style.left = ax + (size/2) + "px";
    burn.style.transform = "rotate(" + deg + "deg)";
    burn.addEventListener('webkitAnimationEnd', function (event) { burn.remove(); }, false);
    document.getElementsByTagName('body')[0].appendChild(burn);
    setTimeout(afterburn, 60);
}
move();
afterburn();

//Creates bullet
function shoot(em,x,y) {
    var shot = document.createElement("div");
    shot.className = "shot";
    if (em == true) {
        var shotDeg = Math.atan((ay - y) / (ax - x)) * (180 / Math.PI);
        var shotx = (Math.cos(shotDeg / 180 * Math.PI) * 61) + x;
        var shoty = (Math.sin(shotDeg / 180 * Math.PI) * 61) + y;
    }
    else {
        var shotx = (Math.cos(deg / 180 * Math.PI) * 61) + 45 + ax;
        var shoty = (Math.sin(deg / 180 * Math.PI) * 61) + 45 + ay;
        var shotDeg = deg;
    }
    shot.style.top = shoty + "px";
    shot.style.left = shotx + "px";
    document.getElementsByTagName('body')[0].appendChild(shot);
    moveShot(shot, shotx, shoty, shotDeg);
}
//Moves bullet and checks for impact
function moveShot(obj, x, y, deg) {
    var xx = Math.cos(deg / 180 * Math.PI);
    var yy = Math.sin(deg / 180 * Math.PI);
    x += (xx * speed);
    y += (yy * speed);
    obj.style.top = y + "px";
    obj.style.left = x + "px";
    //Check for impact

    if (Math.pow((x + 5) - (ax + (size / 2)), 2) + Math.pow((ay + (size / 2)) - (y + 5), 2) <= Math.pow((size / 2) + 5, 2)) {
        x = "";
        y = "";
        obj.remove();
        minusLife(40);
    }
        //Checks for position
    else if (y > -10 && y < h && x > -10 && x < w)
        setTimeout(moveShot, 20, obj, x, y, deg);
    else if (y < -10)
        setTimeout(moveShot, 20, obj, x, h, deg);
    else if (y > h)
        setTimeout(moveShot, 20, obj, x, -10, deg);
    else if (x < -10)
        setTimeout(moveShot, 20, obj, w, y, deg);
    else if (x > w)
        setTimeout(moveShot, 20, obj, -10, y, deg);
}

//Creates enimy
function createEnimy() {
    var evil = document.createElement("div");
    evil.className = "evil";
    document.getElementsByTagName('body')[0].appendChild(evil);
    destenation(evil, w / 2 - 25, h / 2 - 25);
    setTimeout(createEnimy, 5000);
}
//finds destination for enemy
function destenation(obj, curX, curY) {
    var a = Math.floor((Math.random() * (w - 70)) + 1); //Random x value
    var b = Math.floor((Math.random() * (h - 70)) + 1); //Random y value
    var v = Math.atan((b - curY) / (a - curX)) * (180 / Math.PI); //Angel in deg
    if (a < curX && b < curY)
        v += 180;
    else if (a < curX)
        v += 90;
    else if (b < curY)
        v += 270;
    console.log(a - curX);
    console.log(b - curY);
    console.log(v);
    var xx = Math.cos((v) / 180 * Math.PI) * 2;//Pr ryk x
    var yy = Math.sin((v) / 180 * Math.PI) * 2;//pr ryk y
    moveEvil(obj, curX, curY, a, b, xx, yy, true);
}
//Moves enimy
function moveEvil(obj, curX, curY, newX, newY, prX, prY, shot) {
    curX += (prX);
    curY += (prY);
    obj.style.left = curX + "px";
    obj.style.top = curY + "px";
    //bounce off wall
    if (curX < 0 || curX > w - 72)
        prX *= -1;
    else if (curY < 0 || curY > h - 72)
        prY *= -1;
    //Check for impact
    if (Math.pow((curX + 35.55) - (ax + (size / 2)), 2) + Math.pow((ay + (size / 2)) - (curY + 35.55), 2) <= Math.pow((size / 2) + 35.55, 2)){
        minusLife(80);
        obj.remove();
        curX = "1";
        curY = "1";
    }
    if (curX >= newX - 25 && curX <= newX + 25 && curY >= newY - 25 && curY <= newY + 25) {
        shoot(true, curX, curY);
        setTimeout(destenation, 1000, obj, curX, curY);
    }
    else {
        setTimeout(moveEvil, 5, obj, curX, curY, newX, newY, prX, prY)

    }
    
}
createEnimy();


function minusLife(amount) {
    life -= amount;
    console.log(life);
    document.getElementById("life").style.width = life + "px";
    switch (life) {
        case 160:
            document.getElementById("life").style.backgroundColor = "#ddff68";
            break;
        case 120:
            document.getElementById("life").style.backgroundColor = "#ffdd68";
            break;
        case 80:
            document.getElementById("life").style.backgroundColor = "#ffa468";
            break;
        case 40:
            document.getElementById("life").style.backgroundColor = "#ff6868";
            break;
    }
}

//Remove afterburn
function Clear() {
    $('div').remove('.burn');
}