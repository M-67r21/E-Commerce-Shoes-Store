const ObjectId = require("mongodb").ObjectId

const Orders = Array.from({length: 22}).map((_, idx) =>{
    let day = 20
    if (idx <10) {
        var hour = "0" + idx
        var subtotal = 100
    } else if (idx > 16 && idx<21) {
        var hour = idx
        var subtotal = 100 + 12*idx
    }else{
        var hour = idx
        var subtotal = 100
    }
    return{
        user: new ObjectId(),
        orderTotal: {
           itemsCount: 3,
           cartSubtotal: subtotal
        },
        cartItems: [
            {
                name: "Product name",
                price: 43,
                image: {path: "/Images/Nike2.png" },
                quantity: 500,
                count: 45
            }
        ], 
        PaymentMethod: "M-Pesa",
        isPaid: false,
        isDelivered: false,
        createdAt: `2024-06-${day}T${hour}:12:36.490+00:00`
    }
})

module.exports = Orders 