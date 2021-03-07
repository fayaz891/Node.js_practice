const chalk = require('chalk');
const validator = require('validator');

console.log(chalk.red.underline.inverse('Hello world!'));

const res = (validator.isEmail('foo@ba.com'));

console.log(res ? chalk.yellow.inverse(res) : chalk.red.inverse(res));