sap.ui.define([
	"vertical/project123/model/formatter",
	"sap/ui/model/resource/ResourceModel",
], (formatter, ResourceModel) => {
	"use strict";

	QUnit.module("Formatting functions", {});

	QUnit.test("It should return the translated texts", (assert) => {
        const oResourceModel = new ResourceModel({
            bundleUrl: sap.ui.require.toUrl("vertical/project123/i18n/i18n_jp.properties"),
            supportedLocales: [
                ""
            ],
            fallbackLocale: ""
        });

        const oControllerMock = {
            getOwnerComponent() {
                return {
                    getModel() {
                        return oResourceModel;
                    }
                };
            }
        };

        const fnIsolatedFormatter = formatter.statusText.bind(oControllerMock);

        // Assert
        assert.strictEqual(fnIsolatedFormatter("A"), "New", "This is long text for Status A which is correct.");
        assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "This one is for B and it is correct");
        assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The long text for Status C is correct");
        assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "The long text for Status Foo is correct");
	});
});