const router = require('express').Router();
const { readFile } = require('../helpers/fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');


router.get('/users', (req, res) => {
  return readFile(usersFilePath)
    .then(users => res.send(users))
    .catch(err => res.status(500).send({ message: 'Ошибка чтения файла' }));
});


router.get('/users/:id', (req, res) => {
  return readFile(usersFilePath)
    .then(users => {
      const user = users.find(user => user._id === req.params.id);
      res
        .status(user ? 200 : 404)
        .send(user ? user : { message: `Нет пользователя с id ${req.params.id}` });
    })
    .catch(err => res.status(500).send({ message: 'Ошибка чтения файла' }));
});


module.exports = router;