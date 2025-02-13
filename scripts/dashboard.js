// Line Chart
const ctx1 = document.getElementById('lineChart').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Visitors',
            data: [120, 190, 300, 500, 700],
            borderColor: 'cyan',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true
    }
});

// Bar Chart
const ctx2 = document.getElementById('barChart').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Product A', 'Product B', 'Product C'],
        datasets: [{
            label: 'Sales',
            data: [400, 600, 800],
            backgroundColor: ['cyan', 'blue', 'purple']
        }]
    },
    options: {
        responsive: true
    }
});
