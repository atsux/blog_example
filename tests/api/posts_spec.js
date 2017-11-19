'use strict';

var request = require('request');
const fixtures = require('../db/fixtures');
const DB = require('../../app/db_session');
const app = require('../../app/server');

describe('The API', function () {
  var server;

  beforeAll(function(done) {
    DB.connect(DB.MODE_TEST, function(err) {
      if (err) {
        console.log('Unable to connect to database.');
        process.exit(1);
      };
      server = app.listen(3005);
      done();
    });
  });

  beforeEach(function(done) {
    fixtures.run(DB.get(), done);
  });

  afterAll(function(done) {
    server.close();
    DB.close();
    done();
  });
 
  it('should respond to a GET request at /api/posts/', function (done) {
    request.get(
      {
        'url': 'http://localhost:3005/api/posts/test1',
        'json': true
      },
      function (err, res, body) {
        expect(res.statusCode).toBe(200);
        expect(body.length).toEqual(1);
        expect(body[0].author).toEqual('Cat');
        done();
      }
    );
  });
});
