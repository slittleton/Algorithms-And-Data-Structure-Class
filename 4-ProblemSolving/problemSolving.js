// count all characters in a String
// accepts alphanumeric lowercase
// output should be an object. input = "aa" output = {a:2}

function charCount(str) {
  //make obj to return at end
  // loop over string, for each character
  // if the char is a number/letter and a key in object,
  // add one to count
  // if char is a number/letter and  not in object, add it and set value to 1
  // if char is not number/letter dont do anything
  // return obj
  str = str.toLowerCase();

  let result = {};
  for (let i = 0; i < str.length; i++) {
    let alphanumeric = /^[a-zA-Z0-9]*$/;
    let char = str[i];

    if (alphanumeric.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }

  return result;
}

let x = "aaa";
x = "234sdfdsss";
x = "./_?eee";
console.log(charCount(x));

// REFACTOR
function charCountV2(str) {
  let result = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (/^[a-zA-Z0-9]*$/.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }

  return result;
}



