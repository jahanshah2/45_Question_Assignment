let animals: string[] = ["dog", "cat", "monky"];

~console.log("Animals with a common characteristic:");
for (let animal of animals) {
    console.log(animal);
}

console.log("\nStatements about each animal:");
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

console.log("\nAny of these animals would make a great pet!");
