function ViewModel() {
	var self = this;

	self.name = ko.observable("Matthew");
	self.isManager = ko.observable(false);
	self.title = ko.observable("Developer"); 
	self.company = ko.observable("The Savo Group");

	self.Promote = function () {
		self.isManager(true); 
	};

	self.signature = ko.computed(function () {
		return self.name() + " - " + (!self.isManager() ? " Assistant to the " : "") + self.title() + " of  " + self.company();
	});
}

ko.applyBindings(new ViewModel());