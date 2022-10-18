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
            .then(() => res.redirect('/user/stored/products'))
            .catch(error => {});
    }

    // [GET] /products/:id/edit
    edit(req, res, next) {
        Product.findById(req.params.id)
            .then(product => res.render('products/edit', {
                product: mongooseToObject(product)
            }))
            .catch(next);
    }

    // [PUT] /products/:id
    update(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/user/stored/products'))
            .catch(next)
    }

    // [DELETE] /products/:id
    delete (req, res, next) {
        Product.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /products/:id/force
    forceDelete (req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [PATCH] /products/:id/restore
    restore(req, res, next) {
        Product.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    
    // [POST] /products/handle-form-action
    handleFormAction(req, res, next) {
        switch(req.body.action) {
            case 'delete':
                Product.delete({ _id: { $in: req.body.productIds } })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;
            default:
                res.json({ message: 'Error'});
        }
    }

    deleteFormAction(req, res, next) {
        switch(req.body.action) {
            case 'delete':
                Product.deleteOne({ _id: { $in: req.body.productIds } })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;
            case 'restore':
                Product.restore({ _id: { $in: req.body.productIds }})
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;
            default:
                res.json({ message: 'Error' });
        }
    }

}

module.exports = new ProductController;
