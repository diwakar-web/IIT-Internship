const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint to check if server is running
app.get("/", (req, res) => {
    res.send("it is working");
});

// POST endpoint to handle form data
app.post("/api/data", (req, res) => {
    const { name, age } = req.body;

    // Validation check
    if (!name || !age) {
        return res.status(400).json({ error: 'Name and age are required' });
    }

    // Successful response
    res.json({
        message: `Hello, ${name}`,
        age: age,
        received: true
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API server running at http://localhost:${PORT}`);
});
