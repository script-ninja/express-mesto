const errors = require('../helpers/errors');
const UserModel = require('../models/user');

function getUsers(req, res) {
  UserModel.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch(() => {
      res.status(500).send(errors.readingUsers);
    });
}

function getUser(req, res) {
  UserModel.findOne({ _id: req.params.id })
    .then((user) => {
      res.status(user ? 200 : 404).send(user || errors.readingUser);
    })
    .catch(() => {
      res.status(500).send(errors.readingUsers);
    });
}

function createUser(req, res) {
  UserModel.create(req.body)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((error) => {
      const isInvalid = error.name === 'ValidationError';
      res
        .status(isInvalid ? 400 : 500)
        .send(isInvalid ? { message: error.message } : errors.creatingUser);
    });
}

function updateProfile(req, res) {
  UserModel.findByIdAndUpdate(
    req.user._id,
    req.body,
    { new: true, runValidators: true, upsert: true },
  )
    .then((user) => {
      res.status(user ? 200 : 404).send(user || errors.readingUser);
    })
    .catch((error) => {
      const isInvalid = error.name === 'ValidationError';
      res
        .status(isInvalid ? 400 : 500)
        .send(isInvalid ? { message: error.message } : errors.updatingProfile);
    });
}

module.exports = {
  getUsers, getUser, createUser, updateProfile,
};
