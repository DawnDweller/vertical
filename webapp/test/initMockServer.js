sap.ui.define([
    "../localService/mockserver"
], (mockserver) => {
        "use strict";

        //this is for initilizing mockServer
        mockserver.init();


        // and this one is for initilizing the embedded component on the HTML page
        sap.ui.require(["sap/ui/core/ComponentSupport"]);
});