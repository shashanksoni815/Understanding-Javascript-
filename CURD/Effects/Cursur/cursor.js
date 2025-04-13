let main = document.getElementById("main");
let cursor = document.getElementById("cursor");

main.addEventListener("mousemove", function (e) {
    cursor.style.left = e.x+"px";
    cursor.style.top = e.y+"px";
})