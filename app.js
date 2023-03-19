console.log('online');

const chalk = require('chalk');

const { log } = console;

// Basic colors
log(chalk.red('red text'));
log(chalk.magenta('magenta text'));
log(chalk.yellow('yellow text'));

// background colors
log(chalk.bgRed('red background'));
log(chalk.bgGreen('green background'));

// Styling & decor
log(chalk.bold('bolded text'));
log(chalk.underline('underlined text'));

// chained
log(chalk.yellow.bgRed.underline('Warning!!'));
log(chalk.green.bgWhite.bold('Whats going one?'));

// hex & RGB
log(chalk.hex('#009879').bold('green hex'));
log(chalk.rgb(20, 200, 50).bold('probably green'));
