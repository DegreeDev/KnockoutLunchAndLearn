(function (ko, app) {
	 
	 var services = {};

	 services.Load = function (callback) {
	 	 $.getJSON("/Home/SimpleData", "", callback);
	 };
	 services.SaveMember = function (member) {
	 	 var data = ko.mapping.toJSON(member);
	 	 alert(data);
	 };
	 services.SaveTeam = function (team) {
	 	 var data = ko.mapping.toJSON(team);
	 	 alert(data);
	 };

	 app.services = services; 
})(ko, window.app);

