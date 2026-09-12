const express = require('express');
const router = express.Router();

// In-memory storage
let tickets = [];

// GET all tickets
router.get('/', (req, res) => {
  res.json(tickets);
});

// POST new ticket
router.post('/', (req, res) => {
  const { title, description } = req.body;
  const newTicket = {
    id: tickets.length + 1,
    title,
    description,
    created_at: new Date()
  };
  tickets.push(newTicket);
  res.json(newTicket);
});

// GET single ticket
router.get('/:id', (req, res) => {
  const ticket = tickets.find(t => t.id === parseInt(req.params.id));
  if (!ticket) return res.status(404).json({ error: 'Ticket not found' });
  res.json(ticket);
});

// DELETE ticket
router.delete('/:id', (req, res) => {
  tickets = tickets.filter(t => t.id !== parseInt(req.params.id));
  res.json({ message: 'Ticket deleted successfully' });
});

module.exports = router;
