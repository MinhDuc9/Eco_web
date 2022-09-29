const newsRouter = require('./news');
const siteRouter = require('./site');
const productsRouter = require('./products');

function route(app) {
    // route
    
    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });

    app.use('/news', newsRouter);
    app.use('/products', productsRouter);

    app.use('/', siteRouter);

    // app.post('/search', (req, res) => {
    //     res.send('');
    // });
}

module.exports = route;
