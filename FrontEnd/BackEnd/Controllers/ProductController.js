const Product = require("../Models/ProductModel")
const recordsPerPage = require("../Config/Pagination")
const imageValidate = require("../Utils/ImageValidate")
const { error } = require("console")

const getProducts = async(req, res, next) =>{
    try {
        let query = {}
        let queryCondition = false

        let priceQueryCondition = {}
        if(req.query.price){
            queryCondition = true
            priceQueryCondition = {price: {$lte: Number(req.query.price) } }
        }

        let ratingQueryCondition = {}
        if(req.query.rating){
            queryCondition = true
            ratingQueryCondition = {rating: {$in: req.query.rating.split(",") } }
        }

        let categoryQueryCondition = {}
        const categoryName = req.params.categoryName ||""
        if (categoryName) {
            queryCondition = true
            let a = categoryName.replaceAll(",", "/")
            var regEx = new RegExp("^ + a")
            categoryQueryCondition = {category: regEx}
        }
        if (req.query.category) {
            queryCondition = true
            let a = req.query.category.split(",").map((item) =>{
                if (item) return new RegExp("^" + item) 
            })
            categoryQueryCondition = {
                category: {$in: a}
            }
        }

        let attrQueryCondition = []
        if (req.query.attributes) {
            
            attrQueryCondition = req.query.attributes.split(",").reduce((acc, item) =>{
                if (item) {
                    let a = item.split(",")
                    let values = [...as]
                    values.shift
                    let al = {
                        attributes: { selemMatch: { key: a[0], value: {sin: values} } }
                    }
                    acc.push(al)
                    console.dir(acc, {depth: null})
                    return acc
                } else return acc
            },[])
            queryCondition = true
        }

         //pagination
         const pageNum = Number(req.query.pageNum) || 1
        
         // sort by name, price etc
         let sort = {}
         const sortOption = req.query.sort || ""
         if (sortOption) {
             let sortOPt = sortOption.split("_")
             sort = {[sortOPt[0]]: Number (sortOPt[1])}
             console.log(sort)
         }


        const searchQuery = req.params.searchQuery || ""
        let searchQueryCondition = {}
        let select = {}
        if (searchQuery) {
            queryCondition = true
            searchQueryCondition = {$text: {$search: searchQuery}}
            select = {
                score: {$meta: "textScore"}
            }
            sort = {score: {$meta: "textScore"}}
        }


        if (queryCondition ) {
            query = {
                $and: [
                    priceQueryCondition, 
                    ratingQueryCondition, 
                    categoryQueryCondition,
                    searchQueryCondition,
                    ...attrQueryCondition
                ]
            }
        }
    

        const totalProducts = await Product.countDocuments(query)
        const products = await Product.find(query)
        .select(select)
        .skip(recordsPerPage * (pageNum - 1))
        .sort(sort)
        .limit(recordsPerPage)
        res.json({
            products,
            pageNum,
            paginationLinksNumber: Math.ceil(totalProducts / recordsPerPage)})
    } catch (error) {
        next(error)
    }
}

const getProductsById = async (req, res, next) =>{
    try {
        const product = await Product.findById(req.params.id).populate("reviews").orFail()
        res.json(product)
    } catch (error) {
        next(error)
    }
}

const getBestSellers = async (req, res, next) =>{
    try {
        const products = await Product.aggregate([
            {$sort: {category:1, sales: -1 }},
            {$group: { _id: "$categpry", doc_with_max_sales: {$first: "$$ROOT"}}},
            {$replaceWith: "$doc_with_max_sales" },
            {$match: {sales: {$gt: 0}}},
            {$project: { _id: 1, name: 1, images: 1, description: 1}},
            { $limit: 3 }
        ])
        res.json(products)
    } catch (error) {
        next(error)
    }
}

const adminGetProducts = async (req, res, next) =>{
    try {
        const products = await Product.find({})
            .sort({category: 1})
            .select('name price category')
            return res.json(products)
    } catch (error) {
        next(error)
    }
}


const adminDeleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product removed" });
    } catch (error) {
        next(error);
    }
}

const adminCreateProduct = async (req, res, next) => {
    try {
        const product = new Product
        const {name, description, count, price, category, attributesTable} = req.body
        product.name = name
        product.description = description
        product.count = count
        product.price = price
        product.category = category
        if (attributesTable.length>0) {
            attributesTable.map((item) =>{
                product.attributes.push(item)
            })
        }
        await product.save()
        res.json({
            message: "Product created",
            productId: product._id
        })
    } catch (error) {
        next(error)
    }
}

const adminUpdateProduct = async (req, res, next) =>{
   try {
        const product = await Product.findById(req.params.id).orFail()
        const { name, description, count, price, category, attributesTable} = req.body
        product.name = name || product.name
        product.description = description || product.description
        product.count = count || product.count
        product.category = category || product.category
        product.price = price || product.price
        if (attributesTable.length > 0) {
            product.attributes = []
            attributesTable.map((item) =>{
               product.attributes.push(item) 
            })
        }else{
            product.attributes = []
        }
        await product.save()
        res.json({
            message: 'Product updated'
        })
   } catch (error) {
        next(error)
   } 
}

const adminUpload = async (req, res, next) =>{
    try {
        
        if (!req.files || !! req.files.images ===false) {
            return res.status(400).send("No files uploaded")
        }

        const validateResult = imageValidate(req.files.images)
        if (validateResult.error) {
            return res.status(400).send(validateResult.error)
        }

        const path = require("path")
        const {v4: uuidv4} = require("uuid")
        const uploadDirectory = path.resolve(__dirname, "../../E-Commerce Full", "public", "Images", "Products")

        let product = await Product.findById(req.query.productId).orFail()

        let imagesTable = []
        if(Array.isArray(req.files.images)){
            imagesTable = req.files.images
        }else{
            imagesTable.push(req.files.images)
        }

        for (let image of imagesTable) {
            var filName = uuidv4() + path.extname(image.name)
            var uploadPath = uploadDirectory + "/" + filName
            product.images.push({path: "/Images/Products" + filName})
            image.mv(uploadPath, function (error) {
                if (error) {
                    return res.status(500).send(error)
                }
            })
        }
        await product.save
        return res.send("Files uploaded!")

    } catch (error) {
        next(error)
    }
}

const adminDeleteProductImage = async(req, res, next) =>{
    try {
        const imagePath = decodeURIComponent(req.params.imagePath)  
        const path = require("path")
        const finalPath = path.resolve("../E-Commerce Full/public") + imagePath
        const fs = require("fs")
        fs.unlink(finalPath, (error) =>{
            if (error) {
                res.status(500).send(error)
            }
        })
        await Product.findOneAndUpdate(
            {_id: req.params.productId}, 
            { $pull: {images: {path: imagePath}}}
            ).orFail()
        return res.end()
    
    } catch (error) {
        next(error)
    }
    
}

module.exports = {
    getProducts,
    getProductsById, 
    getBestSellers, 
    adminGetProducts, 
    adminDeleteProduct, 
    adminCreateProduct, 
    adminUpdateProduct, 
    adminUpload,
    adminDeleteProductImage
};