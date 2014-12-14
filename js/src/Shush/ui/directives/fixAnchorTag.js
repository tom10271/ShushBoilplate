(function (define) {
    "use strict";
    define([''], function () {
        var fixAnchorTag = function ($location) {
            return {
                scope: {}, restrict: 'A', link: function (scope, element, attrs) {
                    element.hover(function () {
                        element.css("cursor", "pointer");
                    })
                        .click(function () {
                            $(".current_ancestor").removeClass("current_ancestor");
                            $(this).find(">section.item").addClass("current_ancestor");
                            $(this).parents().each(function () {
                                if ($(this).is("section.item"))
                                    $(this).addClass("current_ancestor");
                                $(this).find(">section.item").addClass("current_ancestor");
                            });
                            var href = $(element.find("a")[0]).attr("href");
                            scope.$apply(function () {
                                $location.path(href);
                            });
                            return false;
                        })
                        .find("a").each(function () {
                            $(this).click(function (e) {
                                $(".current_ancestor").removeClass("current_ancestor");
                                $(this).parents().each(function () {
                                    if ($(this).is("section.item"))
                                        $(this).addClass("current_ancestor");
                                    $(this).find(">section.item").addClass("current_ancestor");
                                });
                                scope.$apply(function () {
                                    $location.path($(this).attr('href'));
                                });
                            });
                        });
                }
            };
        };
        return [ "$location", fixAnchorTag ];
    });
}(define));
;