const router = require('express').Router();
const {
  getCards, getCard, createCard, deleteCard, likeCard,
} = require('../controllers/cards');

router.route('/')
  .get(getCards)
  .post(createCard);

router.route('/:id')
  .get(getCard)
  .delete(deleteCard);

router.route('/:id/likes')
  .put(likeCard)
  .delete(likeCard);

module.exports = router;
