let inr = 4485;
let amount = 0;
let remaning = 0; 

if (inr >= 500) {
    console.log(`Number of 500rs notes : ${Math.floor(inr / 500)}`)
    remaning = inr % 500;
}
if (remaning >= 200) {
    console.log(`Number of 200rs notes : ${Math.floor(remaning / 200)}`)
    remaning = remaning % 200;
}
if (remaning >= 100) {
    console.log(`Number of 100rs notes : ${Math.floor(remaning / 100)}`)
    remaning = remaning % 100;
}
if (remaning >= 50) {
    console.log(`Number of 50rs notes : ${Math.floor(remaning / 50)}`)
    remaning = remaning % 50;
}
if (remaning >= 20) {
    console.log(`Number of 20rs notes : ${Math.floor(remaning / 20)}`)
    remaning = remaning % 20;
}
if (remaning >= 10) {
    console.log(`Number of 10rs notes : ${Math.floor(remaning / 10)}`)
    remaning = remaning % 10;
}
if (remaning >= 5) {
    console.log(`Number of 5rs notes : ${Math.floor(remaning / 5)}`)
    remaning = remaning % 5;
}
if (remaning >= 2) {
    console.log(`Number of 2rs notes : ${Math.floor(remaning / 2)}`)
    remaning = remaning % 2;
}
if (remaning >= 1) {
    console.log(`Number of 1rs notes : ${remaning}`)
}