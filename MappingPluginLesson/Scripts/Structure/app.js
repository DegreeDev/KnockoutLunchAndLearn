(function (services, app, mapping) {
	 app.TeamMemberViewModel = function (data) {
	 	 var self = ko.mapping.fromJS(data, mapping, this);

	 	 self.formattedLangs = ko.computed(function () {
	 	 	 return self.PreferredLanguages().join();
	 	 });
	 	 self.Save = function () {
	 	 	 services.SaveMember(self, function () {

	 	 	 });
	 	 };
	 }
	 
	 app.TeamViewModel = function (data) {
	 	 var self = ko.mapping.fromJS(data, mapping, this);

	 	 self.Remove = function (member) {
	 	 	 self.TeamMembers.remove(member);
	 	 };
	 	 self.Save = function () {
	 	 	 services.SaveTeam(self, function () {

	 	 	 });
	 	 };
	 }
})(window.app.services, window.app, window.app.mapping); 