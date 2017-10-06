const express = require('express');
const app = express();
const DB = require('./db-session');


const blog_post = {"id": 1, "author": "Cat", "text": "This is a great example of a post", "date": 2017-01-01};

app.get('/api/posts/:post_id', function(req, res) {
  var posts = DB.get().collection('posts');
  collection.find({'id': req.params.post_id}).toArray(function (err, documents) {
    res.write(documents);
  });
});

DB.connect(DB.MODE_TEST, function(err) {
  if (err) {
    console.log('Unable to connect to database.');
    process.exit(1);
  } else {
    app.listen(process.env.PORT || 3000, function() {
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
