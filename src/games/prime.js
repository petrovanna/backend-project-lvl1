import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const discriptionOfGame = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  } for (let i = 2; i <= number / 2; i += 1) {
    const remainder = number % i === 0;
    if (remainder) {
      return false;
    }
  }
  return true;
};

const getQuestionAndRightAnswer = () => {
  const number = getRandomNumber(0, 100);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, rightAnswer];
};

const playBrainPrime = () => {
  gameEngine(discriptionOfGame, getQuestionAndRightAnswer);
};
export default playBrainPrime;
