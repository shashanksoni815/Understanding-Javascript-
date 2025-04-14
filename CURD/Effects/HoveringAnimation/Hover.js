let elem = document.querySelectorAll("#elem")

elem.forEach((e) => {
    console.log(e.childNodes[3])
    e.addEventListener("mouseenter", () => {
        
        e.childNodes[3].style.opacity = 1;
    })
    e.addEventListener("mouseleave", () => {
        e.childNodes[3].style.opacity = 0;
    })
    e.addEventListener("moucemove", () => {
        e.childNodes[3].style.left = e.x+"px";
        e.childNodes[3].style.top = e.y+"px";
    })
})














// let pic = document.querySelector("img")
// console.log(elem)
// elem.addEventListener("mousemove", (e) => {
//     console.log(e)
//     pic.style.left = e.x+"px";
//     pic.style.top = e.y+"px";
//     pic.style.opacity = 1;
// })

// elem.addEventListener("mouseenter", (e) => {
//     pic.style.opacity = 1;
// })

// elem.addEventListener("mouseleave", (e) => {
//     pic.style.opacity = 0;
// })