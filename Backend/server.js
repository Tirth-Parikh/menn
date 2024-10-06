const express = require('express');
const cors = require('cors');
const path = require('path'); // Corrected path require statement

const app = express();
const port = process.env.PORT || 8000;
const index=require('./router/router')
app.use(cors({
  origin: 'http://localhost:3000',

  //  origin: 'https://menn.onrender.com' ,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  credentials: true
}));
app.use(express.json());

app.use('/api/users',index );// CORS middleware, allowing requests from the frontend running at localhost:3000



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
