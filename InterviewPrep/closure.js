// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();


//   function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();

  
//   function makeAdder(x) {
//     return function (y) {
//       return x + y;
//     };
//   }
  
//   const add5 = makeAdder(5);
//   const add10 = makeAdder(10);
  
//   console.log(add5(2)); // 7
//   console.log(add10(2)); // 12


//using IIFE
  // for(var i = 0;i<3 ;i++){
  //   ( function call (i){
  //     setTimeout(function (){
  //     console.log(i);
  //   },i*1000);})(i);
  // }

// using closure
  for(var i=0;i<3;i++){
      function loo(i){
      setTimeout(function (){
        console.log(i);
      },i*1000);
    }
    loo(i);
  }
