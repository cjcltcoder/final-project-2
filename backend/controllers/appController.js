const asyncHandler = require('express-async-handler')

// @desc Get users
// @route Get /api/loginpage
// @access Public
const getUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get user'})
})

// @desc Set users
// @route Post /api/loginpage
// @access Public
const addUser = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a user')

    }
    res.status(200).json({ message: 'Set user'})
})

// @desc Update users
// @route Put /api/loginpage
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update user ${req.params.id}`})
})

// @desc Delete users
// @route Delete /api/loginpage
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete user ${req.params.id}`})
})

module.exports = {
    getUser, 
    addUser, 
    updateUser, 
    deleteUser
}