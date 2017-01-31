module.exports = {
  getInput : () => {
    return process.argv.slice(2);
  },
  printOutput : (people) => {
    console.log(`Found ${people.length} person(s) matching your search.`);

    for (let person of people) {
      console.log(`- ${person.id}: ${person.first_name} ${person.last_name}, born '${person.birthdate}'`);
    }
  }
}