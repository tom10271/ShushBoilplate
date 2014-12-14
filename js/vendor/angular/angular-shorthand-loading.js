if (typeof angular != undefined && angular) {
    function insertComponent(_module, components, insertFn) {
        if (angular.isArray(components)) {
            for (var i = 0; i < components.length; i++) {
                var component = components[i];
                insertFn(_module, component);
            }
        } else {
            console.log('argument is not type of array: ' + typeof components);
        }
    }

    angular.addFactories = function (_module, components) {
        insertComponent(_module, components, function (_module, component) {
            _module.factory(component._name, component._component);
        });

        return this;
    };

    angular.addControllers = function (_module, components) {
        insertComponent(_module, components, function (_module, component) {
            _module.controller(component._name, component._component);
        });

        return this;
    };

    angular.addDirectives = function (_module, components) {
        insertComponent(_module, components, function (_module, component) {
            _module.directive(component._name, component._component);
        });

        return this;
    };

    angular.addAnimations = function (_module, components) {
        insertComponent(_module, components, function (_module, component) {
            _module.animation(component._name, component._component);
        });

        return this;
    };
}