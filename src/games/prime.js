import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const discriptionOfGame = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';

const isPrime = (number) => {
  if (number === 0 || number === 1) {
    return true;
  } for (let i = 2; i <= number / 2; i += 1) {
    const remainder = number % i === 0;
    if (remainder) {
      return true;
    }
  }
  return false;
};

const getQuestionAndRightAnswer = () => {
  const number = getRandomNumber(0, 100);
  const rightAnswer = isPrime(number) ? 'no' : 'yes';
  return [number, rightAnswer];
};

const playBrainPrime = () => {
  gameEngine(discriptionOfGame, getQuestionAndRightAnswer);
};
export default playBrainPrime;
