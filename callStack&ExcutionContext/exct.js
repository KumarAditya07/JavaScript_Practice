// 1.JS creates Global excution context 
// 2.Next it creates memory phase
// 3.Memory phase - In this phase,the variables are set to undefined 
//   until the execution phase(next phase) and the functions are set to their definitions.
// 4.Next it creates the execution phase
// 5.Execution phase - In this phase,the variables are initialsed to given values and 
//   when the function s are called,it creates a memory phase and execution phase for the function 
//   just like the main one.

// For live demo:
// browser > inspect > Sources
// create a snippet with few functions and visually experience the call stack.



// Context are of type : 
// Global Execution Context
// Function Execution Context
// Eval Execution Context

// Javascript code is run in two phases : S

// Memory creation phase (or called creation phase) : in this phase only memory is allocated to the variables functions
// Execution phase : Code is executed in this ohase
//                For every time the code is execute, a context is created, which consist of : 
// 		New Variable Enviorment
//                 Execution Thread
// 	 It returns the variable to the parent context, ie. global execution context, and then it is delete to free up the memory

