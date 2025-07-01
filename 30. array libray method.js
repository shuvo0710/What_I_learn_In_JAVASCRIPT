// array libaray method
// shift method ;

let names = ["shuvo", "rupa", "nizam", "habiba"];
console.log(names);
names.push("rupu");
console.log(names);
names.pop();
console.log(names);

names.shift();
console.log(names);
// unshift opposite of push:
names.unshift("omar");
console.log(names);

// splice method:

names.splice(2, 1, "karim", "rahim");
console.log(names);

names.splice(2, 2);
console.log(names);

// slice

let newArray = names.slice(1);
console.log(newArray);
console.log(names);

// sort method ;

let sortedNames = names.sort();
console.log(sortedNames);

// reverse method

names.reverse();
console.log(sortedNames);
// numbers sorted :

let numbers = [20, 10, 4, 3, 1];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

// reverse sorted :
let numbers1 = [20, 10, 4, 3, 1];
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers1);
