// Conditional Statement
console.log("Before my if statement");
let age = 23;
if (age >= 18) {
    console.log("You cannot vote");
    console.log("You can drive");
}

console.log("after my if statement");

// Q. Create a trafic light system that shows what to do.

// // let colour = "green";
// if (colour == "red") {
//     console.log("Stop");
// }
// if (colour == "Yellow") {
//     console.log("Wait");
// }
// if (colour == "green") {
//     console.log("Go");
// }


// else if Statement
//   Grading Sheet 

let marks = 58;

if (marks >= 80) {
    console.log("A+");
} else if (marks >= 60) {
    console.log("A");
} else if (marks >= 33) {
    console.log("B");
} else if (marks < 33) {
    console.log("F");
}


// else Statement

let colour = "gren";
if (colour == "red") {
    console.log("Stop");
} else if (colour == "Yellow") {
    console.log("Wait");
} else if (colour == "green") {
    console.log("Go");
} else {
    console.log("Taffic light is broken.");
}

// Practice Question
// Create a system to calculate popcorn prices based on their sizes.
 
let size = "";
if (size == "XL") {
    console.log("Rs. 250");
} else if (size == "L") {
    console.log("Rs. 200");
} else if (size == "M") {
    console.log("Rs. 100");
} else{
    console.log("Rs. 50");
}