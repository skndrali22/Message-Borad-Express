// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const { createServer } = require('node:http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8080;

const server = createServer((req, res) => {
  let filePath = '';

  // Serve index.html for '/'
  if (req.url === '/') {
    filePath = path.join(__dirname, 'index.html');
  }
  // Serve about.html for '/about'
  else if (req.url === '/about') {
    filePath = path.join(__dirname, 'about.html');
  }
  // Serve contact-me.html for '/contact-me'
  else if (req.url === '/contact-me') {
    filePath = path.join(__dirname, 'contact-me.html');
  }
  // Serve 404.html for any other route
  else {
    filePath = path.join(__dirname, '404.html');
  }

  // Read the file and serve the response
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Server Error');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
