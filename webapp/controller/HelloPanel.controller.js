sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], (Controller, MessageToast) => {
    "use strict";
 
    return Controller.extend("vertical.project123.controller.HelloPanel", {
        // my mouse click event listener function
        onClick() {
            //reading message from i18Model
            const oBundle = this.getView().getModel("i18n_jp").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            // and the messege that is going to show up
            MessageToast.show(sMsg);
            },

        async onOpenDialog() {
           //creating dialog
           this.oDialog ??= await this.loadFragment({
                name: "vertical.project123.view.HelloDialog"
           });
           this.oDialog.open();
        },

        onCloseDialog() {
			// note: We don't need to chain to the pDialog promise, since this event handler
			// is only called from within the loaded dialog itself.
			this.byId("helloDialog").close();
		},
        
    });
 });