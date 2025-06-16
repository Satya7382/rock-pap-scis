let uss = 0;
let cos = 0;

const cho = document.querySelectorAll(".choices");

const gencomp = () => {
    const opt = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return opt[randIdx];
}
const inc = (uwin) => {
    if(uwin) {
        let msgc = document.querySelector("#us");
        uss++;
        msgc.innerText = uss;

    }
    else {
        let msgc = document.querySelector("#cs");
        cos++;
        msgc.innerText = cos;
    }
}
const reset = () => {
    
}
const show = (uwin) => {
    if(uwin) {
        console.log("you WON");
        let msgc = document.querySelector("#msg");
        msgc.innerText = "YOU WON";
        inc(uwin);
    }
    else {
        console.log("computer WON");
        let msgc = document.querySelector("#msg");
        msgc.innerText = "COMPUTER WON";
        inc(uwin);
    }
}
const draw = () => {
    console.log("The game is a DRAW");
    let msgc = document.querySelector("#msg");
    msgc.innerText = "It's a DRAW";
}
const playgame = (userchoice) => {
    console.log("user-choice = ", userchoice);
    const compchoice = gencomp();
    console.log("comp-choice = ", compchoice);
    if(userchoice == compchoice) {
        draw();
    }
    else {
        let uwin = true;
        if(userchoice === "rock") {
            uwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper") {
            uwin = compchoice === "scissor" ? false : true;
        }
        else {
            uwin = compchoice === "rock" ? false : true;
        }
        show(uwin);
    }
}

cho.forEach((choice) => {
    choice.addEventListener("click", () => {
        const chid = choice.getAttribute("id");
        playgame(chid);
    });
});

let res = document.querySelector("#resett");
res.addEventListener("click", () => {
    uss = 0;
    cos = 0;
    let msgc = document.querySelector("#us");
    msgc.innerText = uss;
    let msc = document.querySelector("#cs");
    msc.innerText = cos;
})