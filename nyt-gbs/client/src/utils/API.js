import axios from "axios";


export default {

  getBooks: function(q) {
    // console.log(q);
      return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}`);
    },


  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Delete saved book with the given id
  deleteBook: function(id) {
  },
  // Save book to database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};