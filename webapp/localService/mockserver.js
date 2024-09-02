sap.ui.define([
        "sap/ui/core/util/MockServer"
], (MockServer) => {
        "use strict";

        return{
            init() {
                    //create
                    const oMockServer = new MockServer({
                            rootUri: sap.ui.require.toUrl("vertical/project123") + "/V2/Northwind/Northwind.svc/"
                    });

                    const oUrlParams = new URLSearchParams(window.location.search);

                    // delay effect
                    MockServer.config({
                            autoRespond: true,
                            autoRespondAfter: oUrlParams.get("serverDelay") || 500
                    });

                    //simulate
                    const sPath = sap.ui.require.toUrl("vertical/project123/localService");
                    oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

                    oMockServer.start();
                }
        }
});