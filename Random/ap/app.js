// let arr = ["vbnm", "xcfghjk", "zxcfghjkl0, xcvbnm"];

// objects

const person = {
    fName : "fName",
    lName : "lName",
    age : "age",
    country : "country",
    language : "English",
}

// person.fName = "Abcd";
// person.lName = "efgh";
// person.age = "12";
// person.country = "India";

// person.fName = "ijkl";
// person.lName = "mnop";
// person.age = "13";
// person.country = "INDIA";

// const father = new person("father", "Name", 32, "India");
// const mother = new person("Mother", "Name", 29, "India");
// const son = new person("Son", "Name", 10, "India");
// const daughter = new person("Daughter", "Name", 8, "India");

 
// console.log(Object.values(person.age))
const myMap = new Map(Object.entries(person))
const myValues = Object.values(person)
const myKeys = Object.keys(person)
// console.log(`${myValues} : ${myKeys}`);


let txt = "";
for (let x in person) {
    txt += person[x];
}
console.log(txt)
