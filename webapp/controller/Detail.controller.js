sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], (Controller, History) => {
	"use strict";

	return Controller.extend("vertical.project123.controller.Detail", {
		onInit() {
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("DetailRoute").attachPatternMatched(this.onObjectMatched, this);
		},

		onObjectMatched(oEvent) {
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
				model: "invoice"
			});
		},
        onNavBack() {
			const oHistory = History.getInstance();
			const sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {//we will get a valid result only if a navigation step inside our app has already happened. Then we will simply use the browser history to go back to the previous page.
				window.history.go(-1);
			} else {//If no navigation has happened before, we can tell the router to go to our overview page directly.
				const oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("OverviewRoute", {}, true);
			}
		},
	});
});