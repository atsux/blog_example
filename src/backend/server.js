const express = require('express');
const app = express();


const blog_post = {"id": 1, "author": "Cat", "text": "This is a great example of a post", "date": 2017-01-01};

app.get('/api/posts/', function(req, res) {
    res.json(blog_post);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on 3000');
})
