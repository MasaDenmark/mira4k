const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    isRead: { type: Boolean, default: false }
});

const clientModel = mongoose.model('Client', clientSchema)
module.exports = clientModel;