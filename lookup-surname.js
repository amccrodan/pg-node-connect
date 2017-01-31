const database = require('./queries');
const utils = require('./utils');

database.getPersonBySurname(utils.getInput(), (person) => {
  console.log(utils.formatOutput(person));
});