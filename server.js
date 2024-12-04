const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Good morning everyone!",
    user: "Sophia",
    added: new Date()
  },
  {
    text: "Learning Express.js is fun!",
    user: "Liam",
    added: new Date()
  },
  {
    text: "Stay positive and keep coding.",
    user: "Emma",
    added: new Date()
  },
  {
    text: "Node.js is awesome!",
    user: "Noah",
    added: new Date()
  }
];


// Index route
app.get('/', (req, res) => {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

app.get('/new', (req, res) => {
  res.render('form', { title: "Add a New Message" });
});

app.post('/new', (req, res) => {
  const { user, text } = req.body; // Extract user and text from form data
  messages.push({ text, user, added: new Date() }); // Add new message to the array
  res.redirect('/'); // Redirect back to the index page
});
app.get('/message/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const message = messages[id];

  if (message) {
    res.render('message-details', { title: "Message Details", message });
  } else {
    res.status(404).send("Message not found");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
