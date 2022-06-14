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

export const finishGame1 = (answer) => {
  const userLost1 = `"${answer}" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`;
  console.log(userLost1);
};

export const finishGame2 = (answer) => {
  const userLost2 = `"${answer}" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`;
  console.log(userLost2);
};

export const congratulateUser = () => {
  const congratulations = `Congratulations, ${userName}!`;
  console.log(congratulations);
};

export const finishGame3 = (answer, hidden) => {
  const userLost2 = `"${answer}" is wrong answer ;(. Correct answer was "${hidden}".\nLet's try again, ${userName}!`;
  console.log(userLost2);
};
