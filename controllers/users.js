const path = require('path');
const { readFile } = require('../helpers/fs');
const errors = require('../helpers/errors');
const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');


function getUsers(req, res) {
  readFile(usersFilePath)
    .then((users) => res.send(users))
    .catch(() => res.status(500).send(errors.readingUsers));
}

function getUser(req, res) {
  return readFile(usersFilePath)
    .then((users) => {
      const requestedUser = users.find((user) => user._id === req.params.id);
      res
        .status(requestedUser ? 200 : 404)
        .send(requestedUser || errors.readingUser);
    })
    .catch(() => res.status(500).send(errors.readingUsers));
}


module.exports = {
  getUsers,
  getUser
}