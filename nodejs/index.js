
const express = require('express')
const app = express()
const Port = process.env.PORT || 5002

// Database connection
require('./db/conn')

// middleware
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

// Routes
const UserRoute = require('./routes/user_routes')

// Middleware
app.use('/api', UserRoute)


app.listen(Port, () => {
    console.log(`server is running on port: ${Port}`);
})

