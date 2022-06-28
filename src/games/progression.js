import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const discriptionOfGame = 'What number is missing in the progression?';

const getProgression = (firstNumber, step) => {
  let result = '';
  let nextNumber = firstNumber + step;

  for (let i = 0; i < 10; i += 1) {
    nextNumber += step;
    result += `${nextNumber} `;
  }
  return result.trim();
};

const getQuestionAndRightAnswer = () => {
  const firstNumber = 0;
  const step = getRandomNumber(0, 10);
  const progression = getProgression(firstNumber, step).split([' ']);
  const progressionStep = getRandomNumber(0, 9);
  const hiddenNumber = progression[progressionStep];
  progression[progressionStep] = '..';
  const progressionWithHiddenNumber = progression.join(' ');
  return [progressionWithHiddenNumber, hiddenNumber];
};

const playBrainProgression = () => {
  gameEngine(discriptionOfGame, getQuestionAndRightAnswer);
};
export default playBrainProgression;
