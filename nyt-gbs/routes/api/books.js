const router = require('express').Router();
const bookController = require('../../controllers/booksController');

// Matches with '/api/books'
router.route('/')
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with 'api/books/:id'
router
  .route('/:id')
  .get(bookController.findbyId)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router