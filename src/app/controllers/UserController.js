const Product = require('./models/Product');
const  { mutipleMongooseToObject } = require('../../ulti/mongoose')

class UserController {
    // [GET] /user/stored/products
    storedProducts(req, res, next) {

        let productQuery = Product.find({});

        if (req.query.hasOwnProperty('_sort')) {
            productQuery = productQuery.sort({
                [req.query.column]: req.query.type
            });
        }

        Promise.all([productQuery, Product.countDocumentsDeleted()])
            .then(([products, deletedCount]) => {
                res.render('user/stored-products', {
                    deletedCount: deletedCount,
                    products: mutipleMongooseToObject(products),
                })
            })
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
