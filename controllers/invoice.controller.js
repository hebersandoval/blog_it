const Customer = require('../libs/models/customer.model');
const Invoice = require('../libs/models/invoice.model');

const { body, validationResult } = require('express-validator');

const validateInvoice = [
    body('customer', 'Select the customer').notEmpty(),
    body('amount', 'Amount must not be empty').notEmpty(),
    body('date', 'Due date must not be empty').notEmpty(),
    body('status', 'Select the status').notEmpty(),
];
