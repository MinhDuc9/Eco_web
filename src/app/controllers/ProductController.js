const Product = require('./models/Product');
const  { mongooseToObject } = require('../../ulti/mongoose')

class ProductController {
    // [GET] /products/:slug
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug})
            .then((product) => {
                res.render('products/show', { product: mongooseToObject(product) })
            })
            .catch(next);
    }
    
}

module.exports = new ProductController;