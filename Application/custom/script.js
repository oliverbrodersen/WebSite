// JavaScript source code
var w = window.innerWidth;
var h = window.innerHeight;
function scale() {

}
$(window).resize(function () {
    //align everything to center on load
    scale();
});
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
var timeout = setInterval(load, 1000);
var dot = "";
function load(){
    if (dot == ".")
        dot = "..";
    else if (dot == "..")
        dot = "...";
    else if (dot == "...")
        dot = "";
    else
        dot = ".";
    document.getElementById("loading").innerHTML = "Loading" + dot;
}
function htmlEntities(str) {
    return String(str)
             .replace(/&/g, '&amp;')   // & -> &amp;
             .replace(/</g, '&lt;')    // < -> &lt;
             .replace(/>/g, '&gt;')    // > -> &gt;
             .replace(/"/g, '&quot;'); // " -> &quot;
}
$(document).ready(function () {
    var video = document.getElementById("video");
    if (video.readyState === 0) {
        document.getElementById("video").style.height = w * 0.274 + "px";
        document.getElementById("video").style.width = w * 0.439 + "px";
        document.getElementById("video").style.left = (w - (w * 0.439)) / 2 + "px";
        document.getElementById("video").style.top = (h - (w * 0.274)) / 2 + "px";
        playAninm();
        clearInterval(timeout);
        //Check URL for params
        scale();

        //Create powerbank on canvas
        var cw = w * 0.328;
        var ch = w * 0.194
        var img = document.getElementById("powerbankImg");


        //Make on load text
        var OverSkrift = document.createElement("div");
        OverSkrift.id = "OverSkrift";
        OverSkrift.style.top = "144.995px";

        var UnderSkrift = document.createElement("div");
        UnderSkrift.id = "UnderSkrift";
        UnderSkrift.style.top = "203px";

        var str = document.getElementById("sizeUnder").value;
        str = str.slice(0, -2);
        UnderSkrift.style.lineHeight = str * 0.8 + "px";

        var str = document.getElementById("sizeOver").value;
        str = str.slice(0, -2);
        OverSkrift.style.lineHeight = str * 0.8 + "px";

        //append
        document.getElementById("canvasText").appendChild(UnderSkrift);
        document.getElementById("canvasText").appendChild(OverSkrift);

        checkURL();
        //Detect updates
        //Over
        //Text
        $('#textOver').keyup(function () {
            OverSkrift.innerHTML = htmlEntities(document.getElementById("textOver").value);
        });
        //Font
        $('#fontOver').change(function () {
            OverSkrift.style.fontFamily = document.getElementById("fontOver").value;
        });
        //Size
        $('#sizeOver').keyup(function () {
            var str = document.getElementById("sizeOver").value;
            str = str.slice(0, -2);
            OverSkrift.style.fontSize = str + "px";
            OverSkrift.style.lineHeight = str * 0.8 + "px";
        });

        //Under
        //Text
        $('#textUnder').keyup(function () {
            UnderSkrift.innerHTML = htmlEntities(document.getElementById("textUnder").value);
        });
        //Font
        $('#fontUnder').change(function () {
            UnderSkrift.style.fontFamily = document.getElementById("fontUnder").value;
        });
        //Size
        $('#sizeUnder').keyup(function () {
            var str = document.getElementById("sizeUnder").value;
            str = str.slice(0, -2);
            UnderSkrift.style.fontSize = str + "px";
            UnderSkrift.style.lineHeight = str * 0.8 + "px";
        });
    }
});
function checkURL() {
    var overTextURL = getUrlParameter('otu');
    var overSizeURL = getUrlParameter('osu');
    var overFontURL = getUrlParameter('ofu');
    var overPosURL = getUrlParameter('opu');

    var underTextURL = getUrlParameter('utu');
    var underSizeURL = getUrlParameter('usu');
    var underFontURL = getUrlParameter('ufu');
    var underPosURL = getUrlParameter('upu');

    var OverSkrift = document.getElementById("OverSkrift");
    var UnderSkrift = document.getElementById("UnderSkrift");
    //Create innerHTML top

    if (overTextURL == undefined) {
        OverSkrift.innerHTML = htmlEntities(document.getElementById("textOver").value);
    }
    else {
        OverSkrift.innerHTML = htmlEntities(overTextURL);
        document.getElementById("textOver").value = htmlEntities(overTextURL);
    }
    //Create size top
    if (overSizeURL == undefined) {
        //OverSkrift.style.fontSize = document.getElementById("sizeOver").value;
    }
    else {
        //OverSkrift.style.fontSize = overSizeURL + "px";
        //document.getElementById("sizeOver").value = overSizeURL + "px";
    }
    //Create top top
    if (overPosURL == undefined) {
        OverSkrift.style.top = 144.995 * 0.151 + "%";
    }
    else {
        OverSkrift.style.top = overPosURL * 0.151 + "%";
    }
    //Create font top
    if (overFontURL == undefined) {
        OverSkrift.style.fontFamily = document.getElementById("fontOver").value;
    }
    else {
        var fontURL;
        if (overFontURL == "1")
            fontURL = "'Times New Roman'"
        else if (overFontURL == "2")
            fontURL = "'Boogaloo', cursive"
        else if (overFontURL == "3")
            fontURL = "'Lobster Two', cursive"
        else if (overFontURL == "4")
            fontURL = "'Pacifico', cursive"
        else if (overFontURL == "5")
            fontURL = "'Josefin Sans', sans-serif"
        else if (overFontURL == "6")
            fontURL = "'Inconsolata', monospace"
        else if (overFontURL == "7")
            fontURL = "'Hind', sans-serif"
        OverSkrift.style.fontFamily = fontURL;
        document.getElementById("fontOver").value = fontURL;
    }


    //Create innerHTML under
    if (underTextURL == undefined) {
        UnderSkrift.innerHTML = htmlEntities(document.getElementById("textUnder").value);
    }
    else {
        UnderSkrift.innerHTML = htmlEntities(underTextURL);
        document.getElementById("textUnder").value = htmlEntities(underTextURL);
    }
    //Create size under
    if (underSizeURL == undefined) {
        UnderSkrift.style.fontSize = document.getElementById("sizeUnder").value;
    }
    else {
        UnderSkrift.style.fontSize = underSizeURL + "px";
        document.getElementById("sizeUnder").value = underSizeURL + "px";
    }
    //Create top under
    if (underPosURL == undefined) {
        UnderSkrift.style.top = "203px";
    }
    else {
        UnderSkrift.style.top = underPosURL + "px";
    }
    //Create font under
    if (underFontURL == undefined) {
        UnderSkrift.style.fontFamily = document.getElementById("fontUnder").value;
    }
    else {
        var fontURL;
        if (underFontURL == "1")
            fontURL = "'Times New Roman'"
        else if (underFontURL == "2")
            fontURL = "'Boogaloo', cursive"
        else if (underFontURL == "3")
            fontURL = "'Lobster Two', cursive"
        else if (underFontURL == "4")
            fontURL = "'Pacifico', cursive"
        else if (underFontURL == "5")
            fontURL = "'Josefin Sans', sans-serif"
        else if (underFontURL == "6")
            fontURL = "'Inconsolata', monospace"
        else if (underFontURL == "7")
            fontURL = "'Hind', sans-serif"

        UnderSkrift.style.fontFamily = fontURL;
        document.getElementById("fontUnder").value = fontURL;
    }
}
function generateURL() {
    if (document.getElementById("url").style.height !== "200px") {
        if (move = true)
            mover();
        var baseUrl = "http://astrapitech.com/custom/";
        //Size
        var osu = document.getElementById("sizeOver").value;
        osu = osu.slice(0, -2);
        //Font
        var ofu;
        if (document.getElementById("fontOver").value == "'Times New Roman'")
            ofu = "1";
        else if (document.getElementById("fontOver").value == "'Boogaloo', cursive")
            ofu = "2";
        else if (document.getElementById("fontOver").value == "'Lobster Two', cursive")
            ofu = "3";
        else if (document.getElementById("fontOver").value == "'Pacifico', cursive")
            ofu = "4";
        else if (document.getElementById("fontOver").value == "'Josefin Sans', sans-serif")
            ofu = "5";
        else if (document.getElementById("fontOver").value == "'Inconsolata', monospace")
            ofu = "6";
        else if (document.getElementById("fontOver").value == "'Hind', sans-serif")
            ofu = "7";
        //Text
        var otu = document.getElementById("textOver").value;
        //Position
        var opu = document.getElementById("OverSkrift").style.top;
        opu = opu.slice(0, -2);


        //Size
        var usu = document.getElementById("sizeUnder").value;
        usu = usu.slice(0, -2);
        //Font
        var ufu;
        if (document.getElementById("fontUnder").value == "'Times New Roman'")
            ufu = "1";
        else if (document.getElementById("fontUnder").value == "'Boogaloo', cursive")
            ufu = "2";
        else if (document.getElementById("fontUnder").value == "'Lobster Two', cursive")
            ufu = "3";
        else if (document.getElementById("fontUnder").value == "'Pacifico', cursive")
            ufu = "4";
        else if (document.getElementById("fontUnder").value == "'Josefin Sans', sans-serif")
            ufu = "5";
        else if (document.getElementById("fontUnder").value == "'Inconsolata', monospace")
            ufu = "6";
        else if (document.getElementById("fontUnder").value == "'Hind', sans-serif")
            ufu = "7";
        //Text
        var utu = document.getElementById("textUnder").value;
        //Position
        var upu = document.getElementById("UnderSkrift").style.top;
        upu = upu.slice(0, -2);

        document.getElementById("url").style.height = "200px";
        var urlLink = baseUrl + "?otu=" + otu + "&osu=" + osu + "&ofu=" + ofu + "&opu=" + opu + "&utu=" + utu + "&usu=" + usu + "&ufu=" + ufu + "&upu=" + upu;
        document.getElementById("urlOutput").value = urlLink;
        document.getElementById("urlOutput").autofocus;
    }
    else {
        document.getElementById("url").style.height = "150px";
    }
}
var move = false;
var contrastInt;
function mover() {
    if (!move) {
        $("#UnderSkrift").draggable({
            disabled: false,
            axis: "y",
            containment: "parent"
        });
        $("#OverSkrift").draggable({
            disabled: false,
            axis: "y",
            containment: "parent"
        });
        if (typeof imageDisplayFilter == 'object') {
            $("#contFilter").draggable({
                disabled: false,
                containment: "parent"
            });
        }
        document.getElementById("move").style.backgroundImage = "url('img/move_a.png')";
        document.getElementById("UnderSkrift").style.marginTop = "0";
        document.getElementById("UnderSkrift").style.marginBottom = "0";
        document.getElementById("UnderSkrift").style.borderBottomWidth = "2px";
        document.getElementById("UnderSkrift").style.borderTopWidth = "2px";
        document.getElementById("UnderSkrift").style.cursor = "move";

        document.getElementById("OverSkrift").style.marginTop = "0";
        document.getElementById("OverSkrift").style.marginBottom = "0";
        document.getElementById("OverSkrift").style.borderBottomWidth = "2px";
        document.getElementById("OverSkrift").style.borderTopWidth = "2px";
        document.getElementById("OverSkrift").style.cursor = "move";

        document.getElementById("contFilter").style.marginBottom = "0";
        document.getElementById("contFilter").style.borderWidth = "2px";
        document.getElementById("contFilter").style.cursor = "move";

        document.getElementById("nwgrip").style.opacity = "1";
        document.getElementById("negrip").style.opacity = "1";
        document.getElementById("swgrip").style.opacity = "1";
        document.getElementById("segrip").style.opacity = "1";
        document.getElementById("ngrip").style.opacity = "1";
        document.getElementById("egrip").style.opacity = "1";
        document.getElementById("sgrip").style.opacity = "1";
        document.getElementById("wgrip").style.opacity = "1";
        move = true;
    }
    else {

        $("#UnderSkrift").draggable({
            disabled: true,
            axis: "y",
            containment: "parent"
        });
        $("#OverSkrift").draggable({
            disabled: true,
            axis: "y",
            containment: "parent"
        });

        if (typeof imageDisplayFilter == 'object') {
            $("#contFilter").draggable({
                disabled: true,
                containment: "parent"
            });
        }
        document.getElementById("move").style.backgroundImage = "url('img/move_in.png')";
        document.getElementById("UnderSkrift").style.marginTop = "2px";
        document.getElementById("UnderSkrift").style.marginBottom = "2px";
        document.getElementById("UnderSkrift").style.borderBottomWidth = "0";
        document.getElementById("UnderSkrift").style.borderTopWidth = "0";
        document.getElementById("OverSkrift").style.marginTop = "2px";
        document.getElementById("OverSkrift").style.marginBottom = "2px";
        document.getElementById("OverSkrift").style.borderBottomWidth = "0";
        document.getElementById("OverSkrift").style.borderTopWidth = "0";
        document.getElementById("OverSkrift").style.cursor = "";
        document.getElementById("UnderSkrift").style.cursor = "";
        document.getElementById("contFilter").style.marginBottom = "2px";
        document.getElementById("contFilter").style.borderWidth = "0";
        document.getElementById("contFilter").style.cursor = "";


        document.getElementById("nwgrip").style.opacity = "0";
        document.getElementById("negrip").style.opacity = "0";
        document.getElementById("swgrip").style.opacity = "0";
        document.getElementById("segrip").style.opacity = "0";
        document.getElementById("ngrip").style.opacity = "0";
        document.getElementById("egrip").style.opacity = "0";
        document.getElementById("sgrip").style.opacity = "0";
        document.getElementById("wgrip").style.opacity = "0";
        move = false;
    }
}
function retry() {
    var variable = document.getElementById("bgDiscard");
    if (typeof bgDiscard !== 'object') {
        var bg = document.createElement("div");
        bg.style.height = "280px";
        bg.style.width = "750px";
        bg.style.backgroundColor = "white";
        bg.style.position = "absolute";
        bg.style.zIndex = "101";
        bg.style.left = ( w - 750) / 2 + "px";
        bg.id = "bgDiscard";
        var dis = document.createElement("div");
        dis.innerHTML = "Sure you wanna discard your work?";
        dis.id = "Discard";

        var nope = document.createElement("button");
        nope.innerHTML = "No";
        nope.id = "buttonNo";
        nope.onclick = function () { deleteAlert(bg); };

        var yep = document.createElement("button");
        yep.innerHTML = "Yeah";
        yep.id = "buttonYes";
        yep.onclick = function () { retryTrue(); bg.remove(); if (move) { mover(); }; };



        //append stuff
        document.getElementsByTagName('body')[0].appendChild(bg);
        bg.appendChild(dis);
        bg.appendChild(nope);
        bg.appendChild(yep);

        setTimeout(moveThis, 1);
    }
}
function img() {
    if (typeof imageDisplayFilter !== 'object') {
        if (typeof bgDiscard !== 'object') {
            var bg = document.createElement("div");
            bg.style.height = "280px";
            bg.style.width = "750px";
            bg.style.backgroundColor = "white";
            bg.style.position = "absolute";
            bg.style.zIndex = "101";
            bg.style.left = (w - 750) / 2 + "px";
            bg.id = "bgDiscard";
            var dis = document.createElement("div");
            dis.innerHTML = "Insert image URL";
            dis.id = "Discard";

            var url = document.createElement("input");
            url.type = "input";
            url.placeholder = ".png or .jpg files only";
            url.id = "urlInput";

            var urlCont = document.createElement("div");
            urlCont.id = "urlCont";

            var x = document.createElement("h2");
            x.innerHTML = "x";
            x.onclick = function () { deleteAlert(bg); };

            document.getElementsByTagName('body')[0].appendChild(bg);
            bg.appendChild(dis);
            bg.appendChild(urlCont);
            bg.appendChild(x);
            urlCont.appendChild(url);

            $('#urlInput').keyup(function () {
                imageFunc();
            });

            setTimeout(moveThis, 1);
        }
    }
    else {
        if (typeof bgDiscard !== 'object') {
            var bg = document.createElement("div");
            bg.style.height = "280px";
            bg.style.width = "750px";
            bg.style.backgroundColor = "white";
            bg.style.position = "absolute";
            bg.style.zIndex = "101";
            bg.style.left = (w - 750) / 2 + "px";
            bg.id = "bgDiscard";
            var dis = document.createElement("div");
            dis.innerHTML = "Insert image URL";
            dis.id = "Discard";

            var url = document.createElement("input");
            url.type = "input";
            url.placeholder = ".png or .jpg files only";
            url.id = "urlInput";
            url.value = document.getElementById("imageDisplayFilter").src;

            var urlCont = document.createElement("div");
            urlCont.id = "urlCont";

            var x = document.createElement("h2");
            x.innerHTML = "x";
            x.onclick = function () { deleteAlert(bg); };

            document.getElementsByTagName('body')[0].appendChild(bg);
            bg.appendChild(dis);
            bg.appendChild(urlCont);
            bg.appendChild(x);
            urlCont.appendChild(url);
            document.getElementById("contFilter").remove();

            $('#urlInput').keyup(function () {
                imageFunc();
            });

            imageFunc();

        }
    }
}
function imageFunc() {
    if (typeof validURL !== 'object') {
        var valid = document.createElement("div");
        valid.id = "validURL";
        valid.innerHTML = "Checking";

        document.getElementById("bgDiscard").appendChild(valid);
    }
    runImage(document.getElementById("urlInput").value);
}
function testImage(url, timeoutT) {
    return new Promise(function (resolve, reject) {
        var timeout = timeoutT || 5000;
        var timer, img = new Image();
        img.onerror = img.onabort = function () {
            clearTimeout(timer);
            reject("error");
        };
        img.onload = function () {
            clearTimeout(timer);
            resolve("valid");
        };
        timer = setTimeout(function () {
            // reset .src to invalid URL so it stops previous
            // loading, but doens't trigger new load
            img.src = "//!!!!/noexist.jpg";
            reject("timeout");
        }, timeout);
        img.src = url;
    });
}
function record(url, result) {
    if (result == "valid") {
        document.getElementById("validURL").innerHTML = "Valid Url";
        document.getElementById("validURL").className = "valid";
        validUrl(url);
    }
    else if (result == "error"){
        document.getElementById("validURL").innerHTML = "invalid Url";
        document.getElementById("validURL").className = "invalid";
    }
    else if (result == "timeout") {
        document.getElementById("validURL").innerHTML = "Timeout";
        document.getElementById("validURL").className = "invalid";
    }
}
function runImage(url) {
    testImage(url).then(record.bind(null, url), record.bind(null, url));
}
function validUrl(url) {
    if (typeof imageDisplay !== 'object') {
        var imageDisplayed = document.createElement("img");
        imageDisplayed.id = "imageDisplay";
        imageDisplayed.src = url;

        var imageDisplayedFilter = document.createElement("img");
        imageDisplayedFilter.id = "imageDisplayFilter";
        imageDisplayedFilter.src = url;

        var contrastSlider = document.createElement("input");
        contrastSlider.type = "range";
        contrastSlider.className = "contrast";
        contrastSlider.id = "contrast";
        contrastSlider.min = "0";
        contrastSlider.max = "5";
        if (contrastInt !== "")
            contrastSlider.value = contrastInt;
        else
            contrastSlider.value = "1";
        contrastSlider.step = "0.1";

        contrastSlider.addEventListener('change', contrastFunc);
        contrastSlider.addEventListener('mousemove', contrastFunc);

        var submitImg = document.createElement("input");
        submitImg.type = "button";
        submitImg.id = "buttonSub";
        submitImg.onclick = function () { subImgFunc(imageDisplayedFilter); };
        submitImg.value = "Add image";

        document.getElementById("bgDiscard").style.height = "550px";
        document.getElementById("bgDiscard").style.top = (h - 550) / 2 + "px";
        document.getElementById("bgDiscard").appendChild(imageDisplayed);
        document.getElementById("bgDiscard").appendChild(imageDisplayedFilter);
        document.getElementById("bgDiscard").appendChild(submitImg);
        document.getElementById("bgDiscard").appendChild(contrastSlider);
        contrastFunc();
    }
    else {
        document.getElementById("imageDisplay").src = url;
        document.getElementById("imageDisplayFilter").src = url;
    }
}

function contrastFunc() {
    contrastInt = document.getElementById("contrast").value;
    document.getElementById("imageDisplayFilter").style.filter = "brightness(" + document.getElementById("contrast").value + ") grayscale(100%) contrast(100000)";
}

function subImgFunc(img) {
    var contFilter = document.createElement("div");
    contFilter.style.height = img.height + "px";
    contFilter.style.width = img.width + "px";
    contFilter.id = "contFilter";

    document.getElementById("canvasText").appendChild(contFilter);
    contFilter.appendChild(img);
    handles("nw", contFilter);
    handles("ne", contFilter);
    handles("sw", contFilter);
    handles("se", contFilter);
    handles("n", contFilter);
    handles("e", contFilter);
    handles("s", contFilter);
    handles("w", contFilter);

    img.style.filter += "brightness(83%) opacity(0.19)";
    img.style.boxShadow = "none";
    img.style.top = "0";
    img.style.left = "0";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.maxWidth = "unset";
    img.style.maxHeight = "unset";

    deleteAlert(document.getElementById("bgDiscard"));

    mover();
    $('#contFilter').resizable({
        handles: {
            'nw': '#nwgrip',
            'ne': '#negrip',
            'sw': '#swgrip',
            'se': '#segrip',
            'n': '#ngrip',
            'e': '#egrip',
            's': '#sgrip',
            'w': '#wgrip'
        },
        maxHeight: 376,
        maxWidth: 662,
    });

}
function handles(x, cont) {
    var handle = document.createElement("div");
    handle.id = x + "grip";
    handle.className = "ui-resizable-handle ui-resizable-" + x;
    cont.appendChild(handle);
}
function moveThis(info) {
    if (info)
        document.getElementById("bgDiscard").style.top = (h - 580) / 2 + "px";
    else
        document.getElementById("bgDiscard").style.top = (h - 280) / 2 + "px";
}
function infos() {
    if (typeof bgDiscard !== 'object') {

        var bg = document.createElement("div");
        bg.style.height = "580px";
        bg.style.width = "750px";
        bg.style.backgroundColor = "white";
        bg.style.position = "absolute";
        bg.style.zIndex = "101";
        bg.style.left = (w - 750) / 2 + "px";
        bg.id = "bgDiscard";
        var dis = document.createElement("div");
        dis.innerHTML = "What is this?";
        dis.id = "Discard";

        var tezt = document.createElement("div");
        tezt.id = "what";
        tezt.innerHTML = "The ZEUS Powerbank <i>Design suite</i> is the place to design your own custom hybrid power bank. The ZEUS Powerbank is already a unique piece og hardware. Using the newest technology it is able to charge up to a full days' worth of battery in just 5 minutes. However, we what to make it fully unique. Giving you the opportunity to make it say anything. <br/>Unfortunately the power bank isn't ready for production yet. But you can follow the progress on our Facebook and website.";

        var x = document.createElement("h2");
        x.innerHTML = "x";
        x.onclick = function () { deleteAlert(bg); };

        var facebook = document.createElement("a");
        facebook.id = "facebookLink";
        facebook.href = "https://www.facebook.com/AstrapiTech/";
        facebook.innerHTML = "/AstrapiTech";


        var web = document.createElement("a");
        web.id = "webLink";
        web.href = "http://astrapitech.com/";
        web.innerHTML = "astrapitech.com";

        //append stuff
        document.getElementsByTagName('body')[0].appendChild(bg);
        bg.appendChild(dis);
        bg.appendChild(tezt);
        bg.appendChild(x);
        bg.appendChild(facebook);
        bg.appendChild(web);

        setTimeout(moveThis, 1, true);
    }
}
function deleteAlert(obj) {
    obj.style.top = h + "px";
    setTimeout(deleteAlertII, 600, obj);
}
function deleteAlertII(obj) {
    obj.remove();
}
function retryTrue() {
    document.getElementById("OverSkrift").style.fontFamily = "'Times New Roman'";
    document.getElementById("OverSkrift").style.fontSize = "78px";
    document.getElementById("OverSkrift").style.top = "144.995px";
    document.getElementById("OverSkrift").innerHTML = "ZEUS";
    document.getElementById("OverSkrift").style.lineHeight = 78 * 0.8 + "px";

    document.getElementById("UnderSkrift").style.fontFamily = "'Times New Roman'";
    document.getElementById("UnderSkrift").style.fontSize = "30px";
    document.getElementById("UnderSkrift").style.top = "203px";
    document.getElementById("UnderSkrift").innerHTML = "POWERBANK";
    document.getElementById("UnderSkrift").style.lineHeight = 30 * 0.8 + "px";
}
function save() {
    //document.getElementById("canvasText").style.visibility = "hidden";
    //Get canvas
    var canvas = document.getElementById("powerbank");
    var ctx = canvas.getContext("2d");
    //Overskrift
    ctx.font = document.getElementById("sizeOver").value + " " + document.getElementById("fontOver").value;
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    //Størrelse
    var str = document.getElementById("sizeOver").value;
    str = str.slice(0, -2);
    var osu = document.getElementById("OverSkrift").style.top;
    osu = parseInt(osu.slice(0, -2)) + 29;
    //Se text
    ctx.fillText(document.getElementById("textOver").value, canvas.width / 2, osu);

    //Overskrift
    ctx.font = document.getElementById("sizeUnder").value + " " + document.getElementById("fontUnder").value;
    ctx.fillStyle = "red";
    //Størrelse
    var str = document.getElementById("sizeUnder").value;
    str = str.slice(0, -2);
    var usu = document.getElementById("UnderSkrift").style.top;
    usu = parseInt(usu.slice(0, -2)) + 29;
    //Se text
    ctx.fillText(document.getElementById("textUnder").value, canvas.width / 2, usu);

}
function playAninm() {
    document.getElementById("video").play();
    setTimeout(animI, 1000);
}
function animI() {
    document.getElementById("loadScreen").style.opacity = "0";
    document.getElementById("powerbankImg").style.opacity = "1";
    document.getElementById("logo").style.opacity = "1";
    document.getElementById("foot").style.opacity = "1";
    document.getElementById("tools").style.opacity = "1";
    document.getElementById("info").style.opacity = "1";
    document.getElementById("canvasText").style.opacity = "1";
    document.getElementById("url").style.opacity = "1";
    setTimeout(animII, 2000);
}
function animII(){
    document.getElementById("loadScreen").remove();
    document.getElementById("video").style.opacity = "0";
    setTimeout(animIII, 1000);
}
function animIII() {
    document.getElementById("video").remove();

}