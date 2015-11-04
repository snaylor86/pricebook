'use strict';
pricebookApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'  
    })
    .when('/stores', {
        templateUrl: 'views/stores.html',
        controller: 'storesController'  
    })
    .when('/item/:itemId', {
        templateUrl: 'views/editItem.html',
        controller: 'itemEditController'  
    })
    .when('/store/:storeId', {
        templateUrl: 'views/EditStore.html',
        controller: 'storeEditController'   
    })
    
});