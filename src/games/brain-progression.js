import getRandomNumber from '../getRandomNumber.js';
import initGame from '../index.js';

const createProgression = (progFirstNumber, progInterval, progLength) => {
  const progArray = [progFirstNumber];
  for (let i = 0; i < progLength; i += 1) {
    progArray.push(progArray[i] + progInterval);
  }

  return progArray;
};

const createRound = () => {
  const progFirstNumber = getRandomNumber(1, 11);
  const progInterval = getRandomNumber(1, 11);
  const progLength = getRandomNumber(5, 11);

  const progression = createProgression(progFirstNumber, progLength, progInterval);

  const indexToHide = getRandomNumber(0, progression.length - 1);
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
