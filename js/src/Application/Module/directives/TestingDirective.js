(function (define) {
    "use strict";
    define([''], function () {
        var directive = function (SharedAppData) {
            return {
                scope: '&', restrict: 'ACE',
                link: function (scope, element, attrs) {
                    scope.data = SharedAppData.data.val;
                    console.log(SharedAppData.data);

                    scope.$watch(function(){return SharedAppData.data.val;}, function(val) {
                        scope.data = SharedAppData.data.val;

                        console.log(SharedAppData.data);
                    });
                },
                template: "{{ data }}"
            };
        };
        return [ "SharedAppData", directive ];
    });
}(define));