const path = require('path');
const { readFile } = require('../helpers/fs');
const errors = require('../helpers/errors');
const cardsFilePath = path.join(__dirname, '..', 'data', 'cards.json');


function getCards(req, res) {
  return readFile(cardsFilePath)
    .then((cards) => res.send(cards))
    .catch(() => res.status(500).send(errors.readingCards));
}


module.exports = {
  getCards
}