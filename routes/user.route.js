const express = require('express');

const router = express.Router();

const { validateSignup, signup, validateLogin, login, logout } = require('../controllers/user.controller');

const { redirectAuthenticated } = require('../libs/middleware');

// User routes
router.get('/', (request, response) => {
    response.render('pages/index', {
        title: 'Invoice it!',
        info: request.flash('info')[0],
    });
});

// Authenticated middleware
router.get('/signup', redirectAuthenticated, (request, response) => {
    response.render('pages/signup', {
        title: 'Sign up',
        user: request.flash('data')[0],
        info: request.flash('info')[0],
        errors: request.flash('errors'),
    });
});

router.post('/signup', validateSignup, signup);

// Authenticated middleware
router.get('/login', redirectAuthenticated, (request, response) => {
    response.render('pages/login', {
        title: 'Sign in',
        user: request.flash('data')[0],
        info: request.flash('info')[0],
        errors: request.flash('errors'),
    });
});

router.post('/login', validateLogin, login);

router.get('/logout', logout);

module.exports = router;
