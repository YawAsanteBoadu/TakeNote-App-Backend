const express = require('express')
require ('dotenv').config();

const app = express();

// const port = 5100
const port = process.env.PORT || 5200
// const API_VERSION = '/api/v1';


app.get('/', (req, res) => {
    res.send("Home page accssed")
})



app.listen(port, () => {
    console.log(`🛜  Server is running on port http://localhost:${port}`)
})

