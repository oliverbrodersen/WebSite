


    var igW = document.getElementById("bgOpen").style.width;
    var startW = document.getElementById("start");
    var logoW = document.getElementById("logo");
    var level;

    var mapCount = 4;
    startW.style.left = (w - startW.width) / 2 + "px";
    startW.style.top = (h - startW.height) / 2 + "px";
    logoW.style.left = (w - logoW.width) / 2 + "px";
    document.getElementById("bgOpen").style.left = (w - igW) / 2 + "px";

    function levelSelect() {
        logoW.style.transition = "all ease .5s";
        logoW.style.width = "10%";
        logoW.style.left = (w - logoW.width) / 2 + ((((w - logoW.width)) / 100 * 15) / 2) + "px";

        startW.style.transition = "all 700ms cubic-bezier(0.560, -0.600, 0.405, 1.610)";
        startW.style.TransitionTimingFunction = "cubic-bezier(0.560, -0.600, 0.405, 1.610)";
        startW.style.left = "-50%";

        for (var i = 1; i < mapCount + 1; i++) {
            var map = document.createElement("img");
            //map.src = "Assets/Img/map" + i + "/over.jpg";
            map.src = "Assets/Img/map1/over.jpg";
            map.className = "mapPreview";
            map.id = i;
            map.style.transitionDelay = 0.1 * i + "s";
            map.onclick = function () { selectedLevel(this.id, this); };
            document.getElementsByTagName('body')[0].appendChild(map);

            map.style.left = 13 + (19 * i - 19) + "%";
        }
    }

    function selectedLevel(num, obj){
        console.log(obj.id);
        for (var i = 1; i < mapCount + 1; i++) {
            if (i !== num) {
                document.getElementById(i).style.left = "-100%";
            }
        }
        obj.style.left = "25%";
        obj.style.width = "50%";
        level = num;
        var slider = document.createElement("input");
        slider.type = "range";
        slider.id = "diffSlider";
        slider.value = 2;
        slider.max = 3;
        slider.min = 1;
        slider.step = 1;
        var difficulty = document.createElement("h2");
        difficulty.innerHTML = "Difficulty: normal";
        difficulty.id = "diffDisp";
        document.getElementsByTagName('body')[0].appendChild(slider);
        document.getElementsByTagName('body')[0].appendChild(difficulty);
    }

    $('#diffSlider').change(function () {
        var val = $(this).val();
        if (val == 1)
            document.getElementById("diffDisp").innerHTML = "Difficulty: easy";
        else if (val == 2)
            document.getElementById("diffDisp").innerHTML = "Difficulty: normal";
        else if (val == 3)
            document.getElementById("diffDisp").innerHTML = "Difficulty: hard";
        else
            alert(val);
    });