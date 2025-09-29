// 1. Predict (in comments) the output order of this code, then run to verify.
   console.log(a());
   var b = function(){ return 'B'; };
   function a(){ return 'A'; }
   console.log(b());
//    After verifying, explain (one short line) why a works before definition and b does not.

// A then B
// bcuz func. declartaion enables hoisting while assiggning general func. to a var doesnt..

// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).

function sum(a,b){
    return a+b
}
let add = function(a,b){
    return a+b
}
console.log(sum(3,4));
console.log(add(3,4));


// 3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.
let factorial = function fact(n){
    if(n<=1)
        return 1;
    return n*fact(n-1)
}
console.log(factorial(5))
// console.log(fact(5)) #not defined

// 4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.

function showInfo(){
    console.log('New')
    console.log(arguments.length)
    for (let i=0; i<arguments.length; i++){
        console.log(arguments[i])
    }
}
showInfo();
showInfo(1,2);
showInfo(1,2,3,4,5);

// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.

function mutate(x,y){
    console.log('before: ',arguments[0] , arguments[1])
    x='a';
    y='b';
    console.log('after: ',arguments[0] , arguments[1])
}
// it chnaged!

mutate(1,2);
// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().


function sumAll(){
    let sum = 0;
    for (let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(sumAll(2,5,3));
console.log(sumAll());

// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.

function sumAll(){
    arr=new Array();
    return arr.reduce.call(arguments, (a,b)=>a+b,0);
}
console.log(sumAll(1,2,3,4,5));
// 8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.

function describeValue(){
    len=arguments.length
    if(len==0)
        return 'none'
    else if(len==1)
        return 'one: '+arguments[0]
    else if(len==2)
        return 'two:'+arguments[0]+','+arguments[1]
    else
        return 'too many'
}
console.log(describeValue());
console.log(describeValue(1));
console.log(describeValue('a','b'));
console.log(describeValue(1,2,3));
// 9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.

let fun = [
    function(n){ return n+1;},
    function(n){ return n+2;},
    function(n){ return n+3;}
];
let start = 10;
for (let i=0; i<fun.length; i++){
    start = fun[i](start);
}
console.log(start);

// 10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.

function makeMultiplier(factor){
    return function(n){
        return n*factor;
    }
}

console.log(makeMultiplier(2)(7))
console.log(makeMultiplier(3)(7))


// 11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.

function once(fn){
    let called = false;
    let result;
    return function(){
        if(!called){
            called = true;
            result = fn();
            return result; // i added this just for more clear undersatndinggggggggggggg
        }
        return result+" old";
    }
}
function test_fun(){
    console.log('Func is called');
    return 'my result';
}
let once_test = once(test_fun);
console.log(once_test());

console.log(once_test());
console.log(once_test());

// 12. (Bonus) Modify once so subsequent calls return the FIRST result (like a memo of zero-arg function).
// Keep original version comment above for comparison.

// 13. (Bonus) Implement makeCounter(start) that returns { inc: fn, dec: fn, value: fn }. State stays private. Demonstrate two independent counters.

// 14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call.
// Demonstrate separate instances.

function makeAdder(start){
    let total = start;
    return function(n){
        total += n;
        return total;
    }
}
let adder1 = makeAdder(100);
console.log(adder1(1));
console.log(adder1(2));

// 15. (Bonus) Implement memoize1(fn). Show it caches slowSquare(9) twice (timing optional comment).

// 16. (Bonus) Implement memoizeN(fn) that supports any number of primitive args by joining them with '|' as a key. Show with add3(a,b,c).

// 17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f().
// Explain (comment) output difference.

let user={
    name: 'amr',
    sayHi: function(){
        console.log('Hi',this.name)}
}
user.sayHi(); // amr

var f= user.sayHi;
f(); // empty string as it refers to global object which has no name property
// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.

f.call({name:'Sara'})
user.sayHi.apply({name:'Sara'})

// 19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.

let greeter={
    name: undefined,
    greet: function(greeting,sign){
        console.log(greeting+" "+this.name+sign); }
};

greeter.greet.apply({name:"Ali"},["Hello","!"])

// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings.
let greetLara = greeter.greet.bind({name:'Lara'});
// console.log(greetLara);
greetLara("Helllllo","!");

// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).
let sayHello= greeter.greet.bind({name:'amr'},"Hello");

sayHello('!')
sayHello('!!')
sayHello('<#')
sayHello('*')
// 22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.

function reverseArr(){
    arr=new Array();
    argsArray = arr.slice.call(arguments)
    console.log(argsArray);
    console.log(argsArray.reverse());
}
reverseArr(1,2,3,4,5);

// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.
arr = [5,2,11,7]
console.log(Math.max.apply(null, arr));
max = arr[0];
for (let i=1; i<arr.length; i++){
    if(arr[i]>max)
        max=arr[i];
}
console.log(max);

// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.

console.log(Math.max.call(null,5,2,11,7));
// as apply can take array dirctly not individual numbers..

// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.

let name = 'Amr';
let age = 20;
console.log(`User: ${name} Age: ${age+1}`)

// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.

let title="ITI"
let body="my name is Amr. I study JS";
console.log(`${title}
${body}`);

console.log(title+"\n"+body);

// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.

if(true){
    var i=1;
    let j=2;
}
console.log(i);
// console.log(j); //j is not defined

// 28. Write code that tries to log x before let x = 5;.

// console.log(x); // cannot access before initialization
let x = 5;

// 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).

const arr2 = [1,2,3];
arr2.push(4);
console.log(arr2);
// arr2 = [5,6,7]; // Assignment to constant variable.

// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].

let full_body = (n) => { return n*n;}
let concise = n => n*n;
console.log([1,2,3].map(n => n*n));

// 31. Create object timer with count:0 and method startClassic using setInterval(function(){...}) and startArrow using setInterval(()=>{...}).
// Show difference in how this works (stop after a few increments using clearInterval).


// 32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.
let returnObj = () => ({v:10});
console.log(returnObj());

// 33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).

// method needing dynamic this like in object methods or event handlers


// 34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :).
function greet1(name){
    return 'Hi '+name+'!';
}
console.log(greet1('Amr'));
const greet = name => 'Hi '+name+'!';
console.log(greet('Amr'));

// 35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).

const add2 = n => n+2;
const times3 = n => n*3
const minus1 = n => n-1

function runPipeline(n, fnsArray){
    for (let i=0; i<fnsArray.length; i++){
        n = fnsArray[i](n);
    }
    return n;
}
console.log(runPipeline(5, [add2,times3,minus1]));

// 36. (write answers BEFORE running):
    var obj = { n: 1, inc: function(){ this.n++; return this.n; } };
    var incc = obj.inc;
    console.log(obj.inc());
    console.log(incc()); 
//    Explain both lines.
// first one will be 2 as it refers to obj
// sec would print NaN as it refers to global scope which has no n

// 37. Create many counters in a loop (e.g. 1000) and store them in an array.
// Comment on potential memory considerations of large closure arrays.
 
// each closure holds its own scope which can consume memory if many are created, especially if they capture large objects or data. 


// 38. Write safeFirst() that returns undefined if called with zero args else return array of the args.

function safeFirst(){
    if(arguments.length==0)
        return undefined;
    let arr = new Array();
    for (let i=0; i<arguments.length; i++){
        arr.push(arguments[i]);
    }
    return arr;
}
console.log(safeFirst());
console.log(safeFirst(1,2,3));

// 39. factory(namesArray) returns object with a counter function for each name (all independent).
// Example: var counters = factory(['a','b']); counters.a(); counters.b();

function factory(namesArray){
    obj={}
    namesArray.forEach(name => {
        obj[name]= (function(){
            let count=0;
            return function(){
                count++
                return count
            }
        })()
    });
    return obj;
}

// function factory(namesArray){
//     let obj = {};
//     namesArray.forEach(name => {
//         obj[name] = (function(){
//             let count = 0;
//             return function(){
//                 count++;
//                 return count;
//             }
//         })();
//     });
//     return obj;
// }

let Counters = factory(['a','b']);
console.log(Counters.a());
console.log(Counters.a());
console.log(Counters.b());
console.log(Counters.b());

// 40. Write 2 things that were new or tricky today (comment).
 

