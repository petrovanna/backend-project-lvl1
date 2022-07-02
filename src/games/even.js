import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const discriptionOfGame = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const isEven = (number) => (number % 2 === 0);

const getQuestionAndRightAnswer = () => {
  const number = getRandomNumber(0, 100);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [number, rightAnswer];
};

const playBrainEven = () => {
  gameEngine(discriptionOfGame, getQuestionAndRightAnswer);
};
export default playBrainEven;
