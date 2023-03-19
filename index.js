const chalk = require('chalk');

const { log } = console;
const buy = chalk.green.underline;
const msg = chalk.blueBright.underline;
const output = chalk.blue.bgWhite;
const error = chalk.yellow.bgRed.bold.underline;
const warning = chalk.yellow.bold;
const info = chalk.red.underline;

const TicketManager = require('./event-emitters/ticketManager');
const EmailService = require('./event-emitters/emailService');
const DatabaseService = require('./event-emitters/databaseService');

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on('buy', (email, price, timestamp) => {
  emailService.send(email);
  databaseService.save(email, price, timestamp);
});

ticketManager.on('error', (error) => {
  console.error(`Gracefully handling our error: ${error}`);
});

const onBuy = () => {
  log(warning('I will be removed soon'));
};

ticketManager.on('buy', onBuy);

log(output(`We have ${ticketManager.listenerCount('buy')} listener(s) for the buy event`));
log(output(`We have ${ticketManager.listenerCount('error')} listener(s) for the error event`));
log(buy(`\n We added a new event listener bringing our total count for the buy event to: ${ticketManager.listenerCount('buy')}`));
ticketManager.buy('test@email', 20);

ticketManager.off('buy', onBuy);

log(output(`We now have: ${ticketManager.listenerCount('buy')} listener(s) for the buy event`));
ticketManager.buy('test@email', 20);

ticketManager.removeAllListeners('buy');
log(output(`\n We have ${ticketManager.listenerCount('buy')} listeners for the buy event`));
ticketManager.buy('test@email', 20);
log(info('The last ticket was bought'));
