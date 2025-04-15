let inp = document.querySelector(".name")
let user = document.querySelector(".user-name")

// console.log(inp)

inp.addEventListener('input', (e) => {
    e.preventDefault()
    console.log(e.target.value)
    user.innerHTML = e.target.value;
})