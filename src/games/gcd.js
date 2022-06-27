import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const discriptionOfGame = 'Find the greatest common divisor of given numbers.';

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
    return iter(counter, acc % counter);
  };
  return iter(num2, remainder);
};

const getQuestionAndRightAnswer = () => {
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(0, 50);
  const randomExpression = `${randomNumber1} ${randomNumber2}`;
  const rightAnswer = String(getGreatestCommonDivisor(randomNumber1, randomNumber2));
  return [randomExpression, rightAnswer];
};

const playBrainGcd = () => {
  gameEngine(discriptionOfGame, getQuestionAndRightAnswer);
};
export default playBrainGcd;
