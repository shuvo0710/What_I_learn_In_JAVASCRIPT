// document.querySelector("button").addEventListener("click", myFunction);
// // ekhane function call korar somoy paranthesis use kora jabe na

// function myFunction() {
//   alert("hello rupa");
// }

// same work with annoyymous function::

// document.querySelector("button").addEventListener("click", function () {
//   alert("hello rupa");
// });

// mouse hover and mouse out :

let myVar = document.querySelector("h1");

myVar.addEventListener("mouseover", function () {
  myVar.classList.add("my-style");
});

myVar.addEventListener("mouseout", function () {
  myVar.classList.remove("my-style");
});
