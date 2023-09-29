"use strict";
let juliaData = [3, 5, 2, 12, 7];
let kateData = [4, 1, 15, 8, 3];
let clr = console.clear;
// juliaData = [9,16,6,8,3]
//kateData = [10,5,6,1,4]

function checkDogs(arr1, arr2) {
  let julia = [...arr1];
  julia.splice(0, 1);
  julia.splice(2, 2);
  let data = [...julia, ...arr2];
  console.log(data); //5,2,4,1,15,8,3

  data.forEach((ele, i) => {
    ele >= 3
      ? console.log(`Dog number ${i + 1} is an adult,and is ${ele} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
}

checkDogs(juliaData, kateData);
juliaData = [9, 16, 6, 8, 3];
kateData = [10, 5, 6, 1, 4];

checkDogs(juliaData, kateData);

let arr = [...juliaData];
console.log(arr);
let x = arr.map((ele) => ele * 2);
console.log(x);
let con = juliaData.map((ele) => 23);
console.log(con);
let account5 = {
  owner: "Big guy 2566 to",
};

let data1 = [5, 2, 4, 1, 15, 8, 3];
let data2 = [16, 6, 10, 5, 6, 1, 4];

function calcAverageHumanAge(dogAges) {
  let dogHumanAge = dogAges.map((dogAge, i) => {
    return dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
  });
  console.log(dogHumanAge);
  dogHumanAge = dogHumanAge.filter((ele) => ele >= 18);
  console.log("Age greater than 18 are " + dogHumanAge);
  const average =
    dogHumanAge.reduce((acc, age) => acc + age) / dogHumanAge.length;
  console.log("Average age " + average);
}
// calcAverageHumanAge(data1);

//coding challenge 3

function calcAverageHumanAge2(dogAges) {
  // let dogHumanAge = dogAges.map((dogAge, i) => {
  //   return dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
  // });
  // console.log(dogHumanAge);
  // dogHumanAge = dogHumanAge.filter((ele) => ele >= 18);
  // console.log("Age greater than 18 are " + dogHumanAge);
  // const average =
  //   dogHumanAge.reduce((acc, age) => acc + age) / dogHumanAge.length;
  // console.log("Average age " + average);

  //refactor the code using chaining
  let dogHumanAge = dogAges
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, array) => acc + age / array.length);
  console.log(dogHumanAge);
}
calcAverageHumanAge2(data1);
let dogHumanAge = data1
  .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
  .filter((age) => age >= 18)
  .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
console.log(dogHumanAge);

let array = [1, 2, 3, 4, 5, 6];
console.log(array.find((mov) => mov > 10));

//use of find method
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  intersetRate: 1.2, //%
  pin: 1111,
};
const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
clr();
let account = accounts.find((acc) => acc.owner == "Jonas Schmedtmann");
console.log(account);
//same using filter method
account = accounts.filter((acc) => acc.owner == "Jonas Schmedtmann");
console.log(account);

// let accountMovements = [];
// let accountMovements = account.map((acc) => acc.movements);
// console.log(accountMovements);
// account.forEach((acc) =>
//   acc.movements.forEach((mov) => accountMovements.push(mov))
// );
// let total = accountMovements.reduce((acc, ele) => acc + ele, 0);
// console.log(total);

// //sum total of all the deposit of all the accounts
// let depositSum = account
//   .map((acc) => acc.movements)
//   .flat()
//   .filter((mov) => mov >= 0)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(depositSum);

// //count all the deposit which are
// let depositCount = account
//   .flatMap((ele) => ele.movements)
//   .filter((mov) => mov >= 1000).length;
// console.log(depositCount);

// let movement = account1.movements;

// const { inside, out } = movement.reduce(
//   (acc, mov) => {
//     mov > 0 ? (acc["inside"] += mov) : (acc["out"] += mov);
//     return acc;
//   },
//   { inside: 0, out: 0 }
// );

// console.log("Deposits" + inside);
// console.log("Out" + out);
//hint
const convertTitleCase = (title) => {
  const exceptions = ["a", "an", "the", "but", "or", "in", "with"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1));
};
console.log(convertTitleCase("this is a nice title"));

const dog = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

let recommended = (dog) => {
  dog.map(
    (eachDog) =>
      (eachDog.recommendedFoodPortion = Math.trunc(eachDog.weight ** 0.75 * 28))
  );
};

recommended(dog);
console.log(dog);

let dogSarah = dog.find((eachDog) => eachDog.owners.includes("Sarah"));

console.log(
  `Sarah's Dog is eating too ${
    dogSarah.curFood > dogSarah.recommendedFoodPortion ? " much" : "little"
  }`
);

let ownersEatTooMuch = dog
  .flatMap((eachDog) =>
    eachDog.curFood > eachDog.recommendedFoodPortion ? eachDog.owners : " "
  )
  .filter((eachDog) => eachDog != " ");

let ownersEatTooLittle = dog
  .flatMap((eachDog) =>
    eachDog.curFood < eachDog.recommendedFoodPortion ? eachDog.owners : " "
  )
  .filter((eachDog) => eachDog != " ");
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// let str = "";
// for (const [index, owner] of ownersEatTooMuch.entries()) {
//   index < ownersEatTooMuch.length - 1
//     ? (str += `${owner} and `)
//     : (str += ` ${owner}'s`);
// }
// str += " dogs are eating too much";
// console.log(str);

let str = ownersEatTooMuch
  .reduce((acc, ele, i) => {
    return (acc +=
      i < ownersEatTooMuch.length - 1 ? `${ele} and ` : `${ele}'s `);
  }, "")
  .concat("dogs are eating too much");

console.log(str);
str = ownersEatTooLittle
  .reduce((acc, ele, i) => {
    return (acc +=
      i < ownersEatTooMuch.length - 1 ? `${ele} and ` : `${ele}'s `);
  }, "")
  .concat("dogs are eating too little");
console.log(str);

//okay amount of food
//current > (recommended *0.90)&&current <(recommended *1.10)

let eatingOkay = dog
  .filter(
    (eachDog) =>
      eachDog.curFood > eachDog.recommendedFoodPortion * 0.9 &&
      eachDog.curFood < eachDog.recommendedFoodPortion * 1.1
  )
  .map((dog) => dog.owners)
  .flat();
console.log(eatingOkay);

let newDog = [...dog].sort((a, b) => {
  return a.recommendedFoodPortion - b.recommendedFoodPortion;
});
console.log(newDog);

console.log(dog);
console.clear();
// console.log(Number.isNaN("23"));

let randomInt = (max, min) => {
  return Math.trunc(Math.random() * (max - min) + 1) + min;
};

// console.log(randomInt(20, 10));
// console.log(Math.ceil(23.9));

//boxing
