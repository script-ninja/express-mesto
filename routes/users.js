const router = require('express').Router();
const path = require('path');
const { readFile } = require('../helpers/fs');

const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');

router.get('/users', (req, res) => readFile(usersFilePath)
  .then((users) => res.send(users))
  .catch(() => res.status(500).send({ message: 'Ошибка чтения файла' })));

router.get('/users/:id', (req, res) => readFile(usersFilePath)
  .then((users) => {
    const requestedUser = users.find((user) => user._id === req.params.id);
    res
      .status(requestedUser ? 200 : 404)
      .send(requestedUser || { message: `Нет пользователя с id ${req.params.id}` });
  })
  .catch(() => res.status(500).send({ message: 'Ошибка чтения файла' })));

module.exports = router;
