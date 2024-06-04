const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: "default category description",
    },
    name: {
        type: String,
        default: "./Images/AirMax90.jpg",
    },
    attributes: [{key: {type: String}, value: [{type: String}], length: {type: Number}}]
});
categorySchema.index({description: 1})

const Category =  mongoose.model("Category", categorySchema);
module.exports = Category;