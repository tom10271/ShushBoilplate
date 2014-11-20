(function (define) {
    define([''], function () {
        var SettingController = function ($scope) {
            $scope.baseURL = baseDir;
        };

        return [ "$scope", SettingController ];
    });
}(define));