// 1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.

var str="258.90";
var str_int=parseInt(str);
var str_int=parseFloat(str);

// 2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.

var num=7.45678;
var num_str=num.toFixed(2);
var num_conv=parseFloat(num_str);


// 3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.

var chk= Number.isNaN('abc')
var chk2= Number.isNaN('$')

// 4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.

console.log((0.1 + 0.2) == 0.3)
console.log((0.1 + 0.2).toFixed(1));

// 5. Write a function to safely parse a string that may contain trailing text (e.g. "120px") returning the integer part or null if it starts with non-digit.

function convert_int(x){
    val= parseInt(x)
    if (Number.isNaN(val)){
        return null
    }
    return val
}

// 6. Implement isFiniteNumber(value) that returns true only for finite numeric values (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. Provide 4 passing and 4 failing test examples (comments).

function isFiniteNumber(value) {
    return typeof value === "number"
            && value !== Infinity
            && value !== -Infinity 
            && !isNaN(value)
}

console.log(isFiniteNumber(0));         
console.log(isFiniteNumber(12.34));    
console.log(isFiniteNumber(-99));     
console.log(isFiniteNumber(1205251554848484848488466666666666666666666666666666666666666666666664848444444444444444444444));      

console.log(isFiniteNumber("123"));     
console.log(isFiniteNumber(Infinity)); 
console.log(isFiniteNumber(-Infinity));  
console.log(isFiniteNumber(NaN));       


// 7. Remove leading and trailing spaces from the string "   hello world  ".

console.log("   hello world  ".trim());

// 8. Get the substring "script" from "javascript" using two different methods (slice + substring).
console.log("javascript".slice(4));


// 9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive).

console.log("Banana Mania".toLowerCase().split('a').length-1);

// 10. Write a function reverseString(s) without using array reverse (iterate backwards).

function reverseString(s){
    str=""
    for(let i=s.length-1; i>=0;i--){
        str+=s[i]
    }
    return str
}

// 11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".
function capitalizeWords(sentence){
    words=sentence.split(" ")
    for (let i=0;i<words.length;i++){
        // first_char=words[i][0]
        words[i]=words[i][0].toUpperCase() + words[i].slice(1)
        // console.log(words[i][0])
    }
    return words.join(" ");
}
console.log(capitalizeWords("hello there friend"))

// 12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.

function ext_domain(link){

    parts=link.split('/')
    console.log(parts[2])
}
ext_domain("https://example.com/path/to/page")

// 13. Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).

function naiveIndexOf(haystack, needle) {
    target_len=haystack.length - needle.length
  for (let i = 0; i <= target_len; i++) {
    if (haystack.slice(i, i + needle.length) === needle) return i;
  }
  return -1;
}
console.log(naiveIndexOf("hello world", "world"))

// 14. Buggy code: var s = 'hello'; if (s.toUpperCase = 'HELLO') { console.log('match'); }  // Fix and explain issue.
var s = 'hello'; if (s.toUpperCase() === 'HELLO') { console.log('match'); }

// 15. Create an array of the numbers 1..5, then push 6 and unshift 0.
var arr= [1,2,3,4,5];
arr.push(6)
arr.unshift(0)
console.log(arr)

// 16. Remove the last element and store it. Remove the first element and store it.
var last = arr.pop()
var first = arr.shift()
console.log(arr,last,first)

// 17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.

var arr = [10,20,30,40,50]
var cp_arr=arr.slice(0,3);
console.log(cp_arr)

// 18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].
var arrr = [1,2,3,4,5];
arrr.splice(2,2,'a','b')
console.log(arrr)

// 19. Demonstrate the difference between slice and splice on the same starting array (show original after each).
var arr = [1,2,3,4,5]
var cp_arr=arr.slice(0,3);
console.log(arr) // didnt change
console.log(cp_arr)

var arrr = [1,2,3,4,5];
var arrr_cp= arrr.splice(0,3);
console.log(arrr) // changed
console.log(arrr_cp)


// 20. Create a sparse array by assigning index 7 on a fresh [] then log length.

var arr=[]
arr[7]="x"
console.log(arr.length)

// 21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).

function compact(array){
    new_arr=[]
    for(let i=0; i<array.length; i++){
        if (array[i]){
            new_arr.push(array[i])
        }
    }
    return new_arr
}
console.log(compact([0,1, true, false]));

// 22. Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat .
function deepClone1D(a) {
    clone = [];
    for (let i = 0; i < a.length; i++){
        clone.push(a[i]);
    }
    return clone;
  }
console.log(deepClone1D([0,1, true, false]));

