import readlineSync from 'readline-sync';

const askUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const question = () => `Question: ${randomNumber}`;
    console.log(question());

    const answer = readlineSync.question('Your answer: ');
    const condition1 = randomNumber % 2 === 0 && answer === 'yes';
    const condition2 = randomNumber % 2 !== 0 && answer === 'no';

    if (condition1 === true || condition2 === true) {
      console.log('Correct!');
    } else {
      if (randomNumber % 2 === 0 && answer !== 'yes') {
        return (`"${answer}" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`);
      }
      if (randomNumber % 2 !== 0 && answer !== 'no') {
        return (`"${answer}" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
      }
    }
  }

  return `Congratulations, ${userName}!`;
};
export default askUserName;

// if (answer === 'yes') {
// return (`'${answer}' is wrong answer ;(.
// Correct answer was 'no'.\nLet's try again, ${userName}!`);
// }
// if (answer === 'no') {
// return (`'${answer}' is wrong answer ;(.
// Correct answer was 'yes'.\nLet's try again, ${userName}!`);
// }
