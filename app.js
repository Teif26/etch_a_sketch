const gridContainer = document.querySelector("#container_inner");
var size = 216;

const initializeGrid = (gridContainer,size) =>{
  for(let i = 0;i<=size;i++){
      setGridSize(gridContainer,size)
      for(let j = 0;j<=size;j++){
          const square = document.createElement("div");
          square.classList.add("square");
          gridContainer.appendChild(square);
         
         square.addEventListener("mouseenter", (el) =>{
         const opacity = getComputedStyle(el.target).getPropertyValue("--opacity");
            if(opacity <= 1){
                return el.target.style.setProperty("--opacity", parseFloat(opacity,10) + .1);
            }

          });
      };
  };
};
const setGridSize = (gridContainer, size)=>{
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
};





initializeGrid(gridContainer,size)