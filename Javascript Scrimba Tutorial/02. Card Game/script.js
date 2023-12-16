let player = {
    name: "shohan",
    chips: 150
}
let cards = [];
let sum = 0;
let hassBlackJack = false;
let isAlive = false; 
let message = "";
let sumEl =  document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips 
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber === 1) {
        return 11;
    } else if(randomNumber === 11) {
        return 10;
    } else if(randomNumber === 12) {
        return 10;
    }else if(randomNumber === 13) {
        return 10;
    }
    else {
        return randomNumber; 
    }   
}

function startGame() {
    isAlive = true;
    let firstCard  = getRandomCard()
    let secondCard = getRandomCard()
    let cards = [firstCard, secondCard]
    let sum = firstCard + secondCard
    // return sum
    renderGame()
}
function renderGame() { 
    cardEl.textContent = "Cards: ";
    for(let i=0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    let cardSum = "Sum: ";
    sumEl.textContent = cardSum + sum;
    if(sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if(sum === 21) {
        message = "Wohoo! You've got Balckjack!"
        hassBlackJack = true;
    } else {
       message = "You're out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message;
}
function newCard() {      
    if(isAlive === true && hassBlackJack === false) {
        let card = getRandomCard();     
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame()   
    }    
} 

// 29 copy

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
console.log("The 5 largest countries in the world:")
for(let i=0; i < largeCountries.length; i++) {
    console.log(largeCountries[i])
}


// // 29. 

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// let title = "The 5 largest countries in the world: "
// console.log(title)
// for(let i =0; i < largeCountries.length; i++) {
//     console.log(largeCountries[i]);
// }

// 28. 

// let age = 16

// if(age < 6) {
//     console.log("Free");
// }else if(age < 18) {
//     console.log("Child Discount");
// }else if(age < 27) {
//     console.log("student discount")
// }else if(age < 67) {
//     console.log("full price")
// } else {
//     console.log("senior citizen discount")
// }

// 27. 

// let person = {
//     name:"sajid",
//     age: 25,
//     country: "Bangladesh"
// }
// function logData() {         
//       return  person.name + " " + "is "+ person.age +" years old and lives in " + person.country 
// }
// let callLogData = logData()
// console.log(callLogData)