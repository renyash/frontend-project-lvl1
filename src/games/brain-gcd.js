import getRandomNumber from '../getRandomNumber.js';
import initGame from '../index.js';

const calculateMaxDivNumber = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return calculateMaxDivNumber(secondNumber, (firstNumber % secondNumber));
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
