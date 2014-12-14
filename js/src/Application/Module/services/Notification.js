(function (define) {
    define([''], function () {
        var Service = EventDispatcher.extend({
            _name: 'Notification',
            _component: function(){
                this.notify = this.dispatchEvent;
            }
        });

        return new Service();
    });
}(define));