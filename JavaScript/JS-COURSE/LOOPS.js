// Loops
const names = ["john", "bob", "mary", "joe"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
//   //   if (i === 3) break;
// }
// for (name of names) {
//   console.log(name);
// }

const user = { firstName: "john", lastName: "doe" };
for (key in user) console.log(user[key]);
