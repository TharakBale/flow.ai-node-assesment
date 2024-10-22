const express = require('express');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api', transactionRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
