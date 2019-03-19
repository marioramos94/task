module.exports = (app) => {
    const products = require('../controllers/product.controller.js');

    // Create a new Note
    //app.post('/products', product.mo);
    app.get('/products', products.get);
    app.get('/product', products.find);
    app.post('/product', products.createproduct)
    //app.post('/invoice', products.createinvoice)
    app.get('/report',products.report)




}