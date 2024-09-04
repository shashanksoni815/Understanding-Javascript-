function sum(a, b) {
    console.log(a+b);
}

sum(5, 8);

// Avg of three numbers
function avg3(a, b, c) {
    console.log((a + b + c)/3);
}

avg3(5, 9, 7);

// Function with if else statement

function isAdult(age) {
    if (age>= 18) {
        return "adult";
    } else {
        return "not adult";
    }
}

// function that returns the sum of 1 to n.

function getSum(n) {
    let sum = 0;
    for (let i = 0; i <=n; i++) {
        sum =+i;
    }    
    return sum;
}

// combine all the strings with the help of functions.

let str = ["hi", "hello", "tata", "bye"];

function concat(str) {
    let result;

    for (let i = 0; i < str.length; i++) {
        result += str[i];       
    }
    console.log(result);
}

// Function Experation

let namee = "Shashank";

let  add = function (a, b) {
    return a+b;
}

// Higher order function

function multiple(func, count) {
    for (let i = 0; i <=count; i++) {
        func();       
    }
}

let greet = function() {
    console.log("Hello");
}

multiple(greet, 5);

// Higher order Function Return a function

function oddEvenTest(request) {
    if (request == "odd") {
        return function (n) {
            console.log(!(n%2 == 0));
        }
    } else if (request == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }
    } else {
        console.log("wring request");
    }
}