let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    console.log(inp.value);
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete")
    
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
})

ul.addEventListener("click", function(e) {
    if (e.target.nodeName == "BUTTON") {
        let listItem = e.target.parentElement;
        console.log(listItem)
        listItem.remove();
        console.log("Deleted")
    }
})