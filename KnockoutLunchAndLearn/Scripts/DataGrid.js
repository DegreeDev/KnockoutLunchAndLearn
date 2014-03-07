/// <reference path="_references.js" />
define("dataGrid", [], function () {
	function DataGrid(page, pageSize) {
		var self = this;

		self.dataUrl = ko.observable(null),
		self.pageSize = ko.observable(pageSize || 10);
		self.page = ko.observable(page || 0);
		self.fullUrl = ko.computed(function () {
			return self.dataUrl() +
				"?skip=" + self.page() * self.pageSize() +
				"&take=" + self.pageSize();
		});
		self.columns = ko.observableArray();
		self.currentCount = ko.observable();
		self.pageSizeFilterOptions = ko.observableArray(); 


		self.VisibleRows = function () {
			return self.data();
		};
		self.EnablePaging = ko.observable(false);

		self.data = ko.observableArray();

		self.Config = function (config) {
			self.DataUrl = config.dataUrl;
			self.PageSize = config.pageSize;
			self.Page(config.page);
			return self.Result;
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
			if (self.page() * self.pageSize() < self.currentCount()) {
				self.page(self.page() + 1);
				self.GetCurrentPage();
			}
		};
		self.GetPage = function (page) {

		};
		self.GetPreviousPage = function () {
			
			self.page(self.page() -1);
			self.GetCurrentPage();
		};
		self.GetCurrentPage = function () {
			self.data.removeAll();
			$.ajax({
				url: self.fullUrl(),
				type: "GET",
				dataType: "json",
				success: function (data) {
					self.SetData(data.records);
					self.currentCount(data.count);
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

			self.GetCurrentPage();
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
	var page = 0, pageSize = 15;
	new DataGrid(page, pageSize)
		.AddColumn("Id", "id-template", "Id")
		.AddColumn("Name", "name-template", "Name")
		.AddColumn("Job Title", null, "title")
		.AddPageSizeFilter([10, 20, 30, 40])
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
