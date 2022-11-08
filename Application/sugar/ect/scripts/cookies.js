// .d8888b.                    888      d8b                   
//d88P  Y88b                   888      Y8P                   
//888    888                   888                            
//888         .d88b.   .d88b.  888  888 888  .d88b.  .d8888b  
//888        d88""88b d88""88b 888 .88P 888 d8P  Y8b 88K      
//888    888 888  888 888  888 888888K  888 88888888 "Y8888b. 
//Y88b  d88P Y88..88P Y88..88P 888 "88b 888 Y8b.          X88 
// "Y8888P"   "Y88P"   "Y88P"  888  888 888  "Y8888   88888P'

    //Adding cookies
function cookies() {
        document.cookie = "value=" + value;
        document.cookie = "strength=" + addStrength;
        document.cookie = "p1=" + OnePris;
        document.cookie = "p2=" + TwoPris;
        document.cookie = "p3=" + ThreePris;
        document.cookie = "p4=" + FourPris;
        document.cookie = "p5=" + FivePris;
        document.cookie = "p6=" + SixPris;
        document.cookie = "a1=" + One;
        document.cookie = "a2=" + Two;
        document.cookie = "a3=" + Three;
        document.cookie = "a4=" + Four;
        document.cookie = "a5=" + Five;
        document.cookie = "a6=" + Six;
        document.cookie = "autoClickerTier=" + autoTier;
        document.cookie = "autoClick=" + autoClick;
        document.cookie = "autoClickValue=" + autoClickValue;
        document.cookie = "autoNext=" + autoNext;
        document.cookie = "holdClickerTier=" + holdTier;
        document.cookie = "holdClick=" + holdClick;
        document.cookie = "holdClickValue=" + holdClickValue;
        document.cookie = "holdNext=" + holdNext;
        document.cookie = "earnings=" + earnings;
        document.cookie = "addNext=" + addNext;
        document.cookie = "addTier=" + addTier;
        document.cookie = "AchEightTier=" + AchEightTier;
        document.cookie = "AchSevenTier=" + AchSevenTier;
        document.cookie = "AchSixTier=" + AchSixTier;
        document.cookie = "AchFiveTier=" + AchFiveTier;
        document.cookie = "AchFourTier=" + AchFourTier;
        document.cookie = "AchThreeTier=" + AchThreeTier;
        document.cookie = "AchTwoTier=" + AchTwoTier;
        document.cookie = "AchOneTier=" + AchOneTier;
        document.cookie = "totClick=" + totClick;
        document.cookie = "highscore=" + highscore;
    }
    //Show Cookie info
    function cookieInfo() {
        if (document.getElementById("settings").style.right !== "105%") {
            document.getElementById("inventory").style.right = "105%";
            document.getElementById("settings").style.right = "105%";
        }
        else {
            document.getElementById("inventory").style.right = "0%";
            document.getElementById("settings").style.right = "0%";
        }
    }