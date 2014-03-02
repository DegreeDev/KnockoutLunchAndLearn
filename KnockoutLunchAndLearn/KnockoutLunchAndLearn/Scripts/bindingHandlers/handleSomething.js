/// <reference path="../_references.js" />
define(['ko'], function(ko){
    ko.bindingHandlers.handleSomething = {
        init: function (element, valueAccessor) {
            ko.applyBindingsToNode(element, {
                click: function () {
                    alert("this");
                }
            });
        },
        update: function(element, valueAccessor) {  }
    }
});