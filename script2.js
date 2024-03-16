let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","green","purple"];


let started= false;
let level = 0;
let highestScore =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started ==  false){
        console.log("Game is started");
         started= true;

         levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("usrFlash");
    setTimeout(function(){
        btn.classList.remove("usrFlash");
    },250);
}


function levelUp(){
    userSeq = [];
    level++;
    // highestScore++;
    h2.innerText = `Level ${level}`


    //random btn choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);


    

}

function checkAns(idx){
    console.log("curr level is :" ,level);

    // let idx = level-1;
    if(gameSeq[idx] === userSeq[idx]){
        
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        if(highestScore<level){
            highestScore=level;
        }
        h2.innerHTML = `Game over! your score was <b>${level}</b><br> Press any key to start <br>
        <b>the highest score is ${highestScore}<b>`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();

    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    console.log(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    userSeq=[];
    gameSeq = [];
    level=0;
}