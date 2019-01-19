const gridContainer = document.querySelector("#container_inner");
var size = 36;

const initializeGrid = (gridContainer,size) =>{
  for(let i = 0;i<=size;i++){
      setGridSize(gridContainer,size)
      for(let j = 0;j<=size;j++){
          const square = document.createElement("div");
          square.classList.add("square");
          gridContainer.appendChild(square);
      };
  };
};
const setGridSize = (gridContainer, size)=>{
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
};
const addListener = (square)=>{
    
}


initializeGrid(gridContainer,size)