// .d8888b.  888                        
//d88P  Y88b 888                        
//Y88b.      888                        
// "Y888b.   88888b.   .d88b.  88888b.  
//    "Y88b. 888 "88b d88""88b 888 "88b 
//      "888 888  888 888  888 888  888 
//Y88b  d88P 888  888 Y88..88P 888 d88P 
// "Y8888P"  888  888  "Y88P"  88888P"  
//                             888      
//                             888      
//                             888     


function oneKob() {
    if (value >= OnePris) {
        value -= OnePris;
        addStrength += 1;
        OnePris *= 1.2;
        OnePris = Math.round(OnePris);
        One++;
        document.getElementById('aOne').innerHTML = One;
        document.getElementById('pOne').innerHTML = numberWithCommas(OnePris) + " Honey money";
        document.getElementById('score').innerHTML = numberWithCommas(value);
        if (One == "1") { addVisiual("shoes", "Shoes", "Shoes", "top"); }
        if (typeof Shoes3 !== 'object') { addAchiements("Shoes3", "Precious feet", "Get 10 shoes!", 2, 1.7, 1, 1); }
        addItem("Shoes", One, 3);
        cookies();
        checker("ach");
        document.getElementById("Shoes3").onclick = function () { collectThree(); };
    }
}
function twoKob() {
    if (value >= TwoPris) {
        value -= TwoPris;
        addStrength += 10;
        TwoPris *= 1.2;
        TwoPris = Math.round(TwoPris);
        checker();
        Two++;
        document.getElementById('aTwo').innerHTML = Two;
        document.getElementById('pTwo').innerHTML = numberWithCommas(TwoPris) + " Honey money";
        document.getElementById('score').innerHTML = numberWithCommas(value);
        if (Two == "1") { addVisiual("bra", "Bra", "Push-up bra", "") }
        if (typeof Bra1 !== 'object') { addAchiements("Bra1", "Boobie holder", "Get 10 Push-up bras!", 3, 1.6, 1, 1); }
        addItem("Bra", Two, 3);
        cookies();
        checker("ach");
        document.getElementById("Bra1").onclick = function () { collectFour(); };
    };
}
function threeKob() {
    if (value >= ThreePris) {
        value -= ThreePris;
        addStrength += 50;
        ThreePris *= 1.2;
        ThreePris = Math.round(ThreePris);
        checker();
        Three++;
        document.getElementById('aThree').innerHTML = Three;
        document.getElementById('pThree').innerHTML = numberWithCommas(ThreePris) + " Honey money";
        document.getElementById('score').innerHTML = numberWithCommas(value);
        if (Three == "1") { addVisiual("makeup", "Makeup", "Make-up", "") }
        if (typeof Makeup2 !== 'object') { addAchiements("Makeup2", "face painter", "Get 10 makeups!", 4, 1.8, 1, 1); }
        addItem("Makeup", Three, 5);
        cookies();
        checker("ach");
        document.getElementById("Makeup2").onclick = function () { collectFive(); };
    };
}
function fourKob() {
    if (value >= FourPris) {
        value -= FourPris;
        addStrength += 120;
        FourPris *= 1.2;
        FourPris = Math.round(FourPris);
        checker();
        Four++;
        document.getElementById('aFour').innerHTML = Four;
        document.getElementById('pFour').innerHTML = numberWithCommas(FourPris) + " Honey money";
        document.getElementById('score').innerHTML = numberWithCommas(value);
        if (Four == "1") { addVisiual("purses", "Purses", "Purses", "") }
        if (typeof Purses1 !== 'object') { addAchiements("Purses1", "Pretty bag", "Get 10 purses!", 5, 2, 1, 1); }
        addItem("Purses", Four, 3);
        cookies();
        checker("ach");
        document.getElementById("Purses1").onclick = function () { collectSix(); };
    };
}
function fiveKob() {
    if (value >= FivePris) {
        value -= FivePris;
        addStrength += 700;
        FivePris *= 1.2;
        FivePris = Math.round(FivePris);
        checker();
        Five++;
        document.getElementById('aFive').innerHTML = Five;
        document.getElementById('pFive').innerHTML = numberWithCommas(FivePris) + " Honey money";
        document.getElementById('score').innerHTML = numberWithCommas(value);
        if (Five == "1") { addVisiual("luxury", "Luxury", "Luxury Brands", "") }
        if (typeof Luxury4 !== 'object') { addAchiements("Luxury4", "Big spender", "Get 10 luxury brands!", 6, 1.9, 1, 1); }
        addItem("Luxury", Five, 4);
        cookies();
        checker("ach");
        document.getElementById("Luxury4").onclick = function () { collectSeven(); };
    };
}
function sixKob() {
    if (value >= SixPris) {
        value -= SixPris;
        addStrength += 1500;
        SixPris *= 1.2;
        SixPris = Math.round(SixPris);
        checker();
        Six++;
        document.getElementById('aSix').innerHTML = Six;
        document.getElementById('pSix').innerHTML = numberWithCommas(SixPris) + " Honey money";
        document.getElementById('score').innerHTML = numberWithCommas(value);
        if (Six == "1") { addVisiual("plastic", "Plastic", "Plastic surgery", "bund") }
        if (typeof Plastic1 !== 'object') { addAchiements("Plastic1", "Barbie Doll", "Get 10 plastic surgeries!", 7, 1.7, 0.8, 1); }
        addItem("Plastic", Six, 3);
        cookies();
        checker("ach");
        document.getElementById("Plastic1").onclick = function () { collectEight(); };
    };
}


