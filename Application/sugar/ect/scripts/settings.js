// .d8888b.           888    888    d8b                            
//d88P  Y88b          888    888    Y8P                            
//Y88b.               888    888                                   
// "Y888b.    .d88b.  888888 888888 888 88888b.   .d88b.  .d8888b  
//    "Y88b. d8P  Y8b 888    888    888 888 "88b d88P"88b 88K      
//      "888 88888888 888    888    888 888  888 888  888 "Y8888b. 
//Y88b  d88P Y8b.     Y88b.  Y88b.  888 888  888 Y88b 888      X88 
// "Y8888P"   "Y8888   "Y888  "Y888 888 888  888  "Y88888  88888P' 
//                                                    888          
//                                               Y8b d88P          
//                                                "Y88P"

    //Reset game
    function resetAll() {
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
        location.reload();
    }

    //Show options
    function options() {
        if (document.getElementById("settings").style.right == "105%") {
            document.getElementById("inventory").style.right = "105%";
            document.getElementById("settings").style.right = "0%";
        }
        else if (document.getElementById("inventory").style.right !== "105%") {
            document.getElementById("inventory").style.right = "105%";
            document.getElementById("settings").style.right = "0%";
        }
        else {
            document.getElementById("inventory").style.right = "0%";
            document.getElementById("settings").style.right = "0%";
        }
    }
    var down = false;

    //Rangeslider
    var rangeSlider = function () {
        var slider = $('.range-slider'),
            range = $('.range-slider__range'),
            value = $('.range-slider__value');

        slider.each(function () {

            value.each(function () {
                var value = $(this).prev().attr('value');
                $(this).html(value + " sec");
            });

            range.on('input', function () {
                $(this).next(value).html(this.value + " sec");
            });
        });
    };
    rangeSlider();

    //Autosave
    function autosave() {
        var autoSek = 1000 * document.getElementById('RangeAutoSave').value;
        cookies();
        setTimeout(autosave, autoSek)
    }