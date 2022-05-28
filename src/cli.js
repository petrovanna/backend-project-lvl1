import readlineSync from 'readline-sync';

const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return `Hello, ${userName}!`;
};
export default askUserName;
