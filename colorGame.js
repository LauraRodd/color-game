// VARIABLES

let numBoxes = 6; 
let colors = [];
let pickedColor;
let boxes = document.querySelectorAll(".box");
let gameMode = document.querySelectorAll(".mode");
let header = document.querySelector("header");
let colorDisplay = document.getElementById("colorDisplay");
let resultDisplay = document.getElementById("result");
let resetButton = document.getElementById("reset-btn");


// RUN INIT FUNCTION ON PAGE LOAD

init();

function init(){
  gameModeButtons();
  colorBoxes();
  reset();
}

// RESET BUTTON EVENT LISTENERS

resetButton.addEventListener("click", function(){
  reset();
});

// FUNCTIONS

function gameModeButtons(){
  for(let i = 0; i < gameMode.length; i++){
    gameMode[i].addEventListener("click", function(){
    gameMode[0].classList.remove("selected");
    gameMode[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numBoxes = 3: numBoxes = 6;
    reset();
    });
  }
}

function colorBoxes(){
  for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", function(){
      let clickedColor = this.style.backgroundColor; 
      if(clickedColor === pickedColor){
        resultDisplay.textContent = "Correct! You Win";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        header.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#19191a";  
        resultDisplay.textContent = "Wrong! Try Again"
        } 
    });
  }
}

function generateRandomColors(n){
    let arr = []
    for(let i = 0; i < n; i++){
      arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

function changeColors(color){
    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function reset(){
  colors = generateRandomColors(numBoxes);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors"
  resultDisplay.textContent = "";
  for(let i = 0; i < boxes.length; i++){
    if(colors[i]){
      boxes[i].style.backgroundColor = colors[i];
      boxes[i].style.display = "block";
    } else 
      boxes[i].style.display = "none";
  }
  header.style.backgroundColor = "#a3344e";
}