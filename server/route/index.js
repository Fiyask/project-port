const router = require("express").Router()

const userRouter = require("./user.Router")

router.use("/user", userRouter)

module.exports = router