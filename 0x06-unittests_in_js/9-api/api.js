// api.js

const express = require('express');
const app = express();
const port = 7865;

/**Middleware for validating :id as a number
**/
app.param('id', (req, res, next, id) => {
  if (!/^\d+$/.test(id)) {
    return res.status(400).send('Invalid parameter. :id must be a number.');
  }
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

app.listen(port, () => {
  console.log(`API available on http://localhost:${port}`);
});

module.exports = app;
