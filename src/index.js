import readlineSync from 'readline-sync';

const gameInit = (gameDesc, createRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDesc);

  const roundCounter = 3;

  for (let currentRound = 1; currentRound <= roundCounter; currentRound += 1) {
    const [question, correctAnswer] = createRound();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== String(correctAnswer)) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);

      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameInit;
