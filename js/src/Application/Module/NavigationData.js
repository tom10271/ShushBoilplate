(function (define) {
    define(['Application/Entity/Navigation'], function (Navigation) {
        var navigationData = [];

        var webDesign = new Navigation('webDesign', 'Web Design', '/web-design', 'Page', 'web-design');
        webDesign
            .pushWorksRouting(new Navigation('howToGetToTaiFuTai', 'HowToGetToTaiFuTai', '/how-to-get-to-tai-fu-tai'))
            .pushWorksRouting(new Navigation('insideTaiFuTai', 'InsideTaiFuTai', '/inside-tai-fu-tai'))
            .pushWorksRouting(new Navigation('hongKongMangroves', 'Hong Kong Mangroves', '/hong-kong-mangroves'))
            .pushWorksRouting(new Navigation('howardLeung', 'Dr. Howard Leung Personal Homepage', '/dr-howard-leung-personal-homepage'))
            .pushWorksRouting(new Navigation('miloSystem', 'BScCS MILO System', '/milo'))
            .pushWorksRouting(new Navigation('sig2012', 'SIG 2012 Official Site', '/sig-2012-official-site'))
            .pushWorksRouting(new Navigation('shutupiamthinking', 'shutupiamthinking.com', '/shutupiamthinking'))

        var photography = new Navigation('photo', 'Photography', '/photography', 'Page', 'photo');
        photography
            .pushWorksRouting(new Navigation('blackAndWhite', 'Black & White', '/b&w'))
            .pushWorksRouting(new Navigation('landscape', 'Lanscape', '/lanscape'))
            .pushWorksRouting(new Navigation('visualDiary', 'Visual Diary', '/visual-diary'))
            .pushWorksRouting(new Navigation('street', 'Street', '/street'))
            .pushWorksRouting(new Navigation('macro', 'Macro', '/macro'));

        var interactiveDesign = new Navigation('itrDesign', 'Interactive Design', '/interactive-design', 'Page', 'itr-design');
        interactiveDesign
            .pushWorksRouting(new Navigation('itrMemo', 'Black & White', '/b&w'))
            .pushWorksRouting(new Navigation('catch', 'Catch', '/catch'))
            .pushWorksRouting(new Navigation('tap', 'Tap', '/tap'))
            .pushWorksRouting(new Navigation('startAllOverAgain', 'Start All Over Again', '/start-all-over-again'))
            .pushWorksRouting(new Navigation('itrGesture', 'ItrGesture', '/itr-gesture'))
            .pushWorksRouting(new Navigation('objectHuman', 'Object.Human', '/object-human'))
            .pushWorksRouting(new Navigation('iCanRememberPlanningForLeisure', 'I Can Remember Planning For Leisure', '/I-can-remember-planning-for-leisure'));

        var programming = new Navigation('programming', 'Programming', '/programming', 'Page', 'programming');
        programming
            .pushWorksRouting(new Navigation('sdlBoilplate', 'SDL Boilplate', '/sdl-Boilplate'))
            .pushWorksRouting(new Navigation('JConsolight', 'JConsolight', '/JConsolight'))
            .pushWorksRouting(new Navigation('jServlight', 'jServlight', '/jServlight'))


        var navigationData = [];
        navigationData.push(
            new Navigation('home', 'Home', '/', 'Page', 'home'), webDesign, photography, interactiveDesign, programming,
            new Navigation('about', 'About', '/about', 'Page', 'about')
        );

        return navigationData;
    });
}(define));