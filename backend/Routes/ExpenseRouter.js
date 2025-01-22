const {
    getAllTransactions,
    addTransaction,
    deleteTransaction
} = require('../Controllers/ExpenseController');

const router = require('express').Router();

// Fetch all expenses of a user based on user_id
router.get('/', getAllTransactions);

// Add a new expense
router.post('/', addTransaction);

// Delete an expense
router.delete('/:expenseId', deleteTransaction);

module.exports = router;
