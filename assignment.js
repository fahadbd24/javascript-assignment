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
var floorTen = 15000;
var floorTwenty = 12000;
var floorTwentyPlus = 10000;

function brickCalculator(floor){ 

for (var i = 0; i <= 100; i++) {
if (floor <= 10) {
    return floorTen*floor;
    
} else if (floor <= 20) {
    return floorTwenty*floor;
    
} else ( floor > 20) 
    return floorTwentyPlus*floor;
}

}


var neededBricks = brickCalculator (11);
// console.log("The number of bricks you need is",  neededBricks);

    

// tinyFriend
const tinyFriend = [2391, 88, 23, 53, 86, 99, 4002, 1267, 142, 564]
const min = Math.min(...tinyFriend)
console.log("The lowest value of array is" ,min)