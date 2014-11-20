(function (define) {
    define([''], function () {
        var SharedAppData = function () {
            return {
                baseURL: window.baseDir,
                data: {val: "asdasd"}
            };
        };

        return [ SharedAppData ];
    });
}(define));