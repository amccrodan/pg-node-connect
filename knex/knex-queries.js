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
  },
  addPerson: (data, done) => {
    const first_name = data[0];
    const last_name = data[1];
    const birthdate = data[2];
    pg("famous_people").insert({
      first_name: first_name,
      last_name: last_name,
      birthdate: birthdate
    }).asCallback((err) => {
      done();
      pg.destroy();
    });
  }
}