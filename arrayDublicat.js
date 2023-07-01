// var number = [1,2,3,4,5,7,6,8,7,10,15,20,15];
// var uniqueNumber = [];
// for(i = 0; i < number.length; i++){
//     var elemt = number[i];
//     var index = uniqueNumber.indexOf(elemt);
//     if(index == -1){
//         uniqueNumber.push(elemt);
//     }
// }
// console.log(uniqueNumber);

var number = [1,2,3,4,5,6,1,2,4,6,8];

var uniqueNumber = [];
for(i = 0; i< number.length; i++){
    var element = number[i];
    var index = uniqueNumber.indexOf(element);
    if(index == -1){
        uniqueNumber.push(element);
    }
}
console.log(uniqueNumber);