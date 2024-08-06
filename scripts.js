const gridContainer = document.querySelector("div");

gridContainer.style.display = "flex";
gridContainer.style.justifyContent = "column";


function gridRow() {
    for (let index = 0; index < 16; index ++) {
        let rowContainer = document.createElement("div");
        gridContainer.appendChild(rowContainer);   
        for (let indexA = 0; indexA < 16; indexA++) {
            let square = document.createElement("div");
            square.style.width = "50px";
            square.style.height = "50px";
            square.style.backgroundColor = "black";
            square.style.margin = "1px";
            rowContainer.appendChild(square);
        };
    };
};

gridRow();