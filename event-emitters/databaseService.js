const chalk = require('chalk');

const { log } = console;
const buy = chalk.green.underline;
const msg = chalk.blueBright.underline;
const output = chalk.blue.bgWhite;

class DatabaseService {
  save(email, price, timestamp) {
    log(output(`\n Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}, ${timestamp})`));
  }
}

module.exports = DatabaseService;
