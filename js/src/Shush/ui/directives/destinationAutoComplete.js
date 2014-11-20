(function (define) {
    define([''], function () {
        var destinationAutoComplete = function (SharedAppData) {
            return {
                restrict: "A",
                scope: {
                    search: "=destinationAutoComplete",
                    //selected: "=",
                    valid: "="
                },
                link: function (scope, element, attrs) {
                    element.click(function () {
                        element.trigger("focus");
                    });

                    element.autocomplete({
                        source: function (request, response) {
                            if (element[0].value.length > 0) {
                                $.ajax({
                                    url: scope.search.resourceURL,
                                    type: 'POST',
                                    dataType: "json",
                                    data: {
                                        keyword: element[0].value,
                                        maxRows: scope.search.maxRow
                                    },
                                    success: function (data) {
                                        response($.map(data, function (item) {
                                            return {
                                                label: item.full_name_nd + ', ' + item.country.country_name,
                                                value: item.full_name_nd + ', ' + item.country.country_name,
                                                placeInfo: {
                                                    countryID: item.country.id,
                                                    country: item.country.country_name,
                                                    cityID: item.id,
                                                    city: item.full_name_nd
                                                }
                                            };
                                        })
                                        );
                                    }
                                });
                            }
                        },
                        minLength: 0,
                        selectFirst: true,
                        autoFill: true,
                        mustMatch: true,
                        select: function (event, ui) {
                            SharedAppData.placeInfo = ui.item.placeInfo;
                            //scope.selected = ui.item.placeInfo;
                            scope.$apply(function(){
                                scope.valid = true;
                            });
                        },
                        open: function () {
                            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
                        },
                        close: function () {
                            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
                        }
                    }).focus(function () {
                            $(this).autocomplete("search");
                        });
                }
            };
        };

        return [ "SharedAppData", destinationAutoComplete ];
    });
}(define));