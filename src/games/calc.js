import readlineSync from 'readline-sync';
import {
  getAQuestion, getGameDiscription, congratulateUser, finishGame4,
} from '../index.js';

export const printDiscriptionOfGame = () => {
  const evenDiscription = 'What is the result of the expression?';
  getGameDiscription(evenDiscription);
};

export const playBrainGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 10);
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(operators.length * Math.random())];
    const randomExpression = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

    getAQuestion(randomExpression);
    const userAnswer = readlineSync.question('Your answer: ');

    const sumOfRandomNumbers = randomNumber1 + randomNumber2;
    const differenceOfRandomNumbers = randomNumber1 - randomNumber2;
    const multiplicationOfRandomNumbers = randomNumber1 * randomNumber2;

    const rightCondition1 = randomOperator === '+' && Number(userAnswer) === sumOfRandomNumbers;
    const rightCondition2 = randomOperator === '-' && Number(userAnswer) === differenceOfRandomNumbers;
    const rightCondition3 = randomOperator === '*' && Number(userAnswer) === multiplicationOfRandomNumbers;

    if (rightCondition1 === true || rightCondition2 === true || rightCondition3 === true) {
      console.log('Correct!');
    } else {
      const wrongCondition1 = randomOperator === '+' && Number(userAnswer) !== sumOfRandomNumbers;
      const wrongCondition2 = randomOperator === '-' && Number(userAnswer) !== differenceOfRandomNumbers;
      const wrongCondition3 = randomOperator === '*' && Number(userAnswer) !== multiplicationOfRandomNumbers;

      if (wrongCondition1 === true) {
        return finishGame4(userAnswer, sumOfRandomNumbers);
      }
      if (wrongCondition2 === true) {
        return finishGame4(userAnswer, differenceOfRandomNumbers);
      }
      if (wrongCondition3 === true) {
        return finishGame4(userAnswer, multiplicationOfRandomNumbers);
      }
    }
  }
  return congratulateUser();
};
