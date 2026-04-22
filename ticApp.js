let btns=document.querySelectorAll(".btn");
let restBtn=document.querySelector(".reset")
let msjContainer=document.querySelector(".msj-container"); // Mistake: variable name must match where you use it below
let msj=document.querySelector("#msj"); // Mistake: msj is an id, so use #msj, not .msj
let newGameBtn=document.querySelector("#new-game"); // Mistake: id selector needs # before new-game

let playerO=true;


const winPatterns=[

    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    
];

const disableBoxes=()=>{
btns.forEach((btn)=>{
btn.disabled=true; // After winner, disable every box so game stops
});
};

const enableBoxes=()=>{
btns.forEach((btn)=>{
btn.disabled=false; // New game/reset ke liye boxes ko dobara clickable banaya
btn.innerText=""; // New game/reset me old X and O remove kiya
});
};

const resetGame=()=>{
playerO=true; // Game dobara O player se start hoga
enableBoxes();
msjContainer.classList.add("hide"); // Winner message ko dobara hide kiya
};

newGameBtn.addEventListener("click",resetGame);
restBtn.addEventListener("click",resetGame);



  btns.forEach((btn)=>{
btn.addEventListener("click",(e)=>{


  
console.log("this box was clicked ");

if(playerO){
    btn.innerText="O";
playerO=false;


}else{
   btn.innerText="X";

playerO=true;

}
btn.disabled=true;

 checkWinner();


});});


let showWinner=(winner)=>{

msj.innerText=`Congradulation winner is ${winner} `; // Mistake: use msj variable, not old msjBtn name
msjContainer.classList.remove("hide"); // Mistake: use msjContainer variable, not old msjContainerBtn name
}

const checkWinner = () => {
for( let pattern of winPatterns){

   // console.log(pattern[0],pattern[1],pattern[2]);

    let pos1Val=btns[pattern[0]].innerText
    let pos2Val=btns[pattern[1]].innerText
    let pos3Val=btns[pattern[2]].innerText

    if(pos1Val!="" && pos2Val!="" && pos3Val!=""){

        if(pos1Val === pos2Val && pos2Val===pos3Val){
            console.log("winner winner winner ");
 console.log("winner",pos1Val);
 showWinner(pos1Val);
 disableBoxes(); // Winner milne ke baad game stop karne ke liye
        }
    }
}



};
