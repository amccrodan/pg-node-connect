const pg = require("pg");
const settings = require("./settings"); // settings.json

const config = {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
};

module.exports = {
  connect: (done) => {

    const client = new pg.Client(config);

    client.connect((err) => {
      if (err) {
        return console.error("Connection Error", err);
      }
      done(err, client);
    });
  },

  close: (client) => {
    client.end((err) => {
      if (err) {
        return console.error("Connection Error", err);
      }
    });
  }
}