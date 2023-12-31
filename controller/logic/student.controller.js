/** Dto */
const studentDto = require('../../model/dto/student.dto');
const userDto = require('../../model/dto/user.dto');
const config = require('config');

/** Helper  */
const helper = require('../helpers/general.helper');

exports.createStudent = (req, res, next) => {
  let std = {
    code: req.body.code,
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    career: req.body.career,
  };

  studentDto.create(std, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    let user = {
      name: std.name,
      lastname: std.lastname,
      username: std.code,
      password: helper.EncrypPassword(req.body.password),
      role: config.get('role').student,
    };
    userDto.create(user, (err, dataU) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.status(201).json({
        info: data,
      });
    });
  });
};

exports.updateStudent = (req, res, next) => {
  let std = {
    code: req.body.code,
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    career: req.body.career,
  };

  studentDto.update({ _id: req.body.id }, std, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(201).json({
      info: data,
    });
  });
};

exports.getAll = (req, res, next) => {
  studentDto.getAll({}, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      info: data,
    });
  });
};

exports.getByCode = (req, res, next) => {
  studentDto.getByCode({ id: req.params.code }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      info: data,
    });
  });
};

exports.deleteStudent = (req, res, next) => {
  studentDto.delete({ _id: req.body.id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(204).json();
  });
};
