import readlineSync from 'readline-sync';
import {
  getGameDiscription, getAQuestion, finishGame1, finishGame2, congratulateUser,
} from '../index.js';

export const printDiscriptionOfGame = () => {
  const evenDiscription = 'Answer "yes" if the number is even, otherwise answer "no".';
  getGameDiscription(evenDiscription);
};

export const playBrainGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
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
        return finishGame1(answer);
      }
      if (wrongCondition2 === true) {
        return finishGame2(answer);
      }
    }
  }
  return congratulateUser();
};
