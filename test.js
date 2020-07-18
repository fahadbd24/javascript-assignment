// function (){


// number_of_bricks = 0

// for(i =0; i< floor ; i++){
//     if (floor < 10)
//         number_of_bricks = number_of_bricks + 100;
//     elsif floor(floor > 10 && floor < 80)
//         number_of_bricks = number_of_bricks + 200;
//     else
//         number_of_bricks = number_of_bricks +300;

// }
// number_of_bricks;

// } 

// var neededBricks = brickCalculator (11);
// console.log("The number of bricks you need is",  neededBricks);


// brickCalculator


function brickCalculator(floor){ 

    var numOfBricks = 0; 

for (var i = 1; i <= floor; i++) {
if (i <= 10) {
    numOfBricks = numOfBricks + 1500;
    
} else if (i <= 20 && i > 10 ) {
    numOfBricks = numOfBricks + 1200;
    
} else 
    numOfBricks = numOfBricks + 1000;

}
    return numOfBricks;
}


var neededBricks = brickCalculator (21);
console.log("The number of bricks you need is",  neededBricks);