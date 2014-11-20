(function (define) {
    define([''], function () {
        var NavigationController = function ($scope, Restangular, SharedAppData) {
            Restangular.one('nav.json').getList().then(function(result){
                $scope.navs = result;
            });

            $scope.navs = {};
            $scope.baseURL = SharedAppData.baseURL;
        };

        return [ "$scope", "Restangular", "SharedAppData", NavigationController ];
    });
}(define));