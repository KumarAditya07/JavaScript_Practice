let name = "Akshay";

let user = {
    name : "aditya",
    age  : 25,
    getDetail : ()=>{
        console.log(this.name);
    },
}

user.getDetail();