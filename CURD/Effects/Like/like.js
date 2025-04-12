let container = document.querySelector(".container")
let like = document.querySelector("i")
let img = document.querySelector("img")


img.addEventListener("dblclick", function() {
    like.style.transform = 'translate(-50%, -50%) scale(2)'
    console.log("clicked ")
    setTimeout(function () {
         like.style.transform = 'translate(-50%, -50%) scale(0)'
    }, 1000)
})