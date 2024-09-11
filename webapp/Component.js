/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "vertical/project123/model/models",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel",
    ],
    function (UIComponent, Device, models, JSONModel, ResourceModel,) {
        "use strict";

        return UIComponent.extend("vertical.project123.Component", {
            metadata: {
                interfaces: ["sap.ui.core.IAsyncContentCreation"],
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                const oDeviceModel = new JSONModel(Device);
                oDeviceModel.setDefaultBindingMode("OneWay");
                this.setModel(oDeviceModel, "device");
                //binding mode must be OneWay as the device model is read-only and we want to avoid changing the model accidentally
                // when we bind properties of a control to it. By default, models in SAPUI5 are bidirectional (TwoWay). When the property changes, the bound model value is updated as well.
                /* this.setModel(models.createDeviceModel(), "device"); */ //Bu fiorinin boiler plate ile getirdiği yeni versiyon, yukardaki tutorialdaki. İkisi de çalışıyor.

                 // set data model on view
                const oData = {
                recipient : {
                name : "Rabbit"
                    }
                };

                const oModel = new JSONModel(oData);
                this/* .getView() */.setModel(oModel);

                //setting i18n_jp model here
                const i18nModel = new ResourceModel({
                    bundleName: "vertical.project123.i18n.i18n_jp"
                });
                this/* .getView() */.setModel(i18nModel, "i18n_jp");

            }
        });
    }
);