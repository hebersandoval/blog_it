const express = require('express');
const router = express.Router();

const { showInvoices, createInvoice, getCustomers, validateInvoice } = require('../controllers/invoice.controller');

router.get('/', showInvoices);

router.get('/create', getCustomers, (request, response) => {
    // get customers populated by getCustomers middleware (fall back to empty array)
    const customers = request.customers || [];
    // const { customers } = request;

    response.render('pages/invoices', {
        title: 'Create invoice',
        formAction: 'create',
        type: 'form',
        customers,
        invoice: request.flash('data')[0],
        errors: request.flash('errors'),
    });
});

router.post('/create', validateInvoice, createInvoice);

module.exports = router;
