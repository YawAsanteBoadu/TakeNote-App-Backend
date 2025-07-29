import express from 'express';
const app = express();
import {usersRoute, notesRoute} from './routes/index.js'

const API_VERSION = '/api/v1';

app.get('/', (req, res) => {
    res.send("Home page accssed")
})

app.use(`${API_VERSION}/users`, usersRoute)

app.use(`${API_VERSION}/notes`, notesRoute)

// app.post(`${API_VERSION}/user`, noteRouter)




export default app