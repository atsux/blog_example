const MongoClient = require('mongodb').MongoClient;

var db_url = 'mongodb://127.0.0.1:27017/automate.it-test';

function createPost(post) {
  MongoClient.connect(db_url, function(err, connection) {
    var collection = connection.collection('posts');
    collection.insert(blog_post, function(err, count) {
      connection.close();
    });
  });
};

function readPostById(id) {
  MongoClient.connect(db_url, function(err, connection) {
    var collection = connection.collection('posts');
    collection.insert(blog_post, function(err, count) {
      connection.close();
    });
  });
};


function updatePostById(post) {
  MongoClient.connect(db_url, function(err, connection) {
    var collection = connection.collection('posts');
    collection.insert(blog_post, function(err, count) {
      connection.close();
    });
  });
};


function deletePostById(id) {
  MongoClient.connect(db_url, function(err, connection) {
    var collection = connection.collection('posts');
    collection.insert(blog_post, function(err, count) {
      connection.close();
    });
  });
};

const blog_post = {"id": 1, "author": "Cat", "text": "This is a great example of a post", "date": 2017-01-01};
