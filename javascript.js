const container = document.querySelector("#container");
const newGrid = document.querySelector(".newGrid");
const color = document.querySelector("#pick")
const pick = document.querySelector(".mode1");
const random = document.querySelector(".mode2");

pick.addEventListener("click", ()=>{

});
random.addEventListener("click",()=>{

});

newGrid.addEventListener("click", ()=>{
    let choice = prompt("Enter the number of squares per side for the new grid","");
    const Num = parseInt(choice);
    if (isNaN(Num)){
       return alert( "Enter a number");
    }else if (Num < 0 ) {
        return alert ("Enter a positive number")
    }else if (Num > 100 ){
        return alert ("The limit is 100 and below  ")
    }else {    
        return CreateGrid(Num);
    }

});




function CreateGrid(size){
    container.textContent = "";

        for (let i=1 ; i<= (size*size) ; i++){
        const item = document.createElement('div');
        item.classList.add("grid");
        container.appendChild(item);
        item.style.width = ( 480/size)+"px"
        item.style.height = ( 480/size)+"px"
        
        item.addEventListener("mouseenter", (event) =>{
            /*item.style.backgroundColor = color.value;})*/
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            item.style.backgroundColor =`rgb(${r}, ${g}, ${b})`;})
          

}

        
}
    


    
CreateGrid(16);

