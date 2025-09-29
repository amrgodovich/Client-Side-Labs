// BOM (Browser Object Model)

// 1. Open a new window with a specific URL and size, then close it after 3 seconds using JavaScript.

function openwin() {
    var newWin = window.open("https://lol.com", "width=600,height=400");

    setTimeout(function () {
        newWin.close();
      }, 3000)
    }

// openwin();

// 2. Display the browser's user agent string in an alert.

function usragnt(){
    var str=navigator.userAgent
    alert(str);
}
// usragnt();

// 3. Use `navigator` to detect if the browser is online or offline and log the result.

console.log(navigator.onLine);

// 4. Write code to reload the current page after 5 seconds.

function rel() {

    setTimeout(function () {
        window.location.reload();
      }, 3000)
    }

// rel();

// 5. Get the current page URL, protocol, and hostname using `location` and log them.

console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.hostname);


// 6. Use `history` to go back one page, then forward one page (write the code, don't actually run it).

// window.history.back();
// window.history.forward();

// 7. Show the screen width and height in a div -change the div content- on the page.
function sizze(){
    ddd=document.childNodes[1].childNodes[2].childNodes[3];
    ddd.textContent = "Width: " + window.innerWidth + "px, Height: " + window.innerHeight + "px";
}

// sizze();

// 8. Use `setTimeout` to change the content of a hyperlink -a- with a new content after 2 seconds, and provide a button to cancel it.

var tmout=setTimeout(function(){
    document.getElementById("hygoogle").href="https://www.w3schools.com/"
},2000);

// 9. Use `setInterval` to update the time  on the page title every second, and a button to stop it.

var intrv = setInterval(function () {
    document.title = new Date().toLocaleTimeString();
  }, 1000);
  

// 10. Show a confirm dialog asking "Do you want to continue?" and log the user's choice("user said yes", "user said no").

  function conf(){
    if (confirm("Do you want to continue?")) {
        console.log("user said yes");
      } else {
        console.log("user said no");
      }
  }

//   conf()

// ---
// DOM Traversal (Nodes, Elements, Collections)

// 11. Select the first `<ul>` in the document and log its `childNodes` and `children` properties. Explain the difference in a comment.

console.log(document.childNodes[1].childNodes[2].childNodes[15].children) // only real html element
console.log(document.childNodes[1].childNodes[2].childNodes[15].childNodes) // there are text and sapces..


// 12. Write a function that logs the tag names of all direct child elements of `<body>`.

function gettag(){
  var ch = document.body.children;
  for (let i = 0; i < ch.length; i++) {
    console.log(ch[i].tagName);
  }

}
// gettag();

// 13. Given a parent element, loop through its `childNodes` and log only the nodes that are elements (not text/comments).

function chnode(par) {
  // Loop through all child nodes of the parent element
  for (let i = 0; i < par.childNodes.length; i++) {
    var child = par.childNodes[i];

    // Log only the element nodes (nodeType === 1)
    if (child.nodeType === 1) {
      console.log(child.tagName);
    }
  }
}

// chnode(document.childNodes[1].childNodes[2].childNodes[15]);

// 14. Use `firstChild` and `firstElementChild` on a container and explain the difference in a comment.


var container=document.childNodes[1].childNodes[2]

var fr_ch = container.firstChild;
console.log(fr_ch); // retrun text

var fr_el_ch = container.firstElementChild;
console.log(fr_el_ch); // retrun real html element h1

// 15. Write code to get all `<li>` elements inside a `<ul>` using `children` and explain the difference.

var ul = document.childNodes[1].childNodes[2].childNodes[15];

var li_ele = ul.children; 

for (let i = 0; i < li_ele.length; i++) {
  console.log(li_ele[i]);
}

// 17. Write a function that logs all sibling elements of a given element (excluding itself).

function sib(element) {
  par = element.parentElement;

  var sibs = par.children;

  for (let i = 0; i < sibs.length; i++) {

    if (sibs[i] !== element) {
      console.log(sibs[i]);
    }
  }
}

sib(document.childNodes[1].childNodes[2].childNodes[15]);

// 18. Use `nextSibling` and `nextElementSibling` to traverse from the first child to the last child of a `<ul>`, logging each node.

function nexsib(ul){
  ch=ul.firstChild
  while (ch){
    console.log(ch);
    ch=ch.nextSibling;
  }
  ch=ul.firstChild
  while (ch){
    console.log(ch);
    ch=ch.nextElementSibling;
  }
}

nexsib(document.childNodes[1].childNodes[2].childNodes[15])


// 19. Count how many element children a given node has (not using `children.length`).
function cnt(ele){
  ch=ele.firstChild
  cnt=0
  while(ch){
    ch=ch.nextElementSibling;
    cnt+=1
  }
  cnt-=1
  console.log(cnt)
}
cnt(document.childNodes[1].childNodes[2].childNodes[15])


// 20. Write a function that takes the first form element and logs the names and values of all its input fields using the `elements` collection.

function formnames(form) {
  for (let i = 0; i < form.elements.length; i++) {
    console.log(form.elements[i].name,form.elements[i].value);
    }
  }

formnames(document.childNodes[1].childNodes[2].children[18]);


// 21. Access all forms in the document using `document.forms` and log their names.
function frmnm() {
  var forms = document.forms;

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i].elements.length; j++) {
      console.log(forms[i].elements[j].name,forms[i].elements[j].value);
    }
  }
}

frmnm();




// 22. Access all images in the document using `document.images` and log their `src` attributes.

function imgsrc() {
  var images = document.images;

  for (let i = 0; i < images.length; i++) {
    console.log(images[i].src);
  }
}

imgsrc();


// 23. Write a function that takes a form and disables all its input fields using the `elements` collection.

function dis(form) {
  for (let i = 0; i < form.elements.length; i++) {
    form.elements[i].disabled = true; 
  }
}

// dis(document.childNodes[1].childNodes[2].children[18]);


// 24. Use `Array.from` to convert `document.images` to an array and filter images with width > 100px.

function filterimgs() {
  var imgarr = Array.from(document.images);

  var filteredImages = imgarr.filter(function(image) {
    return image.width > 100;
  });

  filteredImages.forEach(function(image) {
    console.log(image.src);
  });
}

filterimgs();



// ---
