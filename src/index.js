import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

export const getGameDiscription = (printDiscriptionOfGame) => {
  console.log(printDiscriptionOfGame);
};

export const getAQuestion = (playBrainGame) => {
  console.log(`Question: ${playBrainGame}`);
};

export const finishGame = (answer, rightAnswer) => {
  const userLost = `"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`;
  console.log(userLost);
};

export const congratulateUser = () => {
  const congratulations = `Congratulations, ${userName}!`;
  console.log(congratulations);
};
