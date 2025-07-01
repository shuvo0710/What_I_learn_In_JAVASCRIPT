// let i = 0;
// while (i <= 100) {
//   console.log(" " + i);
//   i++;
// }

let i = 1;
let sum = 0;

while (i <= 100) {
  if (i % 3 == 0 && i % 5 == 0) {
    sum = sum + i;
  }
  i++;
}
console.log(sum);
