/// <reference path="_refe,Grrences.js" />
define("dataGrid", [], function () {
	function DataGrid(page, pageSize) {
		var self = this;

		self.dataUrl = ko.observable(null),
		self.pageSize = ko.observable(pageSize || 10);
		self.page = ko.observable(page || 1);
		self.fullUrl = ko.computed(function () {
			return self.dataUrl() +
				"?skip=" + self.page() * self.pageSize() +
				"&take=" + self.pageSize();
		});
		self.columns = ko.observableArray();
		self.currentCount = ko.observable();
		self.pageSizeFilterOptions = ko.observableArray(); 
		self.EnablePaging = ko.observable(false);
		self.pages = ko.observableArray();


		self.VisibleRows = function () {
			return self.data();
		};

		self.data = ko.observableArray();

		self.Config = function (config) {
			self.DataUrl = config.dataUrl;
			self.PageSize = config.pageSize;
			self.Page(config.page);
			return self.Result;
		};
		self.GeneratePages = function () {
		    console.log("Evaluating pages");
		    var results = [];
		    for (var i = 1, size = self.pageSize(), page = self.page() ; size * page <= self.currentCount() ; i++, page++) {
		        results.push(i);
		    }
		    self.pages.removeAll();
		    ko.utils.arrayPushAll(self.pages, results);
		    console.log(results);
		};

		self.AddColumn = function (title, dataTemplate, prop, headerTemplate) {
			self.columns.push({
				title: title,
				prop: prop,
				dataTemplate: dataTemplate,
				headerTemplate: headerTemplate
			});
			return self.Result;
		};

		self.SetData = function (data) {
		    ko.utils.arrayPushAll(self.data, data);
		    
			return self.Result;
		};
		self.SetUrl = function (url) {
			self.dataUrl(url);
			return self.Result;
		};
		self.AddPaging = function (bool) {
			self.EnablePaging(bool);
			return self.Result;
		}
		self.GetNextPage = function () {
		    var test = self.page(),
                test2 = self.pages()[self.pages().length -1];
		    if (test < test2) {
				self.page(self.page() + 1);
				self.GetCurrentPage();
			}
		};
		self.GetPage = function (page) {

		};
		self.GetPreviousPage = function () {
		    if (self.page() - 1 > 0) {
		        self.page(self.page() - 1);
		        self.GetCurrentPage();
		    }
	    };
		self.GetCurrentPage = function (callback) {
			self.data.removeAll();
			$.ajax({
				url: self.fullUrl(),
				type: "GET",
				dataType: "json",
				success: function (data) {
				    self.currentCount(data.count);
				    self.SetData(data.records);
				    if (callback) callback(data);
				}
			});
		};
		self.AddPageSizeFilter = function(sizes){
			ko.utils.arrayPushAll(self.pageSizeFilterOptions(), sizes);
			return self.Result;
		};
		self.Initialize = function (id) {
			var element = document.getElementById(id);

			if (!self.dataUrl())
				self.dataUrl($(element).data("url"));

			self.GetCurrentPage(function () {
			    self.GeneratePages();
			});
			ko.applyBindings(self, element);
		};
		self.Result = {
			Config: self.Config,
			AddColumn: self.AddColumn,
			Data: self.SetData,
			SetUrl: self.SetUrl,
			Initialize: self.Initialize,
			AddPaging: self.AddPaging,
			AddPageSizeFilter: self.AddPageSizeFilter
		};

		return self.Result;
	}

	return DataGrid;
});


require(["dataGrid"], function (DataGrid) {
	var page = 1, pageSize = 5;
	new DataGrid(page, pageSize)
		.AddColumn("Id", "id-template", "Id")
		.AddColumn("Name", "name-template", "Name")
		.AddColumn("Job Title", null, "title")
		.AddPageSizeFilter([5, 10, 20, 30, 40])
		.Initialize("dataGrid");

	console.log("ran datagrid");
});


//
//.Data([
//		{ id: 1, name: "Matthew", title: "Software Developer" },
//		{ id: 2, name: "Ryan", title: "Software Developer" },
//		{ id: 1, name: "Matthew", title: "Software Developer" },
//		{ id: 2, name: "Ryan", title: "Software Developer" },
//		{ id: 3, name: "Oleg", title: "Software Developer" },
//		{ id: 1, name: "Matthew", title: "Software Developer" },
//		{ id: 2, name: "Ryan", title: "Software Developer" },
//		{ id: 1, name: "Matthew", title: "Software Developer" },
//		{ id: 2, name: "Ryan", title: "Software Developer" },
//		{ id: 3, name: "Oleg", title: "Software Developer" }

//])
