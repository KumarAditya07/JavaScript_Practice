//funcation questin in javascript   

// The code you've provided seems to be an example of a self-invoking function or an immediately invoked function expression (IIFE).

// (function test (a){
//     a=1;
//     function test(a){
//         if(!a){
//             a=20;
//             console.log(a);
//     }
//         }
        
//         console.log(a);
//     test(a);
//     console.log(a);
// })();

//  v1 = {}
// v2 = {
//     key : "455"
// }

// v3 = {
//     key : "25"
// }

// v1[v2] = 23;
// console.log(v1);

// function find()
// {
// return {
// bar: "hey there"
// };
// }

// function good()
// {
// return
// {
// console.log("sds");
// };
// }
// console.log(good())
// console.log(find())
//O/P
// undefined
// { bar: 'hey there' }


// function sample () {
//     a = 20;
//     var b = 30;
//     }
//     sample();
//     console.log(a);
//     console.log(b);

// var str = "vwzxt";
// let count=0
// const result = str.charCodeAt(0);
// // for(let i = 1;i<str.length;i++){
// //     if(str.charCodeAt(i)<str.charCodeAt(i-1))
// //        {
// //         count++;
// //        }
// // }
// //we cannot use map direct in string becz it array method 
// [...str].map((char,i)=>{
//     if(str.charCodeAt(i)<str.charCodeAt(i-1))
//        {
//         count++;
//        }
// })
 
//  console.log(count);
 //

//  function sum()
// {
//     // let a = 8;
//     const b=2;
//     var c=a+b;
// }
// console.log(a,b,c)
// sum()
// console.log(a,b,c)

// let arr=[1,2,3,4,5]
// console.log(arr[2], arr.length);
// arr.length=0;
// console.log(arr[2], arr.length);

// for (var i = 0; i < 3; i++) 
// {
//   setTimeout(function() { alert(i); }, 1000 + i);
// }
 
// for(let i = 0; i <5; i++)
// {
// 	setTimeout(()=>{
// 		console.log(i);
//     },0)
// }  

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

(function fnA(a) {
    return (function fnB(b) {
      console.log(a); // What is logged?
    })(1);
  })(0);

  

