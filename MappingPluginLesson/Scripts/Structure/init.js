(function (ko) {
	 window.app = window.app || { name: "Team Application" };
	 window.app.mapping = {
	 	 TeamMembers: {
	 	 	 create: function (options) {
	 	 	 	 return new app.TeamMemberViewModel(options.data);
	 	 	 }
	 	 },
	 	 Team: {
	 	 	 create: function (options) {
	 	 	 	 return new app.TeamViewModel(options.data);
	 	 	 }
	 	 }
	 };
})(ko); 