pricebookApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'  
    })
    .when('/stores', {
        templateUrl: 'pages/stores.html',
        controller: 'storesController'  
    })
    .when('/item/:itemId', {
        templateUrl: 'pages/editItem.html',
        controller: 'itemEditController'  
    })
    .when('/store/:storeId', {
        templateUrl: 'pages/EditStore.html',
        controller: 'storeEditController'   
    })
    
});