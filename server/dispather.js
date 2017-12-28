;
const menuController = require('./controller/menu-controller');
const productController = require('./controller/product-controller');
module.exports = function(app){
    app.use('/Angular-Lesson', function(req, res, next){
        //每个请求都会经过这里:可以做拦截、校验等等相关操作
        console.log('请求来了');
        next();
    });
    app.use('/Angular-Lesson/menu', menuController);
    app.use('/Angular-Lesson/product', productController);
};