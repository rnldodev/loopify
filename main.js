const express = require('express');
const app = express();

// Variable to store the total value
let totalValue = 0;

// POST request to /winner/
app.post('/winner', (req, res) => {
  totalValue += 5;
  res.status(200).send('Value increased by 5');
});

// GET request to /today/
app.get('/today', (req, res) => {
  res.status(200).json({ total: totalValue });
});

// Start the server
app.listen(3000, () => {
  console.log('API server is running on http://localhost:3000');
});
