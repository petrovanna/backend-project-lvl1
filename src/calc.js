import readlineSync from 'readline-sync';

const playBrainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const greeting = `Hello, ${userName}!`;
  console.log(greeting);

  const gameQuestion = 'What is the result of the expression?';
  console.log(gameQuestion);

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(operators.length * Math.random())];
    const randomExpression = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
    const question = () => `Question: ${randomExpression}`;
    console.log(question());

    const userAnswer = readlineSync.question('Your answer: ');
    const condition1 = randomOperator === '+' && Number(userAnswer) === randomNumber1 + randomNumber2;
    const condition2 = randomOperator === '-' && Number(userAnswer) === randomNumber1 - randomNumber2;
    const condition3 = randomOperator === '*' && Number(userAnswer) === randomNumber1 * randomNumber2;

    if (condition1 === true || condition2 === true || condition3 === true) {
      console.log('Correct!');
    } else if (condition1 === false) {
      const sum = randomNumber1 + randomNumber2;
      return (`"${userAnswer}" is wrong answer ;(. Correct answer was "${sum}".\nLet's try again, ${userName}!`);
    } else if (condition2 === false) {
      const dif = randomNumber1 - randomNumber2;
      return (`"${userAnswer}" is wrong answer ;(. Correct answer was "${dif}".\nLet's try again, ${userName}!`);
    } else {
      const mult = randomNumber1 * randomNumber2;
      return (`"${userAnswer}" is wrong answer ;(. Correct answer was "${mult}".\nLet's try again, ${userName}!`);
    }
  }
  return `Congratulations, ${userName}!`;
};
export default playBrainCalc;
