'use strict';

describe('homeCtrl test', function () {
    
    beforeEach(module('pricebookApp'));
    
    var ctrl, scope;
        
       beforeEach(inject(function($controller, $rootScope) {
        
            scope = $rootScope.$new();

            ctrl = $controller('homeCtrl', {
                $scope: scope,
            }); 
        }));
    
    it('should say hello', function () {

        expect(scope.sayHello()).toEqual("hello");
    });
});