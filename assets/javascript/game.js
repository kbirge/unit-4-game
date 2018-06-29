
//var random_result;
//var lost;
//var win;

//for (var i = 0; i < 4; i++){

   // var random = Math.floor(Math.random() * 12);
    //console.log(random);

    //var crystal = $("<div>");
   //     crystal.attr({
       //     "class": 'crystal',
         //   "data-random": random
       // });

    //$(".crystals").append(crystal);
//}

//speudo coding

//a game with 4 crystals and Random Result
//Every crystal needs t have a random number between 1-12
//A new random number should be generated every single time we win or lose
//to those 4 cryastals
//When clicking any Crystal , it should add it with the previous result
//Until it equals the Randome Result
//If it is greater than the Random Result, we decrement a losses counter
//if it is equal, then we increment a win counter


CrystalGame = {
    buttons: $("#buttons").children(),
    goalNumber: 0,
    playerScore: 0,
    wins: 0,
    losses: 0,
    gameFunc: function() {


      //Win and Lose conditions
      if (this.playerScore >= this.goalNumber) {
        if (this.playerScore == this.goalNumber) {
          this.wins++;
          $("#wins").html("Wins: " + this.wins);
        }else {
          this.losses++;
          $("#losses").html("Losses: " + this.losses);
        }
        this.gameInit();
      }


      //If game not lost or won, keep updating playerScore html
      $("#playerScore").html(this.playerScore);
    },
    gameInit: function() {
      // Game reset function -- pick new numbers for buttons and goal
      this.goalNumber = Math.floor(Math.random() * 102) + 19;
      this.playerScore = 0;
      $("#randomNumber").html(this.goalNumber);
      $("#playerScore").html(this.playerScore);
      $.map(this.buttons, (element) => {
          element.randNumber = Math.floor(Math.random() * 12) + 1;
      });
    }
  }
  
  // First time game initialization
  CrystalGame.gameInit();
  $("#wins").html("Wins: " + CrystalGame.wins);
  $("#losses").html("Losses: " + CrystalGame.losses);
  
  
  // On click listener
  $.map(CrystalGame.buttons, (element) => {
    $(element).on('click', () => {
      
      //On each button click, run game function.
      CrystalGame.playerScore += element.randNumber
      CrystalGame.gameFunc();
    })
  })