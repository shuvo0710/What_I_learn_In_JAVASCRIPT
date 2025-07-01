let num = 30;
console.log(typeof num);

num = toString(num);
console.log(typeof num);
// float to integer
const num1 = "20.5";
num = parseInt(num1);
console.log(typeof num);
// to fixed to precission
const float = 20.345354746;
console.log(float.toFixed(2));

console.log(float.toPrecision(5));

// number method
console.log(Number(false));
console.log(Number(true));
console.log(Number("23.556"));
