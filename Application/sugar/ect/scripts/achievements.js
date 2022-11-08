//       d8888          888      d8b                                                            888             
//      d88888          888      Y8P                                                            888             
//     d88P888          888                                                                     888             
//    d88P 888  .d8888b 88888b.  888  .d88b.  888  888  .d88b.  88888b.d88b.   .d88b.  88888b.  888888 .d8888b  
//   d88P  888 d88P"    888 "88b 888 d8P  Y8b 888  888 d8P  Y8b 888 "888 "88b d8P  Y8b 888 "88b 888    88K      
//  d88P   888 888      888  888 888 88888888 Y88  88P 88888888 888  888  888 88888888 888  888 888    "Y8888b. 
// d8888888888 Y88b.    888  888 888 Y8b.      Y8bd8P  Y8b.     888  888  888 Y8b.     888  888 Y88b.       X88 
//d88P     888  "Y8888P 888  888 888  "Y8888    Y88P    "Y8888  888  888  888  "Y8888  888  888  "Y888  88888P' 
                                    
    //Adding achievements
    


function collectOne() {
    if (document.getElementById('autoclick1offImgContainer').className == "achievementsIndicator active") {
        document.getElementById('autoclick1offImgContainer').className == "achievementsIndicator";
        value += Math.round(value / (Math.pow(10, value.toString().length - 2))) * Math.pow(10, Math.round(value.toString().length - (value.toString().length / (7 - AchOneTier))));
        document.getElementById("autoclick1off").remove();
        if (AchOneTier == 2) { addAchiements("autoclick1off", "CLICK-BAIT", "1000 total clicks!", 0, 2, 1, 2, ""); }
        else if (AchOneTier == 3) { addAchiements("autoclick1off", "CLICK-BAIT", "10000 total clicks!", 0, 2, 1, 3, ""); }
        else if (AchOneTier == 4) { addAchiements("autoclick1off", "CLICK-BAIT", "50000 total clicks!", 0, 2, 1, 4, ""); }
        else if (AchOneTier == 5) { addAchiements("autoclick1off", "CLICK-BAIT", "100000 total clicks!", 0, 2, 1, 5, ""); }
        else if (AchOneTier == 6) { addAchiements("autoclick1off", "CLICK-BAIT", "Done!", 0, 2, 1, 6, " on"); }
        checker();
    }
}
function collectTwo() {
    if (document.getElementById('montAImgContainer').className == "achievementsIndicator active") {
        document.getElementById('montAImgContainer').className == "achievementsIndicator";
        value += Math.round(value / (Math.pow(10, value.toString().length - 2))) * Math.pow(10, Math.round(value.toString().length - (value.toString().length / (7 - AchTwoTier))));
        document.getElementById("montA").remove();
        if (AchTwoTier == 2) { addAchiements("montA", "Ms. monopoly", "100000 total honey money!", 1, 1.7, 0.8, 2, ""); }
        else if (AchTwoTier == 3) { addAchiements("montA", "Ms. monopoly", "1000000 total honey money!", 1, 1.7, 0.8, 3, ""); }
        else if (AchTwoTier == 4) { addAchiements("montA", "Ms. monopoly", "10000000 total honey money!", 1, 1.7, 0.8, 4, ""); }
        else if (AchTwoTier == 5) { addAchiements("montA", "Ms. monopoly", "100000000 total honey money!", 1, 1.7, 0.8, 5, ""); }
        else if (AchTwoTier == 6) { addAchiements("montA", "Ms. monopoly", "Done!", 1, 1.7, 0.8, 6, " on"); }
        checker();
    }
}
    function collectThree() {
        if (document.getElementById('Shoes3ImgContainer').className == "achievementsIndicator active") {
            document.getElementById('Shoes3ImgContainer').className == "achievementsIndicator";
            value += Math.round(value / (Math.pow(10, value.toString().length - 2))) * Math.pow(10, Math.round(value.toString().length - (value.toString().length / (7 - AchThreeTier))));
            document.getElementById("Shoes3").remove();
            if (AchThreeTier == 2) { addAchiements("Shoes3", "Precious feet", "Get 50 shoes!", 2, 1.7, 1, 2, ""); }
            else if (AchThreeTier == 3) { addAchiements("Shoes3", "Precious feet", "Get 100 shoes!", 2, 1.7, 1, 3, ""); }
            else if (AchThreeTier == 4) { addAchiements("Shoes3", "Precious feet", "Get 200 shoes!", 2, 1.7, 1, 4, ""); }
            else if (AchThreeTier == 5) { addAchiements("Shoes3", "Precious feet", "Get 500 shoes!", 2, 1.7, 1, 5, ""); }
            else if (AchThreeTier == 6) { addAchiements("Shoes3", "Precious feet", "Done!", 2, 1.7, 1, 6, " on"); }
            checker();
        }
    }
    function collectFour() {
        if (document.getElementById('Bra1ImgContainer').className == "achievementsIndicator active") {
            document.getElementById('Bra1ImgContainer').className == "achievementsIndicator";
            value += Math.round(value / (Math.pow(10, value.toString().length - 2))) * Math.pow(10, Math.round(value.toString().length - (value.toString().length / (7 - AchFourTier))));
            document.getElementById("Bra1").remove();
            if (AchFourTier == 2) { addAchiements("Bra1", "Boobie holder", "Get 50 Push-up bras!", 3, 1.6, 1, 2, ""); }
            else if (AchFourTier == 3) { addAchiements("Bra1", "Boobie holder", "Get 100 Push-up bras!", 3, 1.6, 1, 3, ""); }
            else if (AchFourTier == 4) { addAchiements("Bra1", "Boobie holder", "Get 200 Push-up bras!", 3, 1.6, 1, 4, ""); }
            else if (AchFourTier == 5) { addAchiements("Bra1", "Boobie holder", "Get 500 Push-up bras!", 3, 1.6, 1, 5, ""); }
            else if (AchFourTier == 6) { addAchiements("Bra1", "Boobie holder", "Done!", 3, 1.6, 1, 6, " on"); }
            checker();
        }
    }
    function collectFive() {
        if (document.getElementById('Makeup2ImgContainer').className == "achievementsIndicator active") {
            document.getElementById('Makeup2ImgContainer').className == "achievementsIndicator";
            value += Math.round(value / (Math.pow(10, value.toString().length - 2))) * Math.pow(10, Math.round(value.toString().length - (value.toString().length / (7 - AchFiveTier))));
            document.getElementById("Makeup2").remove();
            if (AchFiveTier == 2) { addAchiements("Makeup2", "face painter", "Get 50 makeups!", 4, 1.8, 1, 2, ""); }
            else if (AchFiveTier == 3) { addAchiements("Makeup2", "face painter", "Get 100 makeups!", 4, 1.8, 1, 3, ""); }
            else if (AchFiveTier == 4) { addAchiements("Makeup2", "face painter", "Get 200 makeups!", 4, 1.8, 1, 4, ""); }
            else if (AchFiveTier == 5) { addAchiements("Makeup2", "face painter", "Get 500 makeups!", 4, 1.8, 1, 5, ""); }
            else if (AchFiveTier == 6) { addAchiements("Makeup2", "face painter", "Done!", 4, 1.8, 1, 6, "on"); }
            checker();
        }
    }
    function collectSix() {
        if (document.getElementById('Purses1ImgContainer').className == "achievementsIndicator active") {
            document.getElementById('Purses1ImgContainer').className == "achievementsIndicator";
            value += Math.round(value / (Math.pow(10, value.toString().length - 2))) * Math.pow(10, Math.round(value.toString().length - (value.toString().length / (7 - AchSixTier))));
            document.getElementById("Purses1").remove();
            if (AchSixTier == 2) { addAchiements("Purses1", "Pretty bag", "Get 50 purses!", 5, 2, 1, 2, ""); }
            else if (AchSixTier == 3) { addAchiements("Purses1", "Pretty bag", "Get 100 purses!", 5, 2, 1, 3, ""); }
            else if (AchSixTier == 4) { addAchiements("Purses1", "Pretty bag", "Get 200 purses!", 5, 2, 1, 4, ""); }
            else if (AchSixTier == 5) { addAchiements("Purses1", "Pretty bag", "Get 500 purses!", 5, 2, 1, 5, ""); }
            else if (AchSixTier == 6) { addAchiements("Purses1", "Pretty bag", "Done!", 5, 2, 1, 6, "on"); }
            checker();
        }
    }
    function collectSeven() {
        if (document.getElementById('Luxury4ImgContainer').className == "achievementsIndicator active") {
            document.getElementById('Luxury4ImgContainer').className == "achievementsIndicator";
            value += Math.round(value / (Math.pow(10, value.toString().length - 2))) * Math.pow(10, Math.round(value.toString().length - (value.toString().length / (7 - AchSevenTier))));
            document.getElementById("Luxury4").remove();
            if (AchSevenTier == 2) { addAchiements("Luxury4", "Big spender", "Get 50 luxury brands!", 6, 1.9, 1, 2, ""); }
            else if (AchSevenTier == 3) { addAchiements("Luxury4", "Big spender", "Get 100 luxury brands!", 6, 1.9, 1, 3, ""); }
            else if (AchSevenTier == 4) { addAchiements("Luxury4", "Big spender", "Get 200 luxury brands!", 6, 1.9, 1, 4, ""); }
            else if (AchSevenTier == 5) { addAchiements("Luxury4", "Big spender", "Get 500 luxury brands!", 6, 1.9, 1, 5, ""); }
            else if (AchSevenTier == 6) { addAchiements("Luxury4", "Big spender", "Done!", 6, 1.9, 1, 6, "on"); }
            checker();
        }
    }
    function collectEight() {
        if (document.getElementById('Plastic1ImgContainer').className == "achievementsIndicator active") {
            document.getElementById('Plastic1ImgContainer').className == "achievementsIndicator";
            value += Math.round(value / (Math.pow(10, value.toString().length - 2))) * Math.pow(10, Math.round(value.toString().length - (value.toString().length / (7 - AchEightTier))));
            AchEightTier++;
            document.getElementById("Plastic1").remove();
            if (AchEightTier == 2) { addAchiements("Plastic1", "Barbie Doll", "Get 50 plastic surgeries!", 7, 1.7, 0.8, 2, ""); }
            else if (AchEightTier == 3) { addAchiements("Plastic1", "Barbie Doll", "Get 100 plastic surgeries!", 7, 1.7, 0.8, 3, ""); }
            else if (AchEightTier == 4) { addAchiements("Plastic1", "Barbie Doll", "Get 200 plastic surgeries!", 7, 1.7, 0.8, 4, ""); }
            else if (AchEightTier == 5) { addAchiements("Plastic1", "Barbie Doll", "Get 500 plastic surgeries!", 7, 1.7, 0.8, 5, ""); }
            else if (AchEightTier == 6) { addAchiements("Plastic1", "Barbie Doll", "Done!", 7, 1.9, 1, 6, "on"); }
            checker();
        }
    }


    //Show Achievements
    function achievements() {
        if (document.getElementById("achievements").style.left == "105%") {
            document.getElementById("ShopSide").style.left = "105%";
            document.getElementById("achievements").style.left = "0%";
        }
        else if (document.getElementById("ShopSide").style.left !== "105%") {
            document.getElementById("ShopSide").style.left = "105%";
            document.getElementById("achievements").style.left = "0%";
        }
        else {
            document.getElementById("ShopSide").style.left = "0%";
            document.getElementById("achievements").style.left = "0%";
        }
    }