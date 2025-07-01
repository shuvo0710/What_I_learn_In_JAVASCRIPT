let numOfwon = 0;
let numOfloss = 0;

for (let i = 1; i <= 5; i++) {
  let guessNumber = parseInt(prompt("enter a number from 1 to 5"));

  let randomNumber = Math.floor(Math.random() * 5) + 1;

  if (guessNumber == randomNumber) {
    console.log("you have won");
    numOfwon++;
  } else {
    console.log(" you have lost . Random nmber was  " + randomNumber);
    numOfloss++;
  }
}

document.write("total number of win = " + numOfwon + "<br>");
document.write("total number of loss = " + numOfloss + "<br>");
