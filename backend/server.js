// Request modules
const express = require('express')
const dotenv = require('dotenv')
const axios = require('axios')
const cors = require('cors')
const app = express();

// Setup and use CORS
app.use(cors());

app.get('/countries/:country', async (req, res) => {
    let { country } = req.params;
    
    // Remove any whitespace from the param
    country = country.trim()

    // If param isn't passed through or its passed through
    // with invalid symbols, such as numbers then cancel out
    // and respond with an error message.
    if (!country || !/^[a-zA-Z]+$/.test(country))
        return res.status(400).json({ error: "Invalid or missing country parameter. Please provide a valid country name." })

    // Attempt to query for the country with the API
    try {
        // Encode the param as a valid URI component
        // This will prevent and possible injection attacks.
        const response = await axios.get(`https://restcountries.com/v3.1/name/${encodeURIComponent(country)}`)
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data', error.message);
        res.status(500).json({ error: `Failed to fetch data: ${error.message}` });
    }
})

// Setup .ENV support
dotenv.config();

// Listen on port
app.listen(process.env.EXPRESS_PORT, () => console.log(`Server listening on port ${process.env.EXPRESS_PORT}`))