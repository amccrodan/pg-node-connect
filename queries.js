const db = require('./db');

module.exports = {
  getPersonBySurname: (surname, done) => {
    db.connect((error, client) => {
      const query = "SELECT * FROM famous_people WHERE last_name = $1::text;";
      client.query(query, [surname], (err, result) => {
        done(result.rows[0]);
        db.close(client);
      });
    });
  }
}