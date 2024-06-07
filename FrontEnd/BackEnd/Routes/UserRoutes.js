const express = require('express')
const router = express.Router()
const {verifyIsLoggedIn, verifyIsAdmin} = require("../CustomMiddlewares/VerifyAuthToken")
const {getUser, registerUser, loginUser, updateUserProfile, getUserProfile, writeReview, getUsers, updateUser, deleteUser} = require("../Controllers/UserController")

router.post("/register", registerUser)
router.post("/login", loginUser)

//user logged in routes
router.use(verifyIsLoggedIn)
router.put("/profile", updateUserProfile)
router.get("/profile/:id", getUserProfile)
router.post("/review/:productId", writeReview)

//admin routes
router.use(verifyIsAdmin)
router.get("/", getUser)
router.get("/:id", getUsers)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)



module.exports = router