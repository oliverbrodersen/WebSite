const con = ["Stone", "Paper", "Scissor"], p = ["X","O"];
let yScore = 0, aiScore = 0, game = false, gameMode = 0, ready = true, tttMode, tttTurn, tttStarted = false, t = 1, x, gameOver = true, a, difficulty, score = {Bot:0,You:0};
//Stone = 0
//Paper = 1
//Scissor = 2
//Modal
function setGameMode(n) {
    if (n === 1 && gameMode !== 1 && ready){
        //Tic Tac Toe
        $("#tttText").text("1p or 2p").removeClass("invisible");
        $("#board").css("opacity","0.5");
        for (let x = 1; x < 4; x++) {
            for (let y = 1; y < 4; y++) {
                $("#s" + x + "" + y).text("").removeClass("win");
            }
        }
        gameMode = 1;
        tttMode = undefined;
        tttTurn = undefined;
        difficulty = undefined;
        tttStarted = false;
        gameOver = false;
        a = undefined;
        t = undefined;
        $("#c3, #c1").removeClass("noHover isNotPlaying");
        ready = false;
        $("#ticTacToe").addClass("active");
        $("#rockPaper").removeClass("active");
        $("#game").addClass("tictactoe");
        $("#rockPaperScissorScreenCont").animate({opacity: 0}, 500, function () {
            $("#rockPaperScissorScreenCont").addClass("invisible");
            $("#ticTacToeScreenCont").css("opacity", 0).removeClass("invisible").animate({opacity: 1}, 500, function () {
                ready = true;
            });
        });

        $("#c1img").animate({opacity: 0}, 200, function () {
            $("#c1img").attr("src","img/1p.png").animate({opacity: 1}, 500);
        });
        $("#c2img").animate({opacity: 0}, 200);

        $("#c3img").animate({opacity: 0}, 200, function () {
            $("#c3img").attr("src","img/2p.png").animate({opacity: 1}, 500);
        });
    }
    else if (n === 0 && gameMode !== 0 && ready){
        //Rock Paper Scissors
        gameMode = 0;
        ready = false;
        $("#rockPaper").addClass("active");
        $("#game").removeClass("tictactoe");
        $("#ticTacToe").removeClass("active");
        $("#ticTacToeScreenCont").animate({opacity: 0}, 500, function () {
            $("#ticTacToeScreenCont").addClass("invisible");
            $("#rockPaperScissorScreenCont").css("opacity", 0).removeClass("invisible").animate({opacity: 1}, 500, function () {
                ready = true;
            });
        });
        $("#c3").removeClass("noHover isNotPlaying");
        $("#c1").removeClass("noHover isNotPlaying");
        $("#c1img").animate({opacity: 0}, 200, function () {
            $("#c1img").attr("src","img/0_but.png").animate({opacity: 1}, 500);
        });
        $("#c2img").css("opacity",0).delay(200).attr("src","img/1_but.png").animate({opacity: 1}, 500);
        $("#c3img").animate({opacity: 0}, 200, function () {
            $("#c3img").attr("src","img/2_but.png").animate({opacity: 1}, 500);
        });

    }
}
function endOfGame() {
    let dir = ((t % 2) * 2) + 1;
    $("#c" + dir + "img").attr("src","img/retry.png");
    $("#c" + dir ).removeClass("noHover isNotPlaying");
    gameOver = true;
    console.log(score);
}
function restartTicTacToe() {
    for (let x = 1; x < 4; x++) {
        for (let y = 1; y < 4; y++) {
            $("#s" + x + "" + y).text("").removeClass("win");
        }
    }
    $("#tttText").text("Who starts?").removeClass("invisible");

    $("#board").css("opacity","0.5");
    tttTurn = undefined;
    t = undefined;
    a = undefined;
    gameOver = false;
    tttStarted = false;
    $("#c3, #c1").removeClass("noHover isNotPlaying");
    $("#game").addClass("tictactoe");
    $("#tttText").text("Who starts?").removeClass("invisible");
    let imgYou = "img/you.png", imgBot = "img/bot.png";
    if (tttMode === 2){
        imgYou = "img/x.png"; imgBot = "img/o.png";
    }
    $("#c1img").animate({opacity: 0}, 200, function () {
        $("#c1img").attr("src", imgYou).animate({opacity: 1}, 500);
    });
    $("#c3img").animate({opacity: 0}, 200, function () {
        $("#c3img").attr("src", imgBot).animate({opacity: 1}, 500);
    });

}
function play(s) {
    if (gameMode === 0){
        if (!game) {
            game = true;
            document.getElementById("player").style.opacity = 1;
            document.getElementById("ai").style.opacity = 1;
            document.getElementById("pop").style.opacity = 0;
            document.getElementById("pop").style.backgroundColor = "transparent";
            document.getElementById("ai").src = "";
            document.getElementById("player").src = "img/" + s + ".png";
            setTimeout(draw, 2000, s);
        }
    }
    else if(gameOver){
        console.log("restart");
        restartTicTacToe();
    }
    else if(gameMode === 1) {
        if (s === 0 && tttMode === undefined) {
            tttMode = 0;
            $("#game").removeClass("tictactoe");
            $("#tttText").text("Difficulty").removeClass("invisible");
            $("#c1img").removeClass("noHover isNotPlaying").animate({opacity: 0}, 200, function () {
                $("#c1img").attr("src", "img/easy.png").animate({opacity: 1}, 500);
            });
            $("#c2img").css("opacity", 0).delay(200).attr("src", "img/avg.png").animate({opacity: 1}, 500);
            $("#c3img").removeClass("noHover isNotPlaying").animate({opacity: 0}, 200, function () {
                $("#c3img").attr("src", "img/hard.png").animate({opacity: 1}, 500);
            });
        }
        else if (tttMode === undefined) {
            tttMode = s;
            $("#tttText").text("Who starts?").removeClass("invisible");
            $("#c1img").animate({opacity: 0}, 200, function () {
                $("#c1img").attr("src", "img/x.png").animate({opacity: 1}, 500);
            });
            $("#c3img").animate({opacity: 0}, 200, function () {
                $("#c3img").attr("src", "img/o.png").animate({opacity: 1}, 500);
            });
        }
        else if (difficulty === undefined && tttMode === 0) {
            difficulty = s;
            $("#game").addClass("tictactoe");
            $("#tttText").text("Who starts?").removeClass("invisible");
            $("#c1img").animate({opacity: 0}, 200, function () {
                $("#c1img").attr("src", "img/you.png").animate({opacity: 1}, 500);
            });
            $("#c3img").animate({opacity: 0}, 200, function () {
                $("#c3img").attr("src", "img/bot.png").animate({opacity: 1}, 500);
            });
        }
        else {
            $("#tttText").addClass("invisible");
            $("#board").animate({opacity: 1}, 300);
            tttMove(s)
        }
    }
}
function tttMove(turn){
    $(".field").css("pointer-events", "auto");
    if (t === undefined)
        t = turn / 2;
    else
        t++;
   if (!tttStarted){
       tttStarted = true;
       $("#c3").addClass("noHover");
       $("#c1").addClass("noHover");
   }
   tttTurn = turn;
    if (turn === 0){
        $("#c3").addClass("isNotPlaying");
        $("#c1").removeClass("isNotPlaying");
        if (tttMode === 0){
            $(".field").css("pointer-events", "auto");
        }
    }
    else if (turn === 2){
        $("#c1").addClass("isNotPlaying");
        $("#c3").removeClass("isNotPlaying");
        if (tttMode === 0){
            $(".field").css("pointer-events", "none");
            placeTicTac(true);
        }
    }
}

