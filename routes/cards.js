const router = require('express').Router();
const {
  getCards, getCard, createCard, deleteCard, like, dislike,
} = require('../controllers/cards');

router.route('/')
  .get(getCards)
  .post(createCard);

router.route('/:id')
  .get(getCard)
  .delete(deleteCard);

router.route('/:id/likes')
  .put(like)
  .delete(dislike);

module.exports = router;
