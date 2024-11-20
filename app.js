// const cors = require('cors');
// const express = require('express');
// const app = express();

// // Enable CORS
// app.use(cors());

// // Other routes (e.g., /greet)
// app.get('/', (req, res) => {
//     res.send('Welcome to My API!');
// });

// app.get('/greet', (req, res) => {
//     // Get the 'name' query parameter and trim any extra spaces or newline characters
//     const name = (req.query.name || 'World').trim();
//     res.json({ message: `Hello, ${name}!` });
// });

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

require('dotenv').config(); // Import dotenv to manage environment variables
const express = require('express');
const cors = require('cors');
const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// API key authentication middleware
const authenticateAPIKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];  // API key sent in request header

    if (!apiKey || apiKey !== process.env.REACT_APP_API_KEY) {
        return res.status(403).json({ error: 'Forbidden: Invalid API key' });
    }
    next();  // Proceed to the next middleware/route if the key is valid
};

// Root route for testing
app.get('/', (req, res) => {
    res.send('Welcome to My API!');
});

// Greeting route with API key authentication
app.get('/greet', authenticateAPIKey, (req, res) => {
    const name = (req.query.name || 'World').trim();  // Ensure name is properly trimmed
    res.json({ message: `Hello, ${name}!` });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
