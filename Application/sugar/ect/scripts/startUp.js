//
// .d8888b.  888                     888          888     888          
//d88P  Y88b 888                     888          888     888          
//Y88b.      888                     888          888     888          
// "Y888b.   888888  8888b.  888d888 888888       888     888 88888b.  
//    "Y88b. 888        "88b 888P"   888          888     888 888 "88b 
//      "888 888    .d888888 888     888          888     888 888  888 
//Y88b  d88P Y88b.  888  888 888     Y88b.        Y88b. .d88P 888 d88P 
// "Y8888P"   "Y888 "Y888888 888      "Y888        "Y88888P"  88888P"  
//                                                            888      
//                                                            888      
//                                                            888   

$(document).ready(function () {
    //Get the cookie
    function readCookie(name) {
        return parseInt((name = new RegExp('(?:^|;\\s*)' + ('' + name).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '=([^;]*)').exec(document.cookie)) && name[1]);
    }
    if (isNumber(readCookie("value")) == true) {
        value = readCookie("value");
        OnePris = readCookie("p1");
        TwoPris = readCookie("p2");
        ThreePris = readCookie("p3");
        FourPris = readCookie("p4");
        FivePris = readCookie("p5");
        SixPris = readCookie("p6");
        One = readCookie("a1");
        Two = readCookie("a2");
        Three = readCookie("a3");
        Four = readCookie("a4");
        Five = readCookie("a5");
        Six = readCookie("a6");
        totClick = readCookie("totClick");
        addStrength = readCookie("strength");
        autoTier = readCookie("autoClickerTier");
        autoClick = readCookie("autoClick");
        autoClickValue = readCookie("autoClickValue");
        autoNext = readCookie("autoNext");
        holdTier = readCookie("holdClickerTier");
        holdClick = readCookie("holdClick");
        holdClickValue = readCookie("holdClickValue");
        holdNext = readCookie("holdNext");
        addTier = readCookie("addTier");
        addNext = readCookie("addNext");
        earnings = readCookie("earnings");
        AchOneTier = readCookie("AchOneTier");
        AchTwoTier = readCookie("AchTwoTier");
        AchThreeTier = readCookie("AchThreeTier");
        AchFourTier = readCookie("AchFourTier");
        AchFiveTier = readCookie("AchFiveTier");
        AchSixTier = readCookie("AchSixTier");
        AchSevenTier = readCookie("AchSevenTier");
        AchEightTier = readCookie("AchEightTier");
        sendMessage("Send", "Welcome back my young love. I'm sorry but I'm still caught up in work.. but have fun! Love xoxo", "sd");
    }
    //On load
    function load() {
        //Add ach
        addAchiements("autoclick1off", "CLICK-BAIT", "100 total clicks!", 0, 2, 1, AchOneTier);    //container id=autoclick1offCont Title id=autoclick1offTitle
        addAchiements("montA", "Ms. monopoly", "1000 total honey money!", 1, 1.7, 0.8, AchTwoTier);      //container id=montCont          Title id=montTitle
        document.getElementById("autoclick1off").onclick = function () { collectOne(); };
        document.getElementById("montA").onclick = function () { collectTwo(); };
        cookies();
        if (One >= 1) {
            var OldOne = One;
            One = 0;
            addVisiual("shoes", "Shoes", "Shoes", "top");
            addAchiements("Shoes3", "Precious feet", "Get 10 shoes!", 2, 1.7, 1, AchThreeTier);
            for (var i = 0; i < OldOne; i++) {
                addItem("Shoes", One, 3);
                One++;
            }
            document.getElementById('pOne').innerHTML = numberWithCommas(OnePris) + " Honey money!";
            document.getElementById('aOne').innerHTML = One;
            document.getElementById("Shoes3").onclick = function () { collectThree(); };
        }
        if (Two >= 1) {
            var Old = Two;
            Two = 0;
            addVisiual("bra", "Bra", "Push-up bra", "");
            addAchiements("Bra1", "Boobie holder", "Get 10 Push-up bras!", 3, 1.6, 1, AchFourTier);
            for (var i = 0; i < Old; i++) {
                addItem("Bra", Two, 3);
                Two++;
            }
            document.getElementById('pTwo').innerHTML = numberWithCommas(TwoPris) + " Honey money!";
            document.getElementById('aTwo').innerHTML = Two;
        }
        if (Three >= 1) {
            var Old = Three;
            Three = 0;
            addVisiual("makeup", "Makeup", "Make-up", "");
            addAchiements("Makeup2", "face painter", "Get 10 makeups!", 4, 1.8, 1, AchFiveTier);
            for (var i = 0; i < Old; i++) {
                addItem("Makeup", Three, 5);
                Three++;
            }
            document.getElementById('pThree').innerHTML = numberWithCommas(ThreePris) + " Honey money!";
            document.getElementById('aThree').innerHTML = Three;
        }
        if (Four >= 1) {
            var Old = Four;
            Four = 0;
            addVisiual("purses", "Purses", "Purses", "");
            addAchiements("Purses1", "Pretty bag", "Get 10 purses!", 5, 2, 1, AchSixTier);
            for (var i = 0; i < Old; i++) {
                addItem("Purses", Four, 3);
                Four++;
            }
            document.getElementById('pFour').innerHTML = numberWithCommas(FourPris) + " Honey money!";
            document.getElementById('aFour').innerHTML = Four;
        }
        if (Five >= 1) {
            var Old = Five;
            Five = 0;
            addVisiual("luxury", "Luxury", "Luxury Brands", "");
            addAchiements("Luxury4", "Big spender", "Get 10 luxury brands!", 6, 1.9, 1, AchSevenTier);
            for (var i = 0; i < Old; i++) {
                addItem("Luxury", Five, 3);
                Five++;
            }
            document.getElementById('pFive').innerHTML = numberWithCommas(FivePris) + " Honey money!";
            document.getElementById('aFive').innerHTML = Five;
        }
        if (Six >= 1) {
            var Old = Six;
            Six = 0;
            addVisiual("plastic", "Plastic", "Plastic surgery", "bund");
            addAchiements("Plastic1", "Barbie Doll", "Get 10 plastic surgeries!", 7, 1.7, 0.8, AchEightTier);
            for (var i = 0; i < Old; i++) {
                addItem("Plastic", Six, 3);
                Six++;
            }
            document.getElementById('pSix').innerHTML = numberWithCommas(SixPris) + " Honey money!";
            document.getElementById('aSix').innerHTML = Six;
        }

        if (autoTier >= 2) {
            autoClicker();
        }

        if (earnings >= autoNext && autoTier == 1) {
            upgradeAdd("autoclick1", 1000, "Auto Honey money every second!");
            document.getElementById("autoclick1").onclick = function () { autoclick(1000, 1000, 'autoclick1', 10000); }
        }
        else if (earnings >= autoNext && autoTier == 2) {
            if (typeof holdclick2 !== 'object') {
                upgradeAdd("holdclick2", 50000, "hold Honey money five second!");
                document.getElementById("holdclick2").onclick = function () { holdclick(50000, 200, 'holdclick2'); }
            }
        }
        else if (earnings >= autoNext && autoTier == 3) {
            if (typeof holdclick3 !== 'object') {
                upgradeAdd("holdclick3", 500000, "hold Honey money 15 second!");
                document.getElementById("holdclick3").onclick = function () { holdclick(500000, 66, 'holdclick3'); }
            }
        }
        else if (earnings >= autoNext && autoTier == 4) {
            if (typeof holdclick4 !== 'object') {
                upgradeAdd("holdclick4", 2500000, "hold Honey money 30 second!");
                document.getElementById("holdclick4").onclick = function () { holdclick(2500000, 33, 'holdclick4'); }
            }
        }
        else if (earnings >= autoNext && autoTier == 5) {
            if (typeof holdclick5 !== 'object') {
                upgradeAdd("holdclick5", 11111111, "hold Honey money 50 second!");
                document.getElementById("holdclick5").onclick = function () { holdclick(11111111, 20, 'holdclick5'); }
            }
        }

        if (earnings >= holdNext && holdTier == 1) {
            upgradeAdd("holdclick1", 1000, "hold Honey money every second!");
            document.getElementById("holdclick1").onclick = function () { holdclick(1000, 1000, 'holdclick1', 10000); }
        }
        else if (earnings >= holdNext && holdTier == 2) {
            if (typeof holdclick2 !== 'object') {
                upgradeAdd("holdclick2", 50000, "hold Honey money five second!");
                document.getElementById("holdclick2").onclick = function () { holdclick(50000, 200, 'holdclick2'); }
            }
        }
        else if (earnings >= holdNext && holdTier == 3) {
            if (typeof holdclick3 !== 'object') {
                upgradeAdd("holdclick3", 500000, "hold Honey money 10 second!");
                document.getElementById("holdclick3").onclick = function () { holdclick(500000, 100, 'holdclick3'); }
            }
        }
        else if (earnings >= holdNext && holdTier == 4) {
            if (typeof holdclick4 !== 'object') {
                upgradeAdd("holdclick4", 2500000, "hold Honey money 15 second!");
                document.getElementById("holdclick4").onclick = function () { holdclick(2500000, 66, 'holdclick4'); }
            }
        }
        else if (earnings >= holdNext && holdTier == 5) {
            if (typeof holdclick5 !== 'object') {
                upgradeAdd("holdclick5", 11111111, "hold Honey money 20 second!");
                document.getElementById("holdclick5").onclick = function () { holdclick(11111111, 50, 'holdclick5'); }
            }
        }

        //Create item upgrades
        if (One >= OneTier) {
            if (typeof OneUpgrade !== 'object') {
                upgradeAdd("OneUpgrade", OneTier * 250, "20% extra honey money pr shoe! - " + (OneTier * 250));
                document.getElementById("OneUpgrade").onclick = function () { itemUpgrade((OneTier * 250), "OneUpgrade", "One"); }
            }
        }
        if (Two >= TwoTier) {
            if (typeof TwoUpgrade !== 'object') {
                upgradeAdd("TwoUpgrade", TwoTier * 2000, "20% extra honey money pr bra! - " + (TwoTier * 2000));
                document.getElementById("TwoUpgrade").onclick = function () { itemUpgrade((TwoTier * 2000), "TwoUpgrade", "Two"); }
            }
        }
        if (Three >= ThreeTier) {
            if (typeof ThreeUpgrade !== 'object') {
                upgradeAdd("ThreeUpgrade", ThreeTier * 30000, "20% extra honey money pr make-up! - " + (ThreeTier * 30000));
                document.getElementById("ThreeUpgrade").onclick = function () { itemUpgrade((ThreeTier * 30000), "ThreeUpgrade", "Three"); }
            }
        }
        if (Four >= FourTier) {
            if (typeof FourUpgrade !== 'object') {
                upgradeAdd("FourUpgrade", FourTier * 150000, "20% extra honey money pr purse! - " + (FourTier * 150000));
                document.getElementById("FourUpgrade").onclick = function () { itemUpgrade((FourTier * 150000), "FourUpgrade", "Four"); }
            }
        }
        if (Five >= FiveTier) {
            if (typeof FiveUpgrade !== 'object') {
                upgradeAdd("FiveUpgrade", FiveTier * 1348400, "20% extra honey money pr luxus brand! - " + (FiveTier * 134840));
                document.getElementById("FiveUpgrade").onclick = function () { itemUpgrade((FiveTier * 134840), "FiveUpgrade", "Five"); }
            }
        }
        if (Six >= SixTier) {
            if (typeof SixUpgrade !== 'object') {
                upgradeAdd("SixUpgrade", SixTier * 11348400, "20% extra honey money pr plastic surgery! - " + (SixTier * 11348400));
                document.getElementById("SixUpgrade").onclick = function () { itemUpgrade((SixTier * 11348400), "SixUpgrade", "Six"); }
            }
        }

        //Check achevement status
        if (One > 0 && AchThreeTier == 1) { if (typeof Shoes3 == 'object') { document.getElementById("Shoes3").remove(); } addAchiements("Shoes3", "Precious feet", "Get 10 shoes!", 2, 1.7, 1, 1, " "); AchThreeTier++; checker("ach"); }
        else if (One >= 10 && AchThreeTier == 2) { if (typeof Shoes3 == 'object') { document.getElementById("Shoes3").remove();} addAchiements("Shoes3", "Precious feet", "Get 50 shoes!", 2, 1.7, 1, 2, " "); AchThreeTier++; checker("ach"); }
        else if (One >= 50 && AchThreeTier == 3) { if (typeof Shoes3 == 'object') { document.getElementById("Shoes3").remove();} addAchiements("Shoes3", "Precious feet", "Get 100 shoes!", 2, 1.7, 1, 3, " "); AchThreeTier++; checker("ach"); }
        else if (One >= 100 && AchThreeTier == 4) { if (typeof Shoes3 == 'object') { document.getElementById("Shoes3").remove();} addAchiements("Shoes3", "Precious feet", "Get 200 shoes!", 2, 1.7, 1, 4, " "); AchThreeTier++; checker("ach"); }
        else if (One >= 200 && AchThreeTier == 5) { if (typeof Shoes3 == 'object') { document.getElementById("Shoes3").remove();} addAchiements("Shoes3", "Precious feet", "Get 500 shoes!", 2, 1.7, 1, 5, " "); AchThreeTier++; checker("ach"); }

        if (Two > 0 && AchFourTier == 1) { if (typeof Shoes3 == 'Bra1') {document.getElementById("Bra1").remove();} addAchiements("Bra1", "Boobie holder", "Get 10 Push-up bras!", 3, 1.6, 1, 1, ""); AchFourTier++; checker("ach"); }
        else if (Two >= 10 && AchFourTier == 2) { if (typeof Shoes3 == 'Bra1') {document.getElementById("Bra1").remove();} addAchiements("Bra1", "Boobie holder", "Get 50 Push-up bras!", 3, 1.6, 1, 2, ""); AchFourTier++; checker("ach"); }
        else if (Two >= 20 && AchFourTier == 3) { if (typeof Shoes3 == 'Bra1') {document.getElementById("Bra1").remove();} addAchiements("Bra1", "Boobie holder", "Get 100 Push-up bras!", 3, 1.6, 1, 3, ""); AchFourTier++; checker("ach"); }
        else if (Two >= 100 && AchFourTier == 4) { if (typeof Shoes3 == 'Bra1') { document.getElementById("Bra1").remove();} addAchiements("Bra1", "Boobie holder", "Get 200 Push-up bras!", 3, 1.6, 1, 4, ""); AchFourTier++; checker("ach"); }
        else if (Two >= 200 && AchFourTier == 5) { if (typeof Shoes3 == 'Bra1') {document.getElementById("Bra1").remove();} addAchiements("Bra1", "Boobie holder", "Get 500 Push-up bras!", 3, 1.6, 1, 5, ""); AchFourTier++; checker("ach"); }

        if (Three > 0 && AchFiveTier == 1) { if (typeof Makeup2 == 'object') {document.getElementById("Makeup2").remove();} addAchiements("Makeup2", "face painter", "Get 10 makeups!", 4, 1.8, 1, 1, ""); AchFiveTier++; checker("ach"); }
        else if (Three >= 10 && AchFiveTier == 2) { if (typeof Makeup2 == 'object') {document.getElementById("Makeup2").remove();} addAchiements("Makeup2", "face painter", "Get 50 makeups!", 4, 1.8, 1, 2, ""); AchFiveTier++; checker("ach"); }
        else if (Three >= 50 && AchFiveTier == 3) { if (typeof Makeup2 == 'object') {document.getElementById("Makeup2").remove();} addAchiements("Makeup2", "face painter", "Get 100 makeups!", 4, 1.8, 1, 3, ""); AchFiveTier++; checker("ach"); }
        else if (Three >= 100 && AchFiveTier == 4) { if (typeof Makeup2 == 'object') {document.getElementById("Makeup2").remove();} addAchiements("Makeup2", "face painter", "Get 200 makeups!", 4, 1.8, 1, 4, ""); AchFiveTier++; checker("ach"); }
        else if (Three >= 200 && AchFiveTier == 5) { if (typeof Makeup2 == 'object') {document.getElementById("Makeup2").remove();} addAchiements("Makeup2", "face painter", "Get 500 makeups!", 4, 1.8, 1, 5, ""); AchFiveTier++; checker("ach"); }

        if (Four > 0 && AchSixTier == 1) { if (typeof Purses1 == 'object') {document.getElementById("Purses1").remove();} addAchiements("Purses1", "Pretty bag", "Get 10 purses!", 5, 2, 1, 1, ""); AchSixTier++; checker("ach"); }
        else if (Four >= 10 && AchSixTier == 2) { if (typeof Purses1 == 'object') {document.getElementById("Purses1").remove();} addAchiements("Purses1", "Pretty bag", "Get 50 purses!", 5, 2, 1, 2, ""); AchSixTier++; checker("ach"); }
        else if (Four >= 50 && AchSixTier == 3) { if (typeof Purses1 == 'object') {document.getElementById("Purses1").remove();} addAchiements("Purses1", "Pretty bag", "Get 100 purses!", 5, 2, 1, 3, ""); AchSixTier++; checker("ach"); }
        else if (Four >= 100 && AchSixTier == 4) { if (typeof Purses1 == 'object') {document.getElementById("Purses1").remove();} addAchiements("Purses1", "Pretty bag", "Get 200 purses!", 5, 2, 1, 4, ""); AchSixTier++; checker("ach"); }
        else if (Four >= 200 && AchSixTier == 5) { if (typeof Purses1 == 'object') {document.getElementById("Purses1").remove();} addAchiements("Purses1", "Pretty bag", "Get 500 purses!", 5, 2, 1, 5, ""); AchSixTier++; checker("ach"); }

        if (Five > 0 && AchSevenTier == 1) { if (typeof Luxury4 == 'object') {document.getElementById("Luxury4").remove();} addAchiements("Luxury4", "Big spender", "Get 10 luxury brands!", 6, 1.9, 1, 1, ""); AchSevenTier++; checker("ach"); }
        else if (Five >= 10 && AchSevenTier == 2) { if (typeof Luxury4 == 'object') {document.getElementById("Luxury4").remove();} addAchiements("Luxury4", "Big spender", "Get 50 luxury brands!", 6, 1.9, 1, 2, ""); AchSevenTier++; checker("ach"); }
        else if (Five >= 500 && AchSevenTier == 3) { if (typeof Luxury4 == 'object') {document.getElementById("Luxury4").remove();} addAchiements("Luxury4", "Big spender", "Get 100 luxury brands!", 6, 1.9, 1, 3, ""); AchSevenTier++; checker("ach"); }
        else if (Five >= 100 && AchSevenTier == 4) { if (typeof Luxury4 == 'object') {document.getElementById("Luxury4").remove();} addAchiements("Luxury4", "Big spender", "Get 200 luxury brands!", 6, 1.9, 1, 4, ""); AchSevenTier++; checker("ach"); }
        else if (Five >= 200 && AchSevenTier == 5) { if (typeof Luxury4 == 'object') {document.getElementById("Luxury4").remove();} addAchiements("Luxury4", "Big spender", "Get 500 luxury brands!", 6, 1.9, 1, 5, ""); AchSevenTier++; checker("ach"); }

        if (Six > 0 && AchEightTier == 1) { if (typeof Plastic1 == 'object') {document.getElementById("Plastic1").remove();} addAchiements("Plastic1", "Barbie Doll", "Get 10 plastic surgeries!", 7, 1.7, 0.8, 1, ""); AchEightTier++; checker("ach"); }
        else if (Six >= 10 && AchEightTier == 2) { if (typeof Plastic1 == 'object') {document.getElementById("Plastic1").remove();} addAchiements("Plastic1", "Barbie Doll", "Get 50 plastic surgeries!", 7, 1.7, 0.8, 2, ""); AchEightTier++; checker("ach"); }
        else if (Six >= 50 && AchEightTier == 3) { if (typeof Plastic1 == 'object') {document.getElementById("Plastic1").remove();} addAchiements("Plastic1", "Barbie Doll", "Get 100 plastic surgeries!", 7, 1.7, 0.8, 3, ""); AchEightTier++; checker("ach"); }
        else if (Six >= 100 && AchEightTier == 4) { if (typeof Plastic1 == 'object') {document.getElementById("Plastic1").remove();} addAchiements("Plastic1", "Barbie Doll", "Get 200 plastic surgeries!", 7, 1.7, 0.8, 4, ""); AchEightTier++; checker("ach"); }
        else if (Six >= 200 && AchEightTier == 5) { if (typeof Plastic1 == 'object') {document.getElementById("Plastic1").remove();} addAchiements("Plastic1", "Barbie Doll", "Get 500 plastic surgeries!", 7, 1.7, 0.8, 5, ""); AchEightTier++; checker("ach"); }

        if (totClick > 0 && AchOneTier == 1) { if (typeof autoclick1off == 'object') {document.getElementById("autoclick1off").remove();} addAchiements("autoclick1off", "CLICK-BAIT", "100 total clicks!", 0, 2, 1, 1, ""); AchOneTier++; checker("ach"); }
        else if (totClick >= 100 && AchOneTier == 2) { if (typeof autoclick1off == 'object') {document.getElementById("autoclick1off").remove();} addAchiements("autoclick1off", "CLICK-BAIT", "1000 total clicks!", 0, 2, 1, 2, ""); AchOneTier++; checker("ach"); }
        else if (totClick >= 1000 && AchOneTier == 3) { if (typeof autoclick1off == 'object') {document.getElementById("autoclick1off").remove();} addAchiements("autoclick1off", "CLICK-BAIT", "10000 total clicks!", 0, 2, 1, 3, ""); AchOneTier++; checker("ach"); }
        else if (totClick >= 10000 && AchOneTier == 4) { if (typeof autoclick1off == 'object') {document.getElementById("autoclick1off").remove();} addAchiements("autoclick1off", "CLICK-BAIT", "50000 total clicks!", 0, 2, 1, 4, ""); AchOneTier++; checker("ach"); }
        else if (totClick >= 50000 && AchOneTier == 5) { if (typeof autoclick1off == 'object') {document.getElementById("autoclick1off").remove();} addAchiements("autoclick1off", "CLICK-BAIT", "100000 total clicks!", 0, 2, 1, 5, ""); AchOneTier++; checker("ach"); }

        if (earnings > 0 && AchTwoTier == 1) { if (typeof montA == 'object') {document.getElementById("montA").remove();} addAchiements("montA", "Ms. monopoly", "1000 total honey money!", 1, 1.7, 0.8, 1, ""); AchTwoTier++; checker("ach"); }
        else if (earnings >= 1000 && AchTwoTier == 2) { if (typeof montA == 'object') {document.getElementById("montA").remove();} addAchiements("montA", "Ms. monopoly", "100000 total honey money!", 1, 1.7, 0.8, 2, ""); AchTwoTier++; checker("ach"); }
        else if (earnings >= 100000 && AchTwoTier == 3) { if (typeof montA == 'object') {document.getElementById("montA").remove();} addAchiements("montA", "Ms. monopoly", "1000000 total honey money!", 1, 1.7, 0.8, 3, ""); AchTwoTier++; checker("ach"); }
        else if (earnings >= 1000000 && AchTwoTier == 4) { if (typeof montA == 'object') { document.getElementById("montA").remove();} addAchiements("montA", "Ms. monopoly", "10000000 total honey money!", 1, 1.7, 0.8, 4, ""); AchTwoTier++; checker("ach"); }
        else if (earnings >= 10000000 && AchTwoTier == 5) { if (typeof montA == 'object') {document.getElementById("montA").remove();} addAchiements("montA", "Ms. monopoly", "100000000 total honey money!", 1, 1.7, 0.8, 5, ""); AchTwoTier++; checker("ach"); }

        if (earnings >= addNext) {
            if (typeof valueAdd !== 'object') {
                upgradeAdd("valueAdd", addTier * 1000, "20% ekstra honey money pr click! - " + (addTier * 1000));
                document.getElementById("valueAdd").onclick = function () { addBuy(addTier * 1000, "valueAdd"); }
            }
        }

        document.getElementById('score').innerHTML = numberWithCommas(value);
        document.getElementById('title').innerHTML = numberWithCommas(value) + ' Honey money';
        setInterval(checker, 2000);
        checker("ach");
        autosave();
    }
    load();
});