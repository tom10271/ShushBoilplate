How to create and construct an Angular module
=============================================

Sample project: WarehouseBundle – QC Checking
Github branch: feature/improve-packing-qc
Location: ./Sites/HypebeastStore/src/Hypebeast/Bundle/WarehouseBundle/Resources/public/scripts

How Angular application is bootstrapped:
----------------------------------------
1) Setup requireJs config including baseUrl, vendor libraries you need and its path

2) Require vendor libraries by dependencies, for example, ui-router is an angular extension, or WareHouesQCModule depends on UIUXModule, then you should load dependencies first then objects depends on it.

3) Once all dependencies loaded, bootstrap ng-app

How to create Angular Module with ConfigSetup, ComponentSetup and UIRouterRegister:
-----------------------------------------------------------------------------------
In XXXModule/module.js
1) Before defining a requireJs module(i.e.: before you run define(['sth.js'], function(sth){...}), create a local variable with the followin structure:
```bash
var config = {
    name: 'ParentModuleNamespace.YourModuleName',
    dependencies: ['any dependencies name, ngResource, restangular'],
    requirePathConfig: {
        module: 'Shortcut/ModuleFolderName',
        componentType: 'where its folder locate'
        Template src will not concatenate with module attribute. Because angular know nothing about requireJS shortcut set. Exact path should be hard coded
        templates: _hypebeast.src + '/Hypebeast/WarehouseQCModule/templates',
        services: '/services'
    },
    components: {
        componentType: [
            'the file name inside its component type folder, what its file name will also be the name register to Angular. So do not use invalid name for component's file name.
                E.g.: Directive should be registered with Camelcasae but not Pascalcase, so do remember not to name a directive with capital letter
        ]
    }
};
```

2) 
