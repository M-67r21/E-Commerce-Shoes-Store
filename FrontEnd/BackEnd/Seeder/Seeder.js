const connectDB = require("../Config/db")
connectDB()

const categoryData = require("./Categories")
const productData = require("./Product")
const reviewData = require("./Reviews")
const userData = require("./User")
const orderData = require("./Orders")

const Category = require("../Models/CategoryModel")
const Product = require("../Models/ProductModel")
const Review = require("../Models/ReviewModel")
const User = require("../Models/UserModel")
const Order = require("../Models/OrderModel")

const importData = async () =>{
    try {
        await Category.collection.dropIndexes()
        await Product.collection.dropIndexes()

        await Category.collection.deleteMany({})
        await Product.collection.deleteMany({})
        await Review.collection.deleteMany({})
        await User.collection.deleteMany({})
        await Order.collection.deleteMany({})

        await Category.insertMany(categoryData)
        const reviews = await Review.insertMany(reviewData)
        const sampleProducts = productData.map((Product) =>{
            reviews.map((review)=>{
                Product.reviews.push(review._id)
            })
            return {...Product}
        })
        await Product.insertMany(sampleProducts)
        await User.insertMany(userData)
        await Order.insertMany(orderData)
        

        console.log("Seeder data proceeded successfully")
        process.exit()
    } catch (error) {
        console.error("Error while processing seeder data", error);
        process.exit(1);
    }
}

importData()