'use strict';
pricebookApp.directive("itemDisplay", function() {
   return {
       restrict: "E",
       templateUrl: 'views/directives/itemDisplay.html',
       replace: true,
       transclude: true,
       controller: 'itemsCtrl',
       scope: {
           itemName: "=",
           itemUnit: "=",
           itemAmount: "=",
           itemStores: "=",
           item: "=",
           stores: "=",
           getStorePrice: "=",
           searchStore: "=",
           getLowestPriceStoreId: "=",
           getStoreName: "=",
           showAllStores: "=",
           toggleShowAllStores: "&",
           showAllStoresIcon: '='
       }
   };
    
});

pricebookApp.directive("storeDisplay", function() {
    return {
        restrict: "E",
        templateUrl: 'views/directives/storeDisplay.html',
        replace: true,
        transclude: true,
        scope: {
            storeName: "=",
            storeId: "=",
            item: "=",
            stores: "=",
            getStorePrice: "&",
            getLowestPriceStoreId: "&",
            getStoreName: "&"
            
        }
    };
});

pricebookApp.directive("storesPageStoreDisplay", function() {
   return {
       restrict: "E",
       templateUrl: 'views/directives/storesPageStoreDisplay.html',
       replace: true,
       transclude: true,
       scope: {
           stores: "=",
           storeName: "=",
           storeId: "="
       }
   }; 
});
