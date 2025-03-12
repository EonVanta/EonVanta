// server/routes/stock.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:symbol', async (req, res) => {
    const { symbol } = req.params;
    const apiKey = process.env.API_KEY;

    try {
        console.log(`Fetching data for ${symbol} using API key: ${apiKey}`);
        const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`);
        console.log('API Response:', response.data);

        const data = response.data['Time Series (Daily)'];

        if (!data) {
            return res.status(404).json({ error: 'Stock symbol not found' });
        }

        const latestDate = Object.keys(data)[0];
        const latestPrice = parseFloat(data[latestDate]['4. close']);

        res.json({ symbol, price: latestPrice });
    } catch (error) {
        console.error('API Error:', error.message, error.response?.data);
        res.status(500).json({ error: 'Failed to fetch stock data' });
    }
});

module.exports = router;