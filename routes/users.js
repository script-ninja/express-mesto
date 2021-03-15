const router = require('express').Router();
const {
  getUsers, getUser, createUser, updateProfile,
} = require('../controllers/users');

router.route('/')
  .get(getUsers)
  .post(createUser);

router.route('/:id')
  .get(getUser);

router.route('/me')
  .patch(updateProfile);

router.route('/me/avatar')
  .patch(updateProfile);

module.exports = router;
