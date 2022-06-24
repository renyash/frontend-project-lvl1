import getRandomNumber from '../getRandomNumber.js';
import initGame from '../index.js';

const createRound = () => {
  const progFirstNumber = getRandomNumber(1, 11);
  const progInterval = getRandomNumber(1, 11);
  const progArray = [progFirstNumber];

  for (let i = 0; i < getRandomNumber(5, 10); i += 1) {
    progArray.push(progArray[i] + progInterval);
  }

  const indexToHide = getRandomNumber(0, progArray.length);
  const correctAnswer = progArray[indexToHide];
  progArray[indexToHide] = '..';
  const question = progArray.join(' ');
  return [question, correctAnswer];
};

const startGame = () => {
  const gameDesc = 'What number is missing in the progression?';
  initGame(gameDesc, createRound);
};
export default startGame;
