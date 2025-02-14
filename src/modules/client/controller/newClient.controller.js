const clientModel = require('../../../../DB/models/client.model')

const newClient = async (req, res) => {
    const { name, phone, email } = req.body;

    const client = new clientModel({
        name,
        phone,
        email
    });

    try {
        await client.save();
        res.status(201).json({ message: 'Message send success', client });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
}

module.exports = newClient;