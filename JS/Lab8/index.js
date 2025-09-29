// 1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.

import { greetUser } from './utils.js';

console.log(greetUser("Amr")); 

// 2. Write a Promise that resolves after 2 seconds with the message "Task completed!". Use .then() to log the result to the console.

const task = new Promise((resolve) => {
  setTimeout(function() { resolve("Task completed! ")}, 2000);
});

// task.then((res) => console.log(res));

// 3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".

async function waitAndGreet() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "Welcome!";
}

// const ww= await waitAndGreet();
// console.log(ww)
waitAndGreet().then(console.log);

// 4. Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.

async function fetchdata() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const jss= await data.json()
    console.log(jss.name)
    console.log(jss.email)
}

fetchdata();
// 5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array.

async function fetchposts() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jss= await data.json()

    const titles = []

    for (let i = 0; i < 3; i++) {
        titles.push(jss[i].title);
    }
    console.log(titles)
}

fetchposts();

// 6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.

async function mytimer() {
    return new Promise((resolve) => {
    let count = 1;
    const interval = setInterval(() => {
      console.log(count);
      if (count === 3) {
        clearInterval(interval);
        resolve();
        }
            count++;
            }, 1000);
        });
    }

// const tt= await mytimer();
// console.log(tt)
mytimer();

// 7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.

function safefetch(input){
    try {
        return JSON.parse(input)
    } catch (error) {
        return `INVALID`
    }
}


console.log(safefetch('{"name": "Omar"}'))
console.log(safefetch('{name: Omar}'))

// 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.

async function todo() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
  const data_js = await data.json();
  return data_js.filter((e)=> e.completed).length;
}

const count = await todo();
console.log("count= ",count);


// 9. Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.

import DataFetcher from './fetchdata.js';

const fetcher = new DataFetcher();
const user = await fetcher.getUser(1);
console.log(user);