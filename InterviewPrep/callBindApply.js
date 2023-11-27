//CALL
let user = {
    name: "Aman",
    age: 30
}

function fetchData(){
    let age = 24;
    console.log("My name is " + this.name + "and age is " + age);
}

fetchData.call(user);

// Apply
// const person = {
//     firstName: 'Alice',
//     lastName: 'Smith',
// };

// function greet(message, punctuation) {
//     console.log(message + ' ' + this.firstName + ' ' + this.lastName + punctuation);
// }

// greet.apply(person, ['Hey', '!']); // Output: Hey Alice Smith!

// Bind
const person = {
    firstName: 'John',
    lastName: 'Doe',
};

function greet(message) {
    console.log(message + ' ' + this.firstName + ' ' + this.lastName);
}

const greetPerson = greet.bind(person);
greetPerson('Hello'); // Output: Hello John Doe
