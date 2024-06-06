let guestsList:string []=["ALi","Shan","Shahmeer","Faisal","Meraaj"]

guestsList.splice(2,1,"Amjad");

guestsList.push("Raheem Shah");

guestsList.unshift("Rajeesh");

guestsList.splice(2,0,"Fayaz")

console.log("Sorry, I can only invite two people for dinner.");

while (guestsList.length > 2) {
    let removedGuest = guestsList.pop()
    if (removedGuest) {
        console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
    }
}

guestsList.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guestsList.pop();
guestsList.pop();


console.log("Final guest list:", guestsList);