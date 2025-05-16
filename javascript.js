const container = document.querySelector(".container");

function createGrid(size) {
    container.innerHTML = "";

    let gridCellSize = 960 / size;
    for (let i = 0; i < size * size; i++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("grid-item");
        gridCell.style.width = `${gridCellSize}px`
        gridCell.style.height = `${gridCellSize}px`
        container.appendChild(gridCell);

        gridCell.addEventListener("mouseover", () => {
            gridCell.style.backgroundColor = randomRGB();
            updateOpacity(gridCell);
        })
    }
}

createGrid(16);

function updateOpacity(gridCell) {
    let currentOpacity = parseFloat(gridCell.style.opacity) || 0.1;

    currentOpacity += 0.1;
    if (currentOpacity > 1) {
        currentOpacity = 1;
    }
    gridCell.style.opacity = currentOpacity;
}

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const button = document.querySelector(".set-grid");

button.addEventListener("click", () => {
    let squares = parseInt(prompt("Input a number between 1 and 100"));

    if (squares > 100 || squares < 1) {
        alert("Unable to create this grid");
    }
    else {
        createGrid(squares);
    }
})
