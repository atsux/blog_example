const express = require('express');
const app = express();
const DB = require('./db_session');


app.get('/api/posts/:post_id', function(req, res) {
  var posts = DB.get().collection('posts');
  posts.find({'id': req.params.post_id}).toArray(function (err, documents) {
    res.send(documents);
  });
});

module.exports = app;
