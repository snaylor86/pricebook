pricebookApp.directive("itemDisplay", function() {
   return {
       restrict: "E",
       templateUrl: 'directives/itemDisplay.html',
       replace: true,
       scope: {
           itemName : "=",
           itemUnit : "=",
           itemAmount : "=",
           itemStores : "="
       }
   }
    
});

pricebookApp.directive("storeDisplay", function() {
    return {
        restrict: "E",
        templateUrl: 'directives/storeDisplay.html',
        replace: true,
        scope: {
            storeName : "=",
            storeId : "=",
            getStorePrice : "&"
        }
    }
});