const DB = require('./db_session');
const app = require('./server');

DB.connect(DB.MODE_PRODUCTION, function(err) {
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
  DB.close(function () {
    console.log('DB connection closed');
    process.exit(0);
  });
});
