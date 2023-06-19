
const bigSquare= document.querySelector(".container");
const eraserbtn = document.getElementById("btn1");
const blackbtn = document.getElementById("btn2");
const redbtn = document.getElementById("btn3");
const resizerbtn = document.getElementById("btn4");

// function to make grid layout with hover effect
function makeGrid(gridNumber){

    
   for (let i = 0; i < gridNumber * gridNumber; i++){

            //grid parent with row and columns number to be set by user
            
                    bigSquare.style.gridTemplateColumns = `repeat(${gridNumber} , 1fr)`;
                    bigSquare.style.gridTemplateRows =`repeat(${gridNumber} , 1fr)`;

                //grid elements created with class name
                let miniSquares = document.createElement('tinysquares');
                    miniSquares.setAttribute("class", "minisquares");
                bigSquare.appendChild(miniSquares);
    
                    //event delegation to change elements background color  when hover
                    bigSquare.addEventListener("mouseover",function (e){
                    e.target.style.background="red"
                    });


                    //eraser button to change to default  color when hover
                    eraserbtn.addEventListener('click',e =>{
                            bigSquare.addEventListener("mouseover",function (e){
                            e.target.style.background="aqua";
                            });
                        });

                        //A button to change elememts to black color
                        blackbtn.addEventListener('click',e =>{
                            bigSquare.addEventListener("mouseover",function (e){
                            e.target.style.background="black";
                            });
                        });

                        //A btutton to change to red color
                        redbtn.addEventListener('click',e =>{
                            bigSquare.addEventListener("mouseover",function (e){
                            e.target.style.background="red";
                            });
                        });

    }
}

 //function to resize the grid between 16-99 as user choice
 function resize(){
    let userGridNumber=Number(prompt("Enter a number between 16 and 99: "));
    
    if (userGridNumber < 16){
        alert("Please ,enter a number that is greater than 16.")
    }
    else if(userGridNumber > 99){
        alert("Please ,enter a number that is less than 99.")
    }
    else {
        resetGrid();
        makeGrid(userGridNumber);
    }
 }

 //before resize the grid again we must remove the all elements
function resetGrid(){
    bigSquare.replaceChildren();
}

//default grid size 16 * 16
makeGrid(16);
