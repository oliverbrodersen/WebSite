// JavaScript source code
    var over = document.createElement("img");
    over.id = "Over";
    over.src = "Assets/Img/map1/over.jpg";
    var alpha = document.createElement("img");
    alpha.id = "Alpha";
    var w = window.innerWidth;
    var h = window.innerHeight;
    alpha.src = "Assets/Img/map1/alpha.jpg";
    document.getElementsByTagName('body')[0].appendChild(over);
    document.getElementsByTagName('body')[0].appendChild(alpha);
    var moving = false;
    var img = document.getElementById('Alpha');
    var canvas = document.createElement('canvas');
    var objList = [];
    var spawnpoint;
    var endpoint;
    var lastDeg = 0;
    var points;
    var endX;
    var endY;
    var speed = 5;
    document.getElementById("UI").style.width = w - img.width + "px";
    document.getElementById("UI").style.right = 0;
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.id = "canvas";
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
    document.getElementsByTagName('body')[0].appendChild(canvas);
    document.getElementsByTagName('body')[0].appendChild(over);
    document.getElementsByTagName('body')[0].appendChild(alpha);

    
    
    //Set startpoint
    for (var i = 0; i < img.height; i++) {
        var pixelData = canvas.getContext('2d').getImageData(0, i, 1, 1).data;
        if (pixelData[0] >= 200) {
            spawnpoint = i;
            //createObj();
            break;
        }
    }
    //Sets endpoint
    for (var i = 0; i < img.height; i++) {
        var pixelData = canvas.getContext('2d').getImageData(img.width, i, 1, 1).data;
        if (pixelData[0] >= 200) {
            endpoint = i;
            break;
        }
    }
    //moveObj();
    //moveAllObj();

function moveObj() {
        for (var i = 0; i < 4168; i++) {
            moving = true;
            //Check to see if it can continue the way it came from
            if (canvas.getContext('2d').getImageData(objList[0].railX + objList[0].moveX, objList[0].railY + objList[0].moveY, 1, 1).data[0] >= 200 && !objList[0].poped) {
                objList[0].railX += objList[0].moveX;
                objList[0].obj.style.left = objList[0].railX - (objList[0].width / 2) + "px";
                objList[0].railY += objList[0].moveY;
                objList[0].obj.style.top = objList[0].railY - (objList[0].height / 2) + "px";
            }
            else {
                //Checks if it can go to the global right
                if (canvas.getContext('2d').getImageData(objList[0].railX + 1, objList[0].railY, 1, 1).data[0] >= 200 && objList[0].direction !== "left" && !objList[0].poped) {
                    objList[0].moveX = 1;
                    objList[0].moveY = 0;
                    objList[0].railX += objList[0].moveX;
                    objList[0].obj.style.left = objList[0].railX - (objList[0].width / 2) + "px";
                    objList[0].direction = "right";
                }
                    //Checks if it can go to the global down
                else if (canvas.getContext('2d').getImageData(objList[0].railX, objList[0].railY + 1, 1, 1).data[0] >= 200 && objList[0].direction !== "up" && !objList[0].poped) {
                    objList[0].moveX = 0;
                    objList[0].moveY = 1;
                    objList[0].railY += objList[0].moveY;
                    objList[0].obj.style.top = objList[0].railY - (objList[0].height / 2) + "px";
                    objList[0].direction = "down";
                }
                    //Checks if it can go to the global up
                else if (canvas.getContext('2d').getImageData(objList[0].railX, objList[0].railY - 1, 1, 1).data[0] >= 200 && objList[0].direction !== "down" && !objList[0].poped) {
                    objList[0].moveX = 0;
                    objList[0].moveY = -1;
                    objList[0].railY += objList[0].moveY;
                    objList[0].obj.style.top = objList[0].railY - (objList[0].height / 2) + "px";
                    objList[0].direction = "up";
                }
                    //Checks if it can go to the global left
                else if (canvas.getContext('2d').getImageData(objList[0].railX - 1, objList[0].railY, 1, 1).data[0] >= 200 && objList[0].direction !== "right" && !objList[0].poped) {
                    objList[0].moveX = -1;
                    objList[0].moveY = 0;
                    objList[0].railX += objList[0].moveX;
                    objList[0].obj.style.left = objList[0].railX - (objList[0].width / 2) + "px";
                    objList[0].direction = "left";
                }
                    //If none of these are true it checks if there are any other white pixels in the same y axis
                else {
                    for (var k = 0; k < img.height; k++) {
                        var pixelData = canvas.getContext('2d').getImageData(objList[0].railX, k, 1, 1).data;
                        if (pixelData[0] == 255) {
                            objList[0].railY = k;
                            objList[0].obj.style.top = k - 50 + "px";
                        }
                    }
                }
            }
            //Controlls the rotation of the object
            if (objList[0].cordArray.length >= 10) {
                var mod = objList[0].railY - objList[0].cordArray[objList[0].cordArray.length - 10].y;
                var hos = objList[0].railX - objList[0].cordArray[objList[0].cordArray.length - 10].x;
                objList[0].deg = Math.atan(mod / hos) * (180 / Math.PI) + 45;
                if (objList[0].deg == -45 || objList[0].deg == 135)
                    objList[0].deg = objList[0].lastDeg;
                else if (objList[0].deg - lastDeg > 160 || objList[0].deg - lastDeg < -160)
                    objList[0].deg = objList[0].lastDeg;
                objList[0].lastDeg = objList[0].deg;
                objList[0].obj.style.transform = "rotate(" + objList[0].deg + "deg)";
            }
            objList[0].cordArray.push({ x: objList[0].railX, y: objList[0].railY });
            objList[0].arrayDeg.push({ deg: objList[0].deg });

            //Checks if object has reached the end
            if (objList[0].railX == img.width - 1) {
                endX = objList[0].railX;
                endY = objList[0].railY;
                objList[0].railX = 0;
                objList[0].railY = 0;
                objList[0].obj.remove();
                objList[0].poped = true;
                moveAllObj();
                waveRunning();
            }
        }
    }
function moveAllObj() {
    if (objList.length > 1) {
        for (var i = 0; i < objList.length - 1; i++) {
            if (objList[i + 1].poped == false) {
                if (objList[i + 1].railX >= endX - speed && objList[i + 1].railY == endY)
                    poppedFunc(i + 1, "end");
                else{
                    objList[i + 1].railX = objList[0].cordArray[objList[i + 1].point].x;
                    objList[i + 1].railY = objList[0].cordArray[objList[i + 1].point].y;
                    objList[i + 1].obj.style.transform = "rotate(" + objList[0].arrayDeg[objList[i + 1].point].deg + "deg)";
                    objList[i + 1].point+= speed;
                    objList[i + 1].obj.style.left = objList[i + 1].railX - (objList[i + 1].height / 2) - 2.5 + "px";
                    objList[i + 1].obj.style.top = objList[i + 1].railY - (objList[i + 1].height / 2) - 2.5 + "px";
                }
            }
        }
    }
    setTimeout(moveAllObj, 1000/30);
}