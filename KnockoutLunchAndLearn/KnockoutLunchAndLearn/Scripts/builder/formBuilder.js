define("builder/formBuilder", ["builder/services", "builder/ViewModel"], function (service, ViewModel) {
    console.log("actually ran formBuilder");

    return function FormBuilder() {
        var self = this;

        self.buildTheForm = function () {
            console.log("And they will come!");
        };

    }
}); 