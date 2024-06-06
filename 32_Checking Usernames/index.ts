let currentUsers: string[] = ["Jahan","Waseem","Noman","Faraz","Jameel"]

let newUsers: string[] = ["Ahsan","Waseem","Ameen","Faraz","Hamzah"]

let lowercasedCurrentUsers = currentUsers.map(user => user.toLowerCase());

for (let userName of newUsers) {
    if (lowercasedCurrentUsers.includes(userName.toLowerCase())) {
        console.log(`The username "${userName}" is already taken. Please enter a new username.`);
    }else{
        console.log(`The username "${userName}" is available.`);
    }
}


