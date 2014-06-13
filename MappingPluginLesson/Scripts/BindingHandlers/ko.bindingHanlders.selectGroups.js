ko.bindingHandlers.selectGroup = {
	init: function (e, va, aba) {
		var $e = $(e),
			options = va.get("options");

		console.log(options);
	}
}