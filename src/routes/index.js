const newsRouter = require('./news');
const userRouter = require('./user');
const productsRouter = require('./products');
const siteRouter = require('./site');

function route(app) {
    // route
    
    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });

    app.use('/news', newsRouter);
    app.use('/user', userRouter);
    app.use('/products', productsRouter);

    app.use('/', siteRouter);

    // app.post('/search', (req, res) => {
    //     res.send('');
    // });
}

module.exports = route;
