/// <reference path="viewModel.js" />
require([
    "ko",
    "builder/init",
    "builder/services",
    "builder/ViewModel",
    "builder/formBuilder",
    "builder/domReady",
    "bindingHandlers/handleSomething"],
    function (ko, init, services, ViewModel, formBuilder, domReady) {

        init();
        console.log('bindings ran');
        var model = new ViewModel();
        ko.applyBindings(model, services.elements.bindings);
});
