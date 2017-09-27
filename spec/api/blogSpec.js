'use strict';
var request = require('request');
describe('The API', function () {
  it('should respond to a GET request at /api/posts/', function (done) {
    request.get(
      {
        'url': 'http://localhost:3000/api/posts/',
        'json': true
      },
      function (err, res, body) {
        console.log(body);
        expect(res.statusCode).toBe(200);
        expect(body.author).toEqual('Cat');
        done();
      }
    );
  });
});
