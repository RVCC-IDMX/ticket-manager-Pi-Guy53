const chalk = require('chalk');

const { log } = console;
const buy = chalk.green.underline;
const msg = chalk.blueBright.underline;
const output = chalk.blue.bgWhite;

const TicketManager = require('./ticketManager');

const ticketManager = new TicketManager(10);

ticketManager.on('buy', () => {
  log(buy('Someone bought a ticket!'));
});

ticketManager.buy('test@email.com', 20);
ticketManager.buy('secondTest@email.com', 20);

ticketManager.once('buy', () => {
  log(output('This is only called once'));
});

ticketManager.buy('test@email.com', 20);
ticketManager.buy('secondTest@email.com', 20);
