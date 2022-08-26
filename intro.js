//Declaring a variable
const greet = "Hello"; //string declaration
var names = ["John", "Doe", "Briggs", "Johnson", "Dave", "Sam", "Joe", "Philip", "Sarah", "Sydney"]; //names declaration
//Loops - For Loop, While Loop, For each
console.log("Iterating in my For Loop");
/*for (let x = 0; x <= names.length; x +=1) {
    console.log(greet + " " + names[x]);
}
for (let index = 0; index <= 50; index++) {
    console.log(index%2==1);
}*/
//arguments
function calc(arg1, arg2, _op){
    //let _oper = ["^", "*", "+", "-", "/"];
    let arg_one = parseFloat(arg1);
    let arg_two = parseFloat(arg2);
    let result = 0;
    switch (_op) {
        case "^":
            result = arg_one ** arg_two;
            break;
        case "*":
            result = arg_one * arg_two;
            break;
        case "+":
            result = arg_one + arg_two;
            break;
        case "/":
            result = arg_one / arg_two;
            break;
        case "-":
            result = arg_one - arg_two;
            break;
        default:
            break;
    } 
    return result;
}

let ans = calc(10, 2, "^");
console.log("The answer is " + ans);