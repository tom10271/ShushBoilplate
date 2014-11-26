(function (define) {
    "use strict";
    define([''], function () {
        var directive = function (SharedAppData) {
            return {
                scope: '&', restrict: 'ACE',
                link: function (scope, element, attrs) {
                    scope.data = SharedAppData.data.val;

                    scope.$watch(function () {
                        return SharedAppData.data.val;
                    }, function (val) {
                        scope.data = SharedAppData.data.val;
                    });
                },
                template: "{{ data }}"
            };
        };
        return [ "SharedAppData", directive ];
    });
}(define));