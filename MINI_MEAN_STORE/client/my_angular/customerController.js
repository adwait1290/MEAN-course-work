app.controller('CustomerController', ['$scope', '$location', 'StoreFactory', function($scope, $location, StoreFactory){

	function getCustomers(){
		StoreFactory.getCustomers(function(data){
			
			$scope.customers = data;

		})
	};
	getCustomers();
	$scope.addCustomer = function(customer){
		StoreFactory.addCustomer(customer, getCustomers);
		$scope.newCustomer = {};
	};
	$scope.deleteCustomer = function(id){
		StoreFactory.deleteCustomer(id, getCustomers);
	}
}])