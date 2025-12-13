let main = document.getElementById("main");
let cursor = document.getElementById("cursor");
let cursor1 = document.getElementById("cursor1");
let cursor2 = document.getElementById("cursor2");
let cursor3 = document.getElementById("cursor3");
let cursor4 = document.getElementById("cursor4");
let cursor5 = document.getElementById("cursor5");

main.addEventListener("mousemove", function (e) {
    cursor.style.left = e.x+"px";
    cursor.style.top = e.y+"px";
    cursor1.style.left = e.x+"px";
    cursor1.style.top = e.y+"px";
    cursor2.style.left = e.x+"px";
    cursor2.style.top = e.y+"px";
    cursor3.style.left = e.x+"px";
    cursor3.style.top = e.y+"px";
    cursor4.style.left = e.x+"px";
    cursor4.style.top = e.y+"px";
    cursor5.style.left = e.x+"px";
    cursor5.style.top = e.y+"px";
}) 