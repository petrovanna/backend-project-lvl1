import readlineSync from 'readline-sync';

const playBrainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const question = () => `Question: ${randomNumber}`;
    console.log(question());

    const answer = readlineSync.question('Your answer: ');
    const rightCondition1 = randomNumber % 2 === 0 && answer === 'yes';
    const rightCondition2 = randomNumber % 2 !== 0 && answer === 'no';

    if (rightCondition1 === true || rightCondition2 === true) {
      console.log('Correct!');
    } else {
      const wrongCondition1 = randomNumber % 2 === 0 && answer !== 'yes';
      const wrongCondition2 = randomNumber % 2 !== 0 && answer !== 'no';

      if (wrongCondition1 === true) {
        return (`"${answer}" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`);
      }
      if (wrongCondition2 === true) {
        return (`"${answer}" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
      }
    }
  }
  return `Congratulations, ${userName}!`;
};
export default playBrainEven;
