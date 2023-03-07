const mongoose = require('mongoose');
// const schema = new mongoose.Schema

const badFruitSchema = new mongoose.Schema(
    {
        name: String,
        variety: String,
        crimes: [String],
    },
    {
        timestamps: true
    }
);

// mongoose.model(<mongodb collection name>, our schema) is the general default and it creates a collection inside of MongoDB that is named from the first argument, Musicians here. And it applies the schema above to that collection.
const badFruit = mongoose.model('Musician', badFruitSchema);

module.exports = badFruit;