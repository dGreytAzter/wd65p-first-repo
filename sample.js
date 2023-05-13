//Variables var, let, const

var Name = "Joven"  //can update value

let nickName = "Greyt" //cannot change, but can update the value
nicName = "Jhovz"

const shortName = "Azter" //cannot change and unique

//Data Types: String, Number, Boolean, Null, Undefined

const animeName = "Hinata"; //string
const Age = 20; //number
const isMarried = true //boolean
const Power = null; //null
const powerInfinity = undefined; //undefined

console.log (typeof powerInfinity); //typeof: is to check what type of data

let = typeOfPower = ['x-ray vision', '360 degree vision', 'Byakugan', 'Twin Lion Fist']; //Array
typeOfPower[4] = "Naruto" //adding value in array
typeOfPower.push("Himawari") //adding value in array in last
typeOfPower.unshift("Boruto") //adding value in array in first
typeOfPower.pop() //delete value in array
typeOfPower.splice(0, 1) //delete the index value in array

console.log(Array.isArray(typeOfPower)) // check the property if array 

//Concatenate

console.log('Character: '+ animeName, 'Power: '+ typeOfPower[2]); //old way concatenate
console.log(`Character: ${animeName} Power: ${typeOfPower[1]}`) //ES6 new way of concatenate
console.log('Powers:' + typeOfPower[3]); //choosing the power in Array

//Object Literals

const objChar = {
    Name: 'Ash',
    Age: 16,
    Address: 'Pallet Town',
    Pokemon: ['Pikachu', 'Bullbasaur', 'Charmander', 'Squirtle'],
    Badges: ['Zephyr Badge', 'Hive Badge', 'Glacier Badge']
};

console.log(objChar);

//object inside array

const Contacts = [
    {
        id: 1,
        fullName: 'Joven Ison',
        isSave: 'Phone'
    },
    {
        id: 2,
        fullName: 'Jear Ison',
        isSave: 'SIM1'
    },
    {
        id: 3,
        fullName: 'Jonel Ison',
        isSave: 'Phone'
    },
    {
        id: 4,
        fullName: 'Judy Ann Ison',
        isSave: 'SIM2'
    }
];

console.log(Contacts[2].fullName);

//LOOP

// //for
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// //while
// let i = 0;
// while(i <5) {
//     console.log(`while loop value is ${i}`);
//     i++;
// }

//for
for (let i = 0; i < Contacts.length; i++) {
    console.log(Contacts[i].fullName);
}

//optimize ES6
for(let contact of Contacts){
    console.log(contact.isSave);
}

//forEach
Contacts.forEach( function(contact) {
    console.log(contact.id);
})

//while
let i = 0;
while(i <5) {
    console.log(`while loop value is ${i}`);
    i++;
}

//map
const contactFullName = Contacts.map (function(contact){
    return contact.fullName;
});

console.log(contactFullName);

//filter then map

const contactPhone = Contacts.filter(function(contact){
    return contact.isSave == 'Phone';
}).map(function(contact){
    return contact.fullName;
});

console.log(contactPhone);

//JSON Javascript Object Notation

const contactsJSON = JSON.stringify(Contacts);

console.log(contactsJSON);

//Conditionals //if() statement is a Logical

let x = '100';

if(x >= 150 || x > 110){
    console.log("IS EQUAL")
} else if(x < 150) {
    console.log("value is Less")
} else {
    console.log("NOT EQUAL")
}

//Function types

x = 200;
let y = 50;

function getSum (x, y) {
    return x + y;
}

console.log(getSum(x, y)); // old way


//arrow function
const getSum1 = (x, y) => {
    return x + y;
}

console.log(getSum1(x, y));

//Clean arrow function

const getSum2 = (x, y) => x / y;

console.log(getSum2(x, y));

//OOP Object Oriented Programming
//constructor function

function NarutoShippuden(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;

    this.getFullName = () => {
        return `${this.firstName} ${this.lastName}`;
    }
}

const charNS = new NarutoShippuden('Hinata', 'Hyuga', 'Dec 27 2000');
console.log(charNS.getFullName());
console.log(charNS);

//ES6 class
class DBZ {
    constructor(firstName, lastName, birthday){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//intantiate object

const charDB = new DBZ('Son', 'Goku', 'June 01 2000');

console.log(charDB);

//DOM Document Object Model

