const fs = require('fs');
const uuidPackage = require('uuid');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFile('db/db.json', 'utf8'); //not sure
    }
    write(note) {
        return writeFile('db/db.json', JSON.stringify(note));
    }

    getNotes() {
        this.read()
            .then((notes) => {
                let getNotes;
                if (notes == null) {
                    getNotes = [];
                } else {
                    getNotes = JSON.parse(notes);
                }
                return getNotes;
            })
    }

    addNotes(notes) {
        const {text, title} = notes;
        if (!text || !title) {
            return;
        };

        const addedNote = {
            text, title, id: uuidPackage()
        };

        this.getNotes().then((notes) => {
            
        })
    }

    removeNotes() {

    }
}