function draw(s) {
    aiS = Math.floor(Math.random() * 3);
    document.getElementById("ai").src = "img/" + aiS + ".png";
    if (s == aiS)
        out(s,"are draw");
    else {
        if (s == 2 && aiS == 1)
            out(s,1);
        else if (s == 0 && aiS == 2)
            out(s,1);
        else if (s == 1 && aiS == 0)
            out(s,1);
        else
            out(s,2)
    }
}

function out(s, a) {
    if (a == 1) {
        yScore++;
        document.getElementById("pop").innerHTML = "WINNER";
    }
    else if (a == 2) {
        aiScore++;
        document.getElementById("pop").innerHTML = "LOOSER";
    }
    else
        document.getElementById("pop").innerHTML = "TIE";
    
    setTimeout(show, 1000);
}

function show(){
    document.getElementById("player").style.opacity = .5;
    document.getElementById("ai").style.opacity = .5;
    document.getElementById("pop").style.opacity = 1;
    document.getElementById("score").innerHTML = yScore + "-" + aiScore;
    setTimeout(end, 1000);
}

function end() {
    game = false;
}

function placeTicTac(thisAtt) {
    if (!gameOver && $(thisAtt).text() === "" && $(".field").text().length < 9){
        if(tttMode === 2 || t % 2 === 0  && typeof thisAtt === "object")
        {
            $(thisAtt).text(p[t % 2]);
            if (win(parseInt($(thisAtt).attr("id").slice(1,2)), parseInt($(thisAtt).attr("id").slice(2,3)), p[t % 2]).length !== 0){
                a = win(parseInt($(thisAtt).attr("id").slice(1,2)), parseInt($(thisAtt).attr("id").slice(2,3)), p[t % 2]);
                for (let i = 0; i < a.length; i++) {
                    $("#s" + a[i]).addClass("win");
                }
                $("#board").delay(1200).animate({opacity:0.3}, 800);
                if (tttMode === 0)
                    $("#tttText").text("You won!").css("opacity", 0).delay(1000).removeClass("invisible").animate({opacity:1},1000, function () {
                        score.You++;
                        endOfGame();
                    });
                else
                    $("#tttText").text(p[t % 2] + " Won!").css("opacity", 0).delay(1000).removeClass("invisible").animate({opacity:1},1000, function () {
                        endOfGame();
                    });
            }
            else if($(".field").text().length === 9){
                //Restart game here
                //Place button
                $("#board").animate({opacity:0.3}, 300);
                $("#tttText").text("Tie").css("opacity", 0).removeClass("invisible").animate({opacity:1},1000);
                endOfGame();
            }
            else{
                if ((t+1) % 2 === 0)
                    tttMove(0);
                else
                    tttMove(2);
            }
        }
        else {
            let r = undefined,c = undefined;
            if (difficulty === 0){
                do {
                    r = Math.floor(Math.random() * 3) + 1;
                    c = Math.floor(Math.random() * 3) + 1;
                }
                while ($("#s" + r + "" + c).text() !== "");
                console.log("I place @" + r + "," + c);
            }
            else {
                for (let i = 1; i < 4; i++) {
                    for (let j = 1; j < 4; j++) {
                        if ($("#s" + i + "" + j).text() === ""){
                            $("#s" + i + "" + j).text(p[t % 2]);
                            if (win(i, j, p[t % 2]).length !== 0){
                                $("#s" + i + "" + j).text("");
                                r = i; c = j;
                                console.log("I win if i place @" + i + "," + j);
                                break;
                            }else{
                                $("#s" + i + "" + j).text("");
                            }
                        }
                    }
                }
                if (r === undefined){
                    for (let i = 1; i < 4; i++) {
                        for (let j = 1; j < 4; j++) {
                            if ($("#s" + i + "" + j).text() === ""){
                                $("#s" + i + "" + j).text(p[(t + 1) % 2]);
                                if (win(i, j, p[(t + 1) % 2]).length !== 0){
                                    $("#s" + i + "" + j).text("");
                                    r = i; c = j;
                                    console.log("I won't loose if i place @" + i + "," + j);
                                    break;
                                }else{
                                    $("#s" + i + "" + j).text("");
                                }
                            }
                        }
                    }
                    if (r === undefined && difficulty === 2) {
                        if ($("#s22").text() === ""){
                            r = 2; c = 2;
                            console.log("I place @2,2 because it was available")
                        }
                        if (r === undefined){
                            let count = 0;
                            do {
                                r = Math.floor(Math.random() * 2) + 1;
                                c = Math.floor(Math.random() * 2) + 1;
                                count++;
                                if (r === 2)
                                    r = 3;
                                if (c === 2)
                                    c = 3;
                                if (count > 20)
                                    break;
                                //console.log("Check: Available corner @" + r + "," + c + " : Is already choosen? " + ($("#s" + r + "" + c).text() !== "") + " : Is a Side piece? " + (( c + r) % 2 === 1));
                            }
                            while ($("#s" + r + "" + c).text() !== "" || ( c + r) % 2 === 1);
                            if (count >= 21){
                                r = undefined; c = undefined;
                            }
                            if (r !== undefined){
                                console.log(count);
                                console.log("I placed @" + r +"," + c + " because it was a corner" );
                            }
                        }
                    }
                    if (r === undefined) {
                        do {
                            r = Math.floor(Math.random() * 3) + 1;
                            c = Math.floor(Math.random() * 3) + 1;
                        }
                        while ($("#s" + r + "" + c).text() !== "");
                        console.log("I place @" + r + "," + c);
                    }
                }
            }
            window.setTimeout(function () {
                $("#s" + r + "" + c).delay(1000).text(p[t % 2]);
                if (win(r, c, p[t % 2]).length !== 0){
                    a = win(r, c, p[t % 2]);
                    for (let i = 0; i < a.length; i++) {
                        $("#s" + a[i]).addClass("win");
                    }
                    $("#board").delay(1200).animate({opacity:0.3}, 800);
                    if (t % 2 === 0)
                        $("#tttText").text("You won!").css("opacity", 0).delay(1000).removeClass("invisible").animate({opacity:1},1000, function () {
                            score.You++;
                            endOfGame();
                        });
                    else if (t % 2 === 1)
                        $("#tttText").text("You loose").css("opacity", 0).delay(1000).removeClass("invisible").animate({opacity:1},1000, function () {
                            score.Bot++;
                            endOfGame();
                        });
                }
                else if($(".field").text().length === 9){
                    $("#board").animate({opacity:0.3}, 300);
                    $("#tttText").text("Tie").css("opacity", 0).removeClass("invisible").animate({opacity:1},1000, function () {
                        endOfGame();
                    });
                }
                else{
                    if ((t+1) % 2 === 0)
                        tttMove(0);
                    else
                        tttMove(2);
                }
            }, 1000);
        }
    }
}
function win(fieldX,fieldY, player) {
    let fields = [];
    if (src(fieldX, 1) === player && src(fieldX, 2) === player && src(fieldX, 3) === player)
        fields.push(fieldX + "" + 1, fieldX + "" + 2, fieldX + "" + 3);
    if (src(1, fieldY) === player && src(2, fieldY) === player && src(3, fieldY) === player)
        fields.push(1 + "" + fieldY, 2 + "" + fieldY, 3 + "" + fieldY);
    if (src(2, 2) === player){
        if (src(1, 1) === player && src(3, 3) === player)
            fields.push(11,22,33);
        if(src(3, 1) === player && src(1, 3) === player)
            fields.push(31,22,13);
    }
    return fields;
}
function src(x, y){
    if (x + y < 2)
        return false;
    return $("#s" + x + "" + y).text();
}

