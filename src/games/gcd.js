import readlineSync from 'readline-sync';

const playBrainGcd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 10);
    const randomExpression = `${randomNumber1} ${randomNumber2}`;
    const question = () => `Question: ${randomExpression}`;
    console.log(question());

    const userAnswer = readlineSync.question('Your answer: ');
    const greatestCommonDivisor = (num1, num2) => {
      if (num1 === 0) {
        return num2;
      } if (num2 === 0) {
        return num1;
      }
      const remainder = num1 % num2;
      const iter = (acc, counter) => {
        if (counter === 0) {
          return acc;
        }
        return iter(counter, acc % remainder);
      };
      return iter(num2, remainder);
    };

    if (Number(userAnswer) === greatestCommonDivisor(randomNumber1, randomNumber2)) {
      console.log('Correct!');
    }
    if (Number(userAnswer) !== greatestCommonDivisor(randomNumber1, randomNumber2)) {
      const rightAnswer = greatestCommonDivisor(randomNumber1, randomNumber2);
      return `"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};
export default playBrainGcd;
