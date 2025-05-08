const container = document.querySelector(".container");

for (let i = 1; i < 257; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
}

const divChanges = document.querySelectorAll(".container>div");

    divChanges.forEach((divChange) => {
        divChange.addEventListener("mouseover", () => {
            divChange.style.cssText = "background: black";
        }); 
    });
   
