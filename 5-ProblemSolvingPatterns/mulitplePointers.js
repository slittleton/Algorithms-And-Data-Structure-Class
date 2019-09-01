// PROBLEM SOLVING PATTERNS

// FREQUENCY COUNTERS =====================
/* Use object or sets to collect values/frequencies of values*/

/*
///////////////////// EXAMPLE 2 /////////////////////
Given two strings, write a function to determine if the second string 
is an anagram of the first. An anagram is a word, phrase, or name formed 
by rearranging the letters of another, such as cinema, form from iceman

validAnagram('', '') //true
validAnagram('rat', 'car') //false
validAnagram('cool', 'coo') //false
validAnagram('texttwisttime', 'texttwisttime') //true

*/

// ===================== solution - O(n) =====================

function validAnagram(str1, str2){
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  const obj1 = {};
  const obj2 = {};
  
  for(let val of arr1){
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for(let val of arr2){
    obj2[val] = (obj2[val] || 0) + 1
  }

  for(let key in obj1){
    if(!obj2[key]){ return false}
    if(obj2[key] !== obj1[key]){return false}
  }
  return true;
  
  }
  let x;
  // x = validAnagram('aaa', 'aaa') // true;
  // x = validAnagram('aaa', 'aab') // false;
  // x = validAnagram('aaa', 'aabb') // false;
  x = validAnagram('cinema', 'iceman') // true;
  
  console.log(x);


  // ===================== solution2 - O(n) =====================
  function validAnagramV2(first, second){
    if(first.length !== second.length){
      return false;
    }
    const lookup ={}

    for(let i = 0; i< first.length;i++){
      let letter = first[i];
      //if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i< second.length; i++){
      let letter = second[i];
      // can't find letter or letter is zero then its not an anagram
      if(!lookup[letter]){ return false }
      else { lookup[letter] -= 1;}
    }
    return true
  }
  let y = validAnagramV2('cinema', 'iceman')
  console.log(y);
