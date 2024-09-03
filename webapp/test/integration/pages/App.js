sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
], function (Opa5, Press) {
	"use strict";
	const sViewName = "vertical.project123.view.HelloPanel";
	
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {
				iPressTheDialogButton() {
					return this.waitFor({
							id: "helloDialog",
							viewName: sViewName,
							actions: new Press(),
							errorMessage: "Could not find the 'HelloDialog' button on the HelloPanel view. Bell does not chime."
					});
				}
			},

			assertions: {

				iShouldSeeTheHelloDialog: function () {
					return this.waitFor({
						controlType: "sap.m.Dialog",
						viewName: sViewName,
						success: function () {
							// we set the view busy, so we need to query the parent of the app
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed. That said BELL rings.");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
				}
				
			}
		}
	});

});
