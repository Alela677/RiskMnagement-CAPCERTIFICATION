sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"riskmanagement/risks/test/integration/pages/RiskList",
	"riskmanagement/risks/test/integration/pages/RiskObjectPage"
], function (JourneyRunner, RiskList, RiskObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('riskmanagement/risks') + '/test/flpSandbox.html#riskmanagementrisks-tile',
        pages: {
			onTheRiskList: RiskList,
			onTheRiskObjectPage: RiskObjectPage
        },
        async: true
    });

    return runner;
});

