(function (define) {
    define(['Application/Module/NavigationData'], function (NavigationData) {
        var RoutingConf = function ($sceDelegateProvider, $stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {
            //Template base URL
            var baseURL = baseDir + '/js/src/Application/';

            //Resouce white list
            $sceDelegateProvider.resourceUrlWhitelist([
                'self', baseURL + '**'
            ]);

            //Disable HTNL5 mode for routing -> use/#someRouting instead
            if ($("html").hasClass("ie8") || $("html").hasClass("ie9"))
                $locationProvider.html5Mode(false);
            else
                $locationProvider.html5Mode(true);

            //Routing
            function registerNavigationData($stateProvider, nav) {
                $stateProvider.state(nav.state, {
                    url: nav.data.url,
                    templateURL: baseURL + 'templates/' + nav.data.templateURL + '.tpl.html',
                    controller: nav.data.controller
                });

                for (var i = 0; i < nav.child.length; i++) {
                    registerNavigationData($stateProvider, nav.child[i]);
                }
            }

            for (var i = 0; i < NavigationData.length; i++) {
                registerNavigationData($stateProvider, NavigationData[i]);
            }

            $urlRouterProvider.otherwise(baseDir+'/');

            //RESTful API base URL
            RestangularProvider.setBaseUrl(baseDir + '/api');
        }
        return [ "$sceDelegateProvider", "$stateProvider", "$urlRouterProvider", "$locationProvider", "RestangularProvider", RoutingConf ];
    });
})(define);


/*
 $routeProvider
 .when(baseDir + '/', {controller: 'TestingController', templateUrl: baseURL + 'Module/templates/testing.tpl.html'})

 .otherwise({
 redirectTo: baseDir + '/'
 });
 */