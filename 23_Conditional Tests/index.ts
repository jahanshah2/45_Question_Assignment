let myName:string = "Jahan"

// TEST 1 //
console.log(myName == "jahan"); //false

// TEST 2 //
console.log(myName !== "Jahan"); //false

// TEST 3 //
console.log(myName.charAt(1) == "J"); //false

// TEST 4 //
console.log(myName.startsWith("j")); //false

// TEST 5 //
console.log(myName.includes("H")); //false

// TEST 6 //
console.log(myName.length == 5); //true 

// TEST 7 //
console.log(myName.endsWith("n")); //true

// TEST 8 //
console.log(myName == "Jahan"); //true

// TEST 9 //
console.log(!(myName == "jahan")); //true

// TEST 10 //
console.log(myName.charAt(3) == "a"); //true