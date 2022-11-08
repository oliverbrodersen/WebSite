// JavaScript source code
var imagesInfo = [],
    historyA = [];

$(document).ready(function () {
    if (getAllUrlParams().page == undefined) {
        imgLib("lib");
        historyA.push({ site: "lib" });
    }
    else {
        historyA.push({ site: getAllUrlParams().page });
        imgLib(getAllUrlParams().page);
    }
});
function getAllUrlParams(url) {
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    var obj = {};
    if (queryString) {
        queryString = queryString.split('#')[0];
        var arr = queryString.split('&');
        for (var i = 0; i < arr.length; i++) {
            var a = arr[i].split('=');
            var paramName = a[0];
            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
            paramName = paramName.toLowerCase();
            if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();
            if (paramName.match(/\[(\d+)?\]$/)) {
                var key = paramName.replace(/\[(\d+)?\]/, '');
                if (!obj[key]) obj[key] = [];
                if (paramName.match(/\[\d+\]$/)) {
                    var index = /\[(\d+)\]/.exec(paramName)[1];
                    obj[key][index] = paramValue;
                } else {
                    obj[key].push(paramValue);
                }
            } else {
                if (!obj[paramName]) {
                    obj[paramName] = paramValue;
                } else if (obj[paramName] && typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                    obj[paramName].push(paramValue);
                } else {
                    obj[paramName].push(paramValue);
                }
            }
        }
    }
    return obj;
}
function imgLib(file) {
    if (historyA.length < 2)
        document.getElementById("back").style.visibility = "hidden";
    else
        document.getElementById("back").style.visibility = "visible";

    //Get images
    $.get('archive/lists/' + file + '.txt', function (data) {
        //Splits for each line
        var imgCount = data.split('\n');
        //Logs how many lines
        for (var i = 0; i < imgCount.length; i++) {
            //Splits line for each comma
            var imgInfo = imgCount[i].split('#');
            if (imgInfo[0] == "CATAGORY") {

                imagesInfo.push({ navn: imgInfo[2], file: imgInfo[1], des: imgInfo[3], kat: "Catagory", dato: "", filnavn: imgInfo[1], type: "png" });

                //Lav knappen
                var but = document.createElement("input");
                but.type = "image";
                //Lav et billede for at finde dimentionerne p[ billedet
                var imgg = document.createElement("img");
                var imgUrl = "assets/img/" + imgInfo[1] + ".png";
                imgg.src = imgUrl;
                but.value = i;
                //Juster ratioen
                var imageHeight = 10;
                var fac = imageHeight / imgg.height;
                var imageWidth = imgg.width * fac;
                //sidste detaljer
                but.src = imgUrl;
                but.style.height = imageHeight + "em";
                but.style.width = imageWidth + "em";
                but.className = "imgThump folder";
                but.id = "imgClass_" + imagesInfo[i].file;

                //lav en span om knappen
                var span = document.createElement("span");
                span.innerHTML = "</br>" + imagesInfo[i].navn;
                span.className = "spanImg";
                span.id = "span_" + imagesInfo[i].file;
                span.value = i;
                span.style.width = imageWidth + "em";
                var iVar = i;
                span.addEventListener('click', function () { imageFocus("span", this); }, false);
                span.addEventListener('dblclick', function () { folderOpen(imagesInfo[parseInt(this.value)].file); }, false);
                but.addEventListener('focus', function () { imageFocus("but", this); }, false);
                document.getElementById("libContent").appendChild(span);
                span.insertBefore(but, span.firstChild);
            }
            else if (imgInfo[0] == "FOLDER") {

                imagesInfo.push({ navn: imgInfo[2], file: imgInfo[1], des: imgInfo[3], kat: "Folder", dato: "", filnavn: "folder", type: "png"});

                //Lav knappen
                var but = document.createElement("input");
                but.type = "image";
                //Lav et billede for at finde dimentionerne p[ billedet
                var imgg = document.createElement("img");
                var imgUrl = "assets/img/lib.png";
                imgg.src = imgUrl;
                but.value = i;
                //Juster ratioen
                var imageHeight = 10;
                var fac = imageHeight / imgg.height;
                var imageWidth = imgg.width * fac;
                //sidste detaljer
                but.src = imgUrl;
                but.style.height = imageHeight + "em";
                but.style.width = imageWidth + "em";
                but.className = "imgThump folder";
                but.id = "imgClass_" + imagesInfo[i].file;

                //lav en span om knappen
                var span = document.createElement("span");
                span.innerHTML = "</br>" + imagesInfo[i].navn;
                span.className = "spanImg";
                span.id = "span_" + imagesInfo[i].file;
                span.value = i;
                span.style.width = imageWidth + "em";
                var iVar = i;
                span.addEventListener('click', function () { imageFocus("span", this); }, false);
                span.addEventListener('dblclick', function () {folderOpen(imagesInfo[parseInt(this.value)].file);}, false);
                but.addEventListener('focus', function () { imageFocus("but", this); }, false);
                document.getElementById("libContent").appendChild(span);
                span.insertBefore(but, span.firstChild);
            }
            else if (imgInfo[0] == "IMAGE"){
                //Foreach comma
                imagesInfo.push({ navn: imgInfo[1], des: imgInfo[2], kat: imgInfo[3], dato: imgInfo[4], filnavn: imgInfo[5], type: imgInfo[6], file: "other" });
                //Lav knappen
                var but = document.createElement("input");
                but.type = "image";
                //Lav et billede for at finde dimentionerne p[ billedet
                var imgg = document.createElement("img");
                var imgUrl = "archive/images/" + imagesInfo[i].filnavn + "." + imagesInfo[i].type;
                imgg.src = imgUrl;
                but.value = i;
                //Juster ratioen
                var imageHeight = 10;
                var fac = imageHeight / imgg.height;
                var imageWidth = imgg.width * fac;
                //sidste detaljer
                but.src = imgUrl;
                but.style.height = imageHeight + "em";
                but.style.width = imageWidth + "em";
                but.className = "imgThump";
                but.id = "imgClass_" + imagesInfo[i].filnavn;

                //lav en span om knappen
                var span = document.createElement("span");
                span.innerHTML = "</br>" + imagesInfo[i].navn;
                span.className = "spanImg";
                span.id = "span_" + imagesInfo[i].filnavn;
                span.value = i;
                span.style.width = imageWidth + "em";
                var iVar = i;
                span.addEventListener('click', function () { imageFocus("span", this); }, false);
                span.addEventListener('dblclick', function () { imageviewer(this); }, false);
                but.addEventListener('focus', function () { imageFocus("but", this); }, false);
                document.getElementById("libContent").appendChild(span);
                span.insertBefore(but, span.firstChild);
            }
        }
    });
}
function imageFocus(caseO, obj) {
    var i = obj.value;
    document.getElementById("nameHolder").innerHTML = "Name: <a>" + imagesInfo[i].navn + "</a>";
    document.getElementById("besHolder").innerHTML = "Description: <a>" + imagesInfo[i].des + "</a>";
    document.getElementById("katHolder").innerHTML = "Catagory: <a>" + imagesInfo[i].kat + "</a>";
    document.getElementById("datoHolder").innerHTML = "Date: <a>" + imagesInfo[i].dato + "</a>";

    var imgg = document.createElement("img");
    var imgUrl = "archive/images/" + imagesInfo[i].filnavn + "." + imagesInfo[i].type;
    imgg.src = imgUrl;
    var imageHeight = 6;
    var fac = imageHeight / imgg.height;
    var imageWidth = imgg.width * fac;

    document.getElementById("imgHolder").style.width = imageWidth + "em";
    document.getElementById("imgHolder").src = "archive/images/" + imagesInfo[i].filnavn + "." + imagesInfo[i].type;

    //document.getElementById("span_" + imagesInfo[i].file).focus();
}

