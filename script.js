let guesses = [];
let numberGuess = document.getElementById("number-guess");

let correctNumber = Math.floor(Math.random() * 100 + 1);
console.log("Random number is : ", correctNumber);

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
};

function playGame() {
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

function displayResult() {
  if (numberGuess.value > correctNumber) {
    showNumberAbove();
  } else if (numberGuess.value < correctNumber) {
    showNumberBelow();
  } else {
    showYouWon();
  }
}

function initGame() {
  //location.reload();
  let correctNumber = Math.floor(Math.random() * 100 + 1);
  resetResultContent();
  guesses = [];
  displayHistory();
}

function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}

function saveGuessHistory(guess) {
  guesses.push(guess.value);
  console.log(guesses);
}

function displayHistory() {
  let index = 0; // TODO
  let list = "<ul class='list-group'>";

  guesses.forEach((guess) => {
    list += `<li class='list-group-item'>You guessed ${guess}</li>`;
  });
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";

  let dialog = getDialog("won", text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!";

  let dialog = getDialog("warning", text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!";

  let dialog = getDialog("warning", text);

  document.getElementById("result").innerHTML = dialog;
}
