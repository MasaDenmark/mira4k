const userRouter = require('express').Router()
const login = require('./controller/login.controller')
const register = require('./controller/register.controller')
const updateUser = require('./controller/updateUser.controller')
const { isAdmin } = require('../../middleware/auth')

userRouter.post('/user/register', register)
userRouter.post('/user/login', login)
userRouter.post('/user/update', isAdmin, updateUser)

module.exports = userRouter;