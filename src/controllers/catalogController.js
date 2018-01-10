const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');
const parallel = require('../public/javascripts/customParallel');

exports.index = (req, res) => {
  parallel(
    {
      book_count: callback => {
        Book.count(callback);
      },
      book_instance_count: callback => {
        BookInstance.count(callback);
      },
      book_instance_available_count: callback => {
        BookInstance.count({status: 'Available'}, callback);
      },
      author_count: callback => {
        Author.count(callback);
      },
      genre_count: callback => {
        Genre.count(callback);
      },
    }, (err, results) => {
      res.render('index', { title: 'Local Library Home', error: err, data: results });
    })
};