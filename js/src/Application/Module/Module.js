(function (define, angular) {
    "use strict";

    var dependencies = [
        '/services/Notification',
        '/services/SharedAppData',
        '/controllers/HeadController',
        '/controllers/TestingController',
        '/directives/TestingDirective',
        '/Routing'
    ];

    dependencies.insertStringBefore('Application/Module');

    define(dependencies,
        function (Notification, SharedAppData, HeadController, TestingController, TestingDirective, Routing) {
            var moduleName = "3382.page", _services = [], _controllers = [], _directives = [];

            var _module = angular.module(moduleName, ["ngAnimate", 'ui.router'])
                .filter('array', function () {
                    return function (items) {
                        var filtered = [];
                        angular.forEach(items, function (item) {
                            filtered.push(item);
                        });
                        return filtered;
                    };
                })
                .config(Routing);

            _services.push(Notification, SharedAppData);
            _controllers.push(HeadController);
            _directives.push(TestingDirective);

            angular.addFactories(_module, _services)
                .addControllers(_module, _controllers)
                .addDirectives(_module, _directives);

            return moduleName;
        });
}(define, angular));