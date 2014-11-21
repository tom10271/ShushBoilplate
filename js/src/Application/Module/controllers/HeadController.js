
(function (define) {
    define([''], function () {
        var $injector = angular.injector();

        var BaseController = Class.extend({
            $scope: null,
            init: function ($scope) {
                console.log($scope);
                this.$scope = $scope;
                this.defineListeners();
                this.defineScope();
            },
            defineListeners: function () {
                this.$scope.$on('$destroy', this.destroy.bind(this));
            },
            defineScope: function () {
            },
            destroy: function (event) {
            }
        });

//        BaseController.$inject = ['$scope'];
//        $injector.invoke(BaseController);

        var ExtendedCtrl = BaseController.extend({
            Restangular: null,
            SharedAppData: null,

        init: function ($rootScope, $scope, Restangular, SharedAppData) {
            this.Restangular = Restangular;
            this.SharedAppData = SharedAppData;
            this.$rootScope = $rootScope;
            this._super($scope);
        },
        defineScope: function(){
            this._super();
            if (!$("html").hasClass('ie8')) {
                this.$scope.updateTitle = function (baseURL, navs) {
                    if (typeof navs != 'undefined') {
                        var path = window.location.pathname;
                        for (var i = 0; i < navs.length; i++) {
                            var item = navs[i];
                            if (path == baseURL + item.href) {
                                this.$scope.title = item.title;
                            }
                            if (typeof item.subNav != 'undefined' || item.subNav != null) {
                                this.$scope.updateTitle(baseURL + item.href, item.subNav);
                            }
                        }
                    }
                }

                this.$scope.navs = {};
                this.$scope.baseURL = this.SharedAppData.baseURL;
                this.$scope.title = "testest";

                console.log(this.$scope);

                this.Restangular.one('nav.json').getList().then(function (result) {
                    console.log(this);
                    this.$scope.navs = [];
                    for (var i = 0; i < result.length; i++) {
                        this.$scope.navs[i] = {};
                        this.$scope.navs[i].title = result[i].title;
                        this.$scope.navs[i].href = result[i].href;
                        this.$scope.navs[i].subNav = result[i].subNav;
                    }
                    this.$scope.updateTitle(baseDir, this.$scope.navs);
                });

                this.$rootScope.$on('$viewContentLoaded', function (event) {
                    this.$scope.updateTitle(baseDir, this.$scope.navs);
                });
                this.$scope.updateTitle(baseDir, this.$scope.navs);
            } else {
                //document.title = 'Dr. Howard Leung Personal Page';
            }
        }
    });


    ExtendedCtrl.$inject = ["$rootScope", "$scope", "Restangular", "SharedAppData"] ;

    var BaseComponent = Class.extend({
        _name: '',
        _function: null,
        init: function (_name, _function) {
            this._name = _name;
            this._function = _function;
        }
    });

    return new BaseComponent("HeadController", ExtendedCtrl);
    });
}(define));
/*
(function (define) {
    define([''], function () {
        var Ctrl = Class.extend({
            $scope: null,
            init: function(){

            },
            defineScope: function () {

                if (!$("html").hasClass('ie8')) {
                    this.$scope.updateTitle = function (baseURL, navs) {
                        if (typeof navs != 'undefined') {
                            var path = window.location.pathname;
                            for (var i = 0; i < navs.length; i++) {
                                var item = navs[i];
                                if (path == baseURL + item.href) {
                                    this.$scope.title = item.title;
                                }
                                if (typeof item.subNav != 'undefined' || item.subNav != null) {
                                    this.$scope.updateTitle(baseURL + item.href, item.subNav);
                                }
                            }
                        }
                    }

                    this.$scope.navs = {};
                    this.$scope.baseURL = SharedAppData.baseURL;
                    this.$scope.title = "";

                    Restangular.one('nav.json').getList().then(function (result) {
                        this.$scope.navs = [];
                        for (var i = 0; i < result.length; i++) {
                            this.$scope.navs[i] = {};
                            this.$scope.navs[i].title = result[i].title;
                            this.$scope.navs[i].href = result[i].href;
                            this.$scope.navs[i].subNav = result[i].subNav;
                        }
                        this.$scope.updateTitle(baseDir, this.$scope.navs);
                    });

                    $rootScope.$on('$viewContentLoaded', function (event) {
                        this.$scope.updateTitle(baseDir, this.$scope.navs);
                    });
                    this.$scope.updateTitle(baseDir, this.$scope.navs);
                } else {
                    //document.title = 'Dr. Howard Leung Personal Page';
                }
            },

            _name: 'HeadController',
            _function: ["$rootScope", "$scope", "Restangular", "SharedAppData", function ($rootScope, $scope, Restangular, SharedAppData) {
                this.$rootScope = $rootScope;
                this.$scope = $scope;
                this.Restangular = Restangular;
                this.SharedAppData = SharedAppData;
                console.log(this);
                this.defineScope();
            }]
        });

        var a = new Ctrl();
        console.log(a);
        return a;
    });
}(define));

*/