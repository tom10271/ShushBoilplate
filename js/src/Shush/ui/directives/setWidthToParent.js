(function (define) {
    "use strict";

    define([''], function () {

        var setWidthToParent = function ($window) {
            return {
                scope: '@',
                restrict: 'A',
                link: function (scope, element, attrs) {
                    scope.offset = attrs.setWidthToParent;

                    var w = angular.element($window);
                    w.bind('resize', function () {
                        scope.$apply();
                    });

                    console.log(element.parent().width());

                    scope.$watch(element.parent().width(), function (newValue) {
                        element.width(newValue+scope.offset);

                        console.log(element.width());
                    }, true);
                }

            };
        };
        return [ "$window", setWidthToParent ];
    });
}(define));