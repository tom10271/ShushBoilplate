(function (define) {
    define([
        'BaseClass/BaseController'
    ], function (BaseController) {
        var BaseDirective = BaseController.extend({
            $element: null,
            $attr: null,
            init: function (scope, element, attr) {
                this.$element = element;
                this.$attr = attr;
                this._super(scope);
            }
        });

        return BaseDirective;
    });
}(define));