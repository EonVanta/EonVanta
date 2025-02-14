// server/server.js
const express = require('express');
const dotenv = require('dotenv');
const stockRoutes = require('./routes/stock');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (frontend)
app.use(express.static('../public'));

// Define API routes
app.use('/api/stock', stockRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});