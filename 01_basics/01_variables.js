const accId = 123445;
let accEmail = "adity@sbi.com";
var accPassword = "11212";
accCity = "Bengaluru";
let accState;
//if we only leave varible by defining it & not giving any value then it show undifined. 



//accId = 22 // not allowed to modify const varible 

/*
Prefer not to use var 
because of issue in block scope & functional scope 

*/

accEmail = "aman@paytm.com";
accPassword = "333333333";
accCity = "Kolkata";

console.table([accEmail,accPassword,accCity,accState]);