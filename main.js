"used strict";

startGame();


function startCombat(userName) {

  let userHp = 40;
  let grantHp = 10;
  let userWins = 0;

    while (userHp > 0 && grantHp > 0 && userWins < 3) {
      let option = confirm("Would you like to attack The Almighty Grant with your battle axe?");
      getDamage();


      function getDamage() {
        userHp -= Math.floor((Math.random() * (5 - 1) + 1));
        grantHp -= Math.floor((Math.random() * (5 - 1) + 1));


      if (userHp > 0) {
        console.log(`${userName} has ${userHp} health points left.`);
        console.log(`The Almighty Grant has ${grantHp} health points left`);
      }
      if (grantHp <= 0) {
        userWins +=1;
      }


      if (userHp <= 0) {
        console.log(`${userName} has been defeated by The Almighty Grant!`);
        // break;
        }
      if (userWins > 2) {
        console.log(`The Almighty Grant has 0 health points and 0 remaining lives. ${userName} wins!`);
        // break;
      }


      if (grantHp <= 0 && userWins < 3) {
        console.log("Grant has lost this round. He loses one life! But wait, he's back and now has 10 health points!");
        grantHp = 10;
      }
   }


      if (option === false) {
         console.log("Game over.")
         break;
       }


  }
}


function startGame() {

  let startGame = prompt("Would you like to challenge The Almighty Grant at a game? Yes or No.");


  if (startGame === "Yes" || startGame === "yes") {

    let userName = prompt("Choose your username.");
    startCombat(userName);
    }


    else if (startGame === "No" || startGame === "no") {
      console.log("Don't be lame, refresh and type yes.")
    }
}


/* https://www.w3schools.com/jsref/jsref_random.asp */
