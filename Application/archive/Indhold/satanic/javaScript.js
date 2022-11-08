// JavaScript source code
function checkNumbers(desimal) {

    if (document.getElementById("a" + desimal).checked == false &&
        document.getElementById("b" + desimal).checked == false &&
        document.getElementById("c" + desimal).checked == true &&
        document.getElementById("d" + desimal).checked == false &&
        document.getElementById("e" + desimal).checked == false &&
        document.getElementById("f" + desimal).checked == true &&
        document.getElementById("g" + desimal).checked == true &&
        document.getElementById("h" + desimal).checked == false &&
        document.getElementById("i" + desimal).checked == false &&
        document.getElementById("j" + desimal).checked == false &&
        document.getElementById("k" + desimal).checked == true &&
        document.getElementById("l" + desimal).checked == false &&
        document.getElementById("m" + desimal).checked == false &&
        document.getElementById("n" + desimal).checked == false &&
        document.getElementById("o" + desimal).checked == true &&
        document.getElementById("p" + desimal).checked == false &&
        document.getElementById("q" + desimal).checked == false &&
        document.getElementById("r" + desimal).checked == false &&
        document.getElementById("s" + desimal).checked == true &&
        document.getElementById("t" + desimal).checked == false &&
        document.getElementById("u" + desimal).checked == false &&
        document.getElementById("v" + desimal).checked == false &&
        document.getElementById("w" + desimal).checked == true &&
        document.getElementById("x" + desimal).checked == false &&
        document.getElementById("y" + desimal).checked == false &&
        document.getElementById("z" + desimal).checked == true &&
        document.getElementById("æ" + desimal).checked == true &&
        document.getElementById("ø" + desimal).checked == true) {
        document.getElementById("text" + desimal).innerHTML = "1";
    }
    else if (
        document.getElementById("a" + desimal).checked == false &&
        document.getElementById("b" + desimal).checked == true &&
        document.getElementById("c" + desimal).checked == true &&
        document.getElementById("d" + desimal).checked == false &&
        document.getElementById("e" + desimal).checked == true &&
        document.getElementById("f" + desimal).checked == false &&
        document.getElementById("g" + desimal).checked == false &&
        document.getElementById("h" + desimal).checked == true &&
        document.getElementById("i" + desimal).checked == false &&
        document.getElementById("j" + desimal).checked == false &&
        document.getElementById("k" + desimal).checked == false &&
        document.getElementById("l" + desimal).checked == true &&
        document.getElementById("m" + desimal).checked == false &&
        document.getElementById("n" + desimal).checked == false &&
        document.getElementById("o" + desimal).checked == true &&
        document.getElementById("p" + desimal).checked == false &&
        document.getElementById("q" + desimal).checked == false &&
        document.getElementById("r" + desimal).checked == true &&
        document.getElementById("s" + desimal).checked == false &&
        document.getElementById("t" + desimal).checked == false &&
        document.getElementById("u" + desimal).checked == true &&
        document.getElementById("v" + desimal).checked == false &&
        document.getElementById("w" + desimal).checked == false &&
        document.getElementById("x" + desimal).checked == false &&
        document.getElementById("y" + desimal).checked == true &&
        document.getElementById("z" + desimal).checked == true &&
        document.getElementById("æ" + desimal).checked == true &&
        document.getElementById("ø" + desimal).checked == true) {
        document.getElementById("text" + desimal).innerHTML = "2";
    }
    else if (
        document.getElementById("a" + desimal).checked == false &&
        document.getElementById("b" + desimal).checked == true &&
        document.getElementById("c" + desimal).checked == true &&
        document.getElementById("d" + desimal).checked == false &&
        document.getElementById("e" + desimal).checked == true &&
        document.getElementById("f" + desimal).checked == false &&
        document.getElementById("g" + desimal).checked == false &&
        document.getElementById("h" + desimal).checked == true &&
        document.getElementById("i" + desimal).checked == false &&
        document.getElementById("j" + desimal).checked == false &&
        document.getElementById("k" + desimal).checked == false &&
        document.getElementById("l" + desimal).checked == true &&
        document.getElementById("m" + desimal).checked == false &&
        document.getElementById("n" + desimal).checked == false &&
        document.getElementById("o" + desimal).checked == true &&
        document.getElementById("p" + desimal).checked == false &&
        document.getElementById("q" + desimal).checked == false &&
        document.getElementById("r" + desimal).checked == false &&
        document.getElementById("s" + desimal).checked == false &&
        document.getElementById("t" + desimal).checked == true &&
        document.getElementById("u" + desimal).checked == true &&
        document.getElementById("v" + desimal).checked == false &&
        document.getElementById("w" + desimal).checked == false &&
        document.getElementById("x" + desimal).checked == true &&
        document.getElementById("y" + desimal).checked == false &&
        document.getElementById("z" + desimal).checked == true &&
        document.getElementById("æ" + desimal).checked == true &&
        document.getElementById("ø" + desimal).checked == false) {
        document.getElementById("text" + desimal).innerHTML = "3";
    }
    else if (
        document.getElementById("a" + desimal).checked == true &&
        document.getElementById("b" + desimal).checked == false &&
        document.getElementById("c" + desimal).checked == false &&
        document.getElementById("d" + desimal).checked == true &&
        document.getElementById("e" + desimal).checked == true &&
        document.getElementById("f" + desimal).checked == false &&
        document.getElementById("g" + desimal).checked == false &&
        document.getElementById("h" + desimal).checked == true &&
        document.getElementById("i" + desimal).checked == true &&
        document.getElementById("j" + desimal).checked == false &&
        document.getElementById("k" + desimal).checked == false &&
        document.getElementById("l" + desimal).checked == true &&
        document.getElementById("m" + desimal).checked == true &&
        document.getElementById("n" + desimal).checked == true &&
        document.getElementById("o" + desimal).checked == true &&
        document.getElementById("p" + desimal).checked == true &&
        document.getElementById("q" + desimal).checked == false &&
        document.getElementById("r" + desimal).checked == false &&
        document.getElementById("s" + desimal).checked == false &&
        document.getElementById("t" + desimal).checked == true &&
        document.getElementById("u" + desimal).checked == false &&
        document.getElementById("v" + desimal).checked == false &&
        document.getElementById("w" + desimal).checked == false &&
        document.getElementById("x" + desimal).checked == true &&
        document.getElementById("y" + desimal).checked == false &&
        document.getElementById("z" + desimal).checked == false &&
        document.getElementById("æ" + desimal).checked == false &&
        document.getElementById("ø" + desimal).checked == true) {
        document.getElementById("text" + desimal).innerHTML = "4";
    }
    else if (
        document.getElementById("a" + desimal).checked == true &&
        document.getElementById("b" + desimal).checked == true &&
        document.getElementById("c" + desimal).checked == true &&
        document.getElementById("d" + desimal).checked == true &&
        document.getElementById("e" + desimal).checked == true &&
        document.getElementById("f" + desimal).checked == false &&
        document.getElementById("g" + desimal).checked == false &&
        document.getElementById("h" + desimal).checked == false &&
        document.getElementById("i" + desimal).checked == true &&
        document.getElementById("j" + desimal).checked == false &&
        document.getElementById("k" + desimal).checked == false &&
        document.getElementById("l" + desimal).checked == false &&
        document.getElementById("m" + desimal).checked == true &&
        document.getElementById("n" + desimal).checked == true &&
        document.getElementById("o" + desimal).checked == true &&
        document.getElementById("p" + desimal).checked == false &&
        document.getElementById("q" + desimal).checked == false &&
        document.getElementById("r" + desimal).checked == false &&
        document.getElementById("s" + desimal).checked == false &&
        document.getElementById("t" + desimal).checked == true &&
        document.getElementById("u" + desimal).checked == true &&
        document.getElementById("v" + desimal).checked == false &&
        document.getElementById("w" + desimal).checked == false &&
        document.getElementById("x" + desimal).checked == true &&
        document.getElementById("y" + desimal).checked == false &&
        document.getElementById("z" + desimal).checked == true &&
        document.getElementById("æ" + desimal).checked == true &&
        document.getElementById("ø" + desimal).checked == false) {
        document.getElementById("text" + desimal).innerHTML = "5";
    }
    else if (
        document.getElementById("a" + desimal).checked == false &&
        document.getElementById("b" + desimal).checked == true &&
        document.getElementById("c" + desimal).checked == true &&
        document.getElementById("d" + desimal).checked == false &&
        document.getElementById("e" + desimal).checked == true &&
        document.getElementById("f" + desimal).checked == false &&
        document.getElementById("g" + desimal).checked == false &&
        document.getElementById("h" + desimal).checked == true &&
        document.getElementById("i" + desimal).checked == true &&
        document.getElementById("j" + desimal).checked == false &&
        document.getElementById("k" + desimal).checked == false &&
        document.getElementById("l" + desimal).checked == false &&
        document.getElementById("m" + desimal).checked == true &&
        document.getElementById("n" + desimal).checked == true &&
        document.getElementById("o" + desimal).checked == true &&
        document.getElementById("p" + desimal).checked == false &&
        document.getElementById("q" + desimal).checked == true &&
        document.getElementById("r" + desimal).checked == false &&
        document.getElementById("s" + desimal).checked == false &&
        document.getElementById("t" + desimal).checked == true &&
        document.getElementById("u" + desimal).checked == true &&
        document.getElementById("v" + desimal).checked == false &&
        document.getElementById("w" + desimal).checked == false &&
        document.getElementById("x" + desimal).checked == true &&
        document.getElementById("y" + desimal).checked == false &&
        document.getElementById("z" + desimal).checked == true &&
        document.getElementById("æ" + desimal).checked == true &&
        document.getElementById("ø" + desimal).checked == false) {
        document.getElementById("text" + desimal).innerHTML = "6";
    }
    else if (
        document.getElementById("a" + desimal).checked == true &&
        document.getElementById("b" + desimal).checked == true &&
        document.getElementById("c" + desimal).checked == true &&
        document.getElementById("d" + desimal).checked == true &&
        document.getElementById("e" + desimal).checked == true &&
        document.getElementById("f" + desimal).checked == false &&
        document.getElementById("g" + desimal).checked == false &&
        document.getElementById("h" + desimal).checked == true &&
        document.getElementById("i" + desimal).checked == false &&
        document.getElementById("j" + desimal).checked == false &&
        document.getElementById("k" + desimal).checked == false &&
        document.getElementById("l" + desimal).checked == true &&
        document.getElementById("m" + desimal).checked == false &&
        document.getElementById("n" + desimal).checked == false &&
        document.getElementById("o" + desimal).checked == true &&
        document.getElementById("p" + desimal).checked == false &&
        document.getElementById("q" + desimal).checked == false &&
        document.getElementById("r" + desimal).checked == false &&
        document.getElementById("s" + desimal).checked == true &&
        document.getElementById("t" + desimal).checked == false &&
        document.getElementById("u" + desimal).checked == false &&
        document.getElementById("v" + desimal).checked == true &&
        document.getElementById("w" + desimal).checked == false &&
        document.getElementById("x" + desimal).checked == false &&
        document.getElementById("y" + desimal).checked == false &&
        document.getElementById("z" + desimal).checked == true &&
        document.getElementById("æ" + desimal).checked == false &&
        document.getElementById("ø" + desimal).checked == false) {
        document.getElementById("text" + desimal).innerHTML = "7";
    }
    else if (
        document.getElementById("a" + desimal).checked == true &&
        document.getElementById("b" + desimal).checked == true &&
        document.getElementById("c" + desimal).checked == true &&
        document.getElementById("d" + desimal).checked == true &&
        document.getElementById("e" + desimal).checked == true &&
        document.getElementById("f" + desimal).checked == false &&
        document.getElementById("g" + desimal).checked == false &&
        document.getElementById("h" + desimal).checked == true &&
        document.getElementById("i" + desimal).checked == false &&
        document.getElementById("j" + desimal).checked == false &&
        document.getElementById("k" + desimal).checked == false &&
        document.getElementById("l" + desimal).checked == true &&
        document.getElementById("m" + desimal).checked == false &&
        document.getElementById("n" + desimal).checked == false &&
        document.getElementById("o" + desimal).checked == true &&
        document.getElementById("p" + desimal).checked == false &&
        document.getElementById("q" + desimal).checked == false &&
        document.getElementById("r" + desimal).checked == false &&
        document.getElementById("s" + desimal).checked == true &&
        document.getElementById("t" + desimal).checked == false &&
        document.getElementById("u" + desimal).checked == false &&
        document.getElementById("v" + desimal).checked == true &&
        document.getElementById("w" + desimal).checked == false &&
        document.getElementById("x" + desimal).checked == false &&
        document.getElementById("y" + desimal).checked == false &&
        document.getElementById("z" + desimal).checked == true &&
        document.getElementById("æ" + desimal).checked == false &&
        document.getElementById("ø" + desimal).checked == false) {
        document.getElementById("text" + desimal).innerHTML = "7";
    }
    else if (
        document.getElementById("a" + desimal).checked == false &&
        document.getElementById("b" + desimal).checked == true &&
        document.getElementById("c" + desimal).checked == true &&
        document.getElementById("d" + desimal).checked == false &&
        document.getElementById("e" + desimal).checked == true &&
        document.getElementById("f" + desimal).checked == false &&
        document.getElementById("g" + desimal).checked == false &&
        document.getElementById("h" + desimal).checked == true &&
        document.getElementById("i" + desimal).checked == true &&
        document.getElementById("j" + desimal).checked == false &&
        document.getElementById("k" + desimal).checked == false &&
        document.getElementById("l" + desimal).checked == true &&
        document.getElementById("m" + desimal).checked == false &&
        document.getElementById("n" + desimal).checked == true &&
        document.getElementById("o" + desimal).checked == true &&
        document.getElementById("p" + desimal).checked == false &&
        document.getElementById("q" + desimal).checked == true &&
        document.getElementById("r" + desimal).checked == false &&
        document.getElementById("s" + desimal).checked == false &&
        document.getElementById("t" + desimal).checked == true &&
        document.getElementById("u" + desimal).checked == true &&
        document.getElementById("v" + desimal).checked == false &&
        document.getElementById("w" + desimal).checked == false &&
        document.getElementById("x" + desimal).checked == true &&
        document.getElementById("y" + desimal).checked == false &&
        document.getElementById("z" + desimal).checked == true &&
        document.getElementById("æ" + desimal).checked == true &&
        document.getElementById("ø" + desimal).checked == false) {
        document.getElementById("text" + desimal).innerHTML = "8";
    }
    else if (
        document.getElementById("a" + desimal).checked == false &&
        document.getElementById("b" + desimal).checked == true &&
        document.getElementById("c" + desimal).checked == true &&
        document.getElementById("d" + desimal).checked == false &&
        document.getElementById("e" + desimal).checked == true &&
        document.getElementById("f" + desimal).checked == false &&
        document.getElementById("g" + desimal).checked == false &&
        document.getElementById("h" + desimal).checked == true &&
        document.getElementById("i" + desimal).checked == true &&
        document.getElementById("j" + desimal).checked == false &&
        document.getElementById("k" + desimal).checked == false &&
        document.getElementById("l" + desimal).checked == true &&
        document.getElementById("m" + desimal).checked == false &&
        document.getElementById("n" + desimal).checked == true &&
        document.getElementById("o" + desimal).checked == true &&
        document.getElementById("p" + desimal).checked == true &&
        document.getElementById("q" + desimal).checked == false &&
        document.getElementById("r" + desimal).checked == false &&
        document.getElementById("s" + desimal).checked == false &&
        document.getElementById("t" + desimal).checked == true &&
        document.getElementById("u" + desimal).checked == true &&
        document.getElementById("v" + desimal).checked == false &&
        document.getElementById("w" + desimal).checked == false &&
        document.getElementById("x" + desimal).checked == true &&
        document.getElementById("y" + desimal).checked == false &&
        document.getElementById("z" + desimal).checked == true &&
        document.getElementById("æ" + desimal).checked == true &&
        document.getElementById("ø" + desimal).checked == false) {
        document.getElementById("text" + desimal).innerHTML = "9";
    }
    else if (
        document.getElementById("a" + desimal).checked == false &&
        document.getElementById("b" + desimal).checked == true &&
        document.getElementById("c" + desimal).checked == true &&
        document.getElementById("d" + desimal).checked == false &&
        document.getElementById("e" + desimal).checked == true &&
        document.getElementById("f" + desimal).checked == false &&
        document.getElementById("g" + desimal).checked == false &&
        document.getElementById("h" + desimal).checked == true &&
        document.getElementById("i" + desimal).checked == true &&
        document.getElementById("j" + desimal).checked == false &&
        document.getElementById("k" + desimal).checked == false &&
        document.getElementById("l" + desimal).checked == true &&
        document.getElementById("m" + desimal).checked == true &&
        document.getElementById("n" + desimal).checked == false &&
        document.getElementById("o" + desimal).checked == false &&
        document.getElementById("p" + desimal).checked == true &&
        document.getElementById("q" + desimal).checked == true &&
        document.getElementById("r" + desimal).checked == false &&
        document.getElementById("s" + desimal).checked == false &&
        document.getElementById("t" + desimal).checked == true &&
        document.getElementById("u" + desimal).checked == true &&
        document.getElementById("v" + desimal).checked == false &&
        document.getElementById("w" + desimal).checked == false &&
        document.getElementById("x" + desimal).checked == true &&
        document.getElementById("y" + desimal).checked == false &&
        document.getElementById("z" + desimal).checked == true &&
        document.getElementById("æ" + desimal).checked == true &&
        document.getElementById("ø" + desimal).checked == false) {
        document.getElementById("text" + desimal).innerHTML = "0";
    }
    else { document.getElementById("text" + desimal).innerHTML = "_ "; }
}
