interface objType{
    country:string
    capitalCity:string
}

let countriesObject1:objType ={
    country:"pakistan",
    capitalCity:"Islamabad"
}
let countriesObject2:objType ={
    country:"United States",
    capitalCity:"Washington, D.C."
}
let countriesObject3:objType ={
    country:"France",
    capitalCity:"Paris"
}
let countriesObject4:objType ={
    country:"Japan",
    capitalCity:"Tokyo" 
}


console.log("Countries and their capital cities:");
console.log("---------------------------------------");
console.log(`Country Name: ${countriesObject1.country} - Capital: ${countriesObject1.capitalCity}`);
console.log("---------------------------------------");
console.log(`Country Name: ${countriesObject2.country} - Capital: ${countriesObject2.capitalCity}`);
console.log("---------------------------------------");
console.log(`Country Name: ${countriesObject3.country} - Capital: ${countriesObject3.capitalCity}`);
console.log("---------------------------------------");
console.log(`Country Name: ${countriesObject4.country} - Capital: ${countriesObject4.capitalCity}`);
console.log("---------------------------------------");
