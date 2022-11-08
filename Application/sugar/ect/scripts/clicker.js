// .d8888b.  888 d8b          888                       
//d88P  Y88b 888 Y8P          888                       
//888    888 888              888                       
//888        888 888  .d8888b 888  888  .d88b.  888d888 
//888        888 888 d88P"    888 .88P d8P  Y8b 888P"   
//888    888 888 888 888      888888K  88888888 888     
//Y88b  d88P 888 888 Y88b.    888 "88b Y8b.     888     
// "Y8888P"  888 888  "Y8888P 888  888  "Y8888  888
    //Clicker
    var numItems;
    var prSek;

    window.addEventListener("mouseup", function (event) { clearInterval(int100); });

    //Add Honey money
    function clicker(state, event) {
        value += addStrength;
        earnings += addStrength;
        document.getElementById('score').innerHTML = numberWithCommas(value);
        document.getElementById('score').title = value;
        if (document.getElementById("spanPhone").innerHTML >= 1)
            document.getElementById('title').innerHTML = numberWithCommas(value) + ' Honey money [' + not + "]";
        else
            document.getElementById('title').innerHTML = numberWithCommas(value) + ' Honey money';
        checker("ach");
        addMont();
        document.cookie = "value=" + value;
        numItems = $('#mont').length;
        prSek = numItems * addStrength;
        document.getElementById('prSek').innerHTML = numberWithCommas(prSek) + "  ";
        document.getElementById('prSek').title = prSek;
    }
    function text(e) {
        var x = event.clientX + "px";
        var text = document.createElement("h13");
        text.innerHTML = "+" + numberWithCommas(addStrength) + " HM";
        text.id = "clickText";
        text.style.marginLeft = x;
        text.addEventListener('webkitAnimationEnd', function (event) { text.remove(); }, false);
        document.getElementById("but").appendChild(text);
    }
    //Check ting

    //Adds coin
    function addMont() {
        if (document.getElementById('coinSwitch').checked) {
            var max = screen.width * 0.4684;
            var x = Math.floor(Math.random() * 93) + 1;
            var size = Math.floor(Math.random() * 4) + 5;
            var rot = Math.floor(Math.random() * 721) - 360;
            var mont = document.createElement("img");
            mont.style.left = x + "%";
            mont.id = "mont";
            mont.style.width = size + "%";
            mont.src = "ect/billeder/mont.png";
            mont.style.transform = "rotate(" + rot + "deg)";

            mont.addEventListener('webkitAnimationEnd', function (event) { mont.remove(); }, false);
            document.getElementById("AddCoinsHere").appendChild(mont);
        }
    }