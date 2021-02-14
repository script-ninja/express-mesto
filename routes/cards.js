const fsPromises = require('fs').promises;
const router = require('express').Router();
const path = require('path');
const cardsFilePath = path.join(__dirname, '..', 'data', 'cards.json');


router.get('/cards', (req, res) => {
  return fsPromises.readFile(cardsFilePath, { encoding: 'utf-8' })
    .then(cards => res.send(JSON.parse(cards)))
    .catch(err => res.status(500).send(err));
});

module.exports = router;