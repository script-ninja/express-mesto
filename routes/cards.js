const router = require('express').Router();
const { readFile } = require('../helpers/fs');
const path = require('path');
const cardsFilePath = path.join(__dirname, '..', 'data', 'cards.json');


router.get('/cards', (req, res) => {
  return readFile(cardsFilePath)
    .then(cards => res.send(cards))
    .catch(err => res.status(500).send(err));
});


module.exports = router;