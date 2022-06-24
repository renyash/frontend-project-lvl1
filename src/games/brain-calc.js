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
      console.log('error: unknown expression');
      return 0;
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
  const gameDesc = 'What is the result of the expression?';
  initGame(gameDesc, createRound);
};
export default startGame;
