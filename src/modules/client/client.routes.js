const clientRouter = require('express').Router()
const newClient = require('./controller/newClient.controller')
const messageDetailes = require('./controller/messageDetailes.controller')
const clientsMessage = require('./controller/clientsMessage.controller')
const deleteMessage = require('./controller/deleteMessage.controller')
const { isAdmin } = require('../../middleware/auth')

clientRouter.post('/client/new', newClient)
clientRouter.put('/client/messageDetailes/:id', isAdmin, messageDetailes)
clientRouter.get('/client/get', isAdmin, clientsMessage)
clientRouter.delete('/client/delete/:id', isAdmin, deleteMessage)

module.exports = clientRouter;