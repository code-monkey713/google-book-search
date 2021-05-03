module.exports = {
  findAll: function (req, res) {
    const axios = require('axios');
    const searchQuery = req.query.title;
    const config = {
      method: 'get',
      url: `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${process.env.API_KEY}&maxResults=20`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
