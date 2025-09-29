// 1. Select the first <div> on the page using getElementsByTagName and log its innerHTML.
var dd= document.getElementsByTagName("div")
console.log(dd[0])

// 2. Using getElementById change the text of #my-p to "Hello DOM".
var ddd=document.getElementById("my-p")
ddd.textContent="Hello DOM"

// 3. Use querySelector to select the element with class "target-div" and log its nodeName.

tgdiv=document.querySelector(".target-div")
console.log(tgdiv.nodeName)

// 4. Use querySelectorAll to count how many <div> elements exist; log the count.

divno=document.querySelectorAll("div").length

// 5. Use getElementsByName on the email input (name="user-email") and set its value to "user@test.com".

email_in=document.getElementsByName("user-email")[0]
email_in.value="user@test.com"

// 6. Check if the text input has a "name" attribute; if not add name="user-name" via setAttribute.

var ob=document.getElementById("my-input");

if (!ob.hasAttribute("name")) {
  ob.setAttribute("name", "user-name");
}

// 7. Append the string " - UPDATED" to the existing innerText of #my-p (keep original text).

var ddd=document.getElementById("my-p")
ddd.append(" - UPDATED")

// 8. Create Images slider that work automatically and with next/prev/start/stop buttons.

var imgarr = ['assets/1.webp','assets/2.webp','assets/3.jpg','assets/4.jpg'];
var viewer = document.getElementById("imgview")
var index = 0
var timer = null
viewer.src = imgarr[index];

function view_img(i) {
  if (i >= imgarr.length) {
    i = 0;
  }
  if (i < 0) {
    i = imgarr.length - 1
  }
  index = i
  viewer.src = imgarr[index];
}

function play() {
  if (timer) return; //for being saffffffffffe
  timer = setInterval(function() {
    view_img(index + 1);
  }, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function next() {
  view_img(index + 1);
}

function prev() {
  view_img(index - 1);
}

document.getElementById("play").onclick = play();
document.getElementById("pause").onclick = pause;
document.getElementById("next").onclick = next;
document.getElementById("prev").onclick = prev;


// 9. Set the placeholder of the text input to "Type your full name" using setAttribute.

var ob=document.getElementById("my-input");
ob.setAttribute("placeholder", "Type your full name")

// 10. Log whether the email input has attribute "required"; if missing add it.

var emailll = document.getElementById("my-email");

if (!emailll.hasAttribute("required")) {
  emailll.setAttribute("required", "");
  console.log("no")
}else{
    console.log("yes")
}

// 11. Write function getSelectedValue(selectId) returning the current selected option value.

function getSelectedValue(selectId) {
  var select = document.getElementById(selectId);
  return select.value;
}


// 12. Loop through all options of the select and log each option's text and value.

var select = document.getElementById("my-select");
for (var i = 0; i < select.options.length; i++) {
  var option = select.options[i];
  console.log("Text: " ,option.text, " Value: ", option.value);
}

// 13. Programmatically select the option with value "EG".

var select = document.getElementById("my-select");
console.log(select.value = "EG");

// 14. Create function selectByText(selectId, text) that selects the first option whose text matches exactly.

function selectByText(selectId, text) {
  var select = document.getElementById(selectId);
  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].text === text) {
      // select.selectedIndex = i;
      return select.options[i]
    }
  }
}
selectByText("my-select", "Egypt");

// 15. Replace innerHTML of #div-2 with a <p><b>Bold Text</b></p> (ensure bold renders, not printed literally).

document.getElementById("div-2").innerHTML = "<p><b>Bold Text</b></p>"

// 16. Add classes class-a and class-b to #div-2 then remove class-b (using classList).

var div2 = document.getElementById("div-2");
div2.classList.add("class-a");
div2.classList.add("class-b");

div2.classList.remove("class-b");

// 17. Toggle class "hidden" on #div-2 twice; comment final visibility.

div2.classList.toggle('hidden');
div2.classList.toggle('hidden');

console.log(!div2.classList.contains('hidden')); //shown

// 18. Create function insertAfter(refNode, newNode) that inserts newNode immediately after refNode.

function insertAfter(refNode, newNode) {
  refNode.insertAdjacentElement('afterend', newNode);
}
// 19. Create a new <div> saying "Dynamic Box" with yellow background and append inside #div-2.

var newDiv = document.createElement("div");
newDiv.textContent = "Dynamic Box";
newDiv.style.backgroundColor = "yellow";
document.getElementById("div-2").appendChild(newDiv);

