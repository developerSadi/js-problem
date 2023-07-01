// function reverseStarng(str){
//     var reverse = "";
//     for(var i =0; i < str.length; i++){
//         var char = str[i];
//         var reverse =  char + reverse;
//     }
//     return reverse;
// }

// var statement = "Hello alien bhai brother.";
// var forAlien = reverseStarng(statement);
// console.log(forAlien);

function reverseStarng(str){
    var reverse = "";
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        var reverse = char + reverse;
    }
    return reverse;
}
var statement = "I am freelancer sekhsadi and sekhsadi adacemy.";
var foralien = reverseStarng(statement);

console.log(foralien);