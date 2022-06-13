// import readlineSync from 'readline-sync';

/* const playBrainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const question = () => `Question: ${randomNumber}`;
    console.log(question());

    const answer = readlineSync.question('Your answer: ');
    const rightCondition1 = randomNumber % 2 === 0 && answer === 'yes';
    const rightCondition2 = randomNumber % 2 !== 0 && answer === 'no';

    if (rightCondition1 === true || rightCondition2 === true) {
      console.log('Correct!');
    } else {
      const wrongCondition1 = randomNumber % 2 === 0 && answer !== 'yes';
      const wrongCondition2 = randomNumber % 2 !== 0 && answer !== 'no';

      if (wrongCondition1 === true) {
        return (`"${answer}" is wrong answer ;(.
          Correct answer was "yes".\nLet's try again, ${userName}!`);
      }
      if (wrongCondition2 === true) {
        return (`"${answer}" is wrong answer ;(.
          Correct answer was "no".\nLet's try again, ${userName}!`);
      }
    }
  }
  return `Congratulations, ${userName}!`;
};
export default playBrainEven; */

import readlineSync from 'readline-sync';
import {
  getGameDiscription, getAQuestion, finishGame1, finishGame2, congratulateUser,
} from '../index.js';

export const printDiscriptionOfGame = () => {
  const evenDiscription = 'Answer "yes" if the number is even, otherwise answer "no".';
  getGameDiscription(evenDiscription);
};

export const playBrainGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    getAQuestion(randomNumber);
    const answer = readlineSync.question('Your answer: ');
    const evenNumber = randomNumber % 2 === 0;
    const unEvenNumber = randomNumber % 2 !== 0;
    const rightCondition1 = evenNumber && answer === 'yes';
    const rightCondition2 = unEvenNumber && answer === 'no';
    const rightCommonCondition = rightCondition1 === true || rightCondition2 === true;

    if (rightCommonCondition === true) {
      console.log('Correct!');
    } else {
      const wrongCondition1 = evenNumber && answer !== 'yes';
      const wrongCondition2 = unEvenNumber && answer !== 'no';

      if (wrongCondition1 === true) {
        return finishGame1(answer);
      }
      if (wrongCondition2 === true) {
        return finishGame2(answer);
      }
    }
  }
  return congratulateUser();
};
