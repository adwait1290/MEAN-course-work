app.factory("StoreFactory", ["$location", "$http","$window", function($location, $http, $window){

	var factory = {};

	factory.getCustomers = function(callback){
		$http({
			url: "/customers",
			method: "GET"
		}).then(function(res){
			console.log(res);
			callback(res.data);
		}, function(err){
			console.log(err.data);
		})
	},
	factory.addCustomer = function(customer, callback){

		$http({
			url: "/customer",
			method: "POST",
			data: customer
		}).then(function(res){
			console.log(res);
			callback();
		}, function(err){
			console.log(err.data);
		})
	},
	factory.deleteCustomer = function(id, callback){
		$http({
			url: "/customer/" + id,
			method: "DELETE",

		}).then(function(res){
			console.log(res);
			callback();

		}, function(err){
			console.log(err.data);
		})
	},
	factory.getProducts = function(callback){
		$http({
			url: "/products",
			method: "GET"
		}).then(function(res){
			console.log(res);
			callback(res.data);
		}, function(err){
			console.log(err.data);
		})
	},
	factory.addProduct = function(product, callback){
		$http({
			url: "/product",
			method: "POST",
			data: product
		}).then(function(res){

			console.log(res);
			callback();

		}, function(err){
			console.log(err.data);
		})
	},
	factory.deleteProduct = function(id, callback){
		$http({
			url: "/product/" + id,
			method: "DELETE"
		}).then(function(res){
			console.log(res);
			callback();

		}, function(err){
			console.log(err.data);
		})
	},
	factory.getOrders = function(callback){
		$http({
			url: "/orders",
			method: "GET"
		}).then(function(res){
			console.log(res);
			callback(res.data);
		}, function(err){
			console.log(err.data);
		})
	},
	factory.addOrder = function(order, callback){
		
		$http({
			url: "/order",
			method: "POST",
			data: order
		}).then(function(res){
			
			console.log(res);
			callback();
			

		}, function(err){
			console.log(err.data);
		})
	},
	// factory.addOrder = function(order, callback){

	// 	$http({
	// 		url: '/order',
	// 		method: 'POST',
	// 		data: order
	// 	}).success(function(res){
	// 		console.log(res);
	// 		$scope.reloadPage = function()
	// 			{
	// 				$window.location.reload();
	// 			}
	// 	}).error(function(){
	// 		console.log("Order not submitted!");
	// 	})
	// },

	factory.deleteOrder = function(id, callback){
		$http({
			url: "/order/" + id,
			method: "DELETE"
		}).then(function(res){
			console.log(res);
			callback();

		}, function(err){
			console.log(err.data);
		})
	}
	



	return factory;
}])