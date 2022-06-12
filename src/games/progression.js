import readlineSync from 'readline-sync';

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
  const hidden = arr[arrIndex];
  arr[arrIndex] = '..';
  return (arr.join(' '));
};

const askUserName = () => {
  console.log('Welcome!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const question = `Question: ${progression()}`;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (String(answer) === hidden) {
      console.log('Correct!');
    }
  }
};
export default askUserName;
