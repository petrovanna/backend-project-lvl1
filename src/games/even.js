import readlineSync from 'readline-sync';
import {
  getGameDiscription, getAQuestion, finishGame, congratulateUser,
} from '../index.js';
import getRandomNumber from '../randomNumber.js';

export const printDiscriptionOfGame = () => {
  const evenDiscription = 'Answer "yes" if the number is even, otherwise answer "no".';
  getGameDiscription(evenDiscription);
};

export const playBrainGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(100);
    getAQuestion(randomNumber);
    const answer = readlineSync.question('Your answer: ');
    const evenNumber = randomNumber % 2 === 0;
    const unEvenNumber = randomNumber % 2 !== 0;
    const rightCondition1 = evenNumber && answer === 'yes';
    const rightCondition2 = unEvenNumber && answer === 'no';
    const rightCommonCondition = rightCondition1 === true || rightCondition2 === true;

    if (rightCommonCondition === true) {
      console.log('Correct!');
    } else {
      const wrongCondition1 = evenNumber && answer !== 'yes';
      const wrongCondition2 = unEvenNumber && answer !== 'no';

      if (wrongCondition1 === true) {
        const rightAnswer = 'yes';
        return finishGame(answer, rightAnswer);
      }
      if (wrongCondition2 === true) {
        const rightAnswer = 'no';
        return finishGame(answer, rightAnswer);
      }
    }
  }
  return congratulateUser();
};
