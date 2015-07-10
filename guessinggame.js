// THIS INSTANTIATES THE GAME
// var game5 = new Game(["Metallica", "Red Hot Chili Peppers","311","Melvins"]);

// var sam = new Game(["Devo", "The Replacements", "Elvis Costello", "Jack White", "Bootsy Collins"]);

// THIS RUNS THE GAME
// game5.run();

var Game = function(answer) {

  this.answer = answer;
  this.concerts = answer.length; // property, instance.concerts
  // this.counter = 0;
  var guess = "";

  this.run = function() { // method, instance.run()

    var counter = 0;
    var play = confirm("Do you want to guess how many concerts I have been to in 2015?");

    console.log("The user guessed " + guess);
    console.log("The correct answer is " + this.concerts);

    while (play && guess != this.concerts && counter < 10) {

      if (counter === 0) {
        guess = prompt("Can you guess how many concerts I have been to in 2015?");
      }

      ++counter;
      console.log("Counter after increment " + counter);

      if (guess <= (this.concerts - 1)) {
        var el = document.getElementById("result");
        el.innerHTML = "I pity the fool that would guess that low!  Guess again!"
        //guess = prompt("I pity the fool that would guess that low!  Guess again!");

      } else if (guess >= (this.concerts + 1)) {
        var el = document.getElementById("result")
        el.innerHTML = "Ain't nobody got time for that many concerts!"
        //guess = prompt("Ain't nobody got time for that many concerts!  Guess again!");
      }
    }

    console.log("While loop over after 10 fails");

    if (guess != this.concerts) {
      alert("You aren't my real friend.  You don't know me at all!");
    } else {
      alert("It only took you " + counter + " guesses! You must have gone to some shows with me. Here's who I saw: ");
    }

    for (var i = 0; i < this.concerts; i++) {
      alert(this.answer[i]);
    }

    alert(this.answer[0]);
    alert(this.answer[1]);
    alert(this.answer[2]);
    alert(this.answer[3]);

  };
}

// var game3 = new Game(["dogs","cats","snakes"]);
// game3.run();
// var game4 = new Game ([1,2,3,4,5,6,7,8,9,10]);
// game4.run();

// THIS INSTANTIATES THE GAME
var game5 = new Game(["Metallica", "Red Hot Chili Peppers","311","Melvins"]);

// THIS RUNS THE GAME
game5.run();