//Hover effekt
function infoOut(name) {
    if (document.getElementById('bes' + name).innerHTML !== "  ?????") {
        if (name == "One") { document.getElementById('bes' + name).innerHTML = "Shoes" }
        else if (name == "Two") { document.getElementById('bes' + name).innerHTML = "Push-up bra" }
        else if (name == "Three") { document.getElementById('bes' + name).innerHTML = "Make up" }
        else if (name == "Four") { document.getElementById('bes' + name).innerHTML = "Purses" }
        else if (name == "Five") { document.getElementById('bes' + name).innerHTML = "luxury brands" }
        else if (name == "Six") { document.getElementById('bes' + name).innerHTML = "Plastic surgery" }
        else { alert(name); }
    }
}
function info(name) {
    if (document.getElementById('bes' + name).innerHTML !== "  ?????") {
        if (name == "One") { document.getElementById('bes' + name).innerHTML = "+1 HM" }
        else if (name == "Two") { document.getElementById('bes' + name).innerHTML = "+10 HM" }
        else if (name == "Three") { document.getElementById('bes' + name).innerHTML = "+50 HM" }
        else if (name == "Four") { document.getElementById('bes' + name).innerHTML = "+120 HM" }
        else if (name == "Five") { document.getElementById('bes' + name).innerHTML = "+700 HM" }
        else if (name == "Six") { document.getElementById('bes' + name).innerHTML = "+1500 HM" }
        else { alert(name); }
    }
}

//Add frame to inventory
function addVisiual(lille, stor, navn, fjerde) {
    var titel = document.createElement("div");
    titel.id = lille;
    titel.className = "TitleFrame";
    titel.innerHTML = navn;
    if (fjerde == "top") { titel.style.marginTop = "10.6vw"; }
    else if (fjerde == "bund") { titel.style.marginBottom = "4vw"; }
    var container = document.createElement("div");
    container.id = stor;
    container.className = "visFrame";
    var fill = document.createElement("div");
    fill.style.width = "1000%";
    fill.innerHTML = " ";
    document.getElementById("inventory").appendChild(titel);
    titel.appendChild(container);
    container.appendChild(fill);
}
//Add item to the inventory
function addItem(navn, nummer, antal) {
    var item = document.createElement("img");
    var y = Math.floor(Math.random() * 5) + 3;
    var billede = Math.floor(Math.random() * antal) + 1;
    var x = y / 10
    var sti = "ect/billeder/" + navn + billede + ".png";
    item.src = sti;
    item.style.height = "4vw";
    item.style.position = "absolute";
    item.style.top = x + "vw";
    item.style.left = "0";
    item.style.marginLeft = nummer + "vw";
    item.style.zIndex = nummer * -1;
    item.style.cssFloat = "left";
    item.title = navn + " nr. " + parseInt(nummer + 1);
    document.getElementById(navn).appendChild(item);
}