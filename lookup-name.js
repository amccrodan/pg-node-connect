// const database = require('./queries');
const database = require('./knex/knex-queries');
const utils = require('./utils');

database.getPeopleByName(utils.getInput()[0], (people) => {
  utils.printOutput(people);
});