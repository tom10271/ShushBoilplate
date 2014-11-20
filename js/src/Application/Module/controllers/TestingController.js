(function (define) {
    define([''], function () {
        var controller = function ($rootScope, $scope, Restangular, SharedAppData) {
            $scope.data = SharedAppData.data.val;

            $scope.updateService = function() {
                SharedAppData.data.val = $scope.data;
                console.log(SharedAppData.data.val);
            };

            $scope.showService = function() {
                console.log(SharedAppData.data.val);
            };
        };

        return [ "$rootScope", "$scope", "Restangular", "SharedAppData", controller ];
    });
}(define));