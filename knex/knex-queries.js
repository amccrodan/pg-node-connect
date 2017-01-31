const settings = require("../settings"); // settings.json

const config = {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
};

const pg = require("knex")({
  client: 'pg',
  connection: config
});

module.exports = {
  getPeopleByName: (name, done) => {
    console.log("Searching...");
    pg.select("*").from("famous_people")
    .where("last_name", name).orWhere("first_name", name)
    .asCallback((err, result) => {
      if (err) {
        console.log(err);
      }
      done(result);
      pg.destroy();
    });
  }
}