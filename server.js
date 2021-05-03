require('dotenv').config();

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();
const routes = require('./routes');

const mongoose = require('mongoose');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// connect to our Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname, './client/build/index.html'));
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
