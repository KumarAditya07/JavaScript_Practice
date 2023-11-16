

const nums = [1,2,3,4,5];
//Map concept & deep copy 
const replica = nums.map((n,i,nums)=>{
    return n*3
})
const rep = nums;
// rep[0]=999; here its cchanging the orignal array as well to avoid we can use spread oprator

// console.log(replica);
// console.log(nums);
// console.log(rep);

//Filter Concept in JS

const greaterThanTwo = nums.filter((n,i,nums)=>{
    return n>3
});

// console.log(greaterThanTwo);

//Reduce() concept

const sum  = nums.reduce((accumulator,curr,i,nums)=>{
     return accumulator + curr;
},0);

// console.log(sum);

// I/p & O/p based question

let student = [
    {name:"Aman",uid:123,marks:90},
    {name:"Saurabh",uid:4123,marks:60},
    {name:"Akshay",uid:1623,marks:70},
    {name:"Aditya",uid:1423,marks:40},
]
// comvert name into uppercse
// return details of those who get more then 60 marks

const newStudent = student.map((stu)=>stu.name.toUpperCase());

// console.log(newStudent);

const moreMarks = student.filter(({marks})=>{       //we are destructring student here we can gernal use student then studen.marks
    return marks>60;
})

console.log(moreMarks);