var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var Product = mongoose.model('Product');
var Order = mongoose.model('Order');
module.exports = {
	getCustomers: function(req, res){
		Customer.find({}, function(err, data){
			if (err) {
				console.log(err);
				res.status(400).send("Problem getting Customers");
			}
			else {
				res.json(data);
			}
		});
	},
	addCustomer: function(req, res){
		var customer = new Customer(req.body);
		customer.save(function(err, customer){
			if (err) {
				console.log(err);
				res.status(400).send('Customer was not created');
			}
			else {
				res.sendStatus(200); 
			}
		});
	},
	deleteCustomer: function(req, res){
		Customer.findOne({_id: req.params.id}, function(err, customer){
			if (err) {
				console.log(err);
				res.status(400).send("Customer was not deleted");
			}
			else {
				customer.remove();
				res.sendStatus(200);

			}
		})
	},
	getProducts: function(req, res){
		Product.find({}, function(err, data){
			if (err) {
				console.log(err);
				res.status(400).send("Problem getting Products");
			}
			else {
				res.json(data);
			}
		})
	},
	addProduct: function(req, res){
		var product = new Product(req.body);
		product.save(function(err, product){
			if (err) {
				console.log(err);
				res.status(400).send("Product was not Created");
			}
			else {
				res.sendStatus(200);
			}
		})
	},
	deleteProduct: function(req,res){
		Product.findOne({_id: req.params.id}, function(err, product){
			if (err) {
				console.log(err);
				res.status(400).send("Order was not deleted");
			}
			else{
				product.remove();
				res.sendStatus(200);
			}
		})
	},

	getOrders: function(req, res){
		Order.find({}).populate('customer').populate('product').exec(function(err, data){
			if (err) {
				console.log(err);
				res.status(400).send('Problem getting Orders');
			}
			else {
				res.json(data);
			}
		})
	},
	addOrder: function(req, res){
		var order = new Order(req.body);
		order.save(function(err, new_order){
			if (err) {
				console.log(err);
				res.status(400).send("Problem Adding Order");
			}
			else {
				Product.update({_id: new_order.product}, {$inc: {quantity: -new_order.quantity}}, function(err, product){
					if (err) {
						console.log(err);
						res.status(400).send("Problem Adding Order");
					}
					else {
						res.sendStatus(200);
					}
				})
			}
		});
	},
	deleteOrder: function(req, res){
		Order.findOne({_id: req.params.id}, function(err, order){
			if (err) {
				console.log(err);
				res.status(400).send("Problem deleting order");
			}
			else {
				order.remove();
				res.sendStatus(200);
			}
		})
	}
}