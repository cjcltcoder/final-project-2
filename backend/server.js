const express = require ('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/loginpage', require('./routes/loginPage'))
app.use('/api/dashboard', require('./routes/dashboard'))

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})