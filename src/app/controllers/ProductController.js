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
    
    // [GET] /products/create
    create(req, res, next) {
        res.render('products/create');
    }

    // [POST] /products/store
    store(req, res, next) {
        const product = new Product(req.body);
        product.save()
            .then(() => res.redirect('/'))
            .catch(error => {
                
            });
    }
}

module.exports = new ProductController;
