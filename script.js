let mode;

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
    if (event.buttons > 0) {
    event.target.style.backgroundColor = "black";
    event.target.style.opacity = Math.random();
    }

}

function colorGridRainbow (event) {
    if (event.buttons > 0) {
    event.target.style.backgroundColor =  `rgba(${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 
        ${Math.random()})`;
    }
        
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
    removeColorListeners();
    deleteGrid();
    createGrid(event.target.value);

    mode = null;

    const reset = document.querySelector(".reset");
    reset.addEventListener("click", clearGrid);

}

function removeColorListeners() {
    const columns = document.querySelectorAll(".column");
    for(let column of columns) {
        if (mode === colorGridRainbow) {
        column.removeEventListener("mouseenter", colorGridRainbow)
        }
        else if (mode === colorGridBlack) {
            column.removeEventListener("mouseenter", colorGridBlack);
        }
    }
}

function updateSliderValue (index) {
    const sliderValue = document.querySelector("#sliderValue");
    sliderValue.textContent = `${index} x ${index}`;
}

function hover (event) {
    event.addEventListener("mouseenter", mode);
}

function setupModes() {
    
    const monotoneButton = document.querySelector("#monotone");
    const rainbowButton = document.querySelector("#rainbow");

    monotoneButton.addEventListener("click", () => {
        const columns = document.querySelectorAll(".column");
        if (mode !== colorGridBlack) {
            mode = colorGridBlack;
            columns.forEach((column) => {
                column.removeEventListener("mouseenter", colorGridRainbow);
            })
            columns.forEach(hover);
            console.log(mode);
        }
        
    });

    rainbowButton.addEventListener("click", () => {
        const columns = document.querySelectorAll(".column");
        if (mode !== colorGridRainbow) {
            mode = colorGridRainbow;
            columns.forEach((column) => {
                column.removeEventListener("mouseenter", colorGridBlack);
            })
            columns.forEach(hover);
            console.log(mode);
        }
        
    });
}

function initialise() {
    createGrid(16);
    const columns = document.querySelectorAll(".column");
    //columns.forEach(hover);

    const reset = document.querySelector(".reset");
    reset.addEventListener("click", clearGrid);

    const slider = document.querySelector("#slider");
    slider.addEventListener("input", updateGrid);

    setupModes();
    
}

initialise();



