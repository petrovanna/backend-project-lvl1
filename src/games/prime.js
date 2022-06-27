import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const discriptionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isItPrimeNumber = (number) => {
  if (number === 0) {
    return 'no';
  }
  for (let i = 2; i <= number / 2; i += 1) {
    const remainder = number % i === 0;
    if (remainder === true) {
      return 'no';
    }
  }
  return 'yes';
};

const getQuestionAndRightAnswer = () => {
  const randomNumber = getRandomNumber(0, 100);
  const rightAnswer = isItPrimeNumber(randomNumber);
  const arr = [randomNumber, rightAnswer];
  return arr;
};

const playBrainPrime = () => {
  gameEngine(discriptionOfGame, getQuestionAndRightAnswer);
};
export default playBrainPrime;
