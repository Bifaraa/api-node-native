/** Packages */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('mongoose-unique-validator');

// Schema creation
const studentSchema = new Schema({
  code: {
    type: 'String',
    requiered: true,
    unique: true,
  },

  name: {
    type: 'String',
    required: true,
  },
  lastName: {
    type: 'String',
    required: true,
  },
  email: {
    type: 'String',
    required: true,
    unique: true,
  },
  phone: {
    type: 'String',
    required: true,
  },
  career: {
    type: 'String',
    required: true,
  },
});

studentSchema.plugin(validator);

module.exports = studentSchema;
