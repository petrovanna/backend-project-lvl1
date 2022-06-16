import readlineSync from 'readline-sync';
import {
  getGameDiscription, getAQuestion, congratulateUser, finishGame1, finishGame2,
} from '../index.js';

export const printDiscriptionOfGame = () => {
  const primeDiscription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  getGameDiscription(primeDiscription);
};

const isItPrimeNumber = (randomNumber) => {
  for (let i = 2; i <= randomNumber / 2; i += 1) {
    const remainder = randomNumber % i === 0;
    if (remainder === true) {
      return 'no';
    }
  }
  return 'yes';
};

export const playBrainGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    getAQuestion(randomNumber);

    const answer = readlineSync.question('Your answer: ');
    const primeOrNotPrime = isItPrimeNumber(randomNumber);

    if (primeOrNotPrime === answer) {
      console.log('Correct!');
    } else {
      const wrongCondition1 = primeOrNotPrime === 'yes' && answer !== 'yes';
      const wrongCondition2 = primeOrNotPrime === 'no' && answer !== 'no';

      if (wrongCondition1 === true) {
        return finishGame1(answer);
      }
      if (wrongCondition2) {
        return finishGame2(answer);
      }
    }
  }
  return congratulateUser();
};
