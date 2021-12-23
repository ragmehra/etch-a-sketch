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

function colorGrid (event) {
    event.target.style.backgroundColor = "black";

}

function clearGrid (event) {
    const columns = document.querySelectorAll(".column");
    for (let column of columns) {
        console.log(column);
        column.style.backgroundColor = "transparent";
    }
}

function findIndex(event) {
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
    event.addEventListener("mouseover", colorGrid);
}

function initialise() {
    createGrid(16);
    const columns = document.querySelectorAll(".column");
    columns.forEach(hover);

    const reset = document.querySelector(".reset");
    reset.addEventListener("click", clearGrid);

    const slider = document.querySelector("#slider");
    slider.addEventListener("input", findIndex);
}

initialise();



