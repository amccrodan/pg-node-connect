const db = require('./db');

module.exports = {
  getPeopleByName: (name, done) => {
    db.connect((error, client) => {
      console.log("Searching...");

      const query = "SELECT * FROM famous_people WHERE last_name = $1::text OR first_name = $1::text;";
      client.query(query, [name], (err, result) => {
        done(result.rows);
        db.close(client);
      });
    });
  }
}