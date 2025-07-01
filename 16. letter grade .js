const marks = prompt("Enter your marks: ");
parseFloat(marks);

if (marks > 100 && marks < 0) console.log("Invalid Marks");
else if (marks >= 80 && marks <= 100) {
  console.log("A+");
} else if (marks >= 70 && marks <= 80) {
  console.log("A");
} else if (marks >= 60 && marks <= 70) {
  console.log("B");
} else if (marks >= 50 && marks <= 60) {
  console.log("C");
} else if (marks >= 40 && marks <= 50) {
  console.log("D");
} else console.log("fail");
