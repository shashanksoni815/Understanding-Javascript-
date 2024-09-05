let value = [1, 2, 3, 4];


let square = value.map(function (el) {
    return el*el;
});

let sum = square.reduce((func, el) => func+el);

let avg = sum / value.length;

console.log(avg);