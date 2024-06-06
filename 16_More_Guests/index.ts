let guestsList:string []=["ALi","Shan","Shahmeer","Faisal","Meraaj"]

guestsList.splice(2,1,"Amjad");

guestsList.push("Raheem Shah");

guestsList.unshift("Rajeesh");

guestsList.splice(2,0,"Fayaz")



    guestsList.forEach(guest => {
        console.log(`${guest}, I have organized a bigger dinner, I want my friends to join me in my happiness.`);
        
    });
