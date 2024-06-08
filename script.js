let score = 0;
let activeHole = null;
let gameInterval;
let misses = 0;

const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('startButton');

holes.forEach(hole => {
    hole.addEventListener('click', () => {
        if (hole === activeHole) {
            score++;
            scoreDisplay.textContent = score;
            hole.classList.remove('mole');
            activeHole = null;
        }
    });
});

function startGame() {
    score = 0;
    misses = 0;
    scoreDisplay.textContent = score;
    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
        if (activeHole) {
            activeHole.classList.remove('mole');
            misses++;
            if (misses >= 3) {
                clearInterval(gameInterval);
                alert('Koniec gry! Nieudane trafienia: 3');
                return;
            }
        }
        const randomIndex = Math.floor(Math.random() * holes.length);
        activeHole = holes[randomIndex];
        activeHole.classList.add('mole');
    }, 1000);
}

startButton.addEventListener('click', startGame);
