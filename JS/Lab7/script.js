// 1- Write a function that greets a user, using a default parameter for the name.
function greet(name = "user") {
  return `Hello, ${name}!`;
}
// console.log(greet());
console.log(greet("Amr"));


// 2- Write a function that calculates the total price with a default tax rate parameter.
function total(price, tax = 0.3) {
  return price*(1+tax);
}
console.log(total(100));
console.log(total(100, 0.2));


// 3- Write a function that creates a user object, using a default role parameter.
function create_user(name, role = "user") {
    const obj={ name, role }
  return obj;
}
console.log(create_user("amr"));
console.log(create_user("amr", "admin"));


// 4- Write a function that multiplies any number of arguments using the rest operator.
function multall(...nums) {
  return nums.reduce((acc, n) => acc*n , 1);
}
console.log(multall(5,6,7));


// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.
function multfirstbyrest(first, ...rest) {
  return first * rest.reduce((acc, n) => acc + n, 0);
}
console.log(multfirstbyrest(10,1,2,3));


// 6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.
function strarr(...str) {
  return str;
}
console.log(strarr("a", "b", "c"));


// 7- Create a new array by combining two arrays using the spread operator.
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr = [...arr1, ...arr2];
console.log(arr);


// 8- Copy an array using the spread operator.
const arr_cp = [...arr];
console.log(arr_cp);


// 9- Merge two objects into one using the spread operator.
const obj1 = { name: 'amr', age: 25 };
const obj2 = { role: 'DS', dob: '15-4' };
const obj = { ...obj1, ...obj2 };
console.log(obj);


// 10- Update a property in an object using the spread operator to create a new object.
const upd_usr = { ...obj, age: 30 };
console.log(upd_usr);


// 11- Destructure an array to get the first and second elements into variables.
const numbers = [1, 2, 3];
// const [first, second] = [fir,sec,...numbers];
const [fir, sec] = numbers;
console.log(fir, sec);


// 12- Destructure an array to get the first element and the rest into another array.
const [firr, ...rstt] = numbers;
console.log(firr, rstt);


// 13- Destructure an object to extract two properties into variables.
const objjj = { name: "amr", age: 24, city: "zag" };
const myobj1= { name, city} = objjj;
console.log(name, "is from", city);


// 14- Destructure an object and rename the extracted properties.
const myobj2= { name:mynm, city:myct } = objjj;
console.log(mynm, "is from", myct);


// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.
function displayUser(obj) {
    const { name, city ,age }=obj
  return `${name}`;
}
console.log(displayUser(objjj));
