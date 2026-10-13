const container = document.querySelector("#container");
const newGrid = document.querySelector(".newGrid");

newGrid.addEventListener("click", ()=>{
    let choice = prompt("Enter the number of squares per side for the new grid","");
});


for (let i=1 ; i<=256 ; i++){

const item = document.createElement('div');
item.classList.add("grid");
container.appendChild(item);

item.addEventListener("mouseenter", (event) =>{
    item.style.backgroundColor = 'blue';
})



}

