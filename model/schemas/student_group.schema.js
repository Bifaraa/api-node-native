/** Packages */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema creation
const studentGroupSchema = new Schema({
  student_id: {
    tipo: mongoose.Schema.Types.ObjectId,
    ref: 'coll_student',
    requiered: true,
  },
  group_id: {
    tipo: mongoose.Schema.Types.ObjectId,
    ref: 'coll_group',
    requiered: true,
  },
});

module.exports = studentGroupSchema;
