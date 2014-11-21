(function (define) {
    define([''], function () {
        var l2r = function () {
            return {
                enter: function(element, done){
                    TweenMax.to(element, .5, {opacity: 1, right: '0', onComplete: function(){done();}});
                },
                leave: function(element, done){
                    TweenMax.to(element, .5, {opacity: 0.65, right: -50+element.outerWidth()+'px', onComplete: function(){done();}});
                },
                addClass: function (element, className) {
                    TweenMax.to(element, .5, {opacity: 1, right: '0'});
                },
                removeClass: function (element, className) {
                    TweenMax.to(element, .5, {opacity: 0.65, right: -50+element.outerWidth()+'px'});
                }
            }
        };

        return [ l2r ];
    });
}(define));
