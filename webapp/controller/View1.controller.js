sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
],
function (Controller, MessageToast, JSONModel, ResourceModel,) {
    "use strict";

    return Controller.extend("vertical.project123.controller.View1", {
        onInit: function () {
           
        },
        
        
        // my mouse click event listener function
        onClick() {
            //reading message from i18Model
            const oBundle = this.getView().getModel("i18n_jp").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            // and the messege that is going to show up
            MessageToast.show(sMsg);
            },
        
}); 

});
