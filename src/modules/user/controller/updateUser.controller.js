const userModel = require('../../../../DB/models/user.model')

const updateUser = async (req, res) => {
    const userId = req.userData._id // get userId from middleware authorization
    const { userName, email } = req.body;

    try {
        const user = await userModel.findById(userId)

        // Check if user not found
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const updateUser = await userModel.findByIdAndUpdate(
            userId,
            { userName, email, password: req.userData.password, role: req.userData.role },
            { new: true } // Return the user after update
        );

        res.json({ message: 'User updated successfully', updateUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

module.exports = updateUser;