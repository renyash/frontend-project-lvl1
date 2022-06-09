/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';
import getRandomNumber from './getRandomNumber.js';

const isEven = (number) => number % 2 === 0;

const gameStart = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const roundCounter = 3;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let currentRound = 1; currentRound <= roundCounter; currentRound += 1) {
    const questionNumber = getRandomNumber(1, 101);
    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

    console.log(`Question: ${questionNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (currentRound === 3) console.log(`Congratulations, ${name}!`);
  }
};
export default gameStart;
