let isStatus = document.querySelector("h3");
let add = document.querySelector("#add");
let remove = document.querySelector("#remove");
let get = document.querySelector("#get");
let check = 0; 

add.addEventListener("click", function() {
    isStatus.innerHTML = "Friends"
})

remove.addEventListener("click", function() {
    isStatus.innerHTML = "Stranger"
})

get.addEventListener("click", function() {
    if(check == 0)  {
        isStatus.innerHTML = "Friends"
        get.textContent = "Remove Friend"
        
        check = 1;
    } else {
        isStatus.innerHTML = "Stranger"
        get.textContent = "Add Friends"
        check = 0;
    }
    
})

