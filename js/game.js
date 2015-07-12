var el = document.getElementById('query');
var states = ["michigan", "maryland", "virginia", "new york", "colorado", "alaska", "washington" ];
var map = document.getElementById('map');

// Declare global function to search and splice an array for a given string
function include(array1, string1) {
  for (var i = 0; i < array1.length; i++) {
    if (string1.toLowerCase() == array1[i]) {
      array1.splice(i,1);
      return true;
    }
  }
}

var Game = function(statesArray) {
  this.statesArray = statesArray
  this.guesses = 0;
  this.attempts = 5;
  this.answer = "7";
  this.makeGuess = function() {
    this.lastGuess = prompt('How many states have I lived in?');
    this.guesses++;
    return this.lastGuess;
  }

  this.run = function() {
    // local variable to manipulate the states array, leaving global array untouched
    var otherStates = this.statesArray.slice();

    while(this.guesses < this.attempts && guess != this.answer) {
      var guess = this.makeGuess();

      if (guess === this.answer) {
        game.message ='Are you a stalker? You are correct. Can you name one of the states?';
      }
      
      else if (this.guesses === this.attempts){
        game.message = "The right answer is 7. Can you name one of the states I've lived in?";
      }
  
      else if (guess < this.answer) {
        el.innerHTML = "<hr /><b>That's a little too low. Try again.</b>";
      }
    
      else if (guess > this.answer) {
        el.innerHTML = "<hr /><b>That's a bit too high. Guess again.</b>";
      }
    }

    // Once the user gets the right answer they're asked to name
    // one of the states I've lived in.  They get one chance.
    var stateGuess = prompt(game.message);

    // call the 'include' function to see if the guess is in the array of right
    // answers.
    if (include(otherStates,stateGuess)) {
  
      el.innerHTML = "<hr /><b>Yup. I've lived there! Thanks for playing!<br><br>These are the other states where I've lived:</b>";

    } else {
      el.innerHTML = "<hr /><b>I haven't lived there yet but perhaps some day I will.<br><br>These are the states I have lived:</b>";
    }


    this.addStates(otherStates);
    map.innerHTML = '<img src="images/MeMap-USA-states.PNG" alt="greyscale and blue map of the United States" title="No, Alaska is not an island"/>';

  } // close run function

  this.addStates = function(array2) {
    var table = document.getElementById("stateTable");
    var x = table.rows.length
    // If the game has already been run, delete previous output
    for (n = 0; n < x; n++) {
      table.deleteRow(0);
    }

    for (i = 0; i < array2.length; i++) {
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      cell1.innerHTML = array2[i];
    }
  } //close addStates Function

} //close constructor

var game = new Game(states);







