//For on
//For in

const drinks = ["coke", "water", "fanta", "orange juice"];

const fruits = [
  { title: "Dragon fruit", price: 10, id: 1 },
  { title: "kiwi", price: 5, id: 2 },
  { title: "Watermelon", price: 20, id: 3 },
];

for (const drink of drinks) {
  console.log(`Today we have: ${drink}`);
}

for (const fruit in fruits) {
  console.log(`This is ${fruit}`);
}

const student = {
  name: "John",
  age: 20,
  year: "senior",
  isNursing: false,
};
for (const info in student) {
  console.log(info);
}
