let fruits = ["mango", "apple", "banana", "pinaple", "graps"];
fruits.push("orange", "lichi");

for (let i = 0; i <fruits.length; i++) {
    console.log(i, fruits[i]);
}

// reverse of array

for (let i = fruits.length-1; i>=0; i--) {
    console.log(i, fruits[i]);
}

// Nested Arrays with nested loops

let heroes = [
    ["ironman", "spiderman","thor"],
    ["superman", "wonder-man", "flash"]
]

for(let i =0; i<heroes.length; i++) {
    console.log(i, heroes[i], heroes[i].length);
    for (let j = 0; j < heroes[i].length ; j++) {
        console.log(j, heroes[i][j]);       
    }
}

// 