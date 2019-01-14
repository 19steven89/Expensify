
// ** Object Destructuring **

// const person = {
//     name: "Steven",
//     age: 29,
//     location: {
//         city: "Glasgow",
//         temp: 3
//     }
// };

// // JS ES6 object destructuring. This gets the name and age properties from the person object
// // name = "Anonymous" is the default valus if name property doesnt exist in the person object
// // name: fname renames name to fname
// const {name: fname = "Anonymous", age} = person;
// console.log(`${name} is ${age}.`);

// // temp: temperature renames the temp object property to temperature
// const {city, temp: temperature} = person.location;
// if(city && temperature) console.log(`It's ${temperature}, in ${city}.`);

const book = {
    title: "Ego is the enemy",
    author: "Ryan Holiday",
    publisher: {
        name: "Penguin"
    }
};

// practice object destructuring
const {name: publisherName = "Self-Published"} = book.publisher; 

console.log(publisherName);

// Array destructuring
const address = ["1299 south juniper street", "Philadelphia", "Pennsylvania", "19147"];
const [, city, state = "New York"] = address;
console.log(`You are in ${city} ${state}.`);

const item = ["Coffee", "£2", "£2.50", "£2.75"];
const [type, ,medium] = item; 
console.log(`A medium ${type} costs ${medium}`);


