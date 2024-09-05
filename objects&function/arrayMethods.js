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

// Destructuring (Objects)

const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "maths", "evs"],
    username: "karan@123",
    password: "abcd",
};

let {user, password } = student;