exports.delete_posts = function (connection, callback) {
  connection.collection('posts').remove({}, function(err, count) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    callback();
  });
};
