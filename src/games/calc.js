import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const discriptionOfGame = 'What is the result of the expression?';

const getResultOfTheExpression = (str) => {
  const arr = str.split([' ']);
  let result = [];
  if (arr[1] === '+') {
    result = Number(arr[0]) + Number(arr[2]);
  }
  if (arr[1] === '-') {
    result = Number(arr[0] - arr[2]);
  }
  if (arr[1] === '*') {
    result = Number(arr[0] * arr[2]);
  }
  return result;
};

const getQuestionAndRightAnswer = () => {
  const randomNumber1 = getRandomNumber(100);
  const randomNumber2 = getRandomNumber(10);
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
