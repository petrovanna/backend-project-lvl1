import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const discriptionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getQuestionAndRightAnswer = () => {
  const randomNumber = getRandomNumber(0, 100);
  const rightAnswer = isNumberEven(randomNumber);
  const arr = [randomNumber, rightAnswer];
  return arr;
};

const playBrainEven = () => {
  gameEngine(discriptionOfGame, getQuestionAndRightAnswer);
};
export default playBrainEven;
