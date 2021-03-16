const CardModel = require('../models/card');

function getCards(req, res) {
  CardModel.find({})
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch(() => {
      res.status(500).send({ message: 'Не удалось получить карточки' });
    });
}

function getCard(req, res) {
  CardModel.findOne({ _id: req.params.id })
    .then((card) => {
      res.status(card ? 200 : 404).send(card || { message: 'Нет карточки с таким ID' });
    })
    .catch((error) => {
      const code = (error.name === 'CastError') ? 400 : 500;
      const err = {
        message: (code === 400) ? 'Некорректный ID карточки' : 'Не удалось получить карточку'
      }
      res.status(code).send(err);
    });
}

function createCard(req, res) {
  req.body.owner = req.user._id;
  CardModel.create(req.body)
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((error) => {
      const code = (error.name === 'ValidationError' || error.name === 'CastError') ? 400 : 500;
      const err = {
        message: (code === 400) ? error.message : 'Не удалось добавить карточку'
      };
      res.status(code).send(err);
    });
}

function deleteCard(req, res) {
  CardModel.findByIdAndRemove(req.params.id)
    .then((card) => {
      res.status(card ? 200 : 404).send(card || { message: 'Нет карточки с таким ID' });
    })
    .catch((error) => {
      const code = (error.name === 'CastError') ? 400 : 500;
      const err = {
        message: (code === 400) ? 'Некорректный ID карточки' : 'Не удалось удалить карточку'
      };
      res.status(code).send(err);
    });
}

function likeCard(req, res) {
  CardModel.findByIdAndUpdate(req.params.id,
    req.method === 'PUT'
      ? { $addToSet: { likes: req.user._id } }
      : { $pull: { likes: req.user._id } },
    { new: true })
    .then((card) => {
      res.status(card ? 200 : 404).send(card || { message: 'Нет карточки с таким ID' });
    })
    .catch((error) => {
      const code = (error.name === 'ValidationError' || error.name === 'CastError') ? 400 : 500;
      const err = {
        message: (code === 400) ? error.message : 'Не удалось поставить/снять лайк'
      };
      res.status(code).send(err);
    });
}

module.exports = {
  getCards,
  getCard,
  createCard,
  deleteCard,
  likeCard,
};
