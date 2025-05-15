const container = document.querySelector(".container");

function changeGridSize() {
    let squares = prompt("Input a number between 1 and 100");
    if (squares > 100 || squares < 1) {
        alert("Unable to create this grid");
    }
    else {
        createGrid(squares);
    }
}

function createGrid(size) {
    let gridCellSize = 1000 / size;
    for (let i = 0; i < size * size; i++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("grid-item");
        gridCell.style.width = `${gridCellSize}px`
        gridCell.style.height = `${gridCellSize}px`
        container.appendChild(gridCell);

        gridCell.addEventListener("mouseover", () => {
            gridCell.style.backgroundColor = "black";
        })
    }
}

createGrid(100);

   
