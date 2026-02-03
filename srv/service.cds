using { BusinessPartnerA2X } from './external/BusinessPartnerA2X.cds';

using { RiskManagement as my } from '../db/schema.cds';

@path : '/service/RiskManagementService'
service RiskManagementService
{
    annotate Mitigation with @restrict :
    [
        { grant : [ '*' ], to : [ 'RiskManager' ] },
        { grant : [ 'READ' ], to : [ 'RiskViewer' ] }
    ];

    annotate Risk with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'RiskViewer' ] },
        { grant : [ '*' ], to : [ 'RiskManager' ] }
    ];

    @cds.redirection.target
    @odata.draft.enabled
    entity Risk as
        projection on my.Risk;

    @cds.redirection.target
    @odata.draft.enabled
    entity Mitigation as
        projection on my.Mitigation;

    @cds.redirection.target
    @readonly
    entity A_BusinessPartner as
        projection on BusinessPartnerA2X.A_BusinessPartner
        {
            BusinessPartner,
            Customer,
            Supplier,
            BusinessPartnerCategory,
            BusinessPartnerFullName
        };
}

annotate RiskManagementService with @requires :
[
    'authenticated-user',
    'RiskViewer',
    'RiskManager'
];
