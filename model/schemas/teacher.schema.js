/** Packages */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('mongoose-unique-validator');

// Schema creation
const teacherSchema = new Schema({
  document: {
    tipo: 'Number',
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
  office: {
    type: 'String',
    required: true,
  },
  department: {
    type: 'String',
    required: true,
  },
});

teacherSchema.plugin(validator);

module.exports = teacherSchema;
