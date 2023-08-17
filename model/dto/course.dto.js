/** packages */

const mongoose = require('mongoose');

/** using schema  */
const schema = require('../schemas/course.schema');

schema.statics = {
  create: function (data) {
    return this.create(data);
  },
  getAll: async function (query) {
    return await this.find(query);
  },
  getByCode: async function (query) {
    return await this.find(query);
  },
  update: async function (query, data) {
    return await this.findOneAndUpdate(query, { $set: data }, { new: true });
  },
  delete: async function (query) {
    return await this.findOneAndDelete(query);
  },
};

const dto = mongoose.model('coll_course', schema);
module.exports = dto;
