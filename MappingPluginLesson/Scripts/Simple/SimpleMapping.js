$(function () {
	 $.getJSON("/Home/SimpleData", "", function (data) {
	 	 ko.applyBindings(ko.mapping.fromJS(data), document.getElementById("simple-example"));
	 });
});