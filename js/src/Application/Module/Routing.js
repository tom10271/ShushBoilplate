(function (define) {
    define([''], function () {
        var RoutingConf = function ($sceDelegateProvider, $routeProvider, $locationProvider, RestangularProvider) {
        //Template base URL
            var baseURL = baseDir + '/js/src/Application/';

        //Resouce white list
            $sceDelegateProvider.resourceUrlWhitelist([
                'self', baseURL + '**'
            ]);

        //Disable HTNL5 mode for routing -> use/#someRouting instead
            if($("html").hasClass("ie8") || $("html").hasClass("ie9"))
                $locationProvider.html5Mode(false);
            else
                $locationProvider.html5Mode(true);

        //Routing
            $routeProvider
                .when(baseDir + '/', {controller: 'TestingController', templateUrl: baseURL + 'Module/templates/testing.tpl.html'})

                .otherwise({
                    redirectTo: baseDir + '/'
                });

        //RESTful API base URL
            RestangularProvider.setBaseUrl(baseDir + '/api');
        }
        return [ "$sceDelegateProvider", "$routeProvider", "$locationProvider", "RestangularProvider", RoutingConf ];
    });
})(define);