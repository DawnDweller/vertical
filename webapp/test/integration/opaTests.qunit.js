/* global QUnit */
/* sap.ui.require(["vertical/project123/test/integration/AllJourneys"
], function () {
	QUnit.config.autostart = false;
	QUnit.start();
}); */

QUnit.config.autostart = false;

sap.ui.require(["sap/ui/core/Core"], async(Core) => {
	"use strict";

	await Core.ready();

	sap.ui.require([
		"vertical/project123/localService/mockserver",/*    No idea why mockserver is workin' */
		"vertical/project123/test/integration/NavigationJourney"
	], (mockserver) => {
		//initilize the mock server (not sure why 'cause I think we've already initiliz it in initMockServer.js)
		mockserver.init();
		QUnit.start();
	});
});