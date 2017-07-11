var path = require('path');
var serverController = require('./../controllers/server_controller.js');

module.exports = function(app){
	app.get('/customers', serverController.getCustomers);
	app.post('/customer', serverController.addCustomer);
	app.delete('/customer/:id', serverController.deleteCustomer);
	
	app.get('/products', serverController.getProducts);
	app.post('/product', serverController.addProduct);
	app.delete('/product/:id', serverController.deleteProduct);

	app.get('/orders', serverController.getOrders);
	app.post('/order', serverController.addOrder);
	app.delete('/order/:id', serverController.deleteOrder);
}