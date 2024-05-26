'use strict';

const express = require('express');
const bodyParser = require('./middleware/bodyParser');
const inventoryRoutes = require('./routes/inventoryRoutes');

// App
const app = express();

// Middleware
app.use(bodyParser);

// Routes
app.use('/inventory', inventoryRoutes);



// Default values for development
let PORT = 8080;
let HOST = 'localhost';

// Check if in production environment
if (process.env.NODE_ENV === 'production') {
  PORT = process.env.PORT || 8080; // Use the provided port or default to 8080
  HOST = '0.0.0.0'; // Listen on all available network interfaces
}

app.get('/', (req, res) => {
  res.send('Application test!!!!!');
});

app.post('/echo', (req, res) => {
  const requestData = req.body;
  res.json(requestData);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
