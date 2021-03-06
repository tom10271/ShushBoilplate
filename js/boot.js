(function (head) {
    "use strict";

    window.baseDir = '/CityU/ShushBoilplate';

    head.js(
        { classjs: baseDir + "/js/vendor/js-utility/class.js"},
        { namespacejs: baseDir + "/js/vendor/js-utility/namespace.js"},
        { eventDispatcher: baseDir + "/js/vendor/js-utility/event-dispatcher.js"},
        { jQuery: baseDir + "/js/vendor/jquery/jquery-2.0.3.min.js"},
        { jQueryUi: baseDir + "/js/vendor/jquery/jquery-ui-1.10.4.min.js"},
        { require: baseDir + "/js/vendor/requirejs/require-2.1.10.min.js"},
        { underscore: baseDir + "/js/vendor/underscore/underscore-1.5.2.min.js.js"},
        { angular: baseDir + "/js/vendor/angular/angular.min.js"},
        { ngResource: baseDir + "/js/vendor/angular/angular-resource.1.2.6.min.js"},
        { ngRoute: baseDir + "/js/vendor/angular/angular-route-1.2.6.min.js"},
        { ngSanitize: baseDir + "/js/vendor/angular/angular-sanitize-1.2.6.min.js"},
        { ngAnimate: baseDir + "/js/vendor/angular/angular-animate-1.2.6.min.js"},
        { ngBlocks: baseDir + "/js/vendor/angular/angular-blocks.min.js"},
        { ngUIRouter: baseDir + "/js/vendor/angular/angular-ui-router-0.2.11.min.js"},
        { ngShorthand: baseDir + "/js/vendor/angular/angular-shorthand-loading.js"},
        { restangular: baseDir + "/js/vendor/restangular/restangular.js"},
        { modernizr: baseDir + "/js/vendor/modernizr/modernizr.custom.41010.js"},
        { preloadjs: baseDir + "/js/vendor/preloadjs/preloadjs-0.4.0.min.js"},
        { TweenMax: baseDir + "/js/vendor/gsap/TweenMax-1.11.4.min.js"},
        { annyang: baseDir + "/js/vendor/annyang/annyang.js"},
        { jQ_gsap: baseDir + "/js/vendor/gsap/jquery.gsap-1.11.4.min.js"},
        { draggable: baseDir + "/js/vendor/gsap/draggable-1.11.4-min.js"},
        { browserDetection: baseDir + "/js/vendor/shush/shush.browser-detection.js"},
        { jsExtend: baseDir + "/js/vendor/shush/shush-javascript-extend.js"},
        { RequireJsConfig: baseDir + "/js/src/requireJsConfig.js"}
    )
        .ready("ALL", function () {
            RequireJsConfig.init();
        });
}(window.head));