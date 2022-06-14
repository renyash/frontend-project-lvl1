import getRandomNumber from '../getRandomNumber.js';
import gameInit from '../index.js';

const createRound = () => {
  const firstNumber = getRandomNumber(0, 101);
  const secondNumber = getRandomNumber(0, 101);
  const divNumbers = [];

  for (let gcd = 1; gcd <= firstNumber; gcd += 1) {
    if ((firstNumber % gcd === 0) && (secondNumber % gcd === 0)) {
      divNumbers.push(gcd);
    }
  }

  const maxDivNumber = divNumbers.pop();
  const correctAnswer = maxDivNumber;
  const question = `${firstNumber}  ${secondNumber}`;

  return [question, correctAnswer];
};

const gameStart = () => {
  const gameDesc = 'Find the greatest common divisor of given numbers.';
  gameInit(gameDesc, createRound);
};
export default gameStart;
