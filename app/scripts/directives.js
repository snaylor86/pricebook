'use strict';
pricebookApp.directive("itemDisplay", function() {
   return {
       restrict: "E",
       templateUrl: 'views/directives/itemDisplay.html',
       replace: true,
       transclude: true,
       scope: {
           itemName: "=",
           itemUnit: "=",
           itemAmount: "=",
           itemStores: "=",
           item: "=",
           stores: "=",
           getStorePrice: "="
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
            getStorePrice: "&"
            
        }
    };
});