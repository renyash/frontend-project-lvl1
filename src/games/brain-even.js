import getRandomNumber from '../getRandomNumber.js';
import initGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const createRound = () => {
  const questionNumber = getRandomNumber(1, 101);
  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

  return [questionNumber, correctAnswer];
};

const startGame = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  initGame(gameDescription, createRound);
};
export default startGame;
