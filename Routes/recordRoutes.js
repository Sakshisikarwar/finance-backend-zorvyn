const express = require('express');
const router = express.Router();
const Record = require('../models/Record');

router.post('/add', async (req, res) => {
    try {
        const newRecord = new Record(req.body);
        await newRecord.save();
        res.status(201).json(newRecord);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

router.get('/summary', async (req, res) => {
    try {
        const records = await Record.find();
        let income = 0, expense = 0;
        records.forEach(r => { if(r.type === 'Income') income += r.amount; else expense += r.amount; });
        res.json({ totalIncome: income, totalExpense: expense, balance: income - expense });
    } catch (err) { res.status(500).json({ error: err.message }); }
});
module.exports = router;