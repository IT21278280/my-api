import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Alert, Box, Card, CardContent } from '@mui/material';
import { keyframes } from '@mui/system';

// Animation for fading in content
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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
        <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5, mb: 3 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#6200ea', animation: `${fadeIn} 1s ease` }}>
                Greeting API
            </Typography>
            
            <Box mb={2} sx={{ animation: `${fadeIn} 1.5s ease` }}>
                <TextField
                    label="Enter your name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                        backgroundColor: '#fff',
                        '& .MuiInputBase-root': {
                            borderRadius: '8px',
                        },
                        boxShadow: 2,
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                    }}
                />
            </Box>

            <Button
                variant="contained"
                color="primary"
                onClick={handleFetch}
                sx={{
                    borderRadius: '8px',
                    textTransform: 'none',
                    padding: '12px 24px',
                    backgroundColor: '#6200ea',
                    '&:hover': {
                        backgroundColor: '#3700b3',
                        transform: 'scale(1.1)',
                        transition: 'all 0.3s ease',
                    },
                    animation: `${fadeIn} 2s ease`,
                }}
            >
                Get Greeting
            </Button>

            {/* Display errors with fade-in */}
            {error && (
                <Alert severity="error" sx={{ mt: 3, animation: `${fadeIn} 1s ease` }}>
                    {error}
                </Alert>
            )}

            {/* Display response with fade-in animation */}
            {response && (
                <Box mt={3} sx={{ animation: `${fadeIn} 2s ease` }}>
                    <Card sx={{ minWidth: 275, backgroundColor: '#e8eaf6' }}>
                        <CardContent>
                            <Typography variant="h6" color="textSecondary">
                                {response.message}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            )}
        </Container>
    );
};

export default App;
