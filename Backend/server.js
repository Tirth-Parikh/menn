const express = require('express');
const cors = require('cors');
const path = require('path'); // Corrected path require statement
const { OAuth2Client } = require("google-auth-library");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// CORS middleware, allowing requests from the frontend running at localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));

// Example API route


app.post("/google", async (req, res) => {
  const { token } = req.body;

  try {
    // Verify token from Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "1077512729862-c5rvioghn5gretuli7upl9j7dk1ch6no.apps.googleusercontent.com",
    });

    const payload = ticket.getPayload();
    const { sub, email, name, picture } = payload;

    // Check if user exists in your database
    // For now, return the user data to frontend
    const user = { googleId: sub, email, name, picture };
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid token" });
  }
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Check if in production mode
const chk = 'prduction'; 

if (chk === 'production') {
  // Serve static files from the Next.js 'out' folder
  app.use(express.static(path.join(__dirname, '../frontend/out')));

  console.log('Serving frontend from:', path.join(__dirname, '../frontend/out'),'production..');

  // Catch-all route: send the 'index.html' file for all requests not caught by the API
  app.get('*', (req, res) => {
    console.log('Serving frontend index.html for non-API routes');
    res.sendFile(path.join(__dirname, '../frontend/out', 'index.html'));
  });
} else {
  // Development mode: display a message
  app.get('*', (req, res) => {
    console.log('Development Mode: Run frontend separately');
    res.send('Development Mode: Run frontend separately.');
  });
}

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