// 23. Map [1,2,3] to their squares using map.

console.log([1,2,3].map(function(e){
    return e*e
}));


// 24. Filter [5,10,15,20] to keep values >= 12.

console.log([5,10,15,20].filter(function(e){
    return e>=12
}));

// 25. Reduce [2,4,6] to product.

console.log([2,4,6].reduce(function(a,c){
    return a*c
}));

// 26. Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.

function arraySum(a) {
    return a.reduce(function(a, cu) {
        return a + cu;
    }, 0)
}
console.log( arraySum([1,2,3]))

function arraySumLoop(a){
    sum=0;
    for (let i=0; i<a.length; i++){
        sum+=a[i]
    }
    return sum
}
console.log(arraySumLoop([1,2,3]))

// 27. Given ['Ali','Sara','Kareem'] produce ['A','S','K'] (first letters) without using map (use for loop).
function prodfirst(arr){
    res=[]
    for (let i=0;i<arr.length;i++){
        res.push(arr[i][0])
    }
return res}
console.log(prodfirst(['Ali','Sara','Kareem']))

// 28. Implement unique(a) returning new array with duplicates removed (no ES6 Set). Complexity target: O(n^2) acceptable; comment how to improve.

function unique(a){
    res=[]
    for (let i=0;i<a.length;i++){
        if (res.indexOf(a[i])===-1){
            res.push(a[i])
        }
    }
    return res
}
console.log(unique([1,2,2,3,4,4,5]));

// 29. Flatten one level: flatten1([1,[2,3],[4],5]) => [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).

function flatten1(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                result.push(arr[i][j]);
            }
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(flatten1([1, [2, 3], [4], 5])); 

// 31. Create object person with name and age; add a new property city after creation.

var person={name:"John", age:30}
person.city="Cairo"
console.log(person)

// 32. Access a property via bracket notation with a dynamic key variable.

var key="name"
console.log(person[key])

// 33. Write function countKeys(obj) returning number of own enumerable properties (use for-in).

function countKeys(obj){
    count=0
    for (key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key)
            count+=1
        }
    }
    return count   
}  
console.log(countKeys(person))

// 39. List (as comments) 5 different values that coerce to false in ES5.

// false
// 0
// ""
// null
// undefined
// NaN

// 40. safeToBoolean(v): return true only if v is strictly true, 'true', 1, or '1'; else false.

function safeToBoolean(v){
    if (v===true || v==='true' || v===1 || v==='1'){
        return true
    }
    return false
}
console.log(safeToBoolean(1))

// 41. Create a Date for Jan 1, 2025 00:00 local.

d = new Date("2025-01-01T00:00:00");
console.log(d);

// 42. Get the current year from new Date().

var today = new Date();
console.log(today.getFullYear());

// 43. Write function daysBetween(d1, d2) returning whole day difference (ignore DST intricacies; ms/(1000*60*60*24)).

function daysBetween(d1, d2){
    diff= d2.getTime()-d1.getTime();
    return diff/(1000*60*60*24);
}
d1=new Date("2025-01-01")
d2=new Date("2025-04-15")

console.log(daysBetween(d1, d2));

// 44. Generate a random integer 1..100.

x=Math.floor(Math.random()*100)+1
console.log(x);

// 45. Round 4.567 to nearest integer, round down, and round up (three results).

var num=4.567
console.log(Math.round(num))
console.log(Math.ceil(num))
console.log(Math.floor(num))

// 46. randomIntArray(n, min, max): return array of length n with random ints (loop + push).

function randomIntArray(n, min, max){
    arr=[]
    for (let i=0;i<n;i++){
        arr.push(Math.floor(Math.random()*(max-min+1))+min)
    }
    return arr
}
console.log(randomIntArray(5,1,10));

// 56. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).

function parsePriceList(str) {
    result = {}
    items = str.split(';');
    // console.log(items)
    for (item of items) { // "of" not "in" (nooote importanttttttttttttttt)
        [key, value] = item.split(':');
        result[key] = parseFloat(value);
    }
    return result;
}
console.log(parsePriceList("Apple:2.50;Orange:1.75;Banana:3"));

// 57. filterAndSortNumbers(mixedArray): keep only finite numbers then sort ascending (provide sample input and output). Use a numeric compare fn.
function filterAndSortNumbers(mixedArray) {
    filtered = mixedArray.filter(function(e) {
        return typeof e === 'number' && Number.isFinite(e);
    });

    filtered.sort(function(a, b) {
        return a - b;
    });

    return filtered;
}
console.log(filterAndSortNumbers([3,"lol", "5", 1, null, 2, Infinity, 4]));