    (function (define) {
        "use strict";
        define([
            'BaseClass/BaseDirective',
            'BaseClass/Component'
        ], function (BaseDirective, Component) {
            var AnimateWhenHover = BaseDirective.extend({
                $animate: null,
                init: function ($animate, scope, element, attr) {
                    this.$animate = $animate;
                    this._super(scope, element, attr);
                },
                defineScope: function () {
                    var data = this.$scope.$eval(this.$attr.animateWhenHover);

                    this.$scope.selector = data.show;
                    this.$scope.overAnimation = data.over || "l2r";
                    this.$scope.outAnimation = data.out || "l2r";
                },
                defineListeners: function () {
                    this.$element.hover(this.in.bind(this), this.out.bind(this));
                },
                in: function () {
                    this.$element.css({"width": "auto"});
                    this.$animate.addClass($(this.$scope.selector), this.$scope.overAnimation);
                },
                out: function () {
                    this.$element.css({"width": "50px"});
                    this.$animate.removeClass($(this.$scope.selector), this.$scope.outAnimation);
                }
            });

            return new Component("animateWhenHover", ["$animate", function ($animate) {
                return {
                    scope: '@',
                    restrict: 'A',
                    link: function (scope, element, attr) {
                        new AnimateWhenHover($animate, scope, element, attr)
                    }
                }
            }
            ]);
        });
    }
    (define));