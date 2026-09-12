const express = require('express');
const router = express.Router();

// Create ticket
router.post('/', (req, res) => {
  const { title, description } = req.body;
  res.status(201).json({ id: Date.now(), title, description, status: 'open' });
});

// Get all tickets
router.get('/', (req, res) => {
  res.json([{ id: 1, title: 'Sample Ticket', description: 'Demo', status: 'open' }]);
});

module.exports = router;
