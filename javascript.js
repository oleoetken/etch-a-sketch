const container = document.querySelector(".container");

const button = document.querySelector(".button");
const btn = document.createElement("button");
btn.textContent = "Set squares";

btn.addEventListener("click", () => {
    let squareButton = prompt("Set number of squares");

    if (squareButton > 100) {
        return alert("Please choose a smaller number");
    } 
    else {
        console.log(document.querySelectorAll("grid").length);
        document.querySelectorAll(".grid").forEach(el => el.remove());
        
    }
});
button.appendChild(btn);


for (let i = 1; i < 257; i++) {
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
   
