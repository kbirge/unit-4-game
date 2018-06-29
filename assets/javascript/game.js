

//a game with 4 crystals and Random Result
CrystalGame = {
    buttons: $("#buttons").children(),
    goalNumber: 0,
    playerScore: 0,
    wins: 0,
    losses: 0,
    gameFunc: function() {

      //Win and Lose conditions
      //If it is greater than the Random Result, we decrement a losses counter
      //if it is equal, then we increment a win counter
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

      //A new random number should be generated every single time we win or lose
      //to those 4 cryastals
      $("#playerScore").html(this.playerScore);
    },
    gameInit: function() {
      //Every crystal needs to have a random number between 1-12
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
  //When clicking any Crystal , it should add it with the previous result
  //Until it equals the Randome Result
  $.map(CrystalGame.buttons, (element) => {
    $(element).on('click', () => {
      
      //run the function for each button clicked 
      CrystalGame.playerScore += element.randNumber
      CrystalGame.gameFunc();
    })
  })