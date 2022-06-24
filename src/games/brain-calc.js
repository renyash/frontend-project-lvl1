import getRandomNumber from '../getRandomNumber.js';
import initGame from '../index.js';

const expressions = ['-', '+', '*'];

const calculateExpression = (firstNumber, secondNumber, expression) => {
  switch (expression) {
    case '-':
      return firstNumber - secondNumber;
    case '+':
      return firstNumber + secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown expression: ${expression}!`);
  }
};

const createRound = () => {
  const firstNumber = getRandomNumber(0, 5);
  const secondNumber = getRandomNumber(0, 20);
  const expression = expressions[getRandomNumber(0, expressions.length)];

  const correctAnswer = calculateExpression(firstNumber, secondNumber, expression);
  const question = `${firstNumber} ${expression} ${secondNumber}`;

  return [question, correctAnswer];
};

const startGame = () => {
  const gameDescription = 'What is the result of the expression?';
  initGame(gameDescription, createRound);
};
export default startGame;
