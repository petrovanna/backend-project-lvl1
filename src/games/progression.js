import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const discriptionOfGame = 'What number is missing in the progression?';

const getProgression = () => {
  let result = '';
  const firstNumber = 0;
  const step = getRandomNumber(0, 10);
  let nextNumber = firstNumber + step;

  for (let i = 0; i < 10; i += 1) {
    nextNumber += step;
    result += `${nextNumber} `;
  }
  return result;
};

const getQuestionAndRightAnswer = () => {
  const progression = getProgression().split([' ']);
  const progressionStep = getRandomNumber(0, 10);
  const hiddenNumber = progression[progressionStep];
  progression[progressionStep] = '..';
  const progressionWithHiddenNumber = progression.join(' ');
  const arr = [progressionWithHiddenNumber, hiddenNumber];
  return arr;
};

const playBrainProgression = () => {
  gameEngine(discriptionOfGame, getQuestionAndRightAnswer);
};
export default playBrainProgression;
