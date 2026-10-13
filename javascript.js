const container = document.querySelector("#container");
const newGrid = document.querySelector(".newGrid");

newGrid.addEventListener("click", ()=>{
    let choice = prompt("Enter the number of squares per side for the new grid","");
});




function CreateGrid(size){
    
    
    for (let i=1 ; i<= (size*size) ; i++){
        const item = document.createElement('div');
        item.classList.add("grid");
        container.appendChild(item);
        
        item.addEventListener("mouseenter", (event) =>{
            item.style.backgroundColor = 'blue';})

}
    }
    
CreateGrid(16);

