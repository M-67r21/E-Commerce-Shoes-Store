const User = require("../Models/UserModel")
const {hashPassword, comparePasswords} = require("../Utils/HashPassword")
const generateAuthToken = require("../Utils/GenerateAuthToken")
// const { use } = require("../Routes/UserRoutes")
const Review = require("../Models/ReviewModel")
const Product = require("../Models/ProductModel")

const getUser = async(req, res, next) =>{
    try {
        const users = await User.find({}).select("-password")
        return res.json(users)
    } catch (error) {
        next(error)
    }
}

const registerUser = async(req, res, next) =>{
    try {
        const { name, lastName, email, password} = req.body
        if(!(name && lastName && email && password)){
            return res.status(400).send("All inputs are required")
        }

        const userExists = await User.findOne({email})
        if (userExists) {
            return res.status(400).send({error: "User exists"})
        }else{
            const hashedPassword = hashPassword(password)
            const user = await User.create({
                name, 
                lastName, 
                email: email,
                password: hashedPassword
            })
            res
            .cookie("access_token", generateAuthToken(user._id, user.name, user.lastName, user.email, user.isAdmin), {
                httpOnly: true, 
                secure: process.env.NODE_ENV === "Production",
                sameSite: "strict"
            })
            .status(201)
            .json({
                success: "User created", 
                userCreated: {
                    _id: user._id, 
                    name: user.name, 
                    lastName: user.lastName, 
                    email: user.email, 
                    isAdmin: user.isAdmin
                }
            })
        }

    } catch (error) {
        next(error)
    }
}

const loginUser = async(req, res, next) =>{
    try {
        const {email, password, doNotLogout} = req.body
        if (!(email && password)) {
            return res.status(400).send("All inputs are required")
        }

        const user = await User.findOne({email})
        if (user && comparePasswords(password, user.password)) {
            let cookieParams = {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict"
            }

            if (doNotLogout) {
                cookieParams = {...cookieParams, maxAge: 1000*60*60*24*7}
            }
            return res.cookie(
                "access_token", 
                generateAuthToken(
                    user._id, 
                    user.name, 
                    user.lastName, 
                    user.email, 
                    user.isAdmin
                ), 
                cookieParams
            ).json({
                success: "User logged in",
                userLoggedIn: {_id: user._id, name: user.name, lastName: user.lastName, email: user.email, isAdmin: user.isAdmin, doNotLogout}
            })
        }else{
            return res.status(401).send("Wrong credentials")
        }
    } catch (error) {
        next(error)
    }
}

const updateUserProfile = async(req, res, next) =>{
    try {
        const user = await User.findById(req.user._id).orFail()
        user.name = req.body.name ||user.name
        user.lastName = req.body.lastName ||user.lastName
        user.email = req.body.email ||user.email
        user.phoneNumber = req.body.phoneNumber ||user.phoneNumber
        user.county = req.body.county ||user.county
        user.town = req.body.town ||user.town
        if (req.body.password !== user.password) {
            user.password = hashPassword(req.body.password)
        }
        await user.save()

        res.json({
            success: "User updated",
            userUpdated: {
                _id: user._id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                isAdmin: user.isAdmin
            },
        })
    } catch (error) {
        next(error)
    }
}

const getUserProfile = async(req, res, next) =>{
    try {
        const user = await User.findById(req.params.id).orFail();
        return res.send(user)
    } catch (error) {
        next(error)
    }
}

const writeReview = async (req, res, next) => {
    let session;
    try {
        session = await Review.startSession();
        session.startTransaction();

        //get comment, rating from request.body
        const { comment, rating } = req.body;

        //validate request
        if (!(comment && rating)) {
            return res.status(400).send("All input are required");
        }

        //create review id manually
        const ObjectId = require("mongodb").ObjectId;
        let reviewId = new ObjectId();

        await Review.create([
            {
                _id: reviewId,
                comment: comment,
                rating: Number(rating),
                user: { _id: req.user._id, name: req.user.name + " " + req.user.lastName },
            }
        ], { session: session });

        const product = await Product.findById(req.params.productId).populate("reviews").session(session);

        const alreadyReviewed = product.reviews.find((r) => r.user._id.toString() === req.user._id.toString());
        if (alreadyReviewed) {
            await session.abortTransaction();
            session.endSession();
            return res.status(400).send("Product already reviewed");
        }

        let prc = [...product.reviews];
        prc.push({ rating: rating });
        product.reviews.push(reviewId);
        if (product.reviews.length === 1) {
            product.rating = Number(rating);
            product.reviewsNumber = 1;
        } else {
            product.reviewsNumber = product.reviews.length;
            product.rating = prc.map((item) => Number(item.rating)).reduce((sum, item) => sum + item, 0) / product.reviews.length;
        }
        await product.save();

        await session.commitTransaction();
        session.endSession();
        res.send("Review created");

    } catch (error) {
        if (session) {
            await session.abortTransaction();
            session.endSession();
        }
        next(error);
    }
}

const getUsers = async(req, res, next) =>{
    try {
        const user = await User.findById(req.params.id).select("name lastName email isAdmin").orFail()
        return res.send(user)
    } catch (error) {
        next(error)
    }
}

const updateUser = async(req, res, next) =>{
    try {
        const user = await User.findById(req.params.id).orFail()

        user.name = req.body.name || user.name
        user.lastName = req.body.lastName || user.lastName
        user.email = req.body.email || user.email
        user.isAdmin = req.body.isAdmin || user.isAdmin

        await user.save()
        res.send("User updated")
    } catch (error) {
        next(error)
    }
}

const deleteUser =  async(req, res, next) =>{
    try {
        const user = await User.findById(req.params.id).orFail()
        await user.deleteOne()
        res.send("User removed")
    }catch (error) {
        next(error)
    }
}

module.exports = {
    getUser, 
    registerUser, 
    loginUser,
    updateUserProfile,
    getUserProfile,
    writeReview,
    getUsers,
    updateUser,
    deleteUser
} 