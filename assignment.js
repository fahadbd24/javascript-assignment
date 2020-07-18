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