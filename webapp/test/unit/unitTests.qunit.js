/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"vertical/project123/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