// 20. Insert a new <p> BEFORE the first child of #div-2 (insertBefore).
var newp= document.createElement("p");
newp.textContent = "lolllllll";

var div2= document.getElementById("div-2")
div2.insertBefore(newp, div2.children[0])

// 21. Insert a <span> with text "AFTER END" right after #div-2 using insertAdjacentHTML.

var spn= document.createElement("span");
spn.textContent="AFTER END"
div2.insertAdjacentElement('afterend', spn)

// 22. Form onsubmit: prevent default and log values of text, email, and select inputs.
document.getElementById("my-form").onsubmit = function(e) {
  e.preventDefault();
  console.log(ob.value, emailll.value, select.value);
};


// 23. Add input event on the text input that logs its length whenever it changes.

var ob=document.getElementById("my-input")
ob.addEventListener("input", function() {
  console.log("Length:", ob.value.length);
});


// 24. Write validateEmailSimple(value) returning true if value contains both '@' and '.'; add 2 passing / 2 failing examples (comments).

function validateEmailSimple(value) {
  if (value.includes('@')&&value.includes('.')){
    return true
  }else{return false}
}
console.log(validateEmailSimple("@"))

// 25. Create an element, append it to #div-2, then remove it using parent.removeChild(child).

var div25 = document.createElement("div");
div25.textContent = "25 25 25";
document.getElementById("div-2").appendChild(div25);
div2.removeChild(div25);


// 25. Create an element, append it to <div id="wrapper">
//   <p id="first">First</p>
//   <p id="second">Second</p>
// </div>

var wr = document.createElement("div");
wr.id = "wrapper";

wr.innerHTML = `
  <p id="first">First</p>
  <p id="second">Second</p>
`;
document.body.appendChild(wr);

var newddd= document.createElement("div");
newddd.textContent = "helllllllo";
newddd.style.backgroundColor = "lightblue";

wr.appendChild(newddd);


// 26. Clone #div-2 , set clone id="div-2-clone", and insert it after original using insertAfter.

var cl = div2.cloneNode(true);
cl.id = "div-2-clone";
insertAfter(div2, cl);

// 27. Highlight all text & email inputs (green border) in a function highlightInputs(form) and call it on DOMContentLoaded.

function highlightInputs(form) {
  var inputs = form.querySelectorAll('input[type="text"], input[type="email"]');
  for (var innn of inputs) {
    innn.style.border = "2px solid green";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("my-form");
  highlightInputs(form);
});


// 28. Build function buildCard(title, content) returning <div class="card"> with an <h3> and <p>; append two cards to body.

function buildCard(title, content){
  var card = document.createElement("div");
  card.className = "card";

  var h3 = document.createElement("h3");
  h3.textContent = title;
  card.appendChild(h3);

  var p = document.createElement("p");
  p.textContent = content;
  card.appendChild(p);

  return card;
}
document.body.appendChild(buildCard("C1", "one"));
document.body.appendChild(buildCard("C2", "two"));
// 29. Add delegated click listener on body logging when a .card is clicked.

document.body.addEventListener("click", function(e) {
  if (e.target.closest('.card')) {
    console.log("Card clicked:", e.target.closest('.card').querySelector('h3').textContent);
  }
});


// 30. Reflection (comment): Which two tasks were most challenging and why?

// 8 and 25 , took some time to fig out how to do them...


// 31. create and unordered list dynamically with at 10 items, the odd list items should have class "odd" and even items "even", -create the two classes in your CSS file-


var ul = document.createElement("ul");
for (var i = 1; i <= 10; i++) {
  var li = document.createElement("li");
  li.textContent = i;
  if (i % 2 === 0) {
    li.className = "even";
    li.style.color="blue"
  } else {
    li.className = "odd";
    li.style.color="red"
  }
  ul.appendChild(li);
}

document.body.appendChild(ul);

// 33. form with three inputs, username, email, city (selector), input values shown in new div, each in each,

function showsub(event) {
  event.preventDefault() // to refresh pageeee
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var city = document.getElementById("city").value;

  var outputDiv = document.getElementById("output");

  var namediv = document.createElement("div");
  namediv.textContent = username;
  namediv.style.backgroundColor = "lightgreen";
  outputDiv.appendChild(namediv);

  var emaildiv = document.createElement("div");
  emaildiv.textContent =email;
  emaildiv.style.backgroundColor = "red"
  outputDiv.appendChild(emaildiv);

  var citydiv = document.createElement("div");
  citydiv.textContent = city;
  citydiv.style.backgroundColor = "yellow";
  outputDiv.appendChild(citydiv);

}
