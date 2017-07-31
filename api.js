const express = require('express');
const request = require('request-promise');
const notify  = require('./notify')

function middleware() {
  var router = express.Router();

  router.get('/test', test);

  function test(req, res) {
    request.get('http://localhost:3001/504')
    .then(resp => {
      res.send('Success')
    })
    .catch(err => {
      notify.notify(err)
      res.send('Request failed')
    })
  }

  return router;
}

module.exports = middleware;
