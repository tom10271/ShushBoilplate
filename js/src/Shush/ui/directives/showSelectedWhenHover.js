(function (define) {
    "use strict";

    define([''], function () {

        var showSelectedWhenHover = function ($animate) {
            return {
                scope: '@',
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var data = scope.$eval(attrs.showSelectedWhenHover);

                    scope.selector = data.show;
                    scope.overAnimation = data.over || "l2r";
                    scope.outAnimation = data.out || "l2r";

                    element.hover(function () {
                        element.css({"width": "auto"});
                        $animate.addClass($("nav"), scope.overAnimation);
                    }, function () {
                        element.css({"width": "50px"});
                        $animate.removeClass($(scope.selector), scope.outAnimation);
                    });
                }

            };
        };
        return [ "$animate", showSelectedWhenHover ];
    });
}(define));