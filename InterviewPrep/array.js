const nums = [1,2,3,4,5];

const replica = nums.map((n,i,nums)=>{
    return n*3
})
const rep = nums;
rep[0]=999;

console.log(replica);
console.log(nums);
console.log(rep);