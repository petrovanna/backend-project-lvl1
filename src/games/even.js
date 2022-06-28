import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const discriptionOfGame = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const isEven = (number) => (number % 2 === 0);
const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const getQuestionAndRightAnswer = () => {
  const number = getRandomNumber(1, 100);
  const rightAnswer = check(number);
  return [number, rightAnswer];
};

const playBrainEven = () => {
  gameEngine(discriptionOfGame, getQuestionAndRightAnswer);
};
export default playBrainEven;
