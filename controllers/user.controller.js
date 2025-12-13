const User = require('../libs/models/user.model');

const signup = async (request, response) => {
    const { email, password } = request.body;
    const query = { email };

    const existingUser = await User.findOne(query);

    if (existingUser) {
        // Email already exists
        response.redirect('/signup');
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = {
            email,
            password: hashedPassword,
        };

        const result = await User.create(user);
        request.session.userId = result._id;
        response.redirect('/dashboard');
    }
};

module.exports = {
    signup,
};
