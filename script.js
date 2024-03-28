// console.log("Hello!");
let boxes = document.querySelectorAll(".box"); 
// console.log(boxes);
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msgContainer");
let newGameBtn = document.querySelector("#newGame-btn");
let msg = document.querySelector("#msg");

let turnO = true;

const winingPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
    // console.log("Boxes was clicked.");
    if(turnO){  //playerO
        box.innerText = "O";
        box.color =  "DimGrey";
        turnO = false;
    }
    else{
        box.innerText = "X";  //playerX
        box.color = "#717568";
        turnO = true;
    }
    box.disabled = true;

    checkWinner();
    });
}); 

const resetGame = () => {
    turnO = false;
    enableboxes();
    msgContainer.classList.add("hide");
};

const enableboxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const disableBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
};
const showWinner = (winner) =>{
    msg.innerText = `Congratulations the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for(let pattern of winingPattern){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], 
        //     boxes[pattern[1]], 
        //     boxes[pattern[2]]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
            if(pos1Val === pos2Val && pos1Val === pos3Val){
                // console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);