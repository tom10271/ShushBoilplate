(function (define) {
    define([''], function () {
        var animateWhen = function ($animate) {
            return function (scope, element, attrs) {
                attrs.$observe('animateWhen', function (value) {
                    if (value == "true") {
                        $animate.addClass(element, attrs.animateClass);
                    } else {
                        $animate.removeClass(element, attrs.animateClass);
                    }
                });
            }
        };

        return [ "$animate", animateWhen ];
    });
}(define));