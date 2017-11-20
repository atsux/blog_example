const DB = require('./db_session');
const app = require('./server');
const PORT = process.env.PORT || 3000


DB.connect(DB.MODE_PRODUCTION, function(err) {
  if (err) {
    console.log('Unable to connect to database.');
    process.exit(1);
  } else {
    app.listen(PORT, function() {
      console.log('Listening on port ' + PORT);
    });
  }
});

process.on('SIGINT', function() {
  DB.close(function () {
    console.log('DB connection closed');
    process.exit(0);
  });
});
