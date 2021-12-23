


function colorGrid (e) {
    e.target.style.backgroundColor = "black";

}


function createGrid () { 
    const main = document.querySelector("main");
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("container");
    main.appendChild(gridContainer);

    for (let numOfRows = 0; numOfRows < 16; numOfRows++) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        newRow.textContent = "-->";
        gridContainer.appendChild(newRow);

        for (let numOfColumns = 0; numOfColumns < 16; numOfColumns++) {
            const newColumn = document.createElement("div");
            newColumn.textContent = ".";
            newColumn.classList.add("column");
            newRow.appendChild(newColumn);
        }
    }
}

createGrid();