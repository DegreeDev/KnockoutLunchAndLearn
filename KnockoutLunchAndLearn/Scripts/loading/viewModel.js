﻿r("viewmodel.app", function () {
    (function ($, ko, exports, services) {
        function ViewModel() {
            var self = this;

            self.id = ko.observable();
            self.name = ko.observable("Successful load!");
            self.description = ko.observable();
        }
        exports.ViewModel = ViewModel;
    })(window.jQuery, window.ko, window.app, window.services);
});