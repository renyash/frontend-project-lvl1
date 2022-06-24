import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is your name? ');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
};
export default askName;
