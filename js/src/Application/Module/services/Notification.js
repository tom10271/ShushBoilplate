(function (define) {
    define([''], function () {
        var Service = EventDispatcher.extend({
            _name: 'Notification',
            _function: function(){
                this.notify = this.dispatchEvent;
            }
        });

        return new Service();
    });
}(define));