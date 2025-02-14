const clientModel = require('../../../../DB/models/client.model')

const clientsMessage = async (req, res) => {
    const { page = 1 } = req.query; // Get page query params
    const limit = 20; // Number of items per page
    const skip = (page - 1) * limit; // Calculate number of items to skip

    try {

        // Get all client's messages
        const clientsMessage = await clientModel.find().sort({ _id: -1 }).skip(skip).limit(limit)

        // If there are no messages in the date range
        if (clientsMessage.length === 0) {
            return res.status(404).json({ message: 'No any message found yet' });
        }

        const totalMessages = await clientModel.countDocuments(); // Get total messages

        return res.json({
            message: 'Messages retrieved successfully',
            clientsMessage,
            page: parseInt(page),
            totalPages: Math.ceil(totalMessages / limit),
            totalItems: totalMessages,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error', err });
    }
}

module.exports = clientsMessage;