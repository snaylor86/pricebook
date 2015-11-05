'use strict';
pricebookApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'  
    })
    .when('/stores', {
        templateUrl: 'views/stores.html',
        controller: 'storesCtrl'  
    })
    .when('/item/:itemId', {
        templateUrl: 'views/editItem.html',
        controller: 'itemEditCtrl'  
    })
    .when('/store/:storeId', {
        templateUrl: 'views/EditStore.html',
        controller: 'storeEditCtrl'   
    })
    
});