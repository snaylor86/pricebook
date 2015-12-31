'use strict';
pricebookApp.service('itemService', ['$http', '$q', function($http, $q) {

    this.searchItem = "";

    var itemsDefer = $q.defer();

    this.getItems = function() {

        $http.get('data/items.json').success(function(itemsData) {
            itemsDefer.resolve(itemsData);
        });

        return itemsDefer.promise;
    };
}]);

pricebookApp.service('storeService', ['$http', '$q', function($http, $q) {

    this.searchStore = "";

    var storeDefer = $q.defer();

    this.getStores = function() {

        $http.get('data/stores.json').success(function(storeData) {
            storeDefer.resolve(storeData);
        });

        return storeDefer.promise;
    };

}]);
