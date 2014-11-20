(function (define) {
    define([''], function () {
        var RoutingConf = function ($sceDelegateProvider, $routeProvider, $locationProvider, RestangularProvider) {
            var baseURL = baseDir + '/js/src/Application/';
            console.log(baseDir);

            $sceDelegateProvider.resourceUrlWhitelist([
                'self', baseURL + '**'
            ]);

            if($("html").hasClass("ie8") || $("html").hasClass("ie9"))
                $locationProvider.html5Mode(false);
            else
                $locationProvider.html5Mode(true);

            $routeProvider
                .when(baseDir + '/', {controller: 'TestingController', templateUrl: baseURL + 'Module/templates/testing.tpl.html'})

                .otherwise({
                    redirectTo: baseDir + '/'
                });

            RestangularProvider.setBaseUrl(baseDir + '/api');
        }
        return [ "$sceDelegateProvider", "$routeProvider", "$locationProvider", "RestangularProvider", RoutingConf ];
    });
})(define);