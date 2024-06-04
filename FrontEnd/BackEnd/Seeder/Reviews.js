const ObjectId = require("mongodb").ObjectId

const Reviews = [
    {
        comment: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        rating: 5,
        user: {_id: new ObjectId(), name: "John Doe"},
    },
    {
        comment: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        rating: 5,
        user: {_id: new ObjectId(), name: "Joe Doe"},
    },{
        comment: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        rating: 5,
        user: {_id: new ObjectId(), name: "Jone Doe"}
    },
    {
        comment: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        rating: 5,
        user: {_id: new ObjectId(), name: "Joy Doe"}
    },
    {
        comment: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        rating: 5,
        user: {_id: new ObjectId(), name: "Joyce Doe"}
    },
    
]
module.exports = Reviews