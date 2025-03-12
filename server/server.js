const express = require('express');
const dotenv = require('dotenv');
const stockRoutes = require('./routes/stock');

dotenv.config();

const app = express();
app.use(express.json());

// Serve static files (frontend)
app.use(express.static('../public'));

// Define API routes
app.use('/api/stock', stockRoutes);

// Example login route
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        return res.json({ success: true, message: 'Login successful' });
    }

    res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});