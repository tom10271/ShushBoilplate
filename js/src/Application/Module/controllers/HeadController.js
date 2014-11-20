(function (define) {
    define([''], function () {
        var HeadController = function ($rootScope, $scope, Restangular, SharedAppData) {
            if (!$("html").hasClass('ie8')) {
                Restangular.one('nav.json').getList().then(function (result) {
                    $scope.navs = [];
                    for (var i = 0; i < result.length; i++) {
                        $scope.navs[i] = {};
                        $scope.navs[i].title = result[i].title;
                        $scope.navs[i].href = result[i].href;
                        $scope.navs[i].subNav = result[i].subNav;
                    }
                    $scope.updateTitle(baseDir, $scope.navs);
                });
                $scope.updateTitle = function (baseURL, navs) {
                    if (typeof navs != 'undefined') {
                        var path = window.location.pathname;
                        for (var i = 0; i < navs.length; i++) {
                            var item = navs[i];
                            if (path == baseURL + item.href) {
                                $scope.curLocation = item.title;
                            }
                            if (typeof item.subNav != 'undefined' || item.subNav != null) {
                                $scope.updateTitle(baseURL + item.href, item.subNav);
                            }
                        }
                    }
                }
                $scope.navs = {};
                $scope.baseURL = SharedAppData.baseURL;
                $scope.curLocation = "";
                $scope.updateTitle(baseDir, $scope.navs);
                $rootScope.$on('$viewContentLoaded', function (event) {
                    $scope.updateTitle(baseDir, $scope.navs);
                });
            } else {
                //document.title = 'Dr. Howard Leung Personal Page';
            }
        };

        return [ "$rootScope", "$scope", "Restangular", "SharedAppData", HeadController ];
    });
}(define));