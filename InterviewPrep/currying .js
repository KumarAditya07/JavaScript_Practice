// Q . sum(2)(6)(1)

const sum = (x)=>{
   return (y) =>{
       return (z) =>{
           return x+y+z;
       }
   }
}

console.log(sum(2)(6)(1));