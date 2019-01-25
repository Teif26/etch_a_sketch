
const resolutionBtn = document.getElementById("resolution");
const shakeBtn = document.getElementById("shake");
const rdmColor = document.getElementById("rdmColor");
const gridContainer = document.querySelector("#container_inner");
var size = 36;

const initializeGrid = (gridContainer,size) =>{
 
    for(let i = 0;i<size;i++){
      setGridSize(gridContainer,size);
      for(let j = 0;j<size;j++){
          const square = document.createElement("div");
          square.classList.add("square");
          gridContainer.appendChild(square);
         
         square.addEventListener("mouseover", (el) =>{
         const opacity = getComputedStyle(el.target).getPropertyValue("--opacity");
            if(opacity < 1){
                return el.target.style.setProperty("--opacity", parseFloat(opacity,10) + .1);
            };

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
    if(newSize>=16 && newSize<112){
    initializeGrid(gridContainer,newSize);
    eraseCanvas();
}else{
    alert("Number not within range!");
}
    
};

shakeBtn.addEventListener("click", function(){
    shakeScreen();
    eraseCanvas();
  
    
});

 rdmColor.addEventListener("click",setRdmColor)

function shakeScreen() {
    var main = document.getElementById("container_main");
    main.style.animation = "shake .5s 1";
}
function eraseCanvas() {
    var newScreen = document.querySelectorAll(".square");
    resetOpacity(newScreen);
};

function setRdmColor(){
   var square = document.querySelectorAll(".square")
   var currentSize = Math.sqrt(Math.round(square.length));
    Array.from(document.querySelectorAll('.square')).forEach(el => el.remove());
    initializeGrid(gridContainer,currentSize);
    square = Array.from(document.querySelectorAll(".square"))
    
    square.forEach(div => div.onmouseover = randomColor(div));
}
 
randomColor = function(e) {
	e.style.background =  "#" + (Math.random()	* 0xFFFFFF<<0).toString(16);
}

function resetOpacity(newScreen) {
    newScreen.forEach((div) => {
        return div.style.setProperty("--opacity", 0);
    });
};
initializeGrid(gridContainer,size);