function feetToMile(feet) {
    var mile = feet / 5280; 
    return mile; 
}

var oneFeet = feetToMile(1);
// console.log("Result for feet to mile is ",  oneFeet);


function woodCalculator(chair,table,bed) {
    var chairTableBed = chair * table * bed;
    return chairTableBed;
    
}

var wood = woodCalculator(12,1,4);
// console.log("The cubic feet of wood is " , wood);


const tinyFriend = [2391, 88, 22, 53, 86, 99, 4002, 1267, 142, 564]
const min = Math.min(...tinyFriend)
console.log("The lowest value of array is" ,min)