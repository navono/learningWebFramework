const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PersonSchema = new Schema({
  name: String,
  age: {type: Number, min: 18, max: 65, required: true},
  gender: { type: String, enum: ['Female', 'Male']}
});

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;
