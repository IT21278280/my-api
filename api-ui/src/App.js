import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Alert,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { keyframes } from "@mui/system";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const App = () => {
  const [name, setName] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleFetch = async () => {
    // Reset previous error and response
    setError(null);
    setResponse(null);

    try {
      // Ensure name input is not empty
      const trimmedName = name.trim() || "World"; // Default to "World" if no name is provided

      // API key to be sent in the header
      const API_KEY = process.env.REACT_APP_API_KEY;

      // Make the API request with the API key in the headers
      const res = await fetch(
        `https://my-api-production-85c5.up.railway.app/greet?name=${trimmedName}`,
        {
          method: "GET",
          headers: {
            "x-api-key": API_KEY, // Send the API key here in the header
          },
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch greeting. Please try again later.");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        textAlign: "center",
        mt: 5,
        mb: 3,
        backgroundColor: "#f7f7f7",
        borderRadius: "12px",
        padding: "100px",
        boxShadow: 3,
        animation: `${fadeIn} 1s ease`,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#6200ea",
          marginBottom: "30px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        Greeting API
      </Typography>

      <Box mb={3} sx={{ animation: `${fadeIn} 1.5s ease` }}>
        <TextField
          label="Enter your name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: 3,
            "& .MuiInputBase-root": {
              borderRadius: "10px",
            },
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handleFetch}
        sx={{
          borderRadius: "10px",
          textTransform: "none",
          padding: "12px 24px",
          backgroundColor: "#6200ea",
          boxShadow: 3,
          "&:hover": {
            backgroundColor: "#3700b3",
            transform: "scale(1.1)",
            transition: "all 0.3s ease",
          },
          animation: `${fadeIn} 2s ease`,
          marginBottom: "20px",
        }}
      >
        Get Greeting
      </Button>

      {error && (
        <Alert severity="error" sx={{ mt: 3, animation: `${fadeIn} 1s ease` }}>
          {error}
        </Alert>
      )}

      {response && (
        <Box mt={3} sx={{ animation: `${fadeIn} 2s ease` }}>
          <Card
            sx={{
              minWidth: 275,
              backgroundColor: "#e8eaf6",
              borderRadius: "10px",
              boxShadow: 5,
              padding: "20px",
              margin: "0 auto",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
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
