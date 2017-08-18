var express = require('express');
var router = express.Router();
const googleTrends = require('google-trends-api');

const app = express()

app.get('/trends', (req, res) => {
  let query = req.query;
  googleTrends.interestByRegion({ keyword: query.searchTerm, resolution: 'CITY' })
    .then(function (results) {
      res.send(results);
      console.log('These results are awesome', results);
    })
    .catch(function (err) {
      console.error('Oh no there was an error', err);
    });
})

app.get('/relatedQueries', (req, res) => {
  let query = req.query;
  googleTrends.relatedQueries({ keyword: query.searchTerm, resolution: 'CITY' })
    .then(function (results) {
      res.send(results);
      console.log('These results are awesome', results);
    })
    .catch(function (err) {
      console.error('Oh no there was an error', err);
    });

})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
