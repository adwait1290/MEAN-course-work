app.controller('OrderController', ['$scope', 'StoreFactory', function($scope, StoreFactory){
	function getProducts(){
		StoreFactory.getProducts(function(data){
			$scope.products = data;
		})
	}
	function getCustomers(){
		StoreFactory.getCustomers(function(data){
			
			$scope.customers = data;

		})
	}
	function getOrders(){
		StoreFactory.getOrders(function(data){

			$scope.orders = data;
		})
	}
	getCustomers();
	getProducts();
	getOrders();
	$scope.addOrder = function(order){
		StoreFactory.addOrder(order, getOrders); 
		$scope.newOrder = {}; 
	}
}])