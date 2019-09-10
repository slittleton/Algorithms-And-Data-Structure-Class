/**
 * Coding Exercise 23
 * Recursion - Harder Exercises
 * collectStrings
 *
 *
 * Write a recursive function called collectStrings which accepts an
 * object and returns an array of all the values in the object
 * that have typeof string
 */

function collectStrings(obj) {
  let arr = [];

  function helper(obj) {
    for (let prop in obj) {
      if (typeof obj[prop] === "object") {
        helper(obj[prop]);
      } else if (typeof obj[prop] === "string") {
        arr.push(obj[prop]);
      }
    }
  }
  helper(obj);
  return arr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

let x;
x = collectStrings(obj); // ["foo", "bar", "baz"]
console.log(x);

