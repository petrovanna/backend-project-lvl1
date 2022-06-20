import readlineSync from 'readline-sync';
import {
  getAQuestion, getGameDiscription, congratulateUser, finishGame,
} from '../index.js';
import getRandomNumber from '../randomNumber.js';

export const printDiscriptionOfGame = () => {
  const evenDiscription = 'What is the result of the expression?';
  getGameDiscription(evenDiscription);
};

export const playBrainGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = getRandomNumber(100);
    const randomNumber2 = getRandomNumber(10);
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(operators.length * Math.random())];
    const randomExpression = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

    getAQuestion(randomExpression);
    const answer = readlineSync.question('Your answer: ');

    const sumOfRandomNumbers = randomNumber1 + randomNumber2;
    const differenceOfRandomNumbers = randomNumber1 - randomNumber2;
    const multiplicationOfRandomNumbers = randomNumber1 * randomNumber2;

    const rightCondition1 = randomOperator === '+' && Number(answer) === sumOfRandomNumbers;
    const rightCondition2 = randomOperator === '-' && Number(answer) === differenceOfRandomNumbers;
    const rightCondition3 = randomOperator === '*' && Number(answer) === multiplicationOfRandomNumbers;

    if (rightCondition1 === true || rightCondition2 === true || rightCondition3 === true) {
      console.log('Correct!');
    } else {
      const wrongCondition1 = randomOperator === '+' && Number(answer) !== sumOfRandomNumbers;
      const wrongCondition2 = randomOperator === '-' && Number(answer) !== differenceOfRandomNumbers;
      const wrongCondition3 = randomOperator === '*' && Number(answer) !== multiplicationOfRandomNumbers;

      if (wrongCondition1 === true) {
        const rightAnswer = sumOfRandomNumbers;
        return finishGame(answer, rightAnswer);
      }
      if (wrongCondition2 === true) {
        const rightAnswer = differenceOfRandomNumbers;
        return finishGame(answer, rightAnswer);
      }
      if (wrongCondition3 === true) {
        const rightAnswer = multiplicationOfRandomNumbers;
        return finishGame(answer, rightAnswer);
      }
    }
  }
  return congratulateUser();
};
