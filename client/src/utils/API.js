import axios from 'axios';

export default {
  // Gets all books
  getBooks: function () {
    return axios.get('/api/books');
  },

  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete('/api/books/' + id);
  },

  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post('/api/books', bookData);
  },

  // Search for books with Google Books API
  searchBook: function (title) {
    return axios.get(`/api/search?title=${title}`);
  },
};
