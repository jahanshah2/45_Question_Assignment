"use strict";
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Shirt size: ${size.toUpperCase()}, Message: "${message}"`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "TypeScript is awesome!");
