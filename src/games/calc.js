import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const discriptionOfGame = 'What is the result of the expression?';

const getResultOfTheExpression = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default: throw new Error(`operation ${operation} is not supported`);
  }
};

const getQuestionAndRightAnswer = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 10);
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomNumber(0, 2)];
  const expression = `${number1} ${operation} ${number2}`;
  const rightAnswer = String(getResultOfTheExpression(number1, number2, operation));
  return [expression, rightAnswer];
};

const playBrainCalc = () => {
  gameEngine(discriptionOfGame, getQuestionAndRightAnswer);
};
export default playBrainCalc;
