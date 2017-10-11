'use strict';
const reset_db = require('./reset_db');

const post_text = "This is a great example of a post.";
const blog_post = {"id": 'test1', "author": "Cat", "text": post_text, "date": '2017-01-01'};

exports.run = function(connection, done) {
  reset_db.delete_posts(connection, function() {
    connection.collection('posts').insert(blog_post, function(err, result) {
      if (err) {
        console.log(err);
        process.exit(1);
      };
      done();
    });
  });
};
