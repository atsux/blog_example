'use strict';

const DB_URL_TEST = 'mongodb://127.0.0.1:27017/automate-it-test';
const DB_URL_PROD = 'mongodb://127.0.0.1:27017/automate-it';

exports.MODE_TEST = 1;
exports.MODE_PRODUCTION = 2;

var state = {
  db_connection: null,
  mode: null,
};

const MONGO_CLIENT = require('mongodb').MongoClient;

exports.connect = function(mode, done) {
  if (state.db_connection) return done();

  var url = mode === exports.MODE_TEST ? DB_URL_TEST : DB_URL_PROD;

  MONGO_CLIENT.connect(url, function(err, db) {
    if (err) return done(err);
    state.db_connection = db;
    state.mode = mode;
    done();
  })
};

exports.get = function() {
  return state.db_connection;
};

exports.close = function() {
  state.db_connection.close();
};
