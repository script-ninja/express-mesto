const fsPromises = require('fs').promises;
const router = require('express').Router();
const path = require('path');
const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');


router.get('/users', (req, res) => {
  return fsPromises.readFile(usersFilePath, { encoding: 'utf-8' })
    .then(users => res.send(JSON.parse(users)))
    .catch(err => res.status(500).send(err));
});


router.get('/users/:id', (req, res) => {
  return fsPromises.readFile(usersFilePath, { encoding: 'utf-8' })
    .then(users => JSON.parse(users).find(user => user._id === req.params.id))
    .then(user => {
      res.status(user ? 200 : 400).send(user ? user : { message: `Нет пользователя с id ${req.params.id}`})
    })
    .catch(err => res.status(500).send(err));
});


module.exports = router;