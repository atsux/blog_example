const express = require('express');
const app = express();
const DB = require('./db_session');


app.get('/api/posts/:post_id', function(req, res) {
  var posts = DB.get().collection('posts');
  posts.find({'id': req.params.post_id}).toArray(function (err, documents) {
    res.send(documents);
  });
});

DB.connect(DB.MODE_TEST, function(err) {
  if (err) {
    console.log('Unable to connect to database.');
    process.exit(1);
  } else {
    app.listen(3000, function() {
      console.log('Listening on port 3000')
    });
  }
});

process.on('SIGINT', function() {
  DB.get().close(function () {
    console.log('DB connection closed');
    process.exit(0);
  });
});
