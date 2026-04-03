const express = require('express');
const cors = require('cors');
const recordRoutes = require('./routes/recordRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Routes ko connect kar rahe hain
app.use('/api/records', recordRoutes);

app.get('/', (req, res) => {
    res.send("Finance Backend is Live! Well done Sakshi.");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
