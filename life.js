
let row=20,cols=20;
let grid=createGrid();

function createGrid(){

    let result=[];

    for (let i = 0; i <row ; i++) {
    let row=[];
    for (let j = 0; j < cols; j++) {
        row.push(false);
        
    }
       result.push(result); 
    }
    return result;
}

function nextGeneration(){
  let newGrid=createGrid();
   for (let i = 0; i < row ; i++) {
       for (let j = 0; j < cols ; j++) {
           let direction=[[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1],[1,1]];
           let aliveNeighbros=0
           for(d of direction){
               let neighborrow=i+d[0];
               let neighborCol=j+d[1];
               if (neighborrow >=0 && neighborCol>=0 && neighborrow <row && neighborCol < cols) {

                if (grid[neighborrow][neighborCol]) {
                       aliveNeighbros++;
                    
                }
                   
               }
           }
           
       }
       
   }
   grid=newGrid;
}

function setup() {
   createCanvas(600,600); 
   console.log(grid);
  }
  
  function draw() {
    backgroung(255);

     for(let i=0;i< row;i++){

        for(let j=0;j< cols;j++){
            if (grid[i][j]) {
                fill(0);
               react(j/cols*width,i/row*height,width/cols,height/row);
            }
        }
     }
    
    strocke(200);

    for (var i = 0; i <= row; i++) {
       line(0,i/row*height,height,i/row*height);
    }
   
   for (var i = 0; i <= cols; i++) {
       line(i/cols*width,width,i/cols*width);
    }

  }

  function mouseClicked(){
      let row11=Math.floor(mouseY/height*row);
      let col=Math.floor(mouseX/width*cols);
      if (row1 >=0 && col>=0 && row<row&& col<cols) {
      grid[row][col]=!grid[row][col];
  }
  }
  let butt=document.querySelector(".play-butt");
  butt.addEventListener("click",function(){
      console.log("salman");
      play!=play;
if (play) {
    butt.textContent="Pause";
} else {

    butt.textContent="Play"
}
  });


  