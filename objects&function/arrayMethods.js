// forEach Method

let arr = [1, 2, 3, 4, 5];

// let print = function (el) {
//     console.log(el);
// };

// arr.forEach(print);

arr.forEach(function (el) {
    console.log(el);
});

arr.forEach( (el) => {
    console.log(el);
});

// map method
 
let double = arr.map((el) => {
    return el * el;
});

//filter Method

let even = arr.filter((arr) => (arr%2 == 0));