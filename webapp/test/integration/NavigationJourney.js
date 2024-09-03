/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/App",
	"./pages/View1"
], function (opaTest) {
	"use strict";

	QUnit.module("Navigation Journey");

	opaTest("I should be able to open the Hello Dialog", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "vertical.project123"
			}
		});

		//Actions
		When.onTheAppPage.iPressTheDialogButton();

		// Assertions
		Then.onTheAppPage.iShouldSeeTheHelloDialog();
      	/* Then.onTheViewPage.iShouldSeeThePageView(); */

		//Cleanup
		Then.iTeardownMyApp();
	});
});
