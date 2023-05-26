const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const connection = require("./db")
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

// Middleware
app.use(express.json())
app.use(cors())

// Connect to database
connection()

const port = process.env.PORT || 8080

// Start server
app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`))

// Routes
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
