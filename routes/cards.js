const router = require('express').Router();
const path = require('path');
const { readFile } = require('../helpers/fs');

const cardsFilePath = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/cards', (req, res) => readFile(cardsFilePath)
  .then((cards) => res.send(cards))
  .catch(() => res.status(500).send({ message: 'Ошибка чтения файла' })));

module.exports = router;
