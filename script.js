let mode = colorGridBlack;

function createGrid (index) { 
    const main = document.querySelector("main");
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("gridContainer");
    main.appendChild(gridContainer);

    for (let numOfRows = 0; numOfRows < index; numOfRows++) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        gridContainer.appendChild(newRow);

        for (let numOfColumns = 0; numOfColumns < index; numOfColumns++) {
            const newColumn = document.createElement("div");
            newColumn.classList.add("column");
            newRow.appendChild(newColumn);
        }
    }

    const reset = document.createElement("button");
    reset.classList.add("reset");
    reset.textContent = "Reset";
    main.appendChild(reset);
}

function deleteGrid () {
    const gridContainer = document.querySelector(".gridContainer");
    const main = document.querySelector("main");
    const reset = document.querySelector(".reset");

    main.removeChild(gridContainer);
    main.removeChild(reset);
    
}

function colorGridBlack (event) {
    event.target.style.backgroundColor = "black";
    event.target.style.opacity = Math.random();

}

function colorGridRainbow (event) {
    event.target.style.backgroundColor =  `rgba(${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 
        ${Math.random()})`;

    console.log(event.target.style.backgroundColor);
        
}

function clearGrid (event) {
    const columns = document.querySelectorAll(".column");
    for (let column of columns) {
        column.style.backgroundColor = "transparent";
        column.style.opacity = 1;
    }
}

function updateGrid(event) {
    updateSliderValue(event.target.value);
    deleteGrid();
    createGrid(event.target.value);

    const columns = document.querySelectorAll(".column");
    columns.forEach(hover);

    const reset = document.querySelector(".reset");
    reset.addEventListener("click", clearGrid);
}

function updateSliderValue (index) {
    const sliderValue = document.querySelector("#sliderValue");
    sliderValue.textContent = `${index} x ${index}`;
}

function hover (event) {
    event.addEventListener("mouseover", mode);
}

function initialise() {
    createGrid(16);
    const columns = document.querySelectorAll(".column");
    columns.forEach(hover);

    const reset = document.querySelector(".reset");
    reset.addEventListener("click", clearGrid);

    const slider = document.querySelector("#slider");
    slider.addEventListener("input", updateGrid);

    const monotoneButton = document.querySelector("#monotone");
    const rainbowButton = document.querySelector("#rainbow");

    monotoneButton.addEventListener("click", () => {
        if (mode === colorGridRainbow) {
            mode = colorGridBlack;
            columns.forEach((column) => {
                column.removeEventListener("mouseover", colorGridRainbow);
            })
            columns.forEach(hover);
            console.log(mode);
        }
        
    });

    rainbowButton.addEventListener("click", () => {
        if (mode === colorGridBlack) {
            mode = colorGridRainbow;
            columns.forEach((column) => {
                column.removeEventListener("mouseover", colorGridBlack);
            })
            columns.forEach(hover);
            console.log(mode);
        }
        
    });
}

initialise();



