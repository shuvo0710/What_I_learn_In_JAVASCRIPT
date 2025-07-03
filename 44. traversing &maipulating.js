//downwards::

const studentList = document.querySelector(".student-list");
const StudentA = studentList.querySelector(".student-a");

StudentA.innerHTML = "shuvo";

//upwards:

const studentB = document.querySelector("li");
const studentList1 = studentB.parentElement;

//sideways - siblings :

const StudentC = document.querySelector("li");
const studentD = StudentC.nextElementSibling;
const studentE = studentD.nextElementSibling;
