const fs = require('fs');
const uuidPackage = require('uuid');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Store {
    read() {
        return 
    }
    write(note) {
        return writeFile('db/db.json', JSON.stringify(note));
    }
}
