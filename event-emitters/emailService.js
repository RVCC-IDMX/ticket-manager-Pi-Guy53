const chalk = require('chalk');

const { log } = console;
const buy = chalk.green.underline;
const msg = chalk.blueBright.underline;
const output = chalk.blue.bgWhite;

class EmailService {
  send(email) {
    log(msg(`\n Sending email to ${email}`));
  }
}

module.exports = EmailService;
