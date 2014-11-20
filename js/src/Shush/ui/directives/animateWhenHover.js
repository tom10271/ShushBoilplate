(function (define) {
    "use strict";

    define([''], function () {

        var animateWhenHover = function ($animate) {
            return {
                scope: '@',
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var data = scope.$eval(attrs.animateWhenHover);

                    scope.duration = data.duration;
                    scope.overAnimation = data.over || "";
                    scope.outAnimation = data.out || "";

                    element.hover(function () {
                        TweenMax.to(element, scope.duration, scope.overAnimation);
                    }, function () {
                        TweenMax.to(element, scope.duration, scope.outAnimation);
                    });
                }

            };
        };
        return [ "$animate", animateWhenHover ];
    });
}(define));