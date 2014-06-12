(function (services, mapping) {
	 services.Load(function (data) {
		  services.model = ko.mapping.fromJS(data, mapping.Team); 
		  ko.applyBindings(services.model, document.getElementById("structure-view")); 
	 });
})(window.app.services, window.app.mapping);