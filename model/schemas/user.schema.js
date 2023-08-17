/** Packages */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('mongoose-unique-validator');

// Schema creation
const userSchema = new Schema({
  name: {
    tipo: 'String',
    requiered: true,
  },

  lastname: {
    type: 'String',
    required: true,
  },
  username: {
    type: 'String',
    required: true,
    unique: true,
  },
  password: {
    type: 'String',
    required: true,
  },
  rol: {
    type: 'Number',
    required: true,
  },
});

userSchema.plugin(validator);

module.exports = userSchema;
