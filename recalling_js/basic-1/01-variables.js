const accountId = 144553
let accountEmail = "shashank@gmail.com"
var accountPassword = "123456"
accountCity = "Indore"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Indore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])