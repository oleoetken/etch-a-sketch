const container = document.querySelector(".container");


const button = document.querySelector(".button");
const btn = document.createElement("button");
btn.textContent = "Set squares";

function createGrid(squareNumber) {

    for (let i = 0; i < squareNumber * squareNumber; i++) {
        const div = document.createElement("div");
        div.classList.add = "grid";
        container.appendChild(div);
    }
    
    const divChanges = document.querySelectorAll(".container>div");
    
        divChanges.forEach((divChange) => {
            divChange.addEventListener("mouseover", () => {
                divChange.style.cssText = "background: black";
            }); 
        });

}

createGrid(16);


btn.addEventListener("click", () => {
    let squareButton = prompt("Set number of squares");

    if (squareButton > 100) {
        return alert("Please choose a smaller number");
    } 
    else {
        createGrid(squareButton);
        
    }
});
button.appendChild(btn);


   
