const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Employee Helpdesk API is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
