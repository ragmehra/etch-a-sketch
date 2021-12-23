function createGrid (totalRows, totalColumns) { 
    totalRows = 16;
    totalColumns = 16;
    const main = document.querySelector("main");
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("gridContainer");
    main.appendChild(gridContainer);

    for (let numOfRows = 0; numOfRows < totalRows; numOfRows++) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        gridContainer.appendChild(newRow);

        for (let numOfColumns = 0; numOfColumns < totalColumns; numOfColumns++) {
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

function colorGrid (event) {
    event.target.style.backgroundColor = "black";

}

function clearGrid (event) {
    const columns = document.querySelectorAll(".column");
    for (let column of columns) {
        console.log(column);
        column.style.backgroundColor = "white";
    }

}

createGrid();
function hover (event) {
    event.addEventListener("mouseover", colorGrid);
}
const columns = document.querySelectorAll(".column");
columns.forEach(hover);
const reset = document.querySelector(".reset");
reset.addEventListener("click", clearGrid);

