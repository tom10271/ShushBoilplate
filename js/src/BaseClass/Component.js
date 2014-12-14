(function (define) {
    define([''], function () {
        var Component = Class.extend({
            _name: '',
            _component: null,
            init: function (_name, _component) {
                this._name = _name;
                this._component = _component;
            }
        });

        return Component;
});
}(define));