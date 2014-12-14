(function (define) {
    "use strict";
    define([
        'BaseClass/BaseController',
        'BaseClass/Component'
    ], function (BaseController, Component) {
        var Directive = BaseController.extend({
            $element: null,
            $attr: null,
            init: function (DI, scope, restrict, link) {
                return {
                    $inject: DI
                    scope: scope,
                    restrict: restrict,
                    link: function ($scope, $element, $attr) {
                        this._super(scope);
                        this.$element = $element;
                        this.$attr = $attr;
                        link();
                    }.bind(this)
                }
            },
            defineScope: function () {
            }
        });

        var AnimateWhenHover = Directive.extend({
            $animate: null;
            init: function ($animate) {
                this.$animate = $animate;
                return this._super('@', 'A');
            }

            defineScope: function () {
                var data = this.$scope.$eval(attrs.showSelectedWhenHover);

                this.$scope.selector = data.show;
                this.$scope.overAnimation = data.over || "l2r";
                this.$scope.outAnimation = data.out || "l2r";

                this.$element.hover(function () {
                    this.$element.css({"width": "auto"});
                    this.$animate.addClass($("nav"), this.$scope.overAnimation);
                }, function () {
                    this.$element.css({"width": "50px"});
                    this.$animate.removeClass($(this.$scope.selector), this.$scope.outAnimation);
                });
            }
        });
        AnimateWhenHover.$inject = ["$animate"];

        return new Component("animateWhenHover", AnimateWhenHover);
});
}
(define)
)
;