const { Product } = require('../models/product.model');

// //Home
// module.exports.index = (request, response) => {
//     response.json({
//         message: "Hello World"
//     });
// }

//Create
module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({ title, price, description })
        .then((product) => console.log("Product created succesfully ", product))
        .catch((error) => console.log("Something went wrong (CreateProduct)", error));
}