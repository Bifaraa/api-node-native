/** Packages */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema creation
const courseSchema = new Schema({
  code: {
    tipo: 'String',
    requiered: true,
  },

  name: {
    type: 'String',
    required: true,
  },
});

module.exports = courseSchema;
