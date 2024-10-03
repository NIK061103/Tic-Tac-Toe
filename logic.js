const player = document.querySelector(".player");
const boxes = document.querySelectorAll(".game-button");
const resetButton = document.querySelector("#reset-button");


function isSubset(arr1, arr2) {
    return arr1.every(element => arr2.includes(element));
}

const Game = (A, B, wins) => {
    for(let win of wins){
        if(isSubset(win, A)){
            player.innerText = "Player A wins!";
            return true;
        }
        else if(isSubset(win, B)){
            player.innerText = "Player B wins!";
            return true;
        }
    }
    return false;
   
}

const wins = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"], ["1", "5", "9"], ["3", "5", "7"]];
let A = [];
let B = [];
let w = false;

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(player.getAttribute("id") === "A" && box.innerText === "" && w === false){
            box.innerText = "X";
            A.push(box.getAttribute("id"))
            player.setAttribute("id", "B");
            player.innerText = "Player B";
        }
        else if(player.getAttribute("id") === "B" && box.innerText === "" && w === false){
            box.innerText = "O";
            B.push(box.getAttribute("id"))
            player.setAttribute("id", "A");
            player.innerText = "Player A";
        }

        console.log(A);
        console.log(B);
        
        w = Game(A, B, wins);
    })
});

resetButton.addEventListener("click", () =>{
    boxes.forEach((box) => {
        box.innerText = "";
        player.setAttribute("id", "A");
        player.innerText = "Player A";
    })

    A = [];
    B = [];
})
