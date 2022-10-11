const Product = require('./models/Product');
const  { mutipleMongooseToObject } = require('../../ulti/mongoose')

class UserController {
    // [GET] /user/stored/products
    storedProducts(req, res, next) {
        Product.find({})
            .then(products => res.render('user/stored-products', {
                products: mutipleMongooseToObject(products)
            }))
            .catch(next);
    }
    
    // [GET] /user/trash/products
    trashProducts(req, res, next) {
        Product.findDeleted({})
            .then(products => res.render('user/trash-products', {
                products: mutipleMongooseToObject(products)
            }))
            .catch(next);
    }
}

module.exports = new UserController;
