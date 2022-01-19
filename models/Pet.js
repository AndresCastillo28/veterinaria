const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    vaccines: {
        type: [String],
    },
    disseases: {
        type: [String],
    },
    breed:{
        type: String,
        required: true
    }


});
module.exports = Pet = mongoose.model('pet', PetSchema);