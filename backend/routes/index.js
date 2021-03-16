const productRouter = require('./product');

function routes(app) {

    app.use('/api',productRouter);
  }
  
  module.exports = routes;
  