import readlineSync from 'readline-sync';
import {
  getGameDiscription, getAQuestion, congratulateUser, finishGame,
} from '../index.js';

export const printDiscriptionOfGame = () => {
  const evenDiscription = 'Find the greatest common divisor of given numbers.';
  getGameDiscription(evenDiscription);
};

const getGreatestCommonDivisor = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  } if (num2 === 0) {
    return num1;
  }
  const remainder = num1 % num2;
  const iter = (acc, counter) => {
    if (counter === 0) {
      return acc;
    }
    return iter(counter, acc % remainder);
  };
  return iter(num2, remainder);
};

export const playBrainGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 10);
    const randomExpression = `${randomNumber1} ${randomNumber2}`;
    getAQuestion(randomExpression);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === getGreatestCommonDivisor(randomNumber1, randomNumber2)) {
      console.log('Correct!');
    }
    if (Number(answer) !== getGreatestCommonDivisor(randomNumber1, randomNumber2)) {
      const rightAnswer = getGreatestCommonDivisor(randomNumber1, randomNumber2);
      return finishGame(answer, rightAnswer);
    }
  }
  return congratulateUser();
};
