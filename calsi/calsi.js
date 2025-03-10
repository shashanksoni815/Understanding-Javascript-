let a = document.getElementById("num-A");
let operator = document.getElementById("operator");
let b = document.getElementById("num-B");
let sub = document.querySelector("button");

sub.addEventListener("click", function() {
    console.log(a.value)
    console.log(b.value)
    console.log(operator.value)
    let h3 = document.querySelector("h3");

    switch (operator.value) {
        case "+" : 
        h3.innerText = (Number(a.value) + Number(b.value));
             break;
        case "-" : 
        h3.innerText = (a.value - b.value);
            break;
        case "*" : 
        h3.innerText = (a.value * b.value);
            break;
        case "/" : 
        h3.innerText = (a.value / b.value);
            break;
        case "%" : 
        h3.innerText = (a.value % b.value)
            break;
    
        default: 
        h3.innerText = ("err");
            break;
    }
    
})








// let a = 2;
// let b = 5;

// let operator = "/";


// 