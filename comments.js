// Create web server
// Create a web server using express
// Create a router for comments
// Use the router to handle a GET request to /comments/new
// Use the router to handle a POST request to /comments
// Use the router to handle a GET request to /comments/:id
// Export the router
// Use the router in the main app
// Run the server
// The server should listen on port 4001

const express = require('express');
const app = express();
const commentsRouter = require('./comments.js');

app.use('/comments', commentsRouter);

app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});
