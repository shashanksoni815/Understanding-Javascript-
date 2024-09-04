const sum = (a, b) => {
    console.log(a + b);
}

//  implicit Return Function

const add = (a, b) => (
    a + b
);

// cube of a number 

const cube = n => n * n * n;

// this function with arrow function amd function

const students = {
    name: "aman",
    marks: 95,
    prop: this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's function
        return this.marks;
    },
    getInfo1: function () {
       setTimeout(() => {
        console.log(this); // student
       }, 2000); 
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this); // window
        }, 3000);
    }
};