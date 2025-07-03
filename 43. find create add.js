let link = document.getElementsByTagName("a")[0];

link.innerHTML = "umme habiba islam rupa";

link.style.textDecoration = "none";

link.style.color = "cadetblue";

link.style.fontSize = "1.5 rem";

link.href = "https://studywithshuvo.com";

//

let h1 = document.getElementsByTagName("h1")[0];
h1.innerHTML = "nizam uddin shuvo";

// new elemnt creation

let heading3 = document.createElement("h1");
let text = document.createTextNode("this is text node");
heading3.appendChild(text);

let myDiv = document.getElementById("my-div");
myDiv.appendChild(heading3);

// element delete:

let heading2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2);

// add before :

let heading0 = document.createElement("h1");
let text0 = document.createTextNode("this is text node 0");
heading0.appendChild(text0);

let heading1 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading0, heading1);

// node replace::;
