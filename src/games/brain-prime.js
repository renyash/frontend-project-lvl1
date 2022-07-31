import getRandomNumber from '../getRandomNumber.js';
import initGame from '../index.js';

const isPrime = (number) => {
  if ((number === 1) || (number === 0)) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const createRound = () => {
  const questionNumber = getRandomNumber(1, 101);
  const correctAnswer = isPrime(questionNumber) ? 'yes' : 'no';

  return [questionNumber, correctAnswer];
};

const startGame = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  initGame(gameDescription, createRound);
};
export default startGame;
