// Request Modules
import app from './app.js'
import dotenv from 'dotenv'

// Setup .ENV support
dotenv.config();

// Listen on port
app.listen(process.env.EXPRESS_PORT, () => console.log(`Server listening on port ${process.env.EXPRESS_PORT}`))