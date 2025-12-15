function playSound() {
  const audio = new Audio("https://www.soundjay.com/buttons/sounds/button-09.mp3");
  audio.play();
}
if (userGuess == number) {
  result.textContent = "🎉 You Win!";
  winConfetti();
}
function resetScore() {
  score = 0;
  localStorage.setItem("score", score);
  document.getElementById("score").textContent = score;
}
score++;
score += 10; // Bigger reward = more fun 😎

function checkGuess() {
    if(gameOver) return;
    const guess = Number(document.getElementById("guessInput").value);
    if(!guess || guess < 1 || guess > maxRange) return alert(`Enter 1-${maxRange}`);

    let message = "";
    if(guess === secretNumber){
        message = `🎉 Correct!`;
        score++;
        localStorage.setItem("score", score);
        document.getElementById("score").textContent = score;
        winConfetti();
        secretNumber = Math.floor(Math.random() * maxRange) + 1;
        timeLeft = maxTime;
    } else if(guess < secretNumber) {
        message = "🔼 Too low! Try a higher number.";
    } else {
        message = "🔽 Too high! Try a lower number.";
    }

    document.getElementById("message").innerHTML = message;
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").focus();
}
