// server/routes/stock.js
router.get('/:symbol', async (req, res) => {
    const { symbol } = req.params;
    const apiKey = process.env.API_KEY;

    try {
        const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`);
        const data = response.data['Time Series (Daily)'];
        const latestDate = Object.keys(data)[0];
        const latestPrice = data[latestDate]['4. close'];

        res.json({ symbol, price: parseFloat(latestPrice) });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch stock data' });
    }
});