$(function () {
	 function TeamMemberViewModel(data) {
	 	 var self = ko.mapping.fromJS(data, mapping, this);

	 	 self.formattedLangs = ko.computed(function () {
	 	 	 return self.PreferredLanguages().join();
	 	 });
	 }
	 function TeamViewModel(data) {
	 	 var self = ko.mapping.fromJS(data, mapping, this);

	 	 self.Remove = function (member) {
	 	 	 self.TeamMembers.remove(member);
	 	 };
	 }

	 var mapping = {
	 	 TeamMembers: {
	 	 	 create: function (options) {
	 	 	 	 return new TeamMemberViewModel(options.data);
	 	 	 }
	 	 },
	 	 Team: {
	 	 	 create: function (options) {
	 	 	 	 return new TeamViewModel(options.data);
	 	 	 }
	 	 }
	 };

	 $.getJSON("/Home/SimpleData", "", function (data) {
	 	 var model = ko.mapping.fromJS( data, mapping.Team);
	 	 ko.applyBindings(model);
	 });
	 
});
//Know what your object will serialize into. 
/*{
    "Id": "9e21e78b-c28b-4e6e-8c23-cd6c8f193232",
    "ProductName": "Sales Process Pro",
    "CurrentReleaseName": "Black Sabbath",
    "TeamMembers": [
        {
            "Id": "20f8b4e1-1aea-4717-bce3-4da74301b592",
            "Name": "Matthew Lee",
            "PreferredLanguages": [
                "JavaScript",
                "C#"
            ]
        },
        {
            "Id": "0374c921-a903-48dd-aa13-a49b5c55ed9d",
            "Name": "John Najam",
            "PreferredLanguages": [
                "C#",
                "SQL"
            ]
        },
        {
            "Id": "fbc0120c-7c47-4226-8ea9-118b60ca9d1c",
            "Name": "John Narofsky",
            "PreferredLanguages": [
                "C#",
                "JavaSript"
            ]
        },
        {
            "Id": "f520f6ed-4ef9-41d9-86b3-ad19b382fe4d",
            "Name": "Oleg Sobol",
            "PreferredLanguages": [
                "CSS",
                "Pearl",
                "ActionScript"
            ]
        },
        {
            "Id": "cf43d8c8-a2c1-41ca-8765-da768ae2c93f",
            "Name": "Devendren Reddy",
            "PreferredLanguages": [
                "C#",
                "SQL"
            ]
        },
        {
            "Id": "c5bbee07-c4f5-4710-a04a-224adc88e0d5",
            "Name": "Elyse Dequnia",
            "PreferredLanguages": [
                "CSS"
            ]
        },
        {
            "Id": "1cdeeda3-7470-42af-8653-83a515c1304a",
            "Name": "Ryan Conrad",
            "PreferredLanguages": [
                "C#",
                "JavaScript"
            ]
        }
    ]
}*/