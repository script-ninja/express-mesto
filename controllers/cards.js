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
        message: (code === 400) ? 'Некорректный ID карточки' : 'Не удалось получить карточку',
      };
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
      const code = (error.name === 'ValidationError') ? 400 : 500;
      const err = {
        message: (code === 400) ? error.message : 'Не удалось добавить карточку',
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
        message: (code === 400) ? 'Некорректный ID карточки' : 'Не удалось удалить карточку',
      };
      res.status(code).send(err);
    });
}

// "Вы предполагаете, что контроллер будет вызываться с PUT и DELETE.
// Любой отличный от PUT метод будет удалять лайк." - данная проблема, которую вы обозначили,
// не характерна для моего кода. Внимательный посмотрите на код роутера.
// Зоны ответственности разграничены на уровне роутера. Маппинг в нем наипростейший:
//                    'PUT'
//                   /      \
// '/cards/:id/likes'        toggleLike()
//                   \      /
//                   'DELETE'
// Где вы в этой схеме видите, что контроллер будет вызываться с другими методами запроса?
//
// Если же вы предполагаете, что контроллер будет использоваться другим разработчиком не по
// назанчению, то это уже не моя проблема.
//
// Пишите, пожалуйста, все замечания сразу, а не как это, которое вы написали только на второй
// итерации, хотя код был такой изначально. Про ошибки линтинга ничего не написали.
// Я только сейчас обнаружил, что линтер выдает 212 ошибок.
function like(req, res) {
  CardModel.findByIdAndUpdate(req.params.id,
    { $addToSet: { likes: req.user._id } },
    { new: true })
    .then((card) => {
      res.status(card ? 200 : 404).send(card || { message: 'Нет карточки с таким ID' });
    })
    .catch((error) => {
      const code = (error.name === 'ValidationError' || error.name === 'CastError') ? 400 : 500;
      const err = {
        message: (code === 400) ? error.message : 'Не удалось поставить лайк',
      };
      res.status(code).send(err);
    });
}

function dislike(req, res) {
  CardModel.findByIdAndUpdate(req.params.id,
    { $pull: { likes: req.user._id } },
    { new: true })
    .then((card) => {
      res.status(card ? 200 : 404).send(card || { message: 'Нет карточки с таким ID' });
    })
    .catch((error) => {
      const code = (error.name === 'ValidationError' || error.name === 'CastError') ? 400 : 500;
      const err = {
        message: (code === 400) ? error.message : 'Не удалось удалить лайк',
      };
      res.status(code).send(err);
    });
}

module.exports = {
  getCards,
  getCard,
  createCard,
  deleteCard,
  like,
  dislike,
};
