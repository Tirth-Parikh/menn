const express = require('express');
const cors = require('cors');
const path = require('path'); // Corrected path require statement
const { OAuth2Client } = require('google-auth-library');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// CORS middleware, allowing requests from the frontend running at localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));

// Example API route

const client = new OAuth2Client(
  '1077512729862-c5rvioghn5gretuli7upl9j7dk1ch6no.apps.googleusercontent.com', 
  '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', 
  'http://localhost:3000/' 
);
app.post('/api/auth/google', async (req, res) => {
  const { code } = req.body;
  console.log('tttt....>>>tttttt');
  

  try {
      // Exchange the authorization code for tokens
      const { tokens } = await client.getToken(code);
      console.log('Tokens received:', tokens);

      // Send the tokens back to the client, or save them to the session/database as needed
      res.json(tokens);
  } catch (error) {
      console.error('Error exchanging code:', error);
      res.status(500).json({ error: 'Failed to exchange authorization code' });
  }
});

// app.get('/api/message', (req, res) => {
//   res.json({ message: 'Hello, world!' });
// });

// Check if in production mode
const chk = 'production'; 

if (chk == 'production') {
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
  console.log(`Server running on port ${port}.`);
});
