/**
 * Coding Exercise 22
 * Recursion - Harder Exercises
 * stringifyNumbers
 *
 *
 * Write a recursive function called stringifyNumbers which takes in
 * an object and finds all the values which are numbers and converts
 * them to strings.
 */

function stringifyNumbers(obj) {
  let newObj = {};

  function helper(obj) {
    for (let prop in obj) {
      if (typeof obj[prop] === "object" && !Array.isArray(obj[key])) {
       newObj[prop] =  stringifyNumbers(obj[prop]);
      } else if (typeof obj[prop] === "number") {
        newObj[prop] = obj[prop].toString();
      } else {
        newObj[prop] = obj[prop]
      }
    }
  }
  helper(obj);
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

let x;
x = stringifyNumbers(obj); //
console.log(x);
/* Expected output
obj = {
  num: "1",
  test: [],
  data: {
    val: "4",
    info: {
      isRight: true,
      random: "66"
    }
  }
};
*/
