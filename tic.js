let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-button");
let message_container=document.querySelector(".msg-container");
let new_button=document.querySelector("#new-button");
let message=document.querySelector("#message")
let turnO=true;

//winning pattern 
const winPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
// players turn part


//disable boxes part  after we find one winner
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

//enable box part to enable all box when we need to re start or play again
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

//message part to print and show winner
const showWinner=(winner)=>{
   message.innerText=`Congratulations winner is ${winner}`;
   message_container.classList.remove("hide");
   disableboxes();
};

//check winner part and its pattern to win a game
const checkWinner=()=>{
for(let pattern of winPattern){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner",pos1val);
            showWinner(pos1val);
        }
    }
}
};
//reset game button
const resetgame=()=>{
    turnO=true;
    enableboxes();
    message_container.classList.add("hide");
}
//new game button part
new_button.addEventListener("click",resetgame);

//reset button
reset.addEventListener("click",resetgame);
let fun=(box)=>{
        console.log("box was clicked");
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    };
boxes.forEach((box)=>{
    box.addEventListener("click",()=>fun(box));
});






