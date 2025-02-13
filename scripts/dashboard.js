/* General Styling */
body {
    display: flex;
    background-color: #0a0a2a;
    color: white;
    font-family: Arial, sans-serif;
}

/* Sidebar */
.sidebar {
    width: 250px;
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
}

.sidebar h2 {
    text-align: center;
    color: cyan;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar ul li {
    padding: 15px;
}

.sidebar ul li a {
    color: white;
    text-decoration: none;
}

/* Main Dashboard */
.dashboard {
    flex-grow: 1;
    padding: 20px;
}

header h1 {
    text-align: center;
}

/* Charts */
.tradingview-widget-container {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 10px;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .tradingview-widget-container {
        width: 90%;
    }
}
