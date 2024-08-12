let gridSize = 16;
let squareWidth = 750 / gridSize;

function gridRow() {
    // define grid container
    let gridContainer = document.createElement("div");
    gridContainer.className = "gridContainer";

    // define a container for the grid container
    let parent = document.getElementById("parent");
    parent.appendChild(gridContainer);

    // create 16 containers, 1 for each row
    for (let index = 0; index < gridSize; index ++) {
        let rowContainer = document.createElement("div");
        rowContainer.className = "rowContainer";

        gridContainer.appendChild(rowContainer);   

        // add squares to each rowContainer
        for (let indexA = 0; indexA < gridSize; indexA++) {
            let square = document.createElement("div");
            square.className = "square";
            square.style.width = squareWidth + "px";
            square.style.height = squareWidth + "px";
            // squares turn white on mouseover
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "white";
            });

            rowContainer.appendChild(square);
        };
    };
};

gridRow();


// create reset button
const resetButton = document.querySelector(".reset");
resetButton.textContent = "Reset";
resetButton.style.margin = "5px";

resetButton.addEventListener("click", () => {
    let gridInput = prompt("How many squares wide and tall should the grid be?", gridSize);
    gridInput = parseInt(gridInput);

    // delete gridContainer
    const parent = document.getElementById("parent");
    while (parent.firstChild){
    parent.removeChild(parent.firstChild);
    };
    
    // set grid size
    if (typeof(gridInput) === "number" && gridInput < 100) {
        gridSize = parseInt(gridInput);
        squareWidth = 750 / gridSize;
        console.log(gridInput);
    } else {
        gridSize = 16;
    };

    // reinitialize the grid with the new parameters
    gridRow();
});