app.controller('ProductController', ['$scope', 'StoreFactory', function($scope, StoreFactory){
	function getProducts(){
		StoreFactory.getProducts(function(data){
			$scope.products = data;
		})
	}
	getProducts();
	$scope.addProduct = function(product){
		StoreFactory.addProduct(product, getProducts);
	}
	$scope.deleteProduct = function(id){
		StoreFactory.deleteProduct(id, getProducts);
	}
}])