// arry - is an object of variable
// let name = new Array(5);
let name = ["anisul", "lima", "shipa", "rupa", "shuvo"];
// name[0] = "anis";
// name[1] = "lima";
// name[2] = "shipa";
// name[3] = "rinku";
// name[4] = "shuvo";

console.log(name[4]);
console.log(name);
console.log(name.length);

// array libray
name.push("habiba");
name.push("nizam");
name.push("islam");
name.push("uddin");

console.log(name);
console.log(name.length);
console.log(name[3]);

name.pop();
console.log(name);
console.log(name.length);

//concat

let country1 = ["bangladesh", "india"];
let country2 = ["pakisthan", "bhutan"];

let country = country1.concat(country2);
console.log(country);
