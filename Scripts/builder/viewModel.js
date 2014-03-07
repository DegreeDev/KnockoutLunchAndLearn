define("builder/ViewModel", ["ko", "builder/services"], function (ko, services) {
    console.log("ran view model");
    return function ViewModel() {
        var self = this;

        self.id = ko.observable();
        self.name = ko.observable("Successful load!");
        self.description = ko.observable();
        self.log = function () {
            services.log();
        }
    }
});


        