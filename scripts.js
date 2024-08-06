const gridContainer = document.querySelector("div");


// add flexbox properties to gridContainer
gridContainer.style.display = "flex";
gridContainer.style.justifyContent = "column";

//add flexbox properties to rowContainer
rowContainer.style.display = "flex";
rowContainer.style.justifyContent = "";


// use for loop to create a row of 16 50px width 
// 50px length divs
function gridRow() {
    for (let index = 0; index < 16; index++){
        let square = document.createElement("div");
        square.style.width = "50px";
        square.style.height = "50px";
        square.style.backgroundColor = "black";
        square.style.margin = "3px";
        rowContainer.appendChild(square);
    };
};

gridRow();

// use for loop to create a column of 16 of these 
function gridColumn() {
    for (let index = 0; index < 16; index ++) {
        let rowContainer = document.querySelector("#rowContainer");
        gridContainer.appendChild(rowContainer);
    }
}

gridColumn();