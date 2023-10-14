//Array


const myArr = [1,2,3,4,5];

const myArr2 = ["adi","am",23,45];

myArr2.push(99);

// console.log(myArr2);

//to check value exist or not in array
 console.log(myArr2.includes(99));

 //Slice & Splice

 /*
 slice(start, end): This method returns a shallow copy of a portion of an array into a 
 new array object selected 
 from start to end (end not included). The original array will not be modified.

 splice(start, deleteCount, item1, item2, ...): This method changes the contents of 
 an array by removing or replacing existing elements and/or adding new elements in place. 
 The start parameter specifies the index at which to start changing the array, and the 
 deleteCount parameter specifies the number of elements to remove. If you want to add elements, 
 you can specify them as subsequent parameters.
 */

 const myNew = myArr2.slice(1,3);
 console.log(myNew);
 console.log("myArr2 : ",myArr2);


 const myOld = myArr2.splice(1,3);
 console.log("myArr2 splice " , myArr2);
 console.log(myOld);


 const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Aditya"))
console.log(Array.from("Aditya"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
