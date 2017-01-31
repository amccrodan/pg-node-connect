module.exports = {
  getInput : () => {
    return process.argv[2];
  },
  printOutput : (people) => {
    console.log(`Found ${people.length} person(s) matching your search.`);

    for (let person of people) {
      const id = person.id;
      const first_name = person.first_name;
      const last_name = person.last_name;
      const birthdate = person.birthdate;

      console.log(`- ${id}: ${first_name} ${last_name}, born '${birthdate}'`);
    }
  }
}