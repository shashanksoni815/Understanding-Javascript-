let inp = document.querySelector("#input")
let btn = document.querySelectorAll("#btn")
let equal = document.getElementById("equal")
let clear = document.getElementById("clear")
let back = document.getElementById("back")

btn.forEach((btns) => {
    btns.addEventListener("click", (event) => inp.value += event.target.value)
})

equal.addEventListener("click", () => inp.value = eval(inp.value))

clear.addEventListener("click", () => inp.value = "" )

back.addEventListener("click", () => inp.value = inp.value.slice(0, -1))