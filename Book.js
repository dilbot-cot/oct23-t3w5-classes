const { Media } = require("./Media");


class Book extends Media {
    constructor(newName, newEdition = "first") {
        super(newName);

        this.edition = newEdition
    }

    static count = 0
}

module.exports = { Book }