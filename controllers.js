pricebookApp.controller('homeController', ['$scope', '$location', 'itemService', 'storeService', function($scope, $location, itemService, storeService)  {
    
    var itemPromise = itemService.getItems();
    
    itemPromise.then(function (itemData) {
        $scope.items = itemData;
    });
    
    var storePromise = storeService.getStores();
    
    storePromise.then(function (storeData) {
        $scope.stores = storeData;
    });
    
    $scope.searchItem = itemService.searchItem;
    
    $scope.$watch('searchItem', function() {
       itemService.searchItem = $scope.searchItem; 
    });
    
    $scope.getStorePrice = function(storeId, item) {
        for(var i = 0; i < item.stores.length; i++) {
            if(item.stores[i].id == storeId) {
                return item.stores[i].price;
            } 
        }
        return "N/A";
    };
    
}]);

pricebookApp.controller('storesController', ['$scope', '$location', function($scope, $location) {
    
    
    
}]);

pricebookApp.controller('itemEditController', ['$scope', '$location', function($scope, $location) {
    
    
    
}]);

pricebookApp.controller('storeEditController', ['$scope', '$location', function($scope, $location) {
    
    
    
}]);