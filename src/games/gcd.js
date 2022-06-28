import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const discriptionOfGame = 'Find the greatest common divisor of given numbers.';

/* const getGreatestCommonDivisor = (num1, num2) => {
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
    return iter(counter, acc % counter);
  };
  return iter(num2, remainder);
}; */

const getGreatestCommonDivisor = (acc, counter) => {
  if (counter === 0) {
    return acc;
  }
  return getGreatestCommonDivisor(counter, acc % counter);
};

const getQuestionAndRightAnswer = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 50);
  const randomExpression = `${number1} ${number2}`;
  const rightAnswer = String(getGreatestCommonDivisor(number1, number2));
  return [randomExpression, rightAnswer];
};

const playBrainGcd = () => {
  gameEngine(discriptionOfGame, getQuestionAndRightAnswer);
};
export default playBrainGcd;
