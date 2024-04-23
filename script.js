// JavaScript code for the clicker game

// Initial score
let score = 0;

// Initial time
let timeLeft = 10;

// Function to update the score
function updateScore() {
    document.getElementById('score').textContent = 'Score: ' + score;
}

// Function to update the countdown timer
function updateTimer() {
    document.getElementById('timer').textContent = 'Time left: ' + timeLeft + 's';
}

// Function to display countdown before starting the game
function showCountdown() {
    const countdownElement = document.getElementById('countdown');
    countdownElement.style.display = 'block';
    countdownElement.textContent = 'Ready?';
    setTimeout(() => {
        countdownElement.textContent = '3';
        setTimeout(() => {
            countdownElement.textContent = '2';
            setTimeout(() => {
                countdownElement.textContent = '1';
                setTimeout(() => {
                    countdownElement.textContent = 'Go!';
                    setTimeout(() => {
                        countdownElement.style.display = 'none';
                        // Enable the click button
                        document.getElementById('clickButton').disabled = false;
                        startGame();
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

// Function to start the game
function startGame() {
    // Update timer every second
    const countdownInterval = setInterval(() => {
        // Update the timer
        updateTimer();
        
        // If time is up, end the game
        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            endGame();
        } else {
            // Decrease time left
            timeLeft--;
        }
    }, 1000);
}

// Function to end the game
function endGame() {
    // Disable the click button
    document.getElementById('clickButton').disabled = true;
    // Display a message
    document.getElementById('message').textContent = 'Game over! Your final score is: ' + score;
}

// Event listener for the click button
document.getElementById('clickButton').addEventListener('click', function() {
    // Increment the score when the button is clicked
    score++;
    updateScore();
});

// Initially disable the click button
document.getElementById('clickButton').disabled = true;

// Show countdown before starting the game
showCountdown();
