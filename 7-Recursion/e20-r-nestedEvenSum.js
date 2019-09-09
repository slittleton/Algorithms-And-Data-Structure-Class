/**
 * Coding Exercise 20
 * Recursion - Harder Exercises
 * nestedEvenSum
 *
 *
 * Write a recursive function called nestedEvenSum. Return the sum
 * of all even numbers in an object which may contain nested objects.
 */

function nestedEvenSum(obj, total = 0) {
  for (let prop in obj) {
    if (typeof obj[prop] === "object") {
      total += nestedEvenSum(obj[prop]);
    } else if (typeof obj[prop] === "number" && obj[prop] % 2 === 0) {
      total += obj[prop];
    }
  }

  return total;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" }
};

let x;
x = nestedEvenSum(obj1, 0); // 6
x = nestedEvenSum(obj2); // 10
console.log(x);
