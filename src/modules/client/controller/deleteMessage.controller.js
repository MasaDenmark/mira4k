const clientModel = require('../../../../DB/models/client.model')

const deleteMessage = async (req, res) => {
    const { id } = req.params; // Client message ID

    try {
        const client = await clientModel.findByIdAndDelete(id)

        if (!client) {
            return res.status(404).send({ message: 'Client not found' });
        }

        res.json({ message: 'Message is deleted', client });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
}

module.exports = deleteMessage;