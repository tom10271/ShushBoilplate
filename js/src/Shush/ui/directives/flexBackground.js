(function (define) {
    "use strict";
    define([''], function () {
        var flexBackground = function ($window) {
            return {
                scope: {},
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var w = angular.element($window);
                    scope.bgImgSrc = attrs.flexBackgroundSrc;

                    var image = new Image();
                    image.onload = function () {
                        scope.fileLoaded(this);
                    };
                    image.src = scope.bgImgSrc;


                    scope.getWindowDimensions = function () {
                        scope.windowHeight = w.height();
                        scope.windowWidth = w.width();
                        scope.winHWRatio = scope.windowWidth / scope.windowHeight;
                        return { 'h': w.height(), 'w': w.width() };
                    };

                    scope.updateBGImgCSS = function () {
                        if (scope.imgHWRatio > scope.winHWRatio) {
                            var resizedW = scope.imgHWRatio * scope.windowHeight;
                            element.css({
                                'position': 'fixed',
                                'top': 0,
                                'left': 0,
                                'z-index': -9999,
                                'width': scope.windowWidth + 'px',
                                'min-height': '100%',
                                'background-image': 'url(\'' + scope.bgImgSrc + '\')',
                                'background-repeat': 'no-repeat',
                                'background-size': 'auto ' + scope.windowHeight + 'px',
                                'background-position': '-' + (resizedW - scope.windowWidth) / 2 + 'px 0'});
                        } else {
                            var resizedH = scope.windowWidth / scope.imgHWRatio;
                            element.css({
                                'position': 'fixed',
                                'top': 0,
                                'left': 0,
                                'z-index': -9999,
                                'width': scope.windowWidth + 'px',
                                'min-height': '100%',
                                'background-image': 'url(\'' + scope.bgImgSrc + '\')',
                                'background-repeat': 'no-repeat',
                                'background-size': scope.windowWidth + 'px',
                                'background-position': '0 -' + (resizedH - scope.windowHeight) / 2 + 'px'});
                        }
                    }

                    scope.fileLoaded = function(img){
                        if (img != null) {
                            scope.imgH = img.height;
                            scope.imgW = img.width;
                            scope.imgHWRatio = scope.imgW / scope.imgH;
                            scope.$watch(scope.getWindowDimensions, function (newValue) {
                                scope.updateBGImgCSS();
                            }, true);

                            scope.getWindowDimensions();
                            scope.updateBGImgCSS();

                            if(!$("html").hasClass('mobileDevice')){
                                w.bind('resize', function () {
                                    scope.$apply();
                                });
                            }
                        } else {
                            console.warn("Background Image is not found. Scope: ");
                            console.warn(scope);
                        }
                    }
                }

            };
        };
        return [ "$window", flexBackground ];
    });
}(define));




//            data-shush-background-setting="cover"
//            scope.mode = attrs.shushBackgroundSetting;
//            'background-position': 'center',
//            'background-size': 'contain',
//            'background-repeat': 'no-repeat',
//
//            var queue = new createjs.LoadQueue(true);
//            queue.addEventListener("complete", fileLoaded);
//            queue.loadFile({id: "BGImg", src: scope.bgImgSrc});
//            queue.load();