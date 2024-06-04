const Category = require("../Models/CategoryModel");

const Products = [
    {
        name: "Airmax90",
        description: "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.",
        count: 10,
        price: 100, 
        category: "Nike",
        images: [
            {path: "/Images/AirMax90.jpg"},
            {path: "/Images/AirMax901.jpg"},
            {path: "/Images/AirMax902.jpg"}
        ],
        rating: 5,
        reviewsNumber: 5,
        reviews: [],
        attributes: [
            {key: "color", value:"black"},
            {key: "size", value: "42"}
        ]
    },
    {
        name: "LV",
        description: "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.",
        count: 5,
        price: 1000, 
        category: "Adidas",
        images: [
            {path: "/Images/AirMax90.jpg"},
            {path: "/Images/AirMax901.jpg"},
            {path: "/Images/AirMax902.jpg"}
        ],
        rating: 5,
        reviewsNumber: 5,
        reviews: [],
        attributes: [
            {key: "color", value:"black"},
            {key: "size", value: "42"}
        ]
    },
    {
        name: "Samba",
        description: "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.",
        count: 5,
        price: 100, 
        category: "Adidas",
        images: [
            {path: "/Images/AirMax90.jpg"},
            {path: "/Images/AirMax901.jpg"},
            {path: "/Images/AirMax902.jpg"}
        ],
        rating: 5,
        reviewsNumber: 5,
        reviews: [],
        attributes: [
            {key: "color", value:"black"},
            {key: "size", value: "42"}
        ]
    },
    {
        name: "Dior Homme",
        description: "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.",
        count: 5,
        price: 100, 
        category: "Nike",
        images: [
            {path: "/Images/AirMax90.jpg"},
            {path: "/Images/AirMax901.jpg"},
            {path: "/Images/AirMax902.jpg"}
        ],
        rating: 5,
        reviewsNumber: 5,
        reviews: [],
        attributes: [
            {key: "color", value:"black"},
            {key: "size", value: "42"}
        ]
    },
    {
        name: "AF1",
        description: "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.",
        count: 5,
        price: 100, 
        category: "Adidas",
        images: [
            {path: "/Images/AirMax90.jpg"},
            {path: "/Images/AirMax901.jpg"},
            {path: "/Images/AirMax902.jpg"}
        ],
        rating: 5,
        reviewsNumber: 5,
        reviews: [],
        attributes: [
            {key: "color", value:"black"},
            {key: "size", value: "42"}
        ]
    },
 
]
module.exports = Products