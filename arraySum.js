// var number = [10,20,30,40,50,60,40,50];
// var sum  = 0;
// for(var i = 0; i < number.length; i++){
//     var elemet = number[i];
//     sum = sum + elemet;
// }
// console.log(sum);

// function getArraySum(numbers){
//     var sum = 0;
//     for(i =0; i < numbers.length; i++){
//         var elemet = numbers[i];
//          sum = sum + elemet;

//     }
//     return sum;
// }
// var numbers = [10,50,150,78,68,22,55];
// var result = getArraySum(numbers);
// console.log(result);
function getArraySum(number){
    var sum = 0;
    for(i = 0; i< number.length; i++){
        var elemet = number[i];
        sum = sum + elemet;
    }
    return sum;
}
var number = [150,60,40,74,60,80,180];
var result = getArraySum(number);
console.log(result);