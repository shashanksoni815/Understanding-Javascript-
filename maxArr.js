let num = [ 2, 3, 4, 8, 85, 5, 54, 9, 93, 40];

let max = -1;

for (let i = 0; i < num.length; i++) {
    if(max < num[i]) {
        max = num[i];
    } 
};

console.log(max);


let result = num.reduce((max, el) => {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});

console.log(result);