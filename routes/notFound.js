const router = require('express').Router();
const errors = require('../helpers/errors');

router.use((req, res) => {
  res.status(404).send(errors.notFound);
});

module.exports = router;
