const express = require('express');
const app = express();

// Route for the base URL '/'
app.get('/', (req, res) => {
  res.send('Welcome to My API!');
});

// API endpoint for '/greet'
app.get('/greet', (req, res) => {
  const name = req.query.name || 'World';
  res.json({ message: `Hello, ${name}!` });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});