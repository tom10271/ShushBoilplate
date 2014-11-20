(function (define) {
    "use strict";
    define([''], function () {
        var setToWinH = function ($window) {
            return {
                scope: '@', restrict: 'A',
                link: function (scope, element, attrs) {
                    var w = angular.element($window);
                    scope.offset = attrs.setToWinH || 0;
                    if (!$('html').hasClass('mobileDevice')) {
                        w.bind('resize', function () {
                            scope.getWindowDimensions();
                            scope.$apply();
                        });
                    }
                    scope.getWindowDimensions = function () {
                        scope.windowHeight = w.height();
                        scope.windowWidth = w.width();
                        scope.winHWRatio = scope.windowWidth / scope.windowHeight;
                        return { 'h': w.height(), 'w': w.width() };
                    };
                    scope.updateCSS = function () {
                        element.css({'height': parseInt(w.height()) + parseInt(scope.offset) + 'px'});
                    }
                    scope.$watch(scope.getWindowDimensions, function (newValue) {
                        scope.updateCSS();
                    }, true);
                }
            };
        };
        return [ "$window", setToWinH ];
    });
}(define));