const clientModel = require('../../../../DB/models/client.model')

const messageDetailes = async (req, res) => {
    const { id } = req.params; // Client message ID

    try {
        const client = await clientModel.findByIdAndUpdate(
            id,
            { isRead: true }, // Update isRead to true
            { new: true }
        );

        if (!client) {
            return res.status(404).send({ message: 'Client not found' });
        }

        res.json({ message: 'Message is readed', client });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
}

module.exports = messageDetailes;