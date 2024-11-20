const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to My API!');
});

// Greet route
app.get('/greet', (req, res) => {
    const name = req.query.name || 'World';
    res.json({ message: `Hello, ${name}!` });
});

// Use Railway's port or default to 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
