const resolutionBtn = document.getElementById("resolution")
const shakeBtn = document.getElementById("shake")
const rdmColor = document.getElementById("rdmColor")
const gridContainer = document.querySelector("#container_inner");
var size = 36;

const initializeGrid = (gridContainer,size) =>{
  for(let i = 0;i<=size;i++){
      setGridSize(gridContainer,size)
      for(let j = 0;j<=size;j++){
          const square = document.createElement("div");
          square.classList.add("square");
          gridContainer.appendChild(square);
         
         square.addEventListener("mouseover", (el) =>{
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

resolutionBtn.addEventListener("click", setResoltion)

function setResoltion(){
    let newSize = prompt("Enter a number between 16 and 112");
    initializeGrid(gridContainer,newSize)
    
};

shakeBtn.addEventListener("click", function(){
    var main = document.getElementById("container_main")
 main.style.animation = "shake .5s 1";
 var newScreen = document.querySelectorAll(".square");
   newScreen.forEach((div)=>{
    return div.style.setProperty("--opacity", 0)  ;
    
   })
  

})

// function shakeInitialize(){
//  var main = document.getElementById("container_main")
//  main.style.animation = "shake .5s 1"
//  const newScreen = document.querySelectorAll(".square")
 
//  return newScreen.style.setProperty("opacity, 0")
// }



initializeGrid(gridContainer,size)