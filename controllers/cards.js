const errors = require('../helpers/errors');
const CardModel = require('../models/card');

function getCards(req, res) {
  CardModel.find({})
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch(() => {
      res.status(500).send(errors.readingCards);
    });
}

function getCard(req, res) {
  CardModel.findOne({ _id: req.params.id })
    .then((card) => {
      res.status(card ? 200 : 404).send(card || errors.readingCard);
    })
    .catch(() => {
      res.status(500).send(errors.readingCards);
    });
}

function createCard(req, res) {
  req.body.owner = req.user._id;
  CardModel.create(req.body)
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((error) => {
      const isInvalid = error.name === 'ValidationError';
      res
        .status(isInvalid ? 400 : 500)
        .send(isInvalid ? { message: error.message } : errors.creatingCard);
    });
}

function deleteCard(req, res) {
  CardModel.findByIdAndRemove(req.params.id)
    .then((card) => {
      res.status(card ? 200 : 404).send(card || errors.readingCard);
    })
    .catch(() => {
      res.status(500).send(errors.deleteCard);
    });
}

function likeCard(req, res) {
  CardModel.findByIdAndUpdate(req.params.id,
    req.method === 'PUT'
      ? { $addToSet: { likes: req.user._id } }
      : { $pull: { likes: req.user._id } },
    { new: true })
    .then((card) => {
      res.status(card ? 200 : 404).send(card || errors.readingCard);
    })
    .catch(() => {
      res.status(500).send(errors.likeCard);
    });
}

module.exports = {
  getCards,
  getCard,
  createCard,
  deleteCard,
  likeCard,
};
