const database = require('./knex/knex-queries');
const utils = require('./utils');

database.addPerson(utils.getInput(), () => {
  console.log("Inserted!");
});