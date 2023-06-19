// function to make grid layout 
function makegrid(gridNumber){
   
   for (let i = 0; i < gridNumber * gridNumber; i++){

            //grid parent with row and columns number to be set by user
            let bigSquare = document.querySelector('.container');
                    bigSquare.style.gridTemplateColumns = `repeat(${gridNumber} , 1fr)`;
                    bigSquare.style.gridTemplateRows =`repeat(${gridNumber} , 1fr)`;

                //grid elements created with class name
                let miniSquares = document.createElement('tinysquares');
                    miniSquares.setAttribute("class", "minisquares");
                    bigSquare.appendChild(miniSquares);
    }
}