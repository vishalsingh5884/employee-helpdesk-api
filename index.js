const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Import tickets router
const ticketsRouter = require('./routes/tickets');
app.use('/tickets', ticketsRouter);

app.get('/', (req, res) => {
  res.send('Employee Helpdesk API is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
