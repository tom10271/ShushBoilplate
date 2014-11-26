(function (define) {
    define([''], function () {
        var Component = Class.extend({
            _name: '',
            _function: null,
            init: function (_name, _function) {
                this._name = _name;
                this._function = _function;
            }
        });

        return Component;
});
}(define));