//888     888                                         888                   
//888     888                                         888                   
//888     888                                         888                   
//888     888 88888b.   .d88b.  888d888  8888b.   .d88888  .d88b.  .d8888b  
//888     888 888 "88b d88P"88b 888P"       "88b d88" 888 d8P  Y8b 88K      
//888     888 888  888 888  888 888     .d888888 888  888 88888888 "Y8888b. 
//Y88b. .d88P 888 d88P Y88b 888 888     888  888 Y88b 888 Y8b.          X88 
// "Y88888P"  88888P"   "Y88888 888     "Y888888  "Y88888  "Y8888   88888P' 
//            888           888                                             
//            888      Y8b d88P                                             
//            888       "Y88P"    
//Buy and activation of autoclick upgrade
function autoclick(cost, sek, name) {
    if (value >= cost) {
        autoClick = "1";
        autoClickValue = sek;
        value -= cost;
        document.getElementById('score').innerHTML = numberWithCommas(value);
        document.getElementById('title').innerHTML = numberWithCommas(value) + ' Honey money';
        autoClicker();
        document.getElementById(name).remove();
        autoNext = earnings * 1.5;
        autoTier++;
        checker();
        cookies();
    }
}
//Buy and activation of holdclick upgrade
function holdclick(cost, sek, name) {
    if (value >= cost) {
        holdClick = "1";
        holdClickValue = sek;
        value -= cost;
        document.getElementById('score').innerHTML = numberWithCommas(value);
        document.getElementById('title').innerHTML = numberWithCommas(value) + ' Honey money';
        document.getElementById(name).remove();
        holdNext = earnings * 1.5;
        holdTier++;
        checker();
        cookies();
    }
}
//Buy and activation of 20% extra upgrade
function addBuy(cost, name) {
    if (value >= cost) {
        value -= cost;
        addStrength = Math.round(addStrength * 1.2);
        document.getElementById('score').innerHTML = numberWithCommas(value);
        document.getElementById('title').innerHTML = numberWithCommas(value) + ' Honey money';
        document.getElementById(name).remove();
        addTier *= 15;
        addNext = earnings * 3;
        checker();
        cookies();
    }
}
//Buy and activation of item upgrades
function itemUpgrade(cost, name, type) {
    if (value >= cost) {
        value -= cost;
        if (type == "One") { addStrength = Math.round(addStrength + ((1 * One) * 0.2)), OneTier *= 2; }
        else if (type == "Two") { addStrength = Math.round(addStrength + ((10 * Two) * 0.2)), TwoTier *= 2; }
        else if (type == "Three") { addStrength = Math.round(addStrength + ((50 * Three) * 0.2)), ThreeTier *= 2; }
        else if (type == "Four") { addStrength = Math.round(addStrength + ((120 * Four) * 0.2)), FourTier *= 2; }
        else if (type == "Five") { addStrength = Math.round(addStrength + ((700 * Five) * 0.2)), FiveTier *= 2; }
        else if (type == "Six") { addStrength = Math.round(addStrength + ((1500 * Six) * 0.2)), SixTier *= 2; }
        document.getElementById('score').innerHTML = numberWithCommas(value);
        document.getElementById('title').innerHTML = numberWithCommas(value) + ' Honey money';
        document.getElementById(name).remove();
        checker();
        cookies();
    }
}

//Adding upgrade
function upgradeAdd(id, price, bes) {
    var outer = document.createElement("div");
    outer.className = "upgrade off";
    outer.id = id;
    var img = document.createElement("img");
    img.src = "ect/billeder/" + id + "off.png";
    img.id = "upgradeImg";
    img.className = id + "img";
    var beskrivelse = document.createElement("div");
    beskrivelse.className = "upgradeBes";
    beskrivelse.id = id + "bes";
    beskrivelse.innerHTML = bes;
    document.getElementById('upgrades').appendChild(outer);
    outer.appendChild(img);
    outer.appendChild(beskrivelse);
    outer.innerHTML += numberWithCommas(price);
}
//autoclick
var timeout;
function autoClicker() {
    clearTimeout(timeout);
    if (autoClick == "1") {
        clicker();
        timeout = setTimeout(autoClicker, autoClickValue);
    }
}
