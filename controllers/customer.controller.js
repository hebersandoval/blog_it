const Customer = require('../libs/models/customer.model');

const { body, validationResult } = require('express-validator');

const validateCustomer = [
    body('name', 'Name must not be empty').notEmpty(),
    body('email', 'Email must not be empty').notEmpty(),
    body('phone', 'Phone must not be empty').notEmpty(),
    body('address', 'Address must not be empty').notEmpty(),
];

const showCustomers = async (request, response) => {
    const query = { owner: request.session.userId };
    const customers = await Customer.find(query);

    response.render('pages/customers', {
        title: 'Customers',
        type: 'data',
        customers,
        info: request.flash('info')[0],
    });
};

module.exports = {
    showCustomers,
    validateCustomer,
};
