// Q . sum(2)(6)(1)

const sum = (x)=>{
    return (y) =>{
        return (z) =>{
            return x+y+z;
        }
    }
 };
 
 console.log(sum(2)(6)(1));

//  Q . Infinite Currying ->  add(1)(12)(4)....(n)

const add = (x)=>{
    return (y) =>
      {
        if(y) return add(x+y);
         
        return x;
      };
    }

    console.log(add(1)(2)(4)());
