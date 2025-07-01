// 1D array:
// let names = [1, 2, 3, 4, 5];
// for (let i = 0; i < 5; i++) {
//   console.log(names[i]);
// }

// task 8:

function highestScores(scores) {
  let max = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (max < scores[i]) {
      max = scores[i];
    }
  }
  return max;
}
let scores = [21, 28, 16, 98];
let maxScore = highestScores(scores);
console.log(maxScore);
