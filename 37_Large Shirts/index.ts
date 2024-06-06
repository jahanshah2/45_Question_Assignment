function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`Shirt size: ${size.toUpperCase()}, Message: "${message}"`);
}

make_shirt();

make_shirt("medium");

make_shirt("small", "TypeScript is awesome!");