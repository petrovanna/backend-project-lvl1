import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const discriptionOfGame = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = ([firstNumber, step, hiddenIndex]) => {
  const result = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const current = firstNumber + (step * i);
    result.push(current);
  }
  const hiddenNumber = String(result[hiddenIndex]);
  result[hiddenIndex] = '..';
  return [result.join(' '), hiddenNumber];
};

const getQuestionAndRightAnswer = () => {
  const firstNumber = getRandomNumber(0, 10);
  const step = getRandomNumber(0, 10);
  const hiddenIndex = getRandomNumber(0, 9);
  const progressionAndHiddenNumber = getProgression([firstNumber, step, hiddenIndex]);
  return progressionAndHiddenNumber;
};

const playBrainProgression = () => {
  gameEngine(discriptionOfGame, getQuestionAndRightAnswer);
};
export default playBrainProgression;
