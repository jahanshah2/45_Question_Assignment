let guestsList:string []=["ALi","Shan","Shahmeer","Faisal","Meraaj"]

guestsList.splice(2,1,"Amjad");

guestsList.push("Raheem Shah");

guestsList.unshift("Rajeesh");

guestsList.splice(2,0,"Fayaz")

let numGuests: number = guestsList.length;

    guestsList.forEach(guest => {
        console.log(`${guest}, I am inviting ${numGuests} people to dinner.`);
    });