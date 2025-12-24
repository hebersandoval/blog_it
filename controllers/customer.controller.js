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

const createCustomer = async (request, response) => {
    const validationErrors = validationResult(request);

    if (!validationErrors.isEmpty()) {
        const errors = validationErrors.array();
        request.flash('errors', errors);
        request.flash('data', request.body);

        return response.redirect('create');
    }

    const newCustomer = request.body;
    newCustomer.owner = request.session.userId;

    await Customer.create(newCustomer);

    request.flash('info', {
        message: 'Customer created',
        type: 'success',
    });

    response.redirect('/dashboard/customers');
};

module.exports = {
    showCustomers,
    createCustomer,
    validateCustomer,
};
