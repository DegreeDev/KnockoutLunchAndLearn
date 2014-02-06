function Employee(name, title) {
	var self = this;

	self.name = ko.observable(name);
	self.isManager = ko.observable(false);
	self.title = ko.observable(title); 
	self.company = ko.observable("The Savo Group");

	self.Promote = function () {
		self.isManager(true); 
	};

	self.signature = ko.computed(function () {
		return self.name() + " - " + (!self.isManager() ? " Assistant to the " : "") + self.title() + " of  " + self.company();
	});
}

function ViewModel() {
	var self = this;

	self.Employees = ko.observableArray();
	self.AddEmployee = function () {
		self.Employees.push(new Employee("", ""));
	};
	self.RemoveEmployee = function (employee) {
		self.Employees.remove(employee);
	};
}

ko.applyBindings(new ViewModel());