const router = require('express').Router();
const db = require('../../models');

router.get('/', (req, res) => {
  db.Book.find(req.query)
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

router.post('/', (req, res) => {
  db.Book.create(req.body)
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

router.delete('/:id', (req, res) => {
  db.Book.findById({ _id: req.params.id })
    .then((dbModel) => dbModel.remove())
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

module.exports = router;
