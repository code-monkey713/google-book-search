// Defining methods to apply for the booksController
module.exports = {
  // Used to pull all saved books from Book collection
  findAll: function (req, res) {
    var axios = require('axios');
    // variable to store user input
    const searchQuery = req.query.title;
    // variable for the main api endpoint
    var config = {
      method: 'get',
      url: `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${process.env.API_KEY}&maxResults=40`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
