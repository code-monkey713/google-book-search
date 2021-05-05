const router = require('express').Router();
const axios = require('axios');

router.route('/').get(function (req, res) {
  const searchQuery = req.query.title;
  const config = {
    method: 'GET',
    url: `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${process.env.API_KEY}&maxResults=40`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