$(document).ready(function() {

    $(".field").click(function() {
        if (tttStarted){
            placeTicTac(this);
        }
    });
    $("html, body").animate({ scrollTop: "0" }, 500);
    // place this within dom ready function
    function doneLoad() {
        document.getElementById("load").style.top = "-20px";
    }

    // use setTimeout() to execute
    setTimeout(doneLoad, 2000);

});

!function (e, o) { "object" == typeof exports && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : e.MicroModal = o() }(this, function () {
    "use strict"
    var e = function (e, o) { if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function") }, o = function () {
        function e(e, o) {
            for (var t = 0; t < o.length; t++) {
                var i = o[t]
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        } return function (o, t, i) { return t && e(o.prototype, t), i && e(o, i), o }
    }(), t = function (e) {
        if (Array.isArray(e)) {
            for (var o = 0, t = Array(e.length); o < e.length; o++)t[o] = e[o]
            return t
        } return Array.from(e)
    }
    return function () {
        var i = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], n = function () {
            function n(o) {
                var i = o.targetModal, a = o.triggers, r = void 0 === a ? [] : a, s = o.onShow, l = void 0 === s ? function () { } : s, c = o.onClose, d = void 0 === c ? function () { } : c, u = o.openTrigger, f = void 0 === u ? "data-micromodal-trigger" : u, h = o.closeTrigger, v = void 0 === h ? "data-micromodal-close" : h, g = o.disableScroll, m = void 0 !== g && g, b = o.disableFocus, y = void 0 !== b && b, w = o.awaitCloseAnimation, k = void 0 !== w && w, p = o.debugMode, E = void 0 !== p && p
                e(this, n), this.modal = document.getElementById(i), this.config = { debugMode: E, disableScroll: m, openTrigger: f, closeTrigger: v, onShow: l, onClose: d, awaitCloseAnimation: k, disableFocus: y }, r.length > 0 && this.registerTriggers.apply(this, t(r)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this)
            } return o(n, [{
                key: "registerTriggers", value: function () {
                    for (var e = this, o = arguments.length, t = Array(o), i = 0; i < o; i++)t[i] = arguments[i]
                    t.forEach(function (o) { o.addEventListener("click", function () { return e.showModal() }) })
                }
            }, { key: "showModal", value: function () { this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add("is-open"), this.setFocusToFirstNode(), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.onShow(this.modal) } }, {
                key: "closeModal", value: function () {
                    var e = this.modal
                    this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement.focus(), this.config.onClose(this.modal), this.config.awaitCloseAnimation ? this.modal.addEventListener("animationend", function o() { e.classList.remove("is-open"), e.removeEventListener("animationend", o, !1) }, !1) : e.classList.remove("is-open")
                }
            }, {
                key: "scrollBehaviour", value: function (e) {
                    if (this.config.disableScroll) {
                        var o = document.querySelector("body")
                        switch (e) {
                            case "enable": Object.assign(o.style, { overflow: "initial", height: "initial" })
                                break
                            case "disable": Object.assign(o.style, { overflow: "hidden", height: "100vh" })
                        }
                    }
                }
            }, { key: "addEventListeners", value: function () { this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown) } }, { key: "removeEventListeners", value: function () { this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown) } }, { key: "onClick", value: function (e) { e.target.hasAttribute(this.config.closeTrigger) && (this.closeModal(), e.preventDefault()) } }, { key: "onKeydown", value: function (e) { 27 === e.keyCode && this.closeModal(e), 9 === e.keyCode && this.maintainFocus(e) } }, {
                key: "getFocusableNodes", value: function () {
                    var e = this.modal.querySelectorAll(i)
                    return Object.keys(e).map(function (o) { return e[o] })
                }
            }, {
                key: "setFocusToFirstNode", value: function () {
                    if (!this.config.disableFocus) {
                        var e = this.getFocusableNodes()
                        e.length && e[0].focus()
                    }
                }
            }, {
                key: "maintainFocus", value: function (e) {
                    var o = this.getFocusableNodes()
                    if (this.modal.contains(document.activeElement)) {
                        var t = o.indexOf(document.activeElement)
                        e.shiftKey && 0 === t && (o[o.length - 1].focus(), e.preventDefault()), e.shiftKey || t !== o.length - 1 || (o[0].focus(), e.preventDefault())
                    } else o[0].focus()
                }
            }]), n
        }(), a = null, r = function (e, o) {
            var t = []
            return e.forEach(function (e) {
                var i = e.attributes[o].value
                void 0 === t[i] && (t[i] = []), t[i].push(e)
            }), t
        }, s = function (e) { if (!document.getElementById(e)) return console.warn("MicroModal v0.3.1: ❗Seems like you have missed %c'" + e + "'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="' + e + '"></div>'), !1 }, l = function (e) { if (e.length <= 0) return console.warn("MicroModal v0.3.1: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'), !1 }, c = function (e, o) {
            if (l(e), !o) return !0
            for (var t in o) s(t)
            return !0
        }
        return {
            init: function (e) {
                var o = Object.assign({}, { openTrigger: "data-micromodal-trigger" }, e), i = [].concat(t(document.querySelectorAll("[" + o.openTrigger + "]"))), a = r(i, o.openTrigger)
                if (!0 !== o.debugMode || !1 !== c(i, a)) for (var s in a) {
                    var l = a[s]
                    o.targetModal = s, o.triggers = [].concat(t(l)), new n(o)
                }
            }, show: function (e, o) {
                var t = o || {}
                t.targetModal = e, !0 === t.debugMode && !1 === s(e) || (a = new n(t), a.showModal())
            }, close: function () { a.closeModal() }
        }
    }()
});