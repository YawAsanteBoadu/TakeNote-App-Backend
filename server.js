import app from './app.js'
import{ENV}from "./config/env.js"
// const API_VERSION = '/api/v1';

app.get('/', (req, res) => {
    res.send("Home page accssed")
})



app.listen(ENV.PORT, () => {
    console.log(`🛜  Server is running on port http://localhost:${ENV.PORT}`)
})