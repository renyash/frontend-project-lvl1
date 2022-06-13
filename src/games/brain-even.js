/* eslint-disable no-unused-vars */
import getRandomNumber from '../getRandomNumber.js';
import gameInit from '../index.js';

const isEven = (number) => number % 2 === 0;

const createRound = () => {
  const questionNumber = getRandomNumber(1, 101);
  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';
  return [questionNumber, correctAnswer];
};

const gameStart = () => {
  const gameDesc = ('Answer "yes" if the number is even, otherwise answer "no".');
  gameInit(gameDesc, createRound);
};
export default gameStart;
