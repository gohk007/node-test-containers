'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Application test!!!!! ');
});


app.get('/inventory', (req, res) => {
  var inventory = {
    products: [
      {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        quantity: 50,
        price: 999.99
      },
      {
        id: 2,
        name: "Smartphone",
        category: "Electronics",
        quantity: 150,
        price: 699.99
      },
      {
        id: 3,
        name: "Desk Chair",
        category: "Furniture",
        quantity: 85,
        price: 149.99
      },
      {
        id: 4,
        name: "Wireless Mouse",
        category: "Accessories",
        quantity: 200,
        price: 29.99
      },
      {
        id: 5,
        name: "Notebook",
        category: "Stationery",
        quantity: 300,
        price: 2.99
      }
    ]
  };
  res.json(inventory);
});



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);