import { Router } from "express";

const noteRouter = Router()
// creating a note
noteRouter.post("/create", (req, res) => {
    res.send("Noted Added Successfully ➕")
})

// 


export default noteRouter