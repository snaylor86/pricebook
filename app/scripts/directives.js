'use strict';
pricebookApp.directive("itemDisplay", function() {
   return {
       restrict: "E",
       templateUrl: 'views/directives/itemDisplay.html',
       replace: true,
       scope: {
           itemName : "=",
           itemUnit : "=",
           itemAmount : "=",
           itemStores : "="
       }
   };
    
});

pricebookApp.directive("storeDisplay", function() {
    return {
        restrict: "E",
        templateUrl: 'views/directives/storeDisplay.html',
        replace: true,
        scope: {
            storeName : "=",
            storeId : "=",
            getStorePrice : "&"
        }
    };
});