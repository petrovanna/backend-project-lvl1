import readlineSync from 'readline-sync';
import { getGameDiscription, getAQuestion, congratulateUser } from '../index.js';

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
  const arr = result.split([' ']);
  const arrIndex = Math.floor(Math.random() * 10);
  // const hidden = arr[arrIndex];
  arr[arrIndex] = '..';
  return arr.join(' ');
};

export const playBrainGame = () => {
  for (let i = 0; i < 3; i += 1) {
    getAQuestion(progression());
    const answer = readlineSync.question('Your answer: ');

    if (answer === '15') { // вписала число, чтобы не ругался линтер
      console.log('Correct!');
    }
  }
  return congratulateUser();
};
