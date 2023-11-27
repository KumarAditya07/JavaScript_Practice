// let name = "Akshay";

// let user = {
//     name : "aditya",
//     age  : 25,
//      chiileObej : {
//         getDetail : ()=>{
//             console.log(this.name);
//         },
//      }
// }

// user.chiileObej.getDetail();

// class user {
//     constructor(n){
//         this.name = n;
//     }

//     getDetail=()=>{
//         console.log(this.name);
//     }
// }

// const u = new user("Saurab");
// u.getDetail();

let calculator = {
    read(){
    this.a = +prompt("a = ",0);
    this.b  = +prompt("b = ",0);
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
     },
}
calculator.read();
calculator.sum();
calculator.mul();