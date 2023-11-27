let name = "Akshay";

let user = {
    name : "aditya",
    age  : 25,
     chiileObej : {
        getDetail : ()=>{
            console.log(this.name);
        },
     }
}

user.chiileObej.getDetail();