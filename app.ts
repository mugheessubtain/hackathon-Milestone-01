let hideEle=document.querySelectorAll(".Cont")[0];
let btn=document.querySelectorAll(".show")[0];



let ishide=false
function hide(){
    if(ishide){
        hideEle.className=""
        ishide=false;
        btn.innerHTML="hide";

    }
    else{
        hideEle.className="hide";
        ishide=true;
        btn.innerHTML="show";
    }
}

let hideEle2=document.querySelectorAll(".Cont2")[0];
let btn2=document.querySelectorAll(".show2")[0];

let ishide2=false
function hide2(){
    if(ishide2){
        hideEle2.className=""
        ishide2=false;
        btn2.innerHTML="hide";

    }
    else{
        hideEle2.className="hide";
        ishide2=true;
        btn2.innerHTML="show";
    }
}

let hideEle3=document.querySelectorAll(".Cont3")[0];
let btn3=document.querySelectorAll(".show3")[0];

let ishide3=false
function hide3(){
    if(ishide3){
        hideEle3.className=""
        ishide3=false;
        btn3.innerHTML="hide";

    }
    else{
        hideEle3.className="hide";
        ishide3=true;
        btn3.innerHTML="show";
    }
}