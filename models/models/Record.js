const mongoose = require('mongoose');
const RecordSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    type: { type: String, enum: ['Income', 'Expense'], required: true },
    category: { type: String, required: true },
    description: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('Record', RecordSchema);
