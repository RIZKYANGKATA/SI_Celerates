//Tipe data String
const car_name1 = "Rubicon"
const car_name = "Volvo XC60"
console.log(car_name);
console.log(typeof car_name);

//Tipe data Boolean
const bool = false;
console.log(bool);
console.log(typeof bool);

//Tipe data Number
const x1 = 34.0;
const x2 = 35;
const resault = x1 + x2;
console.log(resault);
console.log(typeof x1);
// console.log(billion);

// Tipe data Array
const arr = ["Spider", "Cat", "Dog"];
console.log(arr);
console.log(arr[1]);

//Tipe data Object
const person = {
    first_name: "John",
    last_name: "Smith",
    age: 50,
    eye_color: "Blue"
};

console.log(person);
console.log(person.first_name);
console.log(person.last_name);
console.log(person.age);
console.log(person.eye_color);

//Logical Operators
const a = 10;
const b = 12;

//Operators && -> AND
console.log(a < 15 && b > 10);
console.log(a < 15 && b > 15);

//Operators || -> OR
console.log(a < 15 || b > 10);
console.log(a < 15 || b > 15);

//Operators ! -> NOT
console.log(!(a > 12));
console.log(!(a < 15 && b > 10));

//Requality Comporison
const x = 15;
const y = '15';
const z = 10;
console.log(x == y);
console.log(x === y);
console.log(x >= 15);
console.log(y < 15);
