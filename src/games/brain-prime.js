import getRandomNumber from '../getRandomNumber.js';
import gameInit from '../index.js';

const isPrime = (number) => {
  let primeCounter = 0;
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) primeCounter += 1;
  }
  if (primeCounter === 2) return true;
  return false;
};

const createRound = () => {
  const questionNumber = getRandomNumber(1, 101);
  const correctAnswer = isPrime(questionNumber) ? 'yes' : 'no';
  return [questionNumber, correctAnswer];
};

const gameStart = () => {
  const gameDesc = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  gameInit(gameDesc, createRound);
};
export default gameStart;
