const gridContainer = document.querySelector("div");
const rowContainer = document.createElement("div");
const square = document.createElement("div");

gridContainer.appendChild(rowContainer);

// add flexbox properties to gridContainer
gridContainer.style.display = "flex";

//add flexbox properties to rowContainer
rowContainer.style.display = "flex";
rowContainer.style.justifyContent = "spaceAround";

// add styles to square
square.style.width = "50px";
square.style.height = "50px";
square.style.backgroundColor = "black";

// use for loop to create a row of 16 50px width 
// 50px length divs
function gridRow() {
    for (let index = 0; index < 16; index++){
        rowContainer.appendChild(square);
    };
};

gridRow();

// use for loop to create a column of 16 of these 
function gridColumn() {
    for (let index = 0; index < 16; index ++) {
        rowContainer.appendChild(rowContainer);
    }
}