var index = 9;
function topApp(obj) {
    index++;
    obj.style.zIndex = index;
}
function folderOpen(source) {
    historyA.push({ site: source });
    document.getElementById("libContent").innerHTML = "";
    imagesInfo = [];
    imgLib(source);
}
function backHistory() {
    folderOpen(historyA[historyA.length - 2].site);
    historyA.pop();
    historyA.pop();
    if (historyA.length < 2)
        document.getElementById("back").style.visibility = "hidden";
    else
        document.getElementById("back").style.visibility = "visible";
}
function imageviewer(obj) {
    var i = obj.value;
    if (typeof imageView !== 'object') {
        //container
        var cont = document.createElement("div");
        cont.id = "imageView";
        cont.addEventListener('click', function () { topApp(this); }, false);
        //header
        var header = document.createElement("div");
        header.id = "headerImgView";
        header.addEventListener('dblclick', function () { libMax('imageView'); }, false);
        cont.appendChild(header);
        //optionescontainer
        var menL = document.createElement("div");
        menL.className = "winCont";
        header.appendChild(menL);
        //minimize
        var min = document.createElement("input");
        min.className = "min";
        min.addEventListener('click', function () { libTog('imageView'); }, false);
        min.type = "button";
        min.value = "*";
        menL.appendChild(min);
        ///maximize
        var max = document.createElement("input");
        max.className = "max";
        max.addEventListener('click', function () { libMax('imageView'); }, false);
        max.type = "button";
        max.value = "*";
        menL.appendChild(max);
        //close
        var close = document.createElement("input");
        close.className = "close";
        close.addEventListener('click', function () { libClose('imageView'); }, false);
        close.type = "button";
        close.value = "*";
        menL.appendChild(close);
        //image
        var image = document.createElement("img");
        image.id = "imageFullScreen";
        image.src = "archive/images/" + imagesInfo[i].filnavn + "." + imagesInfo[i].type;
        cont.appendChild(image);
        //Next
        var next = document.createElement("input");
        next.type = "image";
        next.id = "next";
        next.src = "assets/img/next.png";
        next.addEventListener('click', function () { nextImgNext(i); }, false);
        cont.appendChild(next);
        //prev
        var prev = document.createElement("input");
        prev.type = "image";
        prev.id = "prev";
        prev.src = "assets/img/prew.png";
        prev.addEventListener('click', function () { prevImgPrev(i); }, false);
        cont.appendChild(prev);

        document.getElementById("bg").appendChild(cont);
        publicIndexImage = i;

        //Create icon
        var icon = document.createElement("div");
        icon.id = "imagePrevIcon";
        icon.className = "icon";
        icon.addEventListener('click', function () { libTog('imageView'); }, false);
        document.getElementById("procesbar").appendChild(icon);

        cont

        $("#imageView").draggable({
            handle: "#headerImgView",
            containment: "parent"
        }).resizable({
            handles: "se",
            containment: "parent"
        });
    }
    else {
        document.getElementById("imageFullScreen").src = "archive/images/" + imagesInfo[i].filnavn + "." + imagesInfo[i].type;
        document.getElementById("next").addEventListener('click', function () { nextImgNext(i); }, false);
        document.getElementById("prev").addEventListener('click', function () { prevImgPrev(i); }, false);
    }
}
function nextImgNext(i) {
    if (i == imagesInfo.length-1)
        i = 0;
    else
        i++;
    publicIndexImage = i;
    document.getElementById("imageFullScreen").src = "archive/images/" + imagesInfo[i].filnavn + "." + imagesInfo[i].type;
    document.getElementById("next").addEventListener('click', function () { nextImgNext(i); }, false);
    document.getElementById("prev").addEventListener('click', function () { prevImgPrev(i); }, false);
}
function prevImgPrev(i) {
    if (i == 0)
        i = imagesInfo.length-1;
    else
        i--;
    publicIndexImage = i;
    document.getElementById("imageFullScreen").src = "archive/images/" + imagesInfo[i].filnavn + "." + imagesInfo[i].type;
    document.getElementById("next").addEventListener('click', function () { nextImgNext(i); }, false);
    document.getElementById("prev").addEventListener('click', function () { prevImgPrev(i); }, false);
}
var publicIndexImage;
function keypress(e) {
    //Venstre
    if (e.keyCode == 37) {
        if (document.getElementById("imageView").style.zIndex == index) {
            prevImgPrev(publicIndexImage);
        }
        else
            console.log(document.getElementById("imageView").style.zIndex + " " + index);
    }
    //hojre
    else if (e.keyCode == 39) {
        if (document.getElementById("imageView").style.zIndex == index) {
            nextImgNext(publicIndexImage);
        }
    }

}