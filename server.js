const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/contact.html'));
});

app.post('/contact', (req, res) => {
  console.log(req.body);
  res.send(`
    <h2>Thanks, ${req.body.name}!</h2>
    <p>Your message has been received.</p>
    <a href="/">Go back home</a>
  `);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
