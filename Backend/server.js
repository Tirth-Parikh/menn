const express = require('express');
const app = express();
const cors = require('cors'); // Import cors

const port = process.env.PORT || 5000;
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000' }));
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello, world!' });
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}:}`);
});
