(function (define) {
    "use strict";
    define([''], function () {
        var setTopToSelectorH = function ($window) {
            return {
                scope: '@', restrict: 'A',
                link: function (scope, element, attrs) {
                    var selector = angular.element(attrs.setTopToSelectorH);
                    console.log(selector.outerHeight());
                    scope.offset = selector.height() || 0;
                    if (!$('html').hasClass('mobileDevice')) {
                        selector.bind('resize', function () {
                            scope.getSeletorDimensions();
                            scope.$apply();
                        });
                    }

                    scope.getSeletorDimensions = function () {
                        scope.selectorHeight = selector.height();
                        scope.selectorWidth = selector.width();
                        return { 'h': selector.height(), 'w': selector.width() };
                    };
                    
                    scope.updateCSS = function () {
                        element.css({'top': parseInt(selector.outerHeight())+ 'px'});
                    }
                    scope.$watch(scope.getSeletorDimensions, function (newValue) {
                        scope.updateCSS();
                    }, true);
                }
            };
        };
        return [ "$window", setTopToSelectorH ];
    });
}(define));