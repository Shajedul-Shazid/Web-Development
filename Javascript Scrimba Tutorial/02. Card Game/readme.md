Recap for this "Blackjack Game projects": 

1. arrays
2. objects 
3. booleans
4. if else statements
5. comparison operators
6. logical operators
7. for loops 
8. The Math object
9. return statements


<!-- <p id="player-el"></p>
<p id="greeting-el"></p>
<p id="fucking-boss"></p> -->

// 26. 

// let castleListing = {
//     title: "Sylhet, Bangladesh",
//     price: "$30",
//     image: "this will provide a link", 
//     room: ["1","2","3","4","5"]
// }
// let len = castleListing.length

// console.log(len)


// 25. 
// Objects -> store data in depth - composite / complex data type
// key-value pairs 

// let family = {
//     shajid: "web developer",
//     ayrin: "wife",
//     sajeda: "mother",
//     janatune: "mama",
//     khadija: "sister",
//     babu: "dulavai",
//     usama: "mama",
//     bodu: "shoshur-abba",
//     rumia: "shashuri",
//     shohan: "sala"
// }

// let familyMember = family.sajeda;

// console.log(familyMember)


// 24. 

// let likesDocumentaries = false
// let likesStartups = true 
// if(likesDocumentaries === true || likesStartups === true) {
//     recommendMovie()
// }
// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }

// 23. 

// let hasSolvedChallenge = false 
// let hasHintsLeft = false 
// if(hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }
// function showSolution() {
//     console.log("Showing the solution....")
// }

// 22. 

// let hasCompletedCourse = true
// let givesCertificate = true

// if(hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generating certificate.....")
// }

// 21. 

// function rollDice() {
//     console.log(Math.floor(Math.random() * 6) + 1) 
// }
// rollDice()

// let dice = rollDice()
// console.log(dice)

// // 20. 

// // Try to modify the expression so that we get a range from 1 to 6
// let randomNumber = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber)

// // 19. 

// let randomNumber  = Math.floor(Math.random() * 6)
// console.log(randomNumber)

// // write down all the possible values randomNumber can hold now! 

// 0-5

// 18. 

// let randomNumber = Math.random() * 6
// let floorNumber = Math.floor(randomNumber)
// console.log(floorNumber)

// What does Math.floor() do to positive numbers? 

// It basically take the number in the ground floor

// Your answer: it removes the decimals

// 17.

// let randomNumber = Math.random() * 6
// console.log(randomNumber)

// In which range will our randomNumber be now? 

// From : 0 
// To : 5

// 16. 

// let randomNumber = Math.random()
// console.log(randomNumber);

// // What does Math.random() do? 

// It basically generate new number in every reload of a browser. 

// // My answer: 

// It is really a very good method to generate new number. for building games and other applications


// 15. Copy Total Fucking Time has been calculated

// let anniFuck = 40 
// let mohonaFuck = 30
// let shajid = document.getElementById("fucking-boss");
// function totalFuckTime() {
//         return anniFuck +  mohonaFuck    
// }
// let fuckingDuration = totalFuckTime()
// console.log(fuckingDuration)

// 15.

// let player1Time = 102
// let player2Time = 107

// function totalRaceTime() {
//     let player1Time = 102
//     return player1Time + player2Time;
// }

// let totalTime = totalRaceTime()
// console.log(totalTime)

// 14. copy Runner for fuck 

// let anni = 50 + " "  +"Anni " + "Fuck u"
// let mohona = 40 + " " +"Mohona " + "Fuck u"

// function fuckU() {
//     if(mohona < anni) {
//         return mohona 
//     } else if(anni < mohona) {
//         return anni
//     } else {
//         return mohona
//     }
// }

// let readToFuck = fuckU()

// console.log(readToFuck);

// // 13. copy

// let sentence = ["Hello", "my", "name", "is", "Shajid"]
// let greetingEl = document.getElementById("greeting-el");

// for(let i=0; i < sentence.length; i++) {
//    let welcome = greetingEl.textContent += sentence[i] + " "
//    console.log(welcome)
// }


// 14. 

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//       if(player1Time < player2Time) {
//          return player1Time
//       } else if (player2Time < player1Time) {
//          return player2Time
//       } else {
//         return player1Time
//       }
// }
// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// [12/12/23]

// 13. 

// let sentence = ["Hello", "my", "name", "is", "Shajid"];
// let greetingEl = document.getElementById("greeting-el");

// for(let i = 0; i < sentence.length; i++) {    
//     greetingEl.textContent += " " + sentence[i]; 
// }

// // 12. 

// let praciceCards = [10, 12, 55,111, 12, 234242, 500];

// praciceCards.push(147570);

// for(i=0;i<praciceCards.length;i++){
//     console.log(praciceCards[i]);
// }


// 11. 

// let messages = [
//       "Hey, how's it going",
//       "I'm great, thank you! How about you?",
//       "All good. Been working on my portfilio lately",
//       "Hey, long time i don't see you",
//       "Hey, how are you buddy",
//       "Hey, I am from bangladesh",
//       "Hey, how was your day"
// ];

// for(i=0;i<messages.length;i++){
//     console.log(messages[i]);
// }

// for(messages[0]; i < messages[3]; i++ ) {
//       console.log(messages);
// }

// console.log(messages[0]);
// console.log(messages[1]);
// console.log(messages[2]);

// 10. 

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

// for(let count = 10; count <=100; count+=10) {
//     console.log(count);
// }


// 9.

// count to ten! 
// We need to specify.

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use? 

      // start     // finish   // step size
// for(let count = 1; count < 11; count +=1) {
//     console.log(count);
// }

// for(i=0;i<11;i++){
//     console.log(i);
// }

// 8.

// let number = [7,4];
// number.push(100);
// console.log(number);

// let messages = [
//       "Hey, how's it going",
//       "I'm great, thank you! How about you?",
//       "All good. Been working on my portfilio lately"
// ];
// messages.push("Hey, I am shajid From Bangladesh");
// messages.splice(3,1);
// console.log(messages);


// let myself = [
//     "shajid",
//     "25", 
//      "false"

// ];

// console.log(myself[0]);
// console.log(myself[1]);
// console.log(myself[2]);

// 7. 

// indexed of array 

// let featuresPosts= [
//     "Check out the Netflix clone",
//     "Here's the code for my projects", 
//     "I've just relauched my portfolio"
// ];

// console.log(featuresPosts[2]);
// console.log(featuresPosts[1]);
// console.log(featuresPosts[0]);

// let experiences = [
//     "labour work",
//     "master",
//     "job at garments",
//     "job at skyranko",
//     "scrimba courses practices"
// ];

// console.log(experiences.length);

// console.log(experiences[4]);
// console.log(experiences[0]);
// console.log(experiences[2]);
// console.log(experiences[1]);
// console.log(experiences[3]);

// // 6.

// let firstCard = 10;
// let secondCard = 11;
// let sum = firstCard + secondCard;
// let hassBlackJack = false;
// let isAlive = true; 
// //1. Declare a variable called message and assign its value to an empty string. 
// let message = "";
// //2. Reassign the message variable to the string we're logging out
// if(sum <= 20) {
//     message = "Do you want to draw a new card?"
// } else if(sum === 21) {
//     message = "Wohoo! You've got Balckjack!"
//     hassBlackJack = true;
// } else {
//    message = "You're out of the game!"
//     isAlive = false;
// }
// // //cashout
// // console.log(hassBlackJack);
// // console.log(isAlive);

// // 3. Log it out! 

// console.log(message);


// 5. 

// console.log(4 === 3) // false 
// console.log(5 > 2) // true
// console.log(12 > 12) // false 
// console.log(3 < 0) // false
// console.log(3 >= 3) // true
// console.log(11 <= 11) // true
// console.log(3 <= 2) // false

// // 4.

// let firstCard = 30;
// let secondCard = 11;
// let sum = firstCard + secondCard;
// let hassBlackJack = false;
// //1. Create a variable called isAlive and assign it to true
// let isAlive = true; 

// //2. Flip its value to false in the appropriate code block
// if(sum <= 20) {
//     console.log("Do you want to draw a new card?");
// } else if(sum === 21) {
//     console.log("Wohoo! You've got Balckjack!");
//     hassBlackJack = true;
// } else {
//     console.log("You're out of the game!");
//     isAlive = false;
// }
// //cashout
// console.log(hassBlackJack);
// console.log(isAlive);


// 3.

// let age = 90; 
// if(age < 100) {
//     console.log("Not eligiable");
// }
// if(age === 100) {
//     console.log("Here is your birthday card from the king");
// } else {
//     console.log("100+");
// }

// 2.

// let age = 20;
// if(age < 21) {
//     console.log("You can not enter the club!");
// }else {
//     console.log("Welcome");
// }

// 1.

// let firstCard = 14;
// let secondCard = 10;
// let sum = firstCard + secondCard;

// if(sum < 21) {
//     console.log("Do you want to draw a new card?");
// } else if(sum === 21) {
//     console.log("Wohoo! You've got Blackjack!");
// } else{
//     console.log("You're out of the game");
// }


