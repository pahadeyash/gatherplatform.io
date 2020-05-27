const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema for user in creation process
const userModel = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true }
})

//exporting user model as User.(...action)
module.exports = mongoose.model('User', userModel);