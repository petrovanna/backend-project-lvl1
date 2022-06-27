import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const discriptionOfGame = 'What is the result of the expression?';

const getResultOfTheExpression = (str) => {
  const arr = str.split([' ']);
  switch (arr[1]) {
    case '+':
      return Number(arr[0]) + Number(arr[2]);
    case '-':
      return Number(arr[0]) - Number(arr[2]);
    default:
  }
  return Number(arr[0]) * Number(arr[2]);
};

const getQuestionAndRightAnswer = () => {
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(0, 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(operators.length * Math.random())];
  const randomExpression = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const rightAnswer = String(getResultOfTheExpression(randomExpression));
  const arr = [randomExpression, rightAnswer];
  return arr;
};

const playBrainCalc = () => {
  gameEngine(discriptionOfGame, getQuestionAndRightAnswer);
};
export default playBrainCalc;
