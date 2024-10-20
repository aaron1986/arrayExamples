/* const oldArray = [1,2,3];

//create new array
const newArray = [];

//forEach loop
oldArray.forEach((i => {
    let result = i * 4;
    newArray.push(result);
}));

console.log(newArray);
 */

/* const oldArray = [1,2,3];

let newArray = oldArray.map(i => i * 4);

console.log(newArray); */

/* const oldArray = [1,2,3];
const result = oldArray.map(nums => nums * 4).filter(nums => nums > 6);

console.log(result); */

/* const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(checkAdult); */

/* const oldArray = [1,2,3];
const newArray = [];

oldArray.forEach(i => {
  let multiplied = i * 4;
  newArray.push(multiplied);
}); 

console.log(newArray); */

/* function countCarrots(gardenPatch) {
  let totalCarrots = 0;
  
  for (let i = 0; i < gardenPatch.length; i++) {
    for (let j = 0; j < gardenPatch[i].length; j++) {
      totalCarrots += gardenPatch[i][j];
    }
  }
  
  // Log the total number of carrots after the for loop
  console.log("Total carrots found:", totalCarrots);

  // Check if no carrots are found
  if (totalCarrots === 0) {
    console.log("No carrots found in the garden!");
  }
  
  return totalCarrots;
} */

// Example usage:
/* countCarrots([[1, 2], [3, 0], [4]]);  
countCarrots([[0, 0], [0, 5], [0]]);  
countCarrots([[], [], []]); 
 */

/* function partyPropCheck(stock, colour) {
let count = 0;

  //for loop for each item in stock 
  for(let item in stock) {
	//second for in loop
	for(let col in stock[item]) {
	//inside the for loop if item colour is equal to colour or rainbow add one to count
	if(col === colour || col === "rainbow") {
	count += stock[item][col];
		}
		//console.log(count, "count ");
	}
  }
  //return the count
  return count;

} */

/*   const regex = /\w+/; 

  const one = "@#$";
  const two = "123";
  const three = "a_1"

  if(regex.test(one) && regex.test(two) && regex.test(three)) {
    console.log("Regex found");
  } else {
    console.log("Not found");
  }
 */

/*   const str = "JAvAScrIpt ps AwsOmE!";
  const regex = /[aeiou]/gi;

  if(regex.test(str)) {
    console.log("the vowels aeiou were found");
  } else {
    console.log("not found");
  } */

/* 
    const str = "ffgghhghhhfhDKKKjgjhgjAW";
    const regex = /[A-Z]{4,}/;
    if(regex.test(str)) {
      console.log("found");
    } else {
      console.log("not found");
    } 
 */

/*     function testExact2ConsecutiveLs(str) {
      const regex = /(?<!l)ll(?!l)/;
      const threeLsRegex = /lll/; 
    if(str.match(regex) && !str.match(threeLsRegex) && (str.match(/l/g) || []).length === 2) {
     return true;
    } else {
     return false;
    }
}
 */
//console.log(testExact2ConsecutiveLs("ll")) // returns true
//console.log(testExact2ConsecutiveLs("bells")) // returns true
//console.log(testExact2ConsecutiveLs("aaaallasdows")) // returns true

//console.log(testExact2ConsecutiveLs("mile")) // returns false
//console.log(testExact2ConsecutiveLs("welll")) // returns false
//console.log(testExact2ConsecutiveLs("lolly")) // returns false


/* function validatePin(str) {
  const regex = /^(\d{4}|\d{5}|\d{6})$/;
  if(str.match(regex)) {
    return true;
  } else {
    return false;
  }
}

console.log(validatePin("3542")) // returns true
console.log(validatePin("19073")) // returns true
console.log(validatePin("876487")) // returns true

console.log(validatePin("abcdei")) // returns false
console.log(validatePin("h23456")) // returns false
console.log(validatePin("75839502")) // returns false */

/* function excludeWords(str) {
  let arr = [];
  const words = str.split(" ");
  const regex = /\b(?:north|coders)\b/i;
  for(let i = 0; i < words.length; i++) {
    if(!words[i].match(regex)) {
      arr.push(words[i]);
    }
  }
  return arr.join(" ").trim();
}

//console.log(excludeWords("I live in a house")) // returns "I live in a house."
//console.log(excludeWords("My brother lives in the north of England.")) // returns "My brother lives in the of England."
//console.log(excludeWords("IBM hired a lot of coders lately.")) // returns "IBM hired a lot of lately."
console.log(excludeWords("I study at Northcoders.")) // returns "I study at Northcoders." */


function matchUniqueDigits(str) {
  const regex = /^\d+$/;
  if(!regex.test(str)) {
    return false;
  }
  /*A Set is a special collection in JavaScript that can only hold unique values. 
  This means it won’t allow duplicate entries */
  const seenDigits = new Set();

  for (const char of str) {
  /*This line checks if the current character (char) is already in the Set called seenDigits.
  The has method returns true if char exists in the Set */
    if (seenDigits.has(char)) {
        return false; 
    }
    /*If char is not in seenDigits, this line adds the character to the Set. */
    seenDigits.add(char); 
}
return true;
}

console.log(matchUniqueDigits("2")) // returns true
console.log(matchUniqueDigits("1234")) // returns true

console.log(matchUniqueDigits("00")) // returns false
console.log(matchUniqueDigits("123452")) // returns false