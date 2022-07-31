import getRandomNumber from '../getRandomNumber.js';
import initGame from '../index.js';

const calculateMaxDivNumber = (firstNumber, secondNumber) => {
  let maxDivNumber = 0;
  for (let gcd = 1; gcd <= Math.min(firstNumber, secondNumber); gcd += 1) {
    if ((firstNumber % gcd === 0) && (secondNumber % gcd === 0)) {
      maxDivNumber = gcd;
    }
  }

  return maxDivNumber;
};

const createRound = () => {
  const firstNumber = getRandomNumber(0, 101);
  const secondNumber = getRandomNumber(0, 101);

  const correctAnswer = calculateMaxDivNumber(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;

  return [question, correctAnswer];
};

const startGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  initGame(gameDescription, createRound);
};
export default startGame;
