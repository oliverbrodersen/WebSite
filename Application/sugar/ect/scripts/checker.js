// .d8888b.  888                        888                       
//d88P  Y88b 888                        888                       
//888    888 888                        888                       
//888        88888b.   .d88b.   .d8888b 888  888  .d88b.  888d888 
//888        888 "88b d8P  Y8b d88P"    888 .88P d8P  Y8b 888P"   
//888    888 888  888 88888888 888      888888K  88888888 888     
//Y88b  d88P 888  888 Y8b.     Y88b.    888 "88b Y8b.     888     
// "Y8888P"  888  888  "Y8888   "Y8888P 888  888  "Y8888  888 


    function checker(type) {
        document.getElementById("prKlik").innerHTML = "+" + numberWithCommas(addStrength);
        document.getElementById("prKlik").title = addStrength;
        numItems = $('#mont').length;
        prSek = numItems * addStrength;
        document.getElementById('prSek').innerHTML = numberWithCommas(prSek) + "  ";

        if (value >= OnePris) { on("One"); }
        else { off("One"); }
        if (value >= TwoPris) { on("Two"); }
        else { off("Two"); }
        if (value >= ThreePris) { on("Three"); }
        else { off("Three"); }
        if (value >= FourPris) { on("Four"); }
        else { off("Four"); }
        if (value >= FivePris) { on("Five"); }
        else { off("Five"); }
        if (value >= SixPris) { on("Six"); }
        else { off("Six"); }

        //autoclicker
        if (value >= 1000) { if (typeof autoclick1 == 'object') { document.getElementById('autoclick1').className = "upgrade on"; document.getElementById('autoclick1bes').className = "upgradeBes"; } }
        else { if (typeof autoclick1 == 'object') { document.getElementById('autoclick1').className = "upgrade off"; document.getElementById('autoclick1bes').className += " off"; } }
        if (value >= 50000) { if (typeof autoclick2 == 'object') { document.getElementById('autoclick2').className = "upgrade on"; document.getElementById('autoclick2bes').className = "upgradeBes"; } }
        else { if (typeof autoclick2 == 'object') { document.getElementById('autoclick2').className = "upgrade off"; document.getElementById('autoclick2bes').className += " off"; } }
        if (value >= 500000) { if (typeof autoclick3 == 'object') { document.getElementById('autoclick3').className = "upgrade on"; document.getElementById('autoclick3bes').className = "upgradeBes"; } }
        else { if (typeof autoclick3 == 'object') { document.getElementById('autoclick3').className = "upgrade off"; document.getElementById('autoclick3bes').className += " off"; } }
        if (value >= 2500000) { if (typeof autoclick4 == 'object') { document.getElementById('autoclick4').className = "upgrade on"; document.getElementById('autoclick4bes').className = "upgradeBes"; } }
        else { if (typeof autoclick4 == 'object') { document.getElementById('autoclick4').className = "upgrade off"; document.getElementById('autoclick4bes').className += " off"; } }
        if (value >= 11111111) { if (typeof autoclick5 == 'object') { document.getElementById('autoclick5').className = "upgrade on"; document.getElementById('autoclick5bes').className = "upgradeBes"; } }
        else { if (typeof autoclick5 == 'object') { document.getElementById('autoclick5').className = "upgrade off"; document.getElementById('autoclick5bes').className += " off"; } }

        //holdclicker
        if (value >= 1000) { if (typeof holdclick1 == 'object') { document.getElementById('holdclick1').className = "upgrade on"; } }
        else { if (typeof holdclick1 == 'object') { document.getElementById('holdclick1').className = "upgrade off"; } }
        if (value >= 50000) { if (typeof holdclick2 == 'object') { document.getElementById('holdclick2').className = "upgrade on"; } }
        else { if (typeof holdclick2 == 'object') { document.getElementById('holdclick2').className = "upgrade off"; } }
        if (value >= 500000) { if (typeof holdclick3 == 'object') { document.getElementById('holdclick3').className = "upgrade on"; } }
        else { if (typeof holdclick3 == 'object') { document.getElementById('holdclick3').className = "upgrade off"; } }
        if (value >= 2500000) { if (typeof holdclick4 == 'object') { document.getElementById('holdclick4').className = "upgrade on"; } }
        else { if (typeof holdclick4 == 'object') { document.getElementById('holdclick4').className = "upgrade off"; } }
        if (value >= 11111111) { if (typeof holdclick5 == 'object') { document.getElementById('holdclick5').className = "upgrade on"; } }
        else { if (typeof holdclick5 == 'object') { document.getElementById('holdclick5').className = "upgrade off"; } }

        //Add 20%
        if (value >= (addTier * 1000)) { if (typeof valueAdd == 'object') { document.getElementById('valueAdd').className = "upgrade on"; } }
        else { if (typeof valueAdd == 'object') { document.getElementById('valueAdd').className = "upgrade off"; } }

        //Item upgrade One
        if (value >= (OneTier * 250)) { if (typeof OneUpgrade == 'object') { document.getElementById('OneUpgrade').className = "upgrade on"; } }
        else { if (typeof OneUpgrade == 'object') { document.getElementById('OneUpgrade').className = "upgrade off"; } }
        //Item upgrade Two
        if (value >= (TwoTier * 2000)) { if (typeof TwoUpgrade == 'object') { document.getElementById('TwoUpgrade').className = "upgrade on"; } }
        else { if (typeof TwoUpgrade == 'object') { document.getElementById('TwoUpgrade').className = "upgrade off"; } }
        //Item upgrade Three
        if (value >= (ThreeTier * 30000)) { if (typeof ThreeUpgrade == 'object') { document.getElementById('ThreeUpgrade').className = "upgrade on"; } }
        else { if (typeof ThreeUpgrade == 'object') { document.getElementById('ThreeUpgrade').className = "upgrade off"; } }
        //Item upgrade Four
        if (value >= (FourTier * 150000)) { if (typeof FourUpgrade == 'object') { document.getElementById('FourUpgrade').className = "upgrade on"; } }
        else { if (typeof FourUpgrade == 'object') { document.getElementById('FourUpgrade').className = "upgrade off"; } }
        //Item upgrade Five
        if (value >= (FiveTier * 1348400)) { if (typeof FiveUpgrade == 'object') { document.getElementById('FiveUpgrade').className = "upgrade on"; } }
        else { if (typeof FiveUpgrade == 'object') { document.getElementById('FiveUpgrade').className = "upgrade off"; } }
        //Item upgrade Six
        if (value >= (SixTier * 11348400)) { if (typeof SixUpgrade == 'object') { document.getElementById('SixUpgrade').className = "upgrade on"; } }
        else { if (typeof SixUpgrade == 'object') { document.getElementById('SixUpgrade').className = "upgrade off"; } }

        //Create upgrades
        if (earnings >= autoNext && autoTier == 2) {
            if (typeof autoclick2 !== 'object') {
                upgradeAdd("autoclick2", 50000, "Auto Honey money five second!");
                document.getElementById("autoclick2").onclick = function () { autoclick(50000, 200, 'autoclick2'); }
            }
        }
        if (earnings >= autoNext && autoTier == 3) {
            if (typeof autoclick3 !== 'object') {
                upgradeAdd("autoclick3", 500000, "Auto Honey money 10 second!");
                document.getElementById("autoclick3").onclick = function () { autoclick(500000, 100, 'autoclick3'); }
            }
        }
        if (earnings >= autoNext && autoTier == 4) {
            if (typeof autoclick4 !== 'object') {
                upgradeAdd("autoclick4", 2500000, "Auto Honey money 15 second!");
                document.getElementById("autoclick4").onclick = function () { autoclick(2500000, 66, 'autoclick4'); }
            }
        }
        if (earnings >= autoNext && autoTier == 5) {
            if (typeof autoclick5 !== 'object') {
                upgradeAdd("autoclick5", 11111111, "Auto Honey money 20 second!");
                document.getElementById("autoclick5").onclick = function () { autoclick(11111111, 50, 'autoclick5'); }
            }
        }

        //Create upgrades
        if (earnings >= holdNext && holdTier == 2) {
            if (typeof holdclick2 !== 'object') {
                upgradeAdd("holdclick2", 50000, "hold Honey money five second!");
                document.getElementById("holdclick2").onclick = function () { holdclick(50000, 200, 'holdclick2'); }
            }
        }
        if (earnings >= holdNext && holdTier == 3) {
            if (typeof holdclick3 !== 'object') {
                upgradeAdd("holdclick3", 500000, "hold Honey money 10 second!");
                document.getElementById("holdclick3").onclick = function () { holdclick(500000, 100, 'holdclick3'); }
            }
        }
        if (earnings >= holdNext && holdTier == 4) {
            if (typeof holdclick4 !== 'object') {
                upgradeAdd("holdclick4", 2500000, "hold Honey money 15 second!");
                document.getElementById("holdclick4").onclick = function () { holdclick(2500000, 66, 'holdclick4'); }
            }
        }
        if (earnings >= holdNext && holdTier == 5) {
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

        //Add 20%
        if (earnings >= addNext) {
            if (typeof valueAdd !== 'object') {
                upgradeAdd("valueAdd", addTier * 1000, "20% ekstra honey money pr click! - " + (addTier * 1000));
                document.getElementById("valueAdd").onclick = function () { addBuy(addTier * 1000, "valueAdd"); }
            }
        }

        if (OnePris !== 50 || value >= OnePris) { document.getElementById('besTwo').innerHTML = "Push-up bra"; document.getElementById('dThree').style.visibility = "visible"; }
        if (TwoPris !== 1100 || value >= TwoPris) { document.getElementById('besThree').innerHTML = "Make up"; document.getElementById('dFour').style.visibility = "visible"; }
        if (ThreePris !== 12000 || value >= ThreePris) { document.getElementById('besFour').innerHTML = "Purses"; document.getElementById('dFive').style.visibility = "visible"; }
        if (FourPris !== 130000 || value >= FourPris) { document.getElementById('besFive').innerHTML = "luxury brands"; document.getElementById('dSix').style.visibility = "visible"; }
        if (FivePris !== 1400000 || value >= FivePris) { document.getElementById('besSix').innerHTML = "Plastic surgery"; }

        if (type == "ach") {
            if (One >= 10 && AchThreeTier == 1) { console.log("1"); document.getElementById("Shoes3").remove(); addAchiements("Shoes3", "Precious feet", "Get 10 shoes!", 2, 1.7, 1, 1, " active"); AchThreeTier++; checker("ach"); sendMessage("send", "Wow 10 shoes! Thats a whole lot more then 1, good job", "a"); }
            else if (One >= 50 && AchThreeTier == 2) { console.log("2"); document.getElementById("Shoes3").remove(); addAchiements("Shoes3", "Precious feet", "Get 50 shoes!", 2, 1.7, 1, 2, " active"); AchThreeTier++; checker("ach"); sendMessage("send", "50 shoes!? thats impressive", "a"); }
            else if (One >= 100 && AchThreeTier == 3) { console.log("3"); document.getElementById("Shoes3").remove(); addAchiements("Shoes3", "Precious feet", "Get 100 shoes!", 2, 1.7, 1, 3, " active"); AchThreeTier++; checker("ach"); sendMessage("send", "Honey wow, i know i said go nuts, but 100 shoes!?", "a"); }
            else if (One >= 200 && AchThreeTier == 4) { console.log("4"); document.getElementById("Shoes3").remove(); addAchiements("Shoes3", "Precious feet", "Get 200 shoes!", 2, 1.7, 1, 4, " active"); AchThreeTier++; checker("ach"); sendMessage("send", "200 shoes?? Wow!", "a"); }
            else if (One >= 500 && AchThreeTier == 5) { console.log("5"); document.getElementById("Shoes3").remove(); addAchiements("Shoes3", "Precious feet", "Get 500 shoes!", 2, 1.7, 1, 5, " active"); AchThreeTier++; checker("ach"); sendMessage("send", "500 shoes?! I think your obsession with shoes have gone a bit to far maybe..", "a"); }

            if (Two >= 10 && AchFourTier == 1) { document.getElementById("Bra1").remove(); addAchiements("Bra1", "Boobie holder", "Get 10 Push-up bras!", 3, 1.6, 1, 1, "active"); AchFourTier++; checker("ach"); sendMessage("send", "10 bras! Now you shouldn't need anymore, right?", "a"); }
            else if (Two >= 50 && AchFourTier == 2) { document.getElementById("Bra1").remove(); addAchiements("Bra1", "Boobie holder", "Get 50 Push-up bras!", 3, 1.6, 1, 2, "active"); AchFourTier++; checker("ach"); sendMessage("send", "Wow 50 bras, Good job honey!", "a"); }
            else if (Two >= 100 && AchFourTier == 3) { document.getElementById("Bra1").remove(); addAchiements("Bra1", "Boobie holder", "Get 100 Push-up bras!", 3, 1.6, 1, 3, "active"); AchFourTier++; checker("ach"); sendMessage("send", "100 bras?! Where do you store all of them??", "a"); }
            else if (Two >= 200 && AchFourTier == 4) { document.getElementById("Bra1").remove(); addAchiements("Bra1", "Boobie holder", "Get 200 Push-up bras!", 3, 1.6, 1, 4, "active"); AchFourTier++; checker("ach"); sendMessage("send", "200 bras! I mean do you really need all of thouse?..", "a"); }
            else if (Two >= 500 && AchFourTier == 5) { document.getElementById("Bra1").remove(); addAchiements("Bra1", "Boobie holder", "Get 500 Push-up bras!", 3, 1.6, 1, 5, "active"); AchFourTier++; checker("ach"); sendMessage("send", "Wow, 500 bras.. I think you should maybe sort out in your closset..", "a"); }

            if (Three >= 10 && AchFiveTier == 1) { document.getElementById("Makeup2").remove(); addAchiements("Makeup2", "face painter", "Get 10 makeups!", 4, 1.8, 1, 1, "active"); AchFiveTier++; checker("ach"); sendMessage("send", "Be sure to go nuts on the make-up honey, 10 pieces can't be enough for you", "a"); }
            else if (Three >= 50 && AchFiveTier == 2) { document.getElementById("Makeup2").remove(); addAchiements("Makeup2", "face painter", "Get 50 makeups!", 4, 1.8, 1, 2, "active"); AchFiveTier++; checker("ach"); sendMessage("send", "50 pieces of make-up! Now you have gotten a little collection going!", "a"); }
            else if (Three >= 100 && AchFiveTier == 3) { document.getElementById("Makeup2").remove(); addAchiements("Makeup2", "face painter", "Get 100 makeups!", 4, 1.8, 1, 3, "active"); AchFiveTier++; checker("ach"); sendMessage("send", "Wow 100 pieces! I don't know much about make-up so I'm sure it might be needed", "a"); }
            else if (Three >= 200 && AchFiveTier == 4) { document.getElementById("Makeup2").remove(); addAchiements("Makeup2", "face painter", "Get 200 makeups!", 4, 1.8, 1, 4, "active"); AchFiveTier++; checker("ach"); sendMessage("send", "200 pieces, really? I mean it's fine, i just don't get why it all has to be channel and Gucci", "a"); }
            else if (Three >= 500 && AchFiveTier == 5) { document.getElementById("Makeup2").remove(); addAchiements("Makeup2", "face painter", "Get 500 makeups!", 4, 1.8, 1, 5, "active"); AchFiveTier++; checker("ach"); sendMessage("send", "Okay loved one, you should maybe think about just using up the make-up you already have, 500 piecis should be enough..", "a"); }

            if (Four >= 10 && AchSixTier == 1) { document.getElementById("Purses1").remove(); addAchiements("Purses1", "Pretty bag", "Get 10 purses!", 5, 2, 1, 1, "active"); AchSixTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (Four >= 50 && AchSixTier == 2) { document.getElementById("Purses1").remove(); addAchiements("Purses1", "Pretty bag", "Get 50 purses!", 5, 2, 1, 2, "active"); AchSixTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (Four >= 100 && AchSixTier == 3) { document.getElementById("Purses1").remove(); addAchiements("Purses1", "Pretty bag", "Get 100 purses!", 5, 2, 1, 3, "active"); AchSixTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (Four >= 200 && AchSixTier == 4) { document.getElementById("Purses1").remove(); addAchiements("Purses1", "Pretty bag", "Get 200 purses!", 5, 2, 1, 4, "active"); AchSixTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (Four >= 500 && AchSixTier == 5) { document.getElementById("Purses1").remove(); addAchiements("Purses1", "Pretty bag", "Get 500 purses!", 5, 2, 1, 5, "active"); AchSixTier++; checker("ach"); sendMessage("send", "test", "a"); }

            if (Five >= 10 && AchSevenTier == 1) { document.getElementById("Luxury4").remove(); addAchiements("Luxury4", "Big spender", "Get 10 luxury brands!", 6, 1.9, 1, 1, "active"); AchSevenTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (Five >= 50 && AchSevenTier == 2) { document.getElementById("Luxury4").remove(); addAchiements("Luxury4", "Big spender", "Get 50 luxury brands!", 6, 1.9, 1, 2, "active"); AchSevenTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (Five >= 100 && AchSevenTier == 3) { document.getElementById("Luxury4").remove(); addAchiements("Luxury4", "Big spender", "Get 100 luxury brands!", 6, 1.9, 1, 3, "active"); AchSevenTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (Five >= 200 && AchSevenTier == 4) { document.getElementById("Luxury4").remove(); addAchiements("Luxury4", "Big spender", "Get 200 luxury brands!", 6, 1.9, 1, 4, "active"); AchSevenTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (Five >= 5000 && AchSevenTier == 5) { document.getElementById("Luxury4").remove(); addAchiements("Luxury4", "Big spender", "Get 500 luxury brands!", 6, 1.9, 1, 5, "active"); AchSevenTier++; checker("ach"); sendMessage("send", "test", "a"); }

            if (Six >= 10 && AchEightTier == 1) { document.getElementById("Plastic1").remove(); addAchiements("Plastic1", "Barbie Doll", "Get 10 plastic surgeries!", 7, 1.7, 0.8, 1, "active"); AchEightTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (Six >= 50 && AchEightTier == 2) { document.getElementById("Plastic1").remove(); addAchiements("Plastic1", "Barbie Doll", "Get 50 plastic surgeries!", 7, 1.7, 0.8, 2, "active"); AchEightTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (Six >= 100 && AchEightTier == 3) { document.getElementById("Plastic1").remove(); addAchiements("Plastic1", "Barbie Doll", "Get 100 plastic surgeries!", 7, 1.7, 0.8, 3, "active"); AchEightTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (Six >= 200 && AchEightTier == 4) { document.getElementById("Plastic1").remove(); addAchiements("Plastic1", "Barbie Doll", "Get 200 plastic surgeries!", 7, 1.7, 0.8, 4, "active"); AchEightTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (Six >= 500 && AchEightTier == 5) { document.getElementById("Plastic1").remove(); addAchiements("Plastic1", "Barbie Doll", "Get 500 plastic surgeries!", 7, 1.7, 0.8, 5, "active"); AchEightTier++; checker("ach"); sendMessage("send", "test", "a"); }

            if (totClick >= 100 && AchOneTier == 1) { document.getElementById("autoclick1off").remove(); addAchiements("autoclick1off", "CLICK-BAIT", "100 total clicks!", 0, 2, 1, 1, "active"); AchOneTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (totClick >= 1000 && AchOneTier == 2) { document.getElementById("autoclick1off").remove(); addAchiements("autoclick1off", "CLICK-BAIT", "1000 total clicks!", 0, 2, 1, 2, "active"); AchOneTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (totClick >= 10000 && AchOneTier == 3) { document.getElementById("autoclick1off").remove(); addAchiements("autoclick1off", "CLICK-BAIT", "10000 total clicks!", 0, 2, 1, 3, "active"); AchOneTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (totClick >= 50000 && AchOneTier == 4) { document.getElementById("autoclick1off").remove(); addAchiements("autoclick1off", "CLICK-BAIT", "50000 total clicks!", 0, 2, 1, 4, "active"); AchOneTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (totClick >= 100000 && AchOneTier == 5) { document.getElementById("autoclick1off").remove(); addAchiements("autoclick1off", "CLICK-BAIT", "100000 total clicks!", 0, 2, 1, 5, "active"); AchOneTier++; checker("ach"); sendMessage("send", "test", "a"); }

            if (earnings >= 1000 && AchTwoTier == 1) { document.getElementById("montA").remove(); addAchiements("montA", "Ms. monopoly", "1000 total honey money!", 1, 1.7, 0.8, 1, "active"); AchTwoTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (earnings >= 100000 && AchTwoTier == 2) { document.getElementById("montA").remove(); addAchiements("montA", "Ms. monopoly", "100000 total honey money!", 1, 1.7, 0.8, 2, "active"); AchTwoTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (earnings >= 1000000 && AchTwoTier == 3) { document.getElementById("montA").remove(); addAchiements("montA", "Ms. monopoly", "1000000 total honey money!", 1, 1.7, 0.8, 3, "active"); AchTwoTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (earnings >= 10000000 && AchTwoTier == 4) { document.getElementById("montA").remove(); addAchiements("montA", "Ms. monopoly", "10000000 total honey money!", 1, 1.7, 0.8, 4, "active"); AchTwoTier++; checker("ach"); sendMessage("send", "test", "a"); }
            else if (earnings >= 100000000 && AchTwoTier == 5) { document.getElementById("montA").remove(); addAchiements("montA", "Ms. monopoly", "100000000 total honey money!", 1, 1.7, 0.8, 5, "active"); AchTwoTier++; checker("ach"); sendMessage("send", "test", "a"); }
            //document.getElementById("autoclick1off").onclick = function () { collectOne(); };
            document.getElementById("montA").onclick = function () { collectTwo(); };

        }

        //Check for achevements
    }
    function on(number) {
        document.getElementById('d' + number).style.backgroundColor = '#fedee1'; //
        document.getElementById('d' + number).style.borderColor = '#f5c7c9';
        document.getElementById('b' + number).style.backgroundColor = '#f5c7c9';
        document.getElementById('b' + number).style.color = '#ffffff';
        document.getElementById('b' + number).style.cursor = 'pointer';
        document.getElementById('bes' + number).style.color = '#ffffff';
        document.getElementById('a' + number).style.color = '#ffffff';
        document.getElementById('p' + number).style.color = '#f5c7c9';
    }
    function off(number) {
        document.getElementById('d' + number).style.backgroundColor = '#e8e8e8';
        document.getElementById('d' + number).style.borderColor = '#cccccc';
        document.getElementById('b' + number).style.backgroundColor = '#cccccc';
        document.getElementById('b' + number).style.color = '#808080';
        document.getElementById('bes' + number).style.color = '#808080';
        document.getElementById('b' + number).style.cursor = 'no-drop';
        document.getElementById('a' + number).style.color = '#c9c9c9';
        document.getElementById('p' + number).style.color = '#c9c9c9';
    }
    //Komma i nummer
    function numberWithCommas(num) {
        var newnum = num;
        if (num >= 1000) {
            var suffixes = ["", "K", "Mil", "Bil", "Tril", "Quad", "Quint", "Sext", "Sept"];
            var suffixNum = Math.floor(("" + num).length / 3);
            var shortnum = '';
            for (var precision = 2; precision >= 1; precision--) {
                shortnum = parseFloat((suffixNum != 0 ? (num / Math.pow(1000, suffixNum)) : num).toPrecision(precision));
                var dotLessShortnum = (shortnum + '').replace(/[^a-zA-Z 0-9]+/g, '');
                if (dotLessShortnum.length <= 2) { break; }
            }
            if (shortnum % 1 != 0) shortNum = shortnum.toFixed(1);
            newnum = shortnum + suffixes[suffixNum];
        }
        return newnum;
    }