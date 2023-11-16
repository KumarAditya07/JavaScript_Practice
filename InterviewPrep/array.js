

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

console.log(greaterThanTwo);