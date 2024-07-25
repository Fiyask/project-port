const { test, signinController, signupController, updateUser, deleteUser } = require("./Controller/userController")

const router = require("express").Router()


router.get("/",test)
router.post("/signup",signupController)
router.post("/signin",signinController)
router.patch("/update/:id", updateUser)
router.delete("/delete/:id", deleteUser)

module.exports = router