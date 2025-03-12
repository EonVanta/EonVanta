// server/routes/stock.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:symbol', async (req, res) => {
    const { symbol } = req.params;
    const apiKey = process.env.API_KEY;

    try {
        // Fetch data from Alpha Vantage
        const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`);
        const data = response.data['Time Series (Daily)'];

        if (!data) {
            return res.status(404).json({ error: 'Stock symbol not found' });
        }

        // Get the latest date and price
        const latestDate = Object.keys(data)[0];
        const latestPrice = parseFloat(data[latestDate]['4. close']);

        res.json({ symbol, price: latestPrice });
    } catch (error) {
        console.error('API Error:', error.message);
        res.status(500).json({ error: 'Failed to fetch stock data' });
    }
});

module.exports = router;