const Product = require('./models/Product');
const  { mutipleMongooseToObject } = require('../../ulti/mongoose')

class SiteController {

    // [GET] /
    index(req, res, next) {
        Product.find({})
            .then(products => {
                res.render('home', {
                    products: mutipleMongooseToObject(products)
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
    
}

module.exports = new SiteController;