(function (define) {
    define([
            'BaseClass/BaseController',
            'BaseClass/Component'
        ],
        function (BaseController, Component) {
            var ExtendedCtrl = BaseController.extend({
                Restangular: null,
                SharedAppData: null,

                init: function ($rootScope, $scope, Restangular, SharedAppData) {
                    this.Restangular = Restangular;
                    this.SharedAppData = SharedAppData;
                    this.$rootScope = $rootScope;
                    this._super($scope);
                },
                defineScope: function () {
                    this._super();
                    if (!$("html").hasClass('ie8')) {

                        this.$scope.navs = {};
                        this.$scope.baseURL = this.SharedAppData.baseURL;
                        this.$scope.title = "testest";

                        this.Restangular.one('nav.json').getList().then(this.fetchResult.bind(this));

                        this.$rootScope.$on('$viewContentLoaded', function (event) {
                            this.updateTitle(baseDir, this.$scope.navs);
                        });
                        this.updateTitle(baseDir, this.$scope.navs);
                    } else {
                        //document.title = 'Dr. Howard Leung Personal Page';
                    }
                },
                fetchResult: function (result) {
                    this.$scope.navs = [];
                    for (var i = 0; i < result.length; i++) {
                        this.$scope.navs[i] = {};
                        this.$scope.navs[i].title = result[i].title;
                        this.$scope.navs[i].href = result[i].href;
                        this.$scope.navs[i].subNav = result[i].subNav;
                    }
                    this.updateTitle(baseDir, this.$scope.navs);
                },
                updateTitle: function (baseURL, navs) {
                    if (typeof navs != 'undefined') {
                        var path = window.location.pathname;
                        for (var i = 0; i < navs.length; i++) {
                            var item = navs[i];
                            if (path == baseURL + item.href) {
                                this.$scope.title = item.title;
                            }
                            if (typeof item.subNav != 'undefined' || item.subNav != null) {
                                this.updateTitle(baseURL + item.href, item.subNav);
                            }
                        }
                    }
                }
            });
            ExtendedCtrl.$inject = ["$rootScope", "$scope", "Restangular", "SharedAppData"];

            return new Component("HeadController", ExtendedCtrl);
        });
}(define));