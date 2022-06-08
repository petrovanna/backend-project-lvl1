import readlineSync from 'readline-sync';

const playBrainGames = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const greeting = `Hello, ${userName}!`;
  console.log(greeting);

  // описание каждой игры
  // цикл (3 раунда)
  // три правильных - Correct!
  // не правильный - Try again!

  return `Congratulations, ${userName}!`;
};
export default playBrainGames;

// из index.js нужно импортировать функции в brain-even.js
