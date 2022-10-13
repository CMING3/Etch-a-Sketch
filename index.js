const gridContainer = document.querySelector(".grid-container")
let drawPanelSize = 16;



function createPanel(){
    let gridContainerStyle = "";
    //generate drawpanel grid style
    for (i=0; i<drawPanelSize; i++){
        gridContainerStyle+="auto "
    }
    gridContainer.style.gridTemplateColumns = gridContainerStyle;

    //create grid item
    for (i=0; i<drawPanelSize*drawPanelSize;i++){
        gridContainer.innerHTML+=`<div class="grid-item"></div>`
    }

    //edit grid item style
    const gridItems = document.querySelectorAll(".grid-item")
    gridItems.forEach((item)=>{
        item.style.width=`${(100/drawPanelSize)}`;
        item.style.height=`${(100/drawPanelSize)}`;
        item.style.backgroundColor="white"

        //add color function here
        item.addEventListener("mousedown", coloring)
    })
}
// coloring black to panel items
function coloring(e){
    e.target.style.backgroundColor="black"
}

//change panel resolution
const resolution = document.querySelectorAll(".resolution")
resolution.forEach((choice)=>{
    choice.addEventListener("click", (e)=>{
        restartPanel();
        drawPanelSize=e.target.value;
        createPanel();
    })
})


//reset draw panel
function restartPanel(){
    drawPanelSize = 0;
    gridContainer.innerHTML="";
}


//clean panel
const clearAllBtn = document.querySelector(".clear-all")

function clearAllColor(){
    const gridItems = document.querySelectorAll(".grid-item")
    gridItems.forEach((item)=>{
        item.style.backgroundColor="white";
    })
}

clearAllBtn.addEventListener("click", clearAllColor)