import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Alert } from '@mui/material';

const App = () => {
    const [name, setName] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleFetch = async () => {
        // Reset previous error and response
        setError(null);
        setResponse(null);

        try {
            // Ensure name input is not empty
            const trimmedName = name.trim() || 'World'; // Default to "World" if no name is provided
            const res = await fetch(`https://my-api-production-85c5.up.railway.app/greet?name=${trimmedName}`);
            
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const data = await res.json();
            setResponse(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch greeting. Please try again later.');
        }
    };

    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4" gutterBottom>
                Greeting API
            </Typography>
            <TextField
                label="Enter your name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: '20px' }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleFetch}
                style={{ marginBottom: '20px' }}
            >
                Get Greeting
            </Button>
            {error && (
                <Alert severity="error" style={{ marginTop: '20px' }}>
                    {error}
                </Alert>
            )}
            {response && (
                <Typography variant="h6" style={{ marginTop: '20px' }}>
                    {response.message}
                </Typography>
            )}
        </Container>
    );
};

export default App;
