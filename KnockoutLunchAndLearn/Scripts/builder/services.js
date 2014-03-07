define("builder/services", ["ko"], function (ko) {
    console.log("ran services");
    var
        services = {
            elements: {
                bindings: $(".binding-context").get(0)
            },
            log: function () {
                console.log("services!!!");
            }
        },
        mock = {

        };

    ko.utils.extend(services, mock);

    return services;
});