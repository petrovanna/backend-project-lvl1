import readlineSync from 'readline-sync';
import {
  getGameDiscription, getAQuestion, congratulateUser, finishGame,
} from '../index.js';

export const printDiscriptionOfGame = () => {
  const evenDiscription = 'What number is missing in the progression?';
  getGameDiscription(evenDiscription);
};

const progression = () => {
  let result = '';
  const firstNumber = 0;
  const step = Math.floor(Math.random() * 10);
  let nextNumber = firstNumber + step;

  for (let i = 0; i < 10; i += 1) {
    nextNumber += step;
    result += `${nextNumber} `;
  }
  return result;
};

export const playBrainGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const arr = progression().split([' ']);
    const arrIndex = Math.floor(Math.random() * 10);
    const hidden = arr[arrIndex];
    arr[arrIndex] = '..';
    const arrHidden = arr.join(' ');
    getAQuestion(arrHidden);
    const answer = readlineSync.question('Your answer: ');

    if (answer === hidden) {
      console.log('Correct!');
    }
    if (answer !== hidden) {
      const rightAnswer = hidden;
      return finishGame(answer, rightAnswer);
    }
  }
  return congratulateUser();
};
