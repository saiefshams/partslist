let mongoose = require('mongoose');

let partsModel = mongoose.Schema({
    type: String,
    name: String,
    link: String,
    price: String
    },
    {
        collection: "parts"
    }
)
module.exports = mongoose.model('parts', partsModel);
