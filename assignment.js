// feetToMile
function feetToMile(feet) {
    var mile = feet / 5280; 
    return mile; 
}

var oneFeet = feetToMile(1);
// console.log("Result for feet to mile is ",  oneFeet);


// woodCalculator
function woodCalculator(chair,table,bed) {
    var chairTableBed = chair * table * bed;
    return chairTableBed;
    
}

var wood = woodCalculator(12,1,4);
// console.log("The cubic feet of wood is " , wood);

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

    


    

// tinyFriend
const tinyFriend = [2391, 88, 23, 53, 86, 99, 4002, 1267, 142, 564]
const min = Math.min(...tinyFriend)
// console.log("The lowest value of array is" ,min)