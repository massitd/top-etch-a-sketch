const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column"
body.style.alignItems = "center";


let gridSize = 16;
let cubeSize = "50px";

const gridContainer = document.querySelector(".container");
gridContainer.style.display = "flex";
gridContainer.style.justifyContent = "flex-start";

function gridRow() {
    // create 16 containers, 1 for each row
    for (let index = 0; index < gridSize; index ++) {
        let rowContainer = document.createElement("div");
        rowContainer.style.flexGrow = "0";
        rowContainer.style.flexShrink = "1";
        gridContainer.appendChild(rowContainer);   

        // add squares to each rowContainer
        for (let indexA = 0; indexA < gridSize; indexA++) {
            let square = document.createElement("div");
            square.style.width = cubeSize;
            square.style.height = cubeSize;
            square.style.backgroundColor = "black";
            square.style.margin = "0px";

            // squares turn white on mouseover
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "white";

            });

            rowContainer.appendChild(square);
        };
    };
};

gridRow();

const resetButton = document.querySelector(".reset");
resetButton.textContent = "Reset";
resetButton.style.margin = "5px";

resetButton.addEventListener("click", () => {
    let gridInput = prompt("How many squares wide and tall should the grid be?", gridSize);
    
    body.removeChild(gridContainer);
    
    if (typeof(gridInput) === "number" && gridInput < 100) {
        gridSize = parseInt(gridInput);
        console.log(gridInput);
    } else {
        gridSize = 16;
    };
    gridRow();
});

const createButton = document.querySelector(".create")
createButton.textContent = "create"

createButton.addEventListener("click", () => {
    gridRow();
});