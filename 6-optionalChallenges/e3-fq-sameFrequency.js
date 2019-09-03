/**
 * Coding Exercise 3
 * Frequency Counter
 * Same Frequency
 *
 *
 * Write a function called sameFrequency. Given two positive
 * integers, find out if the two numbers have the same frequency of
 * digits. Solution must be O(n)
 */

function sameFrequency(a, b) {
  let arr1 = a.toString().split("");
  let arr2 = b.toString().split("");

  let obj1 = {};
  let obj2 = {};

  for (let val of arr1) {
    if ((obj1[val] = obj1[val])) {
      obj1[val]++;
    } else {
      obj1[val] = 1;
    }
  }
  for (let val of arr2) {
    if ((obj2[val] = obj2[val])) {
      obj2[val]++;
    } else {
      obj2[val] = 1;
    }
  }
  for (let key in obj1) {
    if (!obj2[key]) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

let x;
x = sameFrequency(182, 281); //true
x = sameFrequency(34, 14); //false
x = sameFrequency(3589578, 5879385); //true
x = sameFrequency(22, 222); //false
console.log(x);
