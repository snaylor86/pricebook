pricebookApp.controller('homeCtrl', ['$scope', '$location', '$animate', 'itemService', 'storeService', function ($scope, $location, $animate, itemService, storeService) {

  var itemPromise = itemService.getItems();

  itemPromise.then(function (itemData) {
    $scope.items = itemData;
  });

  var storePromise = storeService.getStores();

  storePromise.then(function (storeData) {
    $scope.stores = storeData;
  });

  $scope.searchItem = itemService.searchItem;

  $scope.$watch('searchItem', function () {
    itemService.searchItem = $scope.searchItem;
  });

  $scope.searchStore = storeService.searchStore;

  $scope.$watch('searchStore', function () {
    storeService.searchStore = $scope.searchStore;
  });

  $scope.reverseSortState = false;

  $scope.reverseButtonText = function () {
    if ($scope.reverseSortState) {
      return "Z-A";
    } else {
      return "A-Z";
    }
  };

  $scope.reverseButtonText();

  $scope.reverseSort = function () {
    if ($scope.reverseSortState) {
      $scope.reverseSortState = false;
      $scope.reverseButtonText();
    } else {
      $scope.reverseSortState = true;
      $scope.reverseButtonText();
    }
  };

  $scope.getStorePrice = function (storeId, item) {
    for (var i = 0; i < item.stores.length; i++) {
      if (item.stores[i].id == storeId) {
        return item.stores[i].price;
      }
    }
    return "N/A";
  };

  $scope.getLowestPriceStoreId = function (item) {
    var lowestPriceStoreId = item.stores[0].id;
    var lowestPrice = item.stores[0].price;
    for (var i = 0; i < item.stores.length; i++) {
      if (item.stores[i].price < lowestPrice) {
        lowestPrice = item.stores[i].price;
        lowestPriceStoreId = item.stores[i].id;
      }
    }
    return lowestPriceStoreId;
  };

  $scope.getStoreName = function (storeId, stores) {
    for (var i = 0; i < stores.length; i++) {
      if (stores[i].id == storeId) {
        return stores[i].name;
      }
    }
    return "N/A";
  }


  // test method for karma testing framework
  $scope.sayHello = function () {
    return "hello";
  };

}]);

pricebookApp.controller('itemsCtrl', ['$scope', '$animate', function ($scope, $animate) {
  $scope.showAllStores = false;

  $scope.toggleShowAllStores = function () {
    $scope.showAllStores = !$scope.showAllStores;
  }
}]);

pricebookApp.controller('storesCtrl', ['$scope', '$location', 'storeService', function ($scope, $location, storeService) {
  var storePromise = storeService.getStores();

  storePromise.then(function (storeData) {
    $scope.stores = storeData;
  });

  $scope.reverseSortState = false;

  $scope.reverseButtonText = function () {
    if ($scope.reverseSortState) {
      return "Z-A";
    } else {
      return "A-Z";
    }
  };

  $scope.reverseButtonText();

  $scope.searchStore = storeService.searchStore;

  $scope.$watch('searchStore', function () {
    storeService.searchStore = $scope.searchStore;
  });

  $scope.reverseSortState = false;

  $scope.reverseButtonText = function () {
    if ($scope.reverseSortState) {
      return "Z-A";
    } else {
      return "A-Z";
    }
  };

  $scope.reverseButtonText();

  $scope.reverseSort = function () {
    if ($scope.reverseSortState) {
      $scope.reverseSortState = false;
      $scope.reverseButtonText();
    } else {
      $scope.reverseSortState = true;
      $scope.reverseButtonText();
    }
  };
}]);

pricebookApp.controller('itemEditCtrl', ['$scope', '$location', function ($scope, $location) {


}]);

pricebookApp.controller('storeEditCtrl', ['$scope', '$location', function ($scope, $location) {


}]);
