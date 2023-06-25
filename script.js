'use strict';

// Targets...
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const finalScore0 = document.querySelector('#score--0');
const finalScore1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');



let activePlayer, currentScore, playing , score

function statingPosition(){
    dice.classList.add('hidden');
  finalScore0.textContent = 0;
  finalScore1.textContent = 0;
  currentScore1.textContent = 0;
  currentScore0.textContent = 0;
  activePlayer = 0;
  currentScore = 0;
  score = [0, 0];
  playing = true;
}
statingPosition()




// switch player
function SwitchPlayer() {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function (e) {
  if (playing) {
    let diceNum = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNum);
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNum}.png`;

    if (diceNum !== 1) {
      currentScore += diceNum;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      SwitchPlayer();
    }
  }
});

// hold the score in final

btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    document.querySelector(`#current--${activePlayer}`).textContent = 0;

    if (score[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--active');
      playing = false;
      dice.classList.add('hidden');
    } else {
      SwitchPlayer();
    }
  }
});

//restat again

btnNew.addEventListener('click', function () {
  statingPosition()
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');

  player0.classList.add('player--active');
  player1.classList.remove('player--active');
});
