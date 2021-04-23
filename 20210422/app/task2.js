class Dictionary {
  #definition;
  constructor() {
    this.#definition = {};
  }

  newEntry(key, value) {
    (key && value) ? this.#definition[key] = value : console.log('Invalid input');
  }

  look(key) {
    return this.#definition[key] || `Can't find entry for ${key}`;
  }
}

console.log('\nTask #2. Interactive Dictionary');

let d = new Dictionary();
d.newEntry("Apple", "A fruit that grows on trees");

console.log(d.look("Apple")); //A fruit that grows on trees
console.log(d.look("Banana")); //Can't find entry for Banana