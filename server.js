import app from './app.js'
import{ENV}from "./config/env.js"

const API_VERSION = '/api/v1';

app.get('/', (req, res) => {
    res.send("Home page accssed")
})

app.post(`${API_VERSION} /user/signup`, (req, res) => {
    res.send("Sign Up Successgul 👏")
})

app.post(`${API_VERSION}/user/login`, (req, res) => {
    res.send("Login Successful 👏")
})


app.listen(ENV.PORT, () => {
    console.log(`🛜  Server is running on port http://localhost:${ENV.PORT}`)
})