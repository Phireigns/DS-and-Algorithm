// Creating a HashTable class
class HashTable {
  constructor() {
    this.table = {};
  }

  // Generating a hash key for a given key
  hashKey(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  // Setting a key-value pair in the hash table
  set(key, value) {
    const hashKey = this.hashKey(key);
    this.table[hashKey] = value;
  }

  // Getting a value for a given key from the hash table
  get(key) {
    const hashKey = this.hashKey(key);
    return this.table[hashKey];
  }

  // Removing a key-value pair from the hash table
  remove(key) {
    const hashKey = this.hashKey(key);
    if (this.table.hasOwnProperty(hashKey)) {
      delete this.table[hashKey];
    }
  }
}

// Creating a hash table and performing operations
const hashTable = new HashTable();
hashTable.set("name", "John");
hashTable.set("age", 25);
console.log(hashTable.get("name")); // Output: John
hashTable.remove("age");
console.log(hashTable.get("age")); // Output: undefined
