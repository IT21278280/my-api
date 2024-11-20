import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const App = () => {
    const [name, setName] = useState('');
    const [response, setResponse] = useState(null);

    const handleFetch = async () => {
        try {
            const res = await fetch(`https://my-api-production-85c5.up.railway.app/greet?name=${name}`);
            const data = await res.json();
            setResponse(data);
        } catch (error) {
            console.error('Error fetching data:', error);
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
            {response && (
                <Typography variant="h6">
                    {response.message}
                </Typography>
            )}
        </Container>
    );
};

export default App;
