sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	
], (Controller, JSONModel, formatter, Filter, FilterOperator,) => {
	"use strict";

	return Controller.extend("vertical.project123.controller.InvoiceList", {
		formatter: formatter,
		onInit() {
			const oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},

		onFilterInvoices(oEvent) {
			// build filter array
			const aFilter = [];
			const sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			const oList = this.byId("invoiceList");
			const oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},

		onPress(oEvent) {
			const oItem = oEvent.getSource();
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("DetailRoute", 
				{// receive binding context by calling .getBindingPath(); We need to remove the first "/" from the binding path by calling .substr(1) on the string because this is a special character in URLs and is not allowed, we will add it again on the detail page.
					invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
				}//Also, the binding path might contain special characters which are not allowed in URLs, so we have to encode the path with encodeURIComponent.
			);
			/* alert("1");
			console.log(oRouter); */
		},

	});
});