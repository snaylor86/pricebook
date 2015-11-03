pricebookApp.service('itemService', ['$http', '$q', function($http, $q) {
   
    this.searchItem = "";
    
    var itemDefer = $q.defer();
    
    this.getItems = function() {

        $http.get('data/items.json').success(function(itemData) {
            itemDefer.resolve(itemData);
        });
        
        return itemDefer.promise;
    };
    
}]);

pricebookApp.service('storeService', ['$http', '$q', function($http, $q) {
   
    var storeDefer = $q.defer();
    
    this.getStores = function() {
        
        $http.get('data/stores.json').success(function(storeData) {
            storeDefer.resolve(storeData);
        });
        
        return storeDefer.promise; 
    };

}]);