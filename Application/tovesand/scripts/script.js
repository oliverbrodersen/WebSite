// JavaScript source code
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("visits");
    if (user !== "sendt") {//hvis du ikke allerede har spurgt
        if (parseInt(user) >= 1) {
            if (parseInt(user) == 2 || parseInt(user) % 5 == 0) { //Hvis det er tredie gang eller hver 3. gang
                askHelp(); //Popup
                $(document).on('keydown', function (event) {//Hvis du trykker esc
                    if (event.keyCode == 27) {
                        document.getElementById("helpFormClose").onclick = "";
                        document.getElementById("helpFormSend").onclick = "";
                        document.getElementById('helpFormBG').remove();
                        $(document).off();//Disable checking for keypress
                    }
                });
            }
            user = parseInt(user) + 1; //Tilføj en til cookie
        }
        else 
            user = 1; 
    }
    setCookie("visits", user, 30); //Opdater cookie
}

$(document).ready(function () {
    var url = window.location.href; //Få url
    var urlLast = url.substr(url.length - 9); //Sidste 9 disgets
    if (urlLast == "vesand.dk" || urlLast == "main.html")
        checkCookie(); //Undersøg cookie
});

function askHelp() {
    document.getElementById("formHolder").innerHTML = '<div id="helpFormBG"><div id="helpForm"><div id="helpFormClose">x</div><div id="helpFormTO">Nogle sp&#248;rgsm&#229;l?</div><div id="helpFormTM"><br />Jeg kan se, at du har bes&#248;gt min side flere gange, og hvis du har nogle sp&#248;rgsm&#229;l skal du endeligt v&#230;re velkommen til at stille dem her! Du kan kontakte mig i feltet herunder:</div><form id="helpFormForm" action="https://formspree.io/brodersen88@gmail.com" method="POST"><input id="helpFormName" type="email" name="mail"><div id="helpFormLable">Din Email Adresse</div><input id="helpFormText" type="text" name="comment"><div id="helpFormLable">Din besked</div><input id="helpFormSend" type="submit" value="Send"><div id="helpFormLable" style="width: 100%; text-align: center;"> Din besked vil g&#229; direkte til mig og jeg vil svare s&#229; hurtigt jeg kan! </div></form></div></div>';
    document.getElementById("helpFormClose").onclick = function () { document.getElementById('helpFormBG').remove() };
    document.getElementById("helpFormSend").onclick = function () {
        setCookie("visits", "sendt", 30);
        setCookie("mail", document.getElementById("helpFormName").value, 365);
        setCookie("question", document.getElementById("helpFormText").value, 365);
    };
}

function qActivated() {
    var asked = false, mail, question;
    //find ud af om du har skrevet før
    if (getCookie("mail") !== "undefined") {
        asked = true;
        mail = getCookie("mail");
        question = getCookie("question");
    }

}