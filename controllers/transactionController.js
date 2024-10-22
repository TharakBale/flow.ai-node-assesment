const Transaction = require('../models/transactionModel');

exports.createTransaction = (req, res) => {
  const transaction = req.body;
  Transaction.addTransaction(transaction, (err) => {
    if (err) return res.status(500).json({ error: 'Failed to add transaction' });
    res.status(201).json({ message: 'Transaction added successfully' });
  });
};

exports.getAllTransactions = (req, res) => {
  Transaction.getAllTransactions((err, rows) => {
    if (err) return res.status(500).json({ error: 'Failed to retrieve transactions' });
    res.json(rows);
  });
};

exports.getTransactionById = (req, res) => {
  const id = req.params.id;
  Transaction.getTransactionById(id, (err, row) => {
    if (err) return res.status(500).json({ error: 'Failed to retrieve transaction' });
    if (!row) return res.status(404).json({ error: 'Transaction not found' });
    res.json(row);
  });
};

exports.updateTransaction = (req, res) => {
  const id = req.params.id;
  const updatedTransaction = req.body;
  Transaction.updateTransaction(id, updatedTransaction, (err) => {
    if (err) return res.status(500).json({ error: 'Failed to update transaction' });
    res.json({ message: 'Transaction updated successfully' });
  });
};

exports.deleteTransaction = (req, res) => {
  const id = req.params.id;
  Transaction.deleteTransaction(id, (err) => {
    if (err) return res.status(500).json({ error: 'Failed to delete transaction' });
    res.json({ message: 'Transaction deleted successfully' });
  });
};

exports.getSummary = (req, res) => {
  Transaction.getSummary((err, row) => {
    if (err) return res.status(500).json({ error: 'Failed to retrieve summary' });
    res.json(row);
  });
};
