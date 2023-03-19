const chalk = require('chalk');

const { log } = console;
const buy = chalk.green.underline;
const msg = chalk.blueBright.underline;
const output = chalk.blue.bgWhite;

// log(chalk.red('test'));

const { EventEmitter } = require('events');

const firstEmitter = new EventEmitter();

firstEmitter.emit('My First Event');
