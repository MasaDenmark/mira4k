const userModel = require('../../../../DB/models/user.model')

const register = async (req, res) => {
    const { userName, email, password } = req.body;

    const user = new userModel({
        userName,
        email,
        password,
        role: 'Admin'
    });

    try {
        await user.save();
        res.status(201).json({ message: 'user created successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
}

module.exports = register;