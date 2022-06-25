import readlineSync from 'readline-sync';

const gameEngine = (discriptionOfGame, getQuestionAndRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(discriptionOfGame);

  const countOfRounds = 3;

  for (let i = 0; i < countOfRounds; i += 1) {
    const questionAndRightAnswer = getQuestionAndRightAnswer();
    const question = questionAndRightAnswer[0];
    const rightAnswer = questionAndRightAnswer[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== rightAnswer) {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default gameEngine;
