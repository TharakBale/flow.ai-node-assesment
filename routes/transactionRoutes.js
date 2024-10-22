const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Transactions routes
router.post('/transactions', transactionController.createTransaction);
router.get('/transactions', transactionController.getAllTransactions);
router.get('/transactions/:id', transactionController.getTransactionById);
router.put('/transactions/:id', transactionController.updateTransaction);
router.delete('/transactions/:id', transactionController.deleteTransaction);
router.get('/summary', transactionController.getSummary);

module.exports = router;
