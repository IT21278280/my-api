const cors = require('cors');
const express = require('express');
const app = express();

// Enable CORS
app.use(cors());

// Other routes (e.g., /greet)
app.get('/', (req, res) => {
    res.send('Welcome to My API!');
});

app.get('/greet', (req, res) => {
    // Get the 'name' query parameter and trim any extra spaces or newline characters
    const name = (req.query.name || 'World').trim();
    res.json({ message: `Hello, ${name}!` });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
