import getRandomNumber from '../getRandomNumber.js';
import initGame from '../index.js';

const createProgression = (progFirstNumber, progInterval, progArray) => {
  for (let i = 0; i < getRandomNumber(5, 10); i += 1) {
    progArray.push(progArray[i] + progInterval);
  }
  return progArray;
};

const createRound = () => {
  const progFirstNumber = getRandomNumber(1, 11);
  const progInterval = getRandomNumber(1, 11);
  const progArray = [progFirstNumber];

  const progression = createProgression(progFirstNumber, progInterval, progArray);

  const indexToHide = getRandomNumber(0, progression.length);
  const correctAnswer = progression[indexToHide];
  progression[indexToHide] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startGame = () => {
  const gameDescription = 'What number is missing in the progression?';
  initGame(gameDescription, createRound);
};
export default startGame;
