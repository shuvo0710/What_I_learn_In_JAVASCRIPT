function studentName(studentInfo) {
  let highestScorer = studentInfo[0][0];
  let highestMarks = studentInfo[0][1];

  for (let i = 1; i < studentInfo.length; i++) {
    if (highestMarks < studentInfo[i][1]) {
      highestMarks = studentInfo[i][1];
      highestScorer = studentInfo[i][0];
    }
  }
  return highestScorer;
}

let studentInfo = [
  ["shuvo", 98],
  ["rupa", 99],
  ["habiba", 97],
  [("nizam ", 87)],
];

let name = studentName(studentInfo);
console.log(name);
