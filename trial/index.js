let butt = document.getElementById('btn');
let hey = document.getElementById('hello');
let yellow = document.getElementById('yellow');
let blue = document.getElementById('blue');

butt.addEventListener('click', () => {
    document.getElementById('date').innerHTML= Date();
})

hey.addEventListener('click', () => {
    document.getElementById('hi').innerHTML=("Hello JavaScript");
})

yellow.addEventListener('click', () => {
    document.getElementById('box').style.backgroundColor="yellow";
})

blue.addEventListener('click', () => {
    document.getElementById('box').style.backgroundColor="blue";
})