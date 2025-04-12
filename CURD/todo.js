let input = document.getElementById("input");
let add = document.getElementById("add")


add.addEventListener('click', function()  {
    if (input.value === "") {
        return alert("Enter Your Task")
    }
    let task = input.value.trim();
    console.log(task)

    let ul = document.getElementById("ul");
    let li = document.createElement("li");
    let span = document.createElement("span")
    let edit = document.createElement("button")
    let del = document.createElement("button")

    span.textContent = task;
    edit.textContent = "Edit"
    del.textContent = "Delete"

    ul.appendChild(li)
    li.appendChild(span)
    li.appendChild(edit)
    li.appendChild(del)

    del.addEventListener('click', function() {
        console.log("delete")
        let ele = del.parentElement
        // let elem = del.parentNode
        console.log(ele)
        ele.remove()
        // li.remove()

    })

    edit.addEventListener('click', function() {
        console.log("Edit")
        let ele = edit.previousSibling;
        // console.log(ele.textContent)

        let editText = prompt("Edit your task", ele.textContent)
        if (editText !== ""  ) {
            // ele.replace(editText.value);
            ele.textContent = editText.trim()
        }

    })

    input.value = "";
})
