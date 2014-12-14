(function (define) {
    define([''], function () {
        var Navigation = Class.extend({
            state: null,
            data: {
                title: null,
                url: null,
                controller: null,
                templateURL: null,
            },
            child: null,

            init: function (state, title, url, controller, templateURL) {
                this.state = state;
                this.data = {};
                this.data.title = title;
                this.data.url = url;

                if (angular.isDefined(controller))
                    this.data.controller = controller+'Controller';

                if (angular.isDefined(templateURL))
                    this.data.templateURL = templateURL+'.tpl.html';

                this.child = [];
            },
            push: function (child) {
                child.state = child.state.insertBefore(this.state+'.');

                if (!angular.isDefined(child.data.controller))
                    child.data.controller = this.data.controller;

                if (!angular.isDefined(child.data.templateURL))
                    child.data.templateURL = this.data.templateURL;

                this.child.push(child);
                return this;
            },
            pushWorksRouting: function (nav) {
                this.push(nav);
                nav.push(
                    new Navigation('ux.concern', 'User Experience Concern', '/ux-concern'),
                    new Navigation('ux.design', 'User Experience Design ', '/ux-design'),
                    new Navigation('techical.concern', 'Techical Concern', '/techical-concern'),
                    new Navigation('techical.design', 'Techical Design ', '/techical-design')
                );
                return this;
            }
        });

        return Navigation;
    });
}(define));

//,
//getTitle: function () {
//    return this.name;
//},
//getURL: function () {
//    return this.url;
//},
//getController: function () {
//    return this.controller;
//},
//getTemplateURL: function () {
//    return this.templateURL;
//}

//How-to-get-to-Tai-Fu-Tai
//Inside-Tai-Fu-Tai
//Hong-Kong-Mangroves
//Dr.-Howard-Leung-Personal-Homepage
//MILO-system
//SIG-2012-Official-site
//shutupiamthinking.com
//
//HowToGetToTaiFuTai
//InsideTaiFuTai
//HongKongMangroves
//Dr.HowardLeungPersonalHomepage
//MILOSystem
//SIG2012OfficialSite
//Shutupiamthinking.com
//
//itrMemo
//Catch
//Tap
//Start-all-over-again
//itrGesture
//Object.Human
//I-can-remember-planning-for-leisure
//
//itrMemo
//Catch
//Tap
//StartAllOverAgain
//ItrGesture
//Object.Human
//ICanRememberPlanningForLeisure
//
//
//SDL-boilplate
//jConsolight
//jServlight
//
//SDLBoilplate
//JConsolight
//JServlight