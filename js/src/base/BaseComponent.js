var BaseController = Class.extend({
    $scope: null,
    init: function (_name, _function, $scope) {
        this._super(_name, _function);
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

var ExtendedCtrl = BaseController.extend({
    Restangular: null,
    SharedAppData: null,

    init: function ($scope, Restangular, SharedAppData) {
        this._super($scope);
        this.Restangular = Restangular;
        this.SharedAppData = SharedAppData;
    },
    defineScope: function(){
        this._super();
        if (!$("html").hasClass('ie8')) {
            $scope.updateTitle = function (baseURL, navs) {
                if (typeof navs != 'undefined') {
                    var path = window.location.pathname;
                    for (var i = 0; i < navs.length; i++) {
                        var item = navs[i];
                        if (path == baseURL + item.href) {
                            $scope.title = item.title;
                        }
                        if (typeof item.subNav != 'undefined' || item.subNav != null) {
                            $scope.updateTitle(baseURL + item.href, item.subNav);
                        }
                    }
                }
            }

            $scope.navs = {};
            $scope.baseURL = SharedAppData.baseURL;
            $scope.title = "";

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

            $rootScope.$on('$viewContentLoaded', function (event) {
                $scope.updateTitle(baseDir, $scope.navs);
            });
            $scope.updateTitle(baseDir, $scope.navs);
        } else {
            //document.title = 'Dr. Howard Leung Personal Page';
        }
    }
});

ExtendedCtrl.$inject = ["$scope", "Restangular", "SharedAppData"];

var BaseComponent = Class.extend({
    _name: '',
    _function: null,
    init: function (_name, _function) {
        this._name = _name;
        this._function = _function;
    }
});

return BaseComponent("ExtendedCtrl", new ExtendedCtrl());