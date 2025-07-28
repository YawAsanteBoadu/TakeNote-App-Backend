import { Router } from "express";

const userRouter = Router();

userRouter.post("/singup", (req, res) => {
    res.send("Sign Up Successgul 👏")
})

userRouter.post("/login", (req, res) => {
    res.send("Login Successful 👏")
})

export default userRouter