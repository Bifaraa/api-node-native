/** Packages */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema creation
const groupSchema = new Schema({
  course_id: {
    tipo: mongoose.Schema.Types.ObjectId,
    ref: 'coll_course',
    requiered: true,
  },
  period_id: {
    tipo: mongoose.Schema.Types.ObjectId,
    ref: 'coll_period',
    requiered: true,
  },
  teacher_id: {
    tipo: mongoose.Schema.Types.ObjectId,
    ref: 'coll_teacher',
    requiered: true,
  },
  number: {
    type: 'Number',
    requiered: true,
  },
});

module.exports = groupSchema;
