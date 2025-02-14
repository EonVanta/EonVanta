// server/routes/stock.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Example API route to fetch stock data
router.get('/:symbol', async (req, res) => {
    const { symbol } = req.params;

    try {
        // Replace with your actual API endpoint
        const response = await axios.get(`https://api.example.com/stock/${symbol}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch stock data' });
    }
});

module.exports = router;