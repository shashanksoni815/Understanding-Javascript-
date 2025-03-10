let a = 2;
let b = 5;

let operator = "/";


switch (operator) {
    case "+" : console.log(a + b);
        break;
    case "-" : console.log(a - b);
        break;
    case "*" : console.log(a * b);
        break;
    case "/" : console.log(a / b);
        break;
    case "%" : console.log(a % b);
        break;
    default: console.log("err");
        break;
}