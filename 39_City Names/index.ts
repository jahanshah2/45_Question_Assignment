function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

let cityCountry1 = city_country('karachi', 'Pakistan');
let cityCountry2 = city_country('Dhaka', 'Bangladesh');
let cityCountry3 = city_country('Tokyo', 'Japan');

console.log(cityCountry1);
console.log(cityCountry2);
console.log(cityCountry3);