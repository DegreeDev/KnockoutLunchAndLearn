(function ($, ko) {
	ko.bindingHandlers.selectGroup = {
		init: function (e, va, aba) {
			$(e).select2();
		},
		update: function (e, va, aba) {
			var $e = $(e),
				value = va(),
				groups = value.groups,
				selectedOptions = aba.get("selectedOptions"),
				groupsText = value.groupsText,
				optionsText = aba.get("optionsText"),
				optionsValue = aba.get("optionsValue");

			$e.empty();

			ko.utils.arrayForEach(groups(), function (group) {
				var $optgroup = $("<optgroup />");
				ko.applyBindingsToNode($optgroup[0], { attr: { label: group[groupsText] } });
				$e.append($optgroup);

				ko.utils.arrayForEach(group.tasks(), function (task) {
					var $option = $("<option />");

					if (selectedOptions().indexOf(ko.unwrap(task[optionsValue])) != -1) {
						$option.attr("selected", true);
					}

					ko.applyBindingsToNode($option[0], { text: task[optionsValue], value: task[optionsValue] });
					$optgroup.append($option);
				});
			});

			$e.attr("multiple", true);

			$e.trigger("change");
		}
	};
})($, window.ko);