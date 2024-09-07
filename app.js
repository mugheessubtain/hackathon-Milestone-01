var hideEle = document.querySelectorAll(".Cont")[0];
var btn = document.querySelectorAll(".show")[0];
var ishide = false;
function hide() {
    if (ishide) {
        hideEle.className = "";
        ishide = false;
        btn.innerHTML = "hide";
    }
    else {
        hideEle.className = "hide";
        ishide = true;
        btn.innerHTML = "show";
    }
}
var hideEle2 = document.querySelectorAll(".Cont2")[0];
var btn2 = document.querySelectorAll(".show2")[0];
var ishide2 = false;
function hide2() {
    if (ishide2) {
        hideEle2.className = "";
        ishide2 = false;
        btn2.innerHTML = "hide";
    }
    else {
        hideEle2.className = "hide";
        ishide2 = true;
        btn2.innerHTML = "show";
    }
}
var hideEle3 = document.querySelectorAll(".Cont3")[0];
var btn3 = document.querySelectorAll(".show3")[0];
var ishide3 = false;
function hide3() {
    if (ishide3) {
        hideEle3.className = "";
        ishide3 = false;
        btn3.innerHTML = "hide";
    }
    else {
        hideEle3.className = "hide";
        ishide3 = true;
        btn3.innerHTML = "show";
    }
}
