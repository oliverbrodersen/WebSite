const mainText = ["Folder","Websites", "Small Websites","Renders","Pixel Art","Other"];
const largeText = ["Website","ToDo list", "Sugar Daddy Clicker", "Cube Timer", "Tove Sand", "VIA Exam program", "Back"];
const largeContent = ["URL", "http://oliver-brodersen.com/Application/todo/", "http://oliver-brodersen.com/Application/sugar/", "http://oliver-brodersen.com/Application/cube/", "http://oliver-brodersen.com/Application/tovesand/main.html", "http://oliver-brodersen.com/Application/VIA/"];
const smallText = ["Website","Satanic", "Outrun", "Shooter", "Custom", "Snaky", "Color picker", "Back"];
const smallContent = ["URL", "http://oliver-brodersen.com/Application/satanic/", "http://oliver-brodersen.com/Application/outrun/", "http://oliver-brodersen.com/Application/shoot/", "http://oliver-brodersen.com/Application/custom/", "http://oliver-brodersen.com/Application/move/", "http://oliver-brodersen.com/Application/color/"];
const otherText = ["Folder","Pictures", "Videos", "Back"];
const pixelArtText = ["Image","house.png", "sky.png", "text.png", "stivert.png"];
const pic3dText = ["Image","mountain.jpg", "slice.jpg","sunset.jpg", "forrest.jpg", "dog.jpg"];
const picText = ["Image", "setup.png","pork.jpg",  "cube.jpg"];
let currentView = "Main";
let lastView = "";
let path = [];
window.onload = function () {
    loadMenu(currentView);

    $(document).keyup(function(e) {
        if (e.keyCode === 27) $('#media').remove();   // esc
    });
};

function loadMenu(type) {
    let menu = [];
    let content = [];
    let pathText = "";
    let onClick = "";

    type = type.trim();

    if (type === "back"){
        path.pop();
        type = path[path.length - 1];
    }
    else if(type.trim() === "Main"){
        path = ["Main"];
    }
    else{
        path.push(type);
    }
    pathText = "<span class=\"link\" onclick='loadMenu(\"Main\")' > " + path[0] + "</span>";
    for (let i = 1; i < path.length; i++) {
        pathText += " > " + "<span class=\"link\" onclick='loadMenu(\" " + path[i] + "\")'>" + path[i] + "</span>";
        if (path[i] === type)
            break;
    }

    switch (type) {
        case "Main": menu = mainText; break;
        case "Websites": menu = largeText; content = largeContent; break;
        case "Small Websites": menu = smallText; content = smallContent ; break;
        case "Other": menu = otherText; break;
        case "Pixel Art": menu = pixelArtText; break;
        case "Pictures": menu = picText; break;
        case "Renders": menu = pic3dText; break;
    }
    $("#path").text("").append(pathText);

    lastView = currentView;
    $("#consoleContent").text("");
    if (menu.length === 0){
        $("#consoleContent").append("<button class='item' onclick='loadMenu( &#34 back &#34;)'> > Back</button>").append("<div id='empty'>Empty</div>");
    }

    switch (menu[0]) {
        case "Folder":
        case "Website":
            //Folder generation
            for (let i = 1; i < menu.length; i++) {
                setTimeout(
                    function()
                    {
                        if (menu[0] === "Folder" || menu[i] === "Back")
                            onClick = "loadMenu( &#34" + ((menu[i] === "Back") ? "back" : menu[i]) + "&#34;)";
                        else
                            onClick = "openInNewTab(&#34" + content[i] + "&#34)";
                        $("#consoleContent").append("<button class='item' onclick='" + onClick + "'> > " + menu[i] + "</button>");
                    }, 100 * (i + 1));
            }
            break;
        case "Image":
            //Generate Images
            for (let i = 1; i < menu.length; i++) {
                $("#consoleContent").append("<img src=\"content/images/" + menu[i] + "\" onclick='openMedia(\"Image\", \"" + menu[i] + "\")'/>");
            }
            //Back button
            $("#consoleContent").append("<div class='back' onclick='loadMenu(\"back\")'>Back</div>");
            break;
    }

    currentView = type;
}

function openInNewTab(url) {
    const win = window.open(url, '_blank');
    win.focus();
}

function openMedia(type, url){
    if (type === "Image"){
        $('#media').remove();
        $("#console").after(
            "<div id=\"media\">\n" +
            "    <div id=\"header\">\n" +
            "        ../images/" + url + "\n" +
            "        <div class=\"close\" onclick=\"$('#media').remove()\">✕</div>\n" +
            "    </div>\n" +
            "    <img src=\"content/images/" + url + "\">\n" +
            "</div>")
    }
}