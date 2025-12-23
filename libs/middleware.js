const verifyUser = (request, response, next) => {
    if (!request.session.userId) {
        return response.redirect('/login');
    }

    next();
};

const redirectAuthenticated = (request, response, next) => {
    if (request.session.userId) {
        return response.redirect('/dashboard');
    }

    next();
};

module.exports = {
    verifyUser,
    redirectAuthenticated,
};
