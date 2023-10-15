// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// we need to use ; for end the funcation  if we are going to invoke another funcation

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
