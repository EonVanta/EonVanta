// js/app.js
document.addEventListener('DOMContentLoaded', function () {
    const stockSymbol = 'AAPL'; // Example stock symbol
    const stockPriceElement = document.getElementById('stock-price');
    const chartCanvas = document.getElementById('stockChart').getContext('2d');

    // Simulate fetching stock data
    fetch(`https://api.example.com/stock/${stockSymbol}`)
        .then(response => response.json())
        .then(data => {
            stockPriceElement.textContent = `Current Price: $${data.price}`;

            // Create a simple line chart
            new Chart(chartCanvas, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                    datasets: [{
                        label: `${stockSymbol} Price`,
                        data: [100, 120, 110, 130, 125],
                        borderColor: 'blue',
                        fill: false
                    }]
                },
                options: {}
            });
        })
        .catch(error => {
            stockPriceElement.textContent = 'Error fetching stock data.';
            console.error('Error:', error);
        });
});
new ApexCharts(chartCanvas, {
    series: [{
        name: 'AAPL Price',
        data: [100, 120, 110, 130, 125]
    }],
    chart: {
        type: 'line',
        height: 350
    },
    title: {
        text: 'Stock Price Chart',
        align: 'left'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    }
}).render();