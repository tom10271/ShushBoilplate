(function (define, angular) {
    "use strict";

    define([
        'Application/Module/service/SharedAppData',
        'Application/Module/services/SharedAppData',
        'Application/Module/controllers/HeadController',
        'Application/Module/controllers/TestingController',
        'Application/Module/directives/TestingDirective',
    ],
        function (SharedAppData, HeadController, TestingController, TestingDirective) {
            var moduleName = "3382.page";

            angular.module(moduleName, ["ngAnimate"])
                .factory("SharedAppData", SharedAppData)
                .controller("HeadController", HeadController)
                .controller("TestingController", TestingController)
                .directive("testingDirective", TestingDirective)
                .filter('array', function() {
                    return function(items) {
                        var filtered = [];
                        angular.forEach(items, function(item) {
                            filtered.push(item);
                        });
                        return filtered;
                    };
                });

            return moduleName;
    });
}(define, angular));