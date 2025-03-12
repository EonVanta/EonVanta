// js/app.js
document.addEventListener('DOMContentLoaded', function () {
    const stockSymbol = 'AAPL'; // Example stock symbol
    const stockPriceElement = document.getElementById('stock-price');

    // Fetch stock data from the backend
    fetch(`/api/stock/${stockSymbol}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            stockPriceElement.textContent = `Current Price: $${data.price.toFixed(2)}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            stockPriceElement.textContent = 'Error fetching stock data.';
        });
});
fetch(`/api/stock/${stockSymbol}`)