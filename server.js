const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Import the chat handler
const chatHandler = require('./api/chat.js');

// Mount the chat API
app.post('/api/chat', (req, res) => {
  return chatHandler(req, res);
});

app.listen(PORT, () => {
  console.log(`🐴 Kaspar Hauser Bot running on port ${PORT}`);
  console.log(`Access at: http://localhost:${PORT}`);
});
