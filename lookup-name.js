// const database = require('./queries');
const database = require('./knex/knex-queries');
const utils = require('./utils');

database.getPeopleByName(utils.getInput(), (people) => {
  utils.printOutput(people);
});