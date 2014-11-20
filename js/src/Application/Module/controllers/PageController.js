(function (define) {
    define([''], function () {
        var PageController = function ($rootScope, $scope, $location, $sce, SharedAppData, Restangular) {
            $rootScope = angular.extend($rootScope, {name: 'Root scope'});
            $rootScope.$on('$viewContentLoaded', function (event) {
                if (skrollrRef) {
                    skrollrRef.refresh();
                }
                $(document).scrollTop(0);
                $("#search").focus();
            });

            $scope.baseURL = SharedAppData.baseURL;
            $scope.awards = [];
            $scope.bookChapter = [];
            $scope.conference = [];
            $scope.editorship = [];
            $scope.grants = [];
            $scope.journal = [];
            $scope.motionLab = [];
            $scope.paperReviewers = [];
            $scope.personalData = [];
            $scope.publicDuty = [];
            $scope.researchProjects = [];
            $scope.selectedProjects = [];
            $scope.doctoralDegree = [];
            $scope.masterDegree = [];
            $scope.courseOffered = [];
            $scope.pageSwitchData = [];

            Restangular.all('awards.json').getList().then(function (result) {
                for (var i = 0; i < result.length; i++) {
                    $scope.awards[i] = {};
                    $scope.awards[i].type = result[i].type;
                    $scope.awards[i].event = result[i].event;
                    $scope.awards[i].date = result[i].date;
                }
            });


            Restangular.all('bookChapter.json').getList().then(function (result) {
                $scope.bookChapter = $sce.trustAsHtml(result.item);
            });

            Restangular.all('conference.json').getList().then(function (result) {
                for (var i = 0; i < result.length; i++) {
                    $scope.conference[i] = {};
                    $scope.conference[i].content = result[i].item;
                    $scope.conference[i].contentSafe = $sce.trustAsHtml(result[i].item);
                }
            });

            Restangular.all('editorship.json').getList().then(function (result) {
                for (var i = 0; i < result.length; i++) {
                    $scope.editorship[i] = {};
                    $scope.editorship[i].content = result[i].item;
                    $scope.editorship[i].contentSafe = $sce.trustAsHtml(result[i].item);
                }
            });

            Restangular.all('journal.json').getList().then(function (result) {
                for (var i = 0; i < result.length; i++) {
                    $scope.journal[i] = {};
                    $scope.journal[i].content = result[i].item;
                    $scope.journal[i].contentSafe = $sce.trustAsHtml(result[i].item);
                }
            });

            Restangular.all('motionLab.json').getList().then(function (result) {
                for (var i = 0; i < result.length; i++) {
                    $scope.motionLab[i] = {};
                    $scope.motionLab[i].link = result[i].link;
                    $scope.motionLab[i].img = result[i].img;
                    $scope.motionLab[i].date = result[i].date;
                    $scope.motionLab[i].title = result[i].title;
                }
            });

            Restangular.all('paperReviewers.json').getList().then(function (result) {
                for (var i = 0; i < result.length; i++) {
                    $scope.paperReviewers[i] = {};
                    $scope.paperReviewers[i].title = result[i].title;
                    $scope.paperReviewers[i].titleSafe = $sce.trustAsHtml(result[i].title);
                }
            });

            Restangular.all('personalData.json').getList().then(function (result) {
                $scope.personalData = result;
                $scope.personalData.mailingAddr = $sce.trustAsHtml(result.mailingAddr);
                $scope.personalData.description = $sce.trustAsHtml(result.description);
            });

            Restangular.all('publicDuty.json').getList().then(function (result) {
                for (var i = 0; i < result.length; i++) {
                    $scope.publicDuty[i] = {};
                    $scope.publicDuty[i].titleSafe = $sce.trustAsHtml(result[i].title);
                    $scope.publicDuty[i].link = result[i].link;
                }
            });

            Restangular.all('researchProjects.json').getList().then(function (result) {
                for (var i = 0; i < result.length; i++) {
                    $scope.researchProjects[i] = {};
                    $scope.researchProjects[i].fundingSource = result[i].fundingSource;
                    $scope.researchProjects[i].fundingAmount = result[i].fundingAmount;
                    $scope.researchProjects[i].projectTitle = result[i].projectTitle;
                    $scope.researchProjects[i].role = result[i].role;
                    $scope.researchProjects[i].date = result[i].date;
                }
            });

            Restangular.all('selectedProjects.json').getList().then(function (result) {
                for (var i = 0; i < result.length; i++) {
                    $scope.selectedProjects[i] = {};
                    $scope.selectedProjects[i].title = result[i].title;
                    $scope.selectedProjects[i].img = result[i].img;
                    $scope.selectedProjects[i].link = result[i].link;
                }
            });

            Restangular.all('doctoralDegree.json').getList().then(function (result) {
                for (var i = 0; i < result.length; i++) {
                    $scope.doctoralDegree[i] = {};
                    $scope.doctoralDegree[i].img = result[i].img;
                    $scope.doctoralDegree[i].name = result[i].name;
                    $scope.doctoralDegree[i].list = [];
                    for (var j = 0; j < result[i].list.length; j++) {
                        $scope.doctoralDegree[i].list[j] = {};
                        $scope.doctoralDegree[i].list[j].listContent = result[i].list[j];
                        $scope.doctoralDegree[i].list[j].listContentSafe = $sce.trustAsHtml(result[i].list[j]);
                    }
                }
            });

//            Restangular.all('masterDegree.json').getList().then(function (result) {
//                for (var i = 0; i < result.length - 1; i++) {
//                    $scope.masterDegree[i] = {};
//                    $scope.masterDegree[i].img = result[i].img;
//                    $scope.masterDegree[i].name = result[i].name;
//                    for (var j = 0; j < result[i].list.length; j++) {
//                        $scope.masterDegree[i].list = [];
//                        $scope.masterDegree[i].list[j] = {};
//                        $scope.masterDegree[i].list[j].listContent = result[i].list[j];
//                        $scope.masterDegree[i].list[j].listContentSafe = $sce.trustAsHtml(result[i].list[j]);
//                    }
//                }
//            });

            Restangular.all('coursesOffered.json').getList().then(function (result) {
                for (var i = 0; i < result.length; i++) {
                    $scope.courseOffered[i] = {};
                    $scope.courseOffered[i].date = result[i].date;
                    $scope.courseOffered[i].title = result[i].course;
                    $scope.courseOffered[i].titleSafe = $sce.trustAsHtml(result[i].course);
                    $scope.courseOffered[i].content = result[i].content;
                    $scope.courseOffered[i].contentSafe = $sce.trustAsHtml(result[i].content);
                }
            });

            Restangular.all('pageSwitchData.json').getList().then(function (result) {
                for (var i = 0; i < result.length; i++) {
                    $scope.pageSwitchData[i] = {};
                    $scope.pageSwitchData[i].keywords = [];
                    for (var j = 0; j < result[i].keywords.length; j++) {
                        $scope.pageSwitchData[i].keywords[j] = result[i].keywords[j];
                    }

                    $scope.pageSwitchData[i].location = result[i].location;
                }
            });

            $scope.showHints = true;

            $scope.showHints = function () {
                $scope.showHints = true;
            };

            $scope.hideHints = function () {
                $scope.showHints = false;
            };

            //Paper Reviewers is not working at all
            $scope.checkPageChangeCommand = function (pageName) {
                for (var i = 0; i < $scope.pageSwitchData.length; i++) {
                    for (var j = 0; j < $scope.pageSwitchData[i].keywords.length; j++) {
                        if ($scope.pageSwitchData[i].keywords[j].toLowerCase() == pageName) {
                            return $scope.pageSwitchData[i].location;
                        }
                    }
                }

                return null;
            };

            $scope.switchPage = function (pageName) {
                pageName = pageName.substring(pageName.length - 1, pageName.length) == '.' ? pageName.substring(0, pageName.length - 1) : pageName;

                pageName = pageName.toLowerCase();
                var location = $scope.checkPageChangeCommand(pageName);
                if (location != null) {
                    console.log("Switching to " + baseDir + location);
                    $location.path(baseDir + location);
                    $scope.$apply();
                } else {
                    console.log("No matched result, Keywords: " + pageName + " ");
                }
            };

            var commands = {
                'show': $scope.showHints,
                'hide': $scope.hideHints,
                'go to *val': $scope.switchPage
            };

            if (annyang) {
                if (commands != null && typeof commands != 'undefined') {
                    console.log("AnnYang is supported. Start listening");

                    annyang.addCommands(commands);
                    annyang.debug();
                    annyang.start();
                }
            } else {
                console.log("AnnYang is not supported.");
            }
        };
        return [ "$rootScope", "$scope", "$location", "$sce", "SharedAppData", "Restangular", PageController ];
    });
}(define))
;