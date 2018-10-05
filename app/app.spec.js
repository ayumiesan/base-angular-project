'use strict';

describe('MyAppController', function() {

    beforeEach(module('myApp'));

    it('should see "Hello World !"', inject(function($controller) {
        var scope = {};
        var ctrl = $controller('MyAppController', {$scope: scope});

        expect(scope.title).toBe('Hello World !');
    }));
});
