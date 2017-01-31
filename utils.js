module.exports = {
  getInput : () => {
    return process.argv[2];
  },
  formatOutput : (person) => {
    const id = person.id;
    const first_name = person.first_name;
    const last_name = person.last_name;
    const birthdate = person.birthdate;

    return `- ${id}: ${first_name} ${last_name}, born '${birthdate}'`;
  }
}