const data = require("./37.  student_data.json");
// console.log(data);
// console.log(data.friends[0].name);

console.log(data.students[0].friends[0].name);

data.students[0].name = "nizam uddin shuvo";
console.log(data.students[0].name);

delete data.students[1].friends[1].name;
console.log(data.students[1].friends[1].name);

console.log(data.students[0].language[0]);

// JSON DATA access;

for (x in data) {
  console.log(x);
  console.log(data[x]);
}

const data2 = {
  name: "shakil",
  age: 25,
};

// console.log(JSON.stringify(data2));

// console.log(
//   JSON.parse({
//     friends: [
//       {
//         name: "nizam uddin shuvo",
//         age: 25,
//       },

//       {
//         name: "umme habiba islam rupa",
//         age: 23,
//       },
//     ],
//   })
// );
