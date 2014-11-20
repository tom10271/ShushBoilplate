(function (define) {
    define([''], function () {
        var showExpand = function () {
            return {
                enter: function(element, done){
                    if($("html").hasClass('ie8')){
                        done();
                    } else {
                        TweenMax.to(element, .4, {opacity: 1, top: '15pt', height: 'auto', onComplete: function(){done();}});
                    }
                },
                leave: function(element, done){
                    if($("html").hasClass('ie8')){
                        done();
                    } else {
                        TweenMax.to(element, .4, {opacity: 0, top: '-45pt', height: '0', onComplete: function(){done();}});
                    }
                },
                addClass: function (element, className) {
                    TweenMax.to(element, .4, {opacity: 1, top: '15pt', height: 'auto'});
                },
                removeClass: function (element, className) {
                    TweenMax.to(element, .4, {opacity: 0, top: '-45pt', height: '0'});
                }
            }
        };

        return [ showExpand ];
    });
}(define));