// server/models/portfolio.js
const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    userId: String,
    stocks: [
        {
            symbol: String,
            quantity: Number,
            purchasePrice: Number
        }
    ]
});

module.exports = mongoose.model('Portfolio', portfolioSchema);