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
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, 2)];
  const randomExpression = `${number1} ${randomOperator} ${number2}`;
  const rightAnswer = String(getResultOfTheExpression(randomExpression));
  return [randomExpression, rightAnswer];
};

const playBrainCalc = () => {
  gameEngine(discriptionOfGame, getQuestionAndRightAnswer);
};
export default playBrainCalc;
