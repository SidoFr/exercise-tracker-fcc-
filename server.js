const mongoose =require('mongoose');
require('dotenv').config({ path: 'variables.env' });
mongoose.connect(process.env.DB);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`!!!${err.message}!!!!`);
});
// import models
require('./models/User');
require('./models/Exercise');

const express = require('express');
const app = express();
// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

const bodyParser = require('body-parser');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

const routes = require('./routes/index');
app.use('/', routes);
