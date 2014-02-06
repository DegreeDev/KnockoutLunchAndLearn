function ADifferentContext() {
	var self = this;
	self.name = ko.observable("matthew");
}

function ViewModel() {
	var self = this;
	
	self.visibleToggle = ko.observable(true);
	self.ifToggle = ko.observable(true); 

	self.textBinding = ko.observable("Text Binding");
	self.valueBinding = ko.observable("Value Binding");
	self.htmlBinding = ko.observable("<em>I had better be emphasized</em");
	self.cssBinding = ko.observable("hidden");
	
	self.templateBinding = ko.observable("sample1");

	self.clickBinding = function () {
		alert("You've clicked me");
	};

	self.attrBindingClick = function () {
		var value = $("[data-youclickedme]").data("youclickedme");
		alert(value);
	};
	self.attrBindingValue = ko.observable("This a value of an attribute");

	self.otherContextBinding = new ADifferentContext();
}

ko.applyBindings(new ViewModel());