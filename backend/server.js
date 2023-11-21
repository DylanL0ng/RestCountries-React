// Request modules
const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const app = express();

// Setup cors
const cors = require('cors');

app.use(cors());

// Setup .ENV support
dotenv.config();

app.get('/countries/:country', async (req, res) => {
    let { country } = req.params;
    
    // Remove any whitespace from the param
    country = country.trim()

    // If param isn't passed through then cancel out
    if (!country) res.status(500).json({error: "Invalid input"})

    // Attempt to query for the country with the API
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`)
        res.json(response.data);
    } catch (error) {
        console.log('Error fetching data')
        res.status(500).json({error: "failed to fetch data"})
    }
})

// Listen on port
app.listen(process.env.EXPRESS_PORT, () => console.log(`Server listening on port ${process.env.EXPRESS_PORT}`))