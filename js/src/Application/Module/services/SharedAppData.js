(function (define) {
    define([''], function () {
        var Service = EventDispatcher.extend({
            _name: 'SharedAppData',
            _component: function(){
                var a = {};
                a.baseURL = window.baseDir;
                a.data = {val: "asdasd"};
                return a;
            }
        });

        return new Service();
    });
}(define));