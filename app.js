import express from 'express';
const app = express();
import usersRoute from './routes/usersRoute.js';
const API_VERSION = '/api/v1';

app.get('/', (req, res) => {
    res.send("Home page accssed")
})

app.use(`${API_VERSION}/user`, usersRoute)

// app.post(`${API_VERSION}/user`, noteRouter)




export default app