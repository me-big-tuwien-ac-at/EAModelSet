const e="https://me.big.tuwien.ac.at/EAModelSet/2091dd36-7306-4f4b-81e7-80771abc4ba7",a="2091dd36-7306-4f4b-81e7-80771abc4ba7",d="PGL",c="",b=["XML","CSV","JSON","ARCHIMATE"],i="GitHub",t="raw-data/github/archimate/pglarchitecture.archimate",f="ARCHIMATE",s="29-06-2023 09:31:01",n=[],o=[],r="en",p=[{id:"37d747b4-0488-4693-acdc-0f1f72ec4b82",name:"Data Station",type:"Product",layer:"business"},{id:"6bc437d9-918e-426f-9672-87a4c9a90ad9",name:"PGL",type:"Product",layer:"business"},{id:"f59d1621-e9cb-409e-b5a6-c3bf8f54c89a",name:"Data Gateway",type:"Product",layer:"business"},{id:"1796baf9-1822-427c-b00d-9d9d708c77c5",name:"Metadata Provider",type:"BusinessService",layer:"business"},{id:"aedb70e3-361b-4e96-8064-3afde3f4f3e7",name:"DataStation Metadata Provider",type:"BusinessService",layer:"business"},{id:"fb16ddf6-d40e-483b-be9d-22081c6f2322",name:"Content Metadata Provider",type:"BusinessService",layer:"business"},{id:"2c7f1059-faa2-4c7f-8192-6a80fd050334",name:"Personal Data Confirmer",type:"BusinessService",layer:"business"},{id:"39b2f1ab-a449-435f-a0d1-6f963b378f7a",name:"Personal Data Locator",type:"BusinessService",layer:"business"},{id:"e078a762-0b12-414b-a17c-ebbe998869fa",name:"Personal Data Location",type:"BusinessInteraction",layer:"business"},{id:"fd41248e-7d86-443d-8ee9-e057b2f9104b",name:"Authentication Function",type:"BusinessFunction",layer:"business"},{id:"c703e840-01f2-420e-8960-510d9683c2a2",name:"Personal Data Control Provider",type:"BusinessService",layer:"business"},{id:"628b68b4-594f-474b-97b7-f1ad949d1930",name:"Data Control Policy",type:"Representation",layer:"business"},{id:"c82c289a-8200-43b5-93dc-2a0936cb50c8",name:"Personal Data Controller",type:"BusinessService",layer:"business"},{id:"0130b467-6b9e-4bab-a623-6e7b478afa08",name:"Personal Data Control",type:"BusinessInteraction",layer:"business"},{id:"d321870d-c645-4ae7-803c-833670c62ce5",name:"Authorization Function",type:"BusinessFunction",layer:"business"},{id:"000fbe1a-6a96-4318-8a9c-970ff8cfe224",name:"Train Handler",type:"Product",layer:"business"},{id:"5ccc56fc-090b-412d-9b5c-cc3e28463675",name:"Data",type:"Representation",layer:"business"},{id:"f250ad4b-3a0e-40b4-b1a8-de6c4eacf250",name:"Consent Function",type:"BusinessFunction",layer:"business"},{id:"c304a4f6-0662-4096-b4f9-3c9f8f6aff38",name:"Data Controller Service",type:"BusinessService",layer:"business"},{id:"eb1c5f8f-bfd8-4654-8502-53f507c4a343",name:"Patient",type:"BusinessActor",layer:"business"},{id:"2818fad6-e471-4b0f-8839-b2c228cb8fed",name:"Prescriber",type:"BusinessActor",layer:"business"},{id:"5bb2c2a1-49d4-41fd-913e-f7671c8bd22f",name:"Toxicology analysis",type:"BusinessService",layer:"business"},{id:"51180979-6341-4027-9d2a-8351197f6a24",name:"Effectiveness analysis",type:"BusinessService",layer:"business"},{id:"588a5c8f-616c-4c13-9633-4d813de3224b",name:"Pharmacogenetics analysis",type:"BusinessService",layer:"business"},{id:"cf4548fa-8620-4f36-8f57-430b301c161b",name:"DIagnosis",type:"BusinessProcess",layer:"business"},{id:"fdd14cc4-9f11-4aea-88d1-cb992d117c4d",name:"Prescription",type:"BusinessProcess",layer:"business"},{id:"d9d79ea4-da91-4af3-8f82-cd1c8ee86359",name:"Station Owner",type:"BusinessRole",layer:"business"},{id:"0fef08b0-e60f-4204-8679-5708ed6551e4",name:"GDPR Controller",type:"BusinessRole",layer:"business"},{id:"02d1e426-5b15-4f1f-97a6-a437a90b684f",name:"Data Gateway Owner",type:"BusinessRole",layer:"business"},{id:"ce277f99-51da-46ab-9e29-b67270ff6cc5",name:"PGL Owner",type:"BusinessRole",layer:"business"},{id:"6b7c2ebe-92f4-425a-9882-cb316f0d0366",name:"Train",type:"Product",layer:"business"},{id:"4de6d04d-91ed-4e7e-8e51-0479e8aa8dae",name:"Station Directory",type:"Product",layer:"business"},{id:"05330075-41d3-4e58-a029-b79bebae0581",name:"Train Owner",type:"BusinessRole",layer:"business"},{id:"7a48989c-176e-473f-8146-95f92179b30d",name:"Train Creator",type:"BusinessRole",layer:"business"},{id:"538a979d-9b09-4d81-ba9f-51b83c53c948",name:"Metadata exchange",type:"BusinessInteraction",layer:"business"},{id:"f96a87bf-abe4-47e4-baa5-c20ca61f3512",name:"Data Interaction Service",type:"BusinessService",layer:"business"},{id:"08363224-1f40-4684-bfb3-82c43ef7e44a",name:"Data Interaction",type:"BusinessInteraction",layer:"business"},{id:"a77f1364-620c-4366-b712-a1ba6b3728b2",name:"Data Interaction Logging Service",type:"BusinessService",layer:"business"},{id:"535b32bd-2dce-4777-935f-54a691b3b9bc",name:"Train",type:"Representation",layer:"business"},{id:"184f0590-2bfb-4d64-9f18-c4aae7110c10",name:"Data Consumer Application (Train)",type:"Representation",layer:"business"},{id:"821c4f3e-0a42-4e70-aa82-a48ede51106b",name:"Data Consumer",type:"BusinessRole",layer:"business"},{id:"0ec20625-4ce7-41ef-a21d-237e80731295",name:"Handler Manager",type:"Product",layer:"business"},{id:"aca28792-35e8-4539-a1a5-c0c2b2881a03",name:"Person",type:"BusinessActor",layer:"business"},{id:"75f2b7e6-aed8-4cac-895d-4ff977969044",name:"Organization",type:"BusinessActor",layer:"business"},{id:"ecaefc66-a017-41b3-8c5f-d4c098d5c2a2",name:"B2B Collaboration",type:"BusinessCollaboration",layer:"business"},{id:"b1b9fe1f-ce17-40bf-90a1-4bc65b982c7a",name:"B2B Interaction",type:"BusinessInteraction",layer:"business"},{id:"15e0e2e4-5cb4-4184-b99f-b243e95698a0",name:"B2B Contract",type:"Representation",layer:"business"},{id:"8ecf73b7-615d-4f82-b36e-4f9b4d4cb15b",name:"Train Payload",type:"Representation",layer:"business"},{id:"3b8a1469-f141-4976-ac22-181566b6060d",name:"Train Metadata",type:"Representation",layer:"business"},{id:"e870e9f5-7f59-4824-af30-ef8579a37343",name:"GDPR Processor",type:"BusinessRole",layer:"business"},{id:"5eb3d282-2e16-4b65-a8b2-a50834cd6b1e",name:"Station Metadata Discovery",type:"BusinessInteraction",layer:"business"},{id:"8ddfa174-6cb6-4a88-87fc-0251fb4f604a",name:"Train Metadata Request",type:"BusinessInteraction",layer:"business"},{id:"9dc78692-bd0c-40bf-b5b0-53f2d5393232",name:"Station Metadata",type:"Representation",layer:"business"},{id:"f6778260-6435-4319-981d-dfdfa2987ae5",name:"Station Content Metadata",type:"Representation",layer:"business"},{id:"5722c922-251d-49f2-9c66-9c18e337fd16",name:"Individual Consent",type:"Representation",layer:"business"},{id:"d94b0cf1-5062-4997-874d-24543382f923",name:"Consent Store",type:"Representation",layer:"business"},{id:"908271e2-701a-406a-bddd-c0de91fe1cf2",name:"Access Logs",type:"Representation",layer:"business"},{id:"ee0f54dc-5e3b-450a-bf12-a4f3131644aa",name:"Contract Log",type:"Representation",layer:"business"},{id:"fd5bc594-4b07-40ba-9f20-f1294c47dbb0",name:"Access Log",type:"Representation",layer:"business"},{id:"id-82135a0f66b24585bcc3040bfba5a5a2",name:"DS Data Interaction Interface",type:"BusinessInterface",layer:"business"},{id:"id-aab48841e6fb4ea0bb400e4bdfcbf2b5",name:"GetTrain",type:"BusinessInterface",layer:"business"},{id:"id-3f409d7d86be4d3da1f15188ec336223",name:"SendAuthenticationRequirement",type:"BusinessInterface",layer:"business"},{id:"id-05bdc16624fb46ea9771b8d73296a2ad",name:"TH Data Interaction Interface",type:"BusinessInterface",layer:"business"},{id:"id-71854db8264c49408250e21e7eed3bad",name:"GetAuthenticationRequirement",type:"BusinessInterface",layer:"business"},{id:"id-4331794c2dda4ce7807b3be898bc2090",name:"SendTrain",type:"BusinessInterface",layer:"business"},{id:"id-79ff77d94588407ba977e0a44330d952",name:"GetAuthenticationRequest",type:"BusinessInterface",layer:"business"},{id:"id-e11f3b57b8574c7db85ea3c1b69b5f21",name:"SendAuthenticationRequest",type:"BusinessInterface",layer:"business"},{id:"id-46d43e51b60749c3bb29d292d7d57e52",name:"GetAuthenticationNotification",type:"BusinessInterface",layer:"business"},{id:"id-f6cc7064d57245e08bbc969dd0367011",name:"GetAuthorizationNotification",type:"BusinessInterface",layer:"business"},{id:"id-0a7894cf33dd43b685317550fbafefe0",name:"GetTrainResults",type:"BusinessInterface",layer:"business"},{id:"id-0facf10e8bf74057a1980d28a8f807ce",name:"SendAuthenticationNotification",type:"BusinessInterface",layer:"business"},{id:"id-7c806547f50b4b3788d155a4526517b0",name:"SendAuthorizationNotification",type:"BusinessInterface",layer:"business"},{id:"id-c5012ca7c4a5458fa68c45568782e10d",name:"SendTrainResults",type:"BusinessInterface",layer:"business"},{id:"3b3694ef-8abc-421e-8fdf-15a34191d965",name:"Patient genetic variant",type:"DataObject",layer:"application"},{id:"0b31b98c-c6aa-4fea-b5fb-f62539e37063",name:"Tumor genetic variant",type:"DataObject",layer:"application"},{id:"e3900c6a-7786-489b-b6ca-4bcdb271f6cf",name:"Drug prescription",type:"DataObject",layer:"application"},{id:"a7472000-b425-4833-9bf7-bd2c62d3222f",name:"Drug usage",type:"DataObject",layer:"application"},{id:"1b05973b-1ad5-41fd-8883-35c795d0f19b",name:"Variant-drug interaction",type:"DataObject",layer:"application"},{id:"f8025c43-fd41-45fd-9e4a-6adcdf2aef9f",name:"Candidate drug(s)",type:"DataObject",layer:"application"},{id:"6590f0f7-0615-454a-a7c2-5dfa7095f365",name:"Dosage advise",type:"DataObject",layer:"application"},{id:"e08f017d-f6c7-4618-8bf6-c0bbe2166a15",name:"Drug suitability",type:"DataObject",layer:"application"},{id:"3e21e223-a86d-4627-8020-b6c4ae3fdb55",name:"Diagnosis data",type:"DataObject",layer:"application"},{id:"94f9099f-15e9-485b-9771-6d8c972b515c",name:"Pharmacogenetics analysis results",type:"DataObject",layer:"application"},{id:"1b62d280-55c2-427a-8276-a577ef58a4f4",name:"Formulary",type:"DataObject",layer:"application"},{id:"9af4585b-6020-4b6a-a997-0e2bc4d45b8c",name:"Patient Health overview",type:"DataObject",layer:"application"},{id:"96a5543a-52ac-467c-8315-6c3b81bb6177",name:"Station Metadata",type:"DataObject",layer:"application"},{id:"bd9ea50f-86de-49c1-9dc8-a9a77e8a1da4",name:"Content Metadata",type:"DataObject",layer:"application"},{id:"b1571997-b2f5-4506-9913-02bfcd1b565e",name:"Data Station API",type:"ApplicationInterface",layer:"application"},{id:"d2597134-ec8d-4d98-b782-dfd38921a1a4",name:"Data Gateway API",type:"ApplicationInterface",layer:"application"},{id:"76022922-0de1-495e-8ded-e71481d680d4",name:"Train Metadata",type:"DataObject",layer:"application"},{id:"c8b62607-1c74-4e06-ada8-4794f2afb264",name:"Train Payload",type:"DataObject",layer:"application"},{id:"ee2bad1b-23ee-4ae9-9be1-8122ab874bd1",name:"Data Gateway Metadata",type:"DataObject",layer:"application"},{id:"e08fefe2-11d1-4b06-b464-33e8ba3de4f5",name:"Data Gateway Content Metadata",type:"DataObject",layer:"application"}],y=[{id:"59767a3e-95a3-475f-a41b-7eb4479b3c3c",sourceId:"6bc437d9-918e-426f-9672-87a4c9a90ad9",targetId:"f59d1621-e9cb-409e-b5a6-c3bf8f54c89a",type:"SpecializationRelationship"},{id:"89461ee0-fc39-4bd7-8e65-d70214517570",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"1796baf9-1822-427c-b00d-9d9d708c77c5",type:"CompositionRelationship"},{id:"f55c913e-e489-4b8d-821a-5d194d45bec8",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"aedb70e3-361b-4e96-8064-3afde3f4f3e7",type:"CompositionRelationship"},{id:"a39be3c9-1d76-492c-976e-892438ceced1",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"fb16ddf6-d40e-483b-be9d-22081c6f2322",type:"CompositionRelationship"},{id:"3b6f74c9-0d9d-4574-b6f5-7504ab457adc",sourceId:"1796baf9-1822-427c-b00d-9d9d708c77c5",targetId:"aedb70e3-361b-4e96-8064-3afde3f4f3e7",type:"CompositionRelationship"},{id:"f07cf529-c8a8-47b5-89e9-73764957dd67",sourceId:"1796baf9-1822-427c-b00d-9d9d708c77c5",targetId:"fb16ddf6-d40e-483b-be9d-22081c6f2322",type:"CompositionRelationship"},{id:"7711e1b5-404a-4d24-83b8-62f214838d4c",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"2c7f1059-faa2-4c7f-8192-6a80fd050334",type:"CompositionRelationship"},{id:"a3470d9b-b772-4495-8296-1ead84116462",sourceId:"6bc437d9-918e-426f-9672-87a4c9a90ad9",targetId:"39b2f1ab-a449-435f-a0d1-6f963b378f7a",type:"CompositionRelationship"},{id:"28814630-8f0c-46a0-947f-a57e2fa1d948",sourceId:"39b2f1ab-a449-435f-a0d1-6f963b378f7a",targetId:"e078a762-0b12-414b-a17c-ebbe998869fa",type:"AssociationRelationship"},{id:"f76530d4-e3cd-4c6e-a5b0-c728b52fb25c",sourceId:"2c7f1059-faa2-4c7f-8192-6a80fd050334",targetId:"e078a762-0b12-414b-a17c-ebbe998869fa",type:"AssociationRelationship"},{id:"01a8cb21-c6c2-4be6-b4d6-2079db65e31f",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"fd41248e-7d86-443d-8ee9-e057b2f9104b",type:"RealizationRelationship"},{id:"ad24c785-254a-489b-ae76-27ff7da0b4e6",sourceId:"2c7f1059-faa2-4c7f-8192-6a80fd050334",targetId:"fd41248e-7d86-443d-8ee9-e057b2f9104b",type:"TriggeringRelationship"},{id:"d9e312c0-7389-4c96-ac1c-ad91027b2317",sourceId:"6bc437d9-918e-426f-9672-87a4c9a90ad9",targetId:"fd41248e-7d86-443d-8ee9-e057b2f9104b",type:"RealizationRelationship"},{id:"36297c91-db1d-44f7-a998-5ecce04d0754",sourceId:"39b2f1ab-a449-435f-a0d1-6f963b378f7a",targetId:"fd41248e-7d86-443d-8ee9-e057b2f9104b",type:"TriggeringRelationship"},{id:"1fc3b683-8ab9-49c1-a480-7c93b6df1dae",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"c703e840-01f2-420e-8960-510d9683c2a2",type:"CompositionRelationship"},{id:"6e66d1d5-1e61-4a6f-a804-335f21c1a0c7",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"628b68b4-594f-474b-97b7-f1ad949d1930",type:"CompositionRelationship"},{id:"79abff78-4810-4fdc-9ed4-85d029c547af",sourceId:"ce277f99-51da-46ab-9e29-b67270ff6cc5",targetId:"6bc437d9-918e-426f-9672-87a4c9a90ad9",type:"AssociationRelationship"},{id:"46c04b53-e7a5-41fb-95bc-447455ac3001",sourceId:"6bc437d9-918e-426f-9672-87a4c9a90ad9",targetId:"c82c289a-8200-43b5-93dc-2a0936cb50c8",type:"CompositionRelationship"},{id:"8916614c-8e87-4073-85f8-9505cfed992e",sourceId:"c82c289a-8200-43b5-93dc-2a0936cb50c8",targetId:"0130b467-6b9e-4bab-a623-6e7b478afa08",type:"AssociationRelationship"},{id:"a00e5849-86ff-422c-8dcb-988ea3e6a1e2",sourceId:"c703e840-01f2-420e-8960-510d9683c2a2",targetId:"0130b467-6b9e-4bab-a623-6e7b478afa08",type:"AssociationRelationship"},{id:"5f4d5613-6902-40fe-aa10-f359d08a37b6",sourceId:"c82c289a-8200-43b5-93dc-2a0936cb50c8",targetId:"fd41248e-7d86-443d-8ee9-e057b2f9104b",type:"TriggeringRelationship"},{id:"7fbc0a8f-f67d-4b38-a654-41d030cc67d3",sourceId:"c703e840-01f2-420e-8960-510d9683c2a2",targetId:"fd41248e-7d86-443d-8ee9-e057b2f9104b",type:"TriggeringRelationship"},{id:"4a72a094-6684-4321-9110-b6678d0a74a4",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"d321870d-c645-4ae7-803c-833670c62ce5",type:"RealizationRelationship"},{id:"f23c73d7-16c4-4282-a9f6-ab81c39dc43d",sourceId:"c703e840-01f2-420e-8960-510d9683c2a2",targetId:"d321870d-c645-4ae7-803c-833670c62ce5",type:"TriggeringRelationship"},{id:"59bb2a28-60b0-4991-94e5-34f2ab157820",sourceId:"d321870d-c645-4ae7-803c-833670c62ce5",targetId:"628b68b4-594f-474b-97b7-f1ad949d1930",type:"AccessRelationship"},{id:"19dc8c99-a1ff-4db8-84e0-492f37334c78",sourceId:"d321870d-c645-4ae7-803c-833670c62ce5",targetId:"fd41248e-7d86-443d-8ee9-e057b2f9104b",type:"TriggeringRelationship"},{id:"b09570dc-61d8-44e3-98d1-9015f421d614",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"5ccc56fc-090b-412d-9b5c-cc3e28463675",type:"CompositionRelationship"},{id:"da14a637-5c19-452b-9c86-36aea5c020af",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"f250ad4b-3a0e-40b4-b1a8-de6c4eacf250",type:"RealizationRelationship"},{id:"4c5c8e7c-c6b7-4b71-a581-e179b40876aa",sourceId:"f250ad4b-3a0e-40b4-b1a8-de6c4eacf250",targetId:"d321870d-c645-4ae7-803c-833670c62ce5",type:"SpecializationRelationship"},{id:"2a3050f5-9eef-4047-af67-56cafbf2709d",sourceId:"02d1e426-5b15-4f1f-97a6-a437a90b684f",targetId:"f59d1621-e9cb-409e-b5a6-c3bf8f54c89a",type:"AssociationRelationship"},{id:"bf09bb93-4b03-4bff-91e9-c92812e1977a",sourceId:"f59d1621-e9cb-409e-b5a6-c3bf8f54c89a",targetId:"c304a4f6-0662-4096-b4f9-3c9f8f6aff38",type:"CompositionRelationship"},{id:"2670f9a2-8333-4782-8529-afa17b8a5f45",sourceId:"c304a4f6-0662-4096-b4f9-3c9f8f6aff38",targetId:"0130b467-6b9e-4bab-a623-6e7b478afa08",type:"AssociationRelationship"},{id:"c522ddd1-e3ee-4ad2-bac0-f99cff04eeb2",sourceId:"5ccc56fc-090b-412d-9b5c-cc3e28463675",targetId:"628b68b4-594f-474b-97b7-f1ad949d1930",type:"AssociationRelationship"},{id:"866175b6-d90e-4ca3-a9e0-7256e67a874e",sourceId:"f59d1621-e9cb-409e-b5a6-c3bf8f54c89a",targetId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",type:"SpecializationRelationship"},{id:"fd296ce5-090f-4da7-a4d1-54f5b7411b34",sourceId:"eb1c5f8f-bfd8-4654-8502-53f507c4a343",targetId:"3b3694ef-8abc-421e-8fdf-15a34191d965",type:"AssociationRelationship"},{id:"0080cdbc-6f1e-4d28-b91b-4fcffc5ecd9d",sourceId:"eb1c5f8f-bfd8-4654-8502-53f507c4a343",targetId:"0b31b98c-c6aa-4fea-b5fb-f62539e37063",type:"AssociationRelationship"},{id:"f483219a-8c2c-49ce-ac28-46ef13e96bc9",sourceId:"e3900c6a-7786-489b-b6ca-4bcdb271f6cf",targetId:"eb1c5f8f-bfd8-4654-8502-53f507c4a343",type:"AssociationRelationship"},{id:"a3badbe2-ad3c-474f-86a6-8b12aaadd69f",sourceId:"a7472000-b425-4833-9bf7-bd2c62d3222f",targetId:"e3900c6a-7786-489b-b6ca-4bcdb271f6cf",type:"AssociationRelationship"},{id:"470ad99a-3677-49bf-9fd3-e209ae9d2db4",sourceId:"588a5c8f-616c-4c13-9633-4d813de3224b",targetId:"5bb2c2a1-49d4-41fd-913e-f7671c8bd22f",type:"AggregationRelationship"},{id:"99bc9e18-7bcd-4c26-84a2-c034ef3656e5",sourceId:"588a5c8f-616c-4c13-9633-4d813de3224b",targetId:"51180979-6341-4027-9d2a-8351197f6a24",type:"AggregationRelationship"},{id:"53478349-eb68-47d6-9d9f-56966572bc5d",sourceId:"5bb2c2a1-49d4-41fd-913e-f7671c8bd22f",targetId:"51180979-6341-4027-9d2a-8351197f6a24",type:"TriggeringRelationship"},{id:"15c25f53-7be0-4547-95aa-c8d6894396ad",sourceId:"fdd14cc4-9f11-4aea-88d1-cb992d117c4d",targetId:"f8025c43-fd41-45fd-9e4a-6adcdf2aef9f",type:"AssociationRelationship"},{id:"36e6648e-d889-4065-8004-e1d8fcd5e7c3",sourceId:"588a5c8f-616c-4c13-9633-4d813de3224b",targetId:"1b05973b-1ad5-41fd-8883-35c795d0f19b",type:"AccessRelationship"},{id:"ca3b3eee-fdeb-46df-ae25-bbd233bccbe4",sourceId:"5bb2c2a1-49d4-41fd-913e-f7671c8bd22f",targetId:"1b05973b-1ad5-41fd-8883-35c795d0f19b",type:"AccessRelationship"},{id:"ec65be0e-00ba-4fb1-b584-5e5718927ae6",sourceId:"51180979-6341-4027-9d2a-8351197f6a24",targetId:"1b05973b-1ad5-41fd-8883-35c795d0f19b",type:"AccessRelationship"},{id:"b465d15b-61a8-4fde-8958-ce4eb4408ba9",sourceId:"588a5c8f-616c-4c13-9633-4d813de3224b",targetId:"f8025c43-fd41-45fd-9e4a-6adcdf2aef9f",type:"AccessRelationship"},{id:"77c247c6-ff42-4168-a869-034406f0ffe1",sourceId:"588a5c8f-616c-4c13-9633-4d813de3224b",targetId:"3b3694ef-8abc-421e-8fdf-15a34191d965",type:"AccessRelationship"},{id:"a4f14a9a-20e6-4eb7-8753-8a04f71cce74",sourceId:"588a5c8f-616c-4c13-9633-4d813de3224b",targetId:"0b31b98c-c6aa-4fea-b5fb-f62539e37063",type:"AccessRelationship"},{id:"43c27948-b04b-4b60-9f11-799c04b63a3d",sourceId:"2818fad6-e471-4b0f-8839-b2c228cb8fed",targetId:"cf4548fa-8620-4f36-8f57-430b301c161b",type:"TriggeringRelationship"},{id:"9e4a25e3-e572-4823-8c87-d0de9ddeb495",sourceId:"cf4548fa-8620-4f36-8f57-430b301c161b",targetId:"3e21e223-a86d-4627-8020-b6c4ae3fdb55",type:"AssociationRelationship"},{id:"c978ac4b-f091-4d4c-ac7b-4f57558332af",sourceId:"cf4548fa-8620-4f36-8f57-430b301c161b",targetId:"fdd14cc4-9f11-4aea-88d1-cb992d117c4d",type:"TriggeringRelationship"},{id:"abb54196-c3e8-457d-b3d9-84d897a34363",sourceId:"2818fad6-e471-4b0f-8839-b2c228cb8fed",targetId:"fdd14cc4-9f11-4aea-88d1-cb992d117c4d",type:"AssociationRelationship"},{id:"78c12f9f-0c1d-425c-89e8-6f18ee623e15",sourceId:"fdd14cc4-9f11-4aea-88d1-cb992d117c4d",targetId:"588a5c8f-616c-4c13-9633-4d813de3224b",type:"TriggeringRelationship"},{id:"fa57d80e-832c-4c86-8a1a-a4e628fa5f31",sourceId:"94f9099f-15e9-485b-9771-6d8c972b515c",targetId:"e08f017d-f6c7-4618-8bf6-c0bbe2166a15",type:"CompositionRelationship"},{id:"15167b67-2853-4493-96ed-e6ece524bceb",sourceId:"94f9099f-15e9-485b-9771-6d8c972b515c",targetId:"6590f0f7-0615-454a-a7c2-5dfa7095f365",type:"CompositionRelationship"},{id:"089b1dd0-5eb9-4875-8bc7-174bf0977973",sourceId:"fdd14cc4-9f11-4aea-88d1-cb992d117c4d",targetId:"94f9099f-15e9-485b-9771-6d8c972b515c",type:"AccessRelationship"},{id:"cac010be-bb7f-4044-b691-145307760286",sourceId:"588a5c8f-616c-4c13-9633-4d813de3224b",targetId:"94f9099f-15e9-485b-9771-6d8c972b515c",type:"AccessRelationship"},{id:"6ac8d8da-7b94-4220-a29f-69db8c800d8d",sourceId:"5bb2c2a1-49d4-41fd-913e-f7671c8bd22f",targetId:"e08f017d-f6c7-4618-8bf6-c0bbe2166a15",type:"AccessRelationship"},{id:"ae231397-fd13-4843-ae7f-0e4a8a7d3456",sourceId:"51180979-6341-4027-9d2a-8351197f6a24",targetId:"6590f0f7-0615-454a-a7c2-5dfa7095f365",type:"AccessRelationship"},{id:"cb76d69a-ca4e-4cb6-8654-a29f8ec280b3",sourceId:"fdd14cc4-9f11-4aea-88d1-cb992d117c4d",targetId:"e3900c6a-7786-489b-b6ca-4bcdb271f6cf",type:"AccessRelationship"},{id:"e47fd302-9604-4461-a7cf-fc5da8c24f12",sourceId:"eb1c5f8f-bfd8-4654-8502-53f507c4a343",targetId:"a7472000-b425-4833-9bf7-bd2c62d3222f",type:"AccessRelationship"},{id:"8d42548b-b940-4ed5-8228-a1cb1a4093bd",sourceId:"588a5c8f-616c-4c13-9633-4d813de3224b",targetId:"1b62d280-55c2-427a-8276-a577ef58a4f4",type:"AccessRelationship"},{id:"f7a618a6-1574-4ef2-862f-8a1201b99617",sourceId:"fdd14cc4-9f11-4aea-88d1-cb992d117c4d",targetId:"1b62d280-55c2-427a-8276-a577ef58a4f4",type:"AccessRelationship"},{id:"a8454eb8-422c-496f-ac32-c5b0aeccb174",sourceId:"eb1c5f8f-bfd8-4654-8502-53f507c4a343",targetId:"9af4585b-6020-4b6a-a997-0e2bc4d45b8c",type:"AssociationRelationship"},{id:"8c0e45b4-6409-4974-826b-fd12ba489b0d",sourceId:"d9d79ea4-da91-4af3-8f82-cd1c8ee86359",targetId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",type:"AssociationRelationship"},{id:"da41c560-914a-4788-af88-ca8ec5ca9aaf",sourceId:"02d1e426-5b15-4f1f-97a6-a437a90b684f",targetId:"0fef08b0-e60f-4204-8679-5708ed6551e4",type:"SpecializationRelationship"},{id:"b12e3ea8-f750-4ecf-b98f-54230304a7f4",sourceId:"ce277f99-51da-46ab-9e29-b67270ff6cc5",targetId:"02d1e426-5b15-4f1f-97a6-a437a90b684f",type:"SpecializationRelationship"},{id:"3feed335-12c7-4120-8dce-a3cfc44d1d10",sourceId:"f59d1621-e9cb-409e-b5a6-c3bf8f54c89a",targetId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",type:"AssociationRelationship"},{id:"5cd0bac7-abc5-46f8-be65-d8e2dc969789",sourceId:"535b32bd-2dce-4777-935f-54a691b3b9bc",targetId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",type:"AssociationRelationship"},{id:"c07ad7c6-1afa-470c-bb39-7523df74f343",sourceId:"000fbe1a-6a96-4318-8a9c-970ff8cfe224",targetId:"535b32bd-2dce-4777-935f-54a691b3b9bc",type:"AssociationRelationship"},{id:"b1defae1-dff4-4856-9deb-eed28b5a407d",sourceId:"000fbe1a-6a96-4318-8a9c-970ff8cfe224",targetId:"4de6d04d-91ed-4e7e-8e51-0479e8aa8dae",type:"AssociationRelationship"},{id:"944807d9-e60b-4952-a3ca-f3b0171b3b99",sourceId:"05330075-41d3-4e58-a029-b79bebae0581",targetId:"535b32bd-2dce-4777-935f-54a691b3b9bc",type:"AssociationRelationship"},{id:"fc6fa12b-fb65-493f-a1e8-8b4ec7b52c33",sourceId:"05330075-41d3-4e58-a029-b79bebae0581",targetId:"000fbe1a-6a96-4318-8a9c-970ff8cfe224",type:"AssociationRelationship"},{id:"84ea845d-4796-4b83-a258-b781f44850c3",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"96a5543a-52ac-467c-8315-6c3b81bb6177",type:"AggregationRelationship"},{id:"abaacb73-4abf-4c89-86a6-e3143e675fb8",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"bd9ea50f-86de-49c1-9dc8-a9a77e8a1da4",type:"AggregationRelationship"},{id:"4b09c25d-44dd-4bd0-89cc-ab3621a4716a",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"b1571997-b2f5-4506-9913-02bfcd1b565e",type:"RealizationRelationship"},{id:"2f639215-06da-4bdc-830b-07339158b6e6",sourceId:"f59d1621-e9cb-409e-b5a6-c3bf8f54c89a",targetId:"d2597134-ec8d-4d98-b782-dfd38921a1a4",type:"RealizationRelationship"},{id:"a8d6e0a4-5d45-44f5-93a1-52927d597597",sourceId:"d2597134-ec8d-4d98-b782-dfd38921a1a4",targetId:"b1571997-b2f5-4506-9913-02bfcd1b565e",type:"AssociationRelationship"},{id:"f29cdf1d-f942-4e7a-bd94-ee7dd581a171",sourceId:"6b7c2ebe-92f4-425a-9882-cb316f0d0366",targetId:"76022922-0de1-495e-8ded-e71481d680d4",type:"AggregationRelationship"},{id:"56e0c37b-c8cd-40b9-9a97-b69cf75bffec",sourceId:"6b7c2ebe-92f4-425a-9882-cb316f0d0366",targetId:"c8b62607-1c74-4e06-ada8-4794f2afb264",type:"CompositionRelationship"},{id:"641be46e-34e4-4371-90e2-ccc38e48207c",sourceId:"6b7c2ebe-92f4-425a-9882-cb316f0d0366",targetId:"b1571997-b2f5-4506-9913-02bfcd1b565e",type:"ServingRelationship"},{id:"bce12f84-bc0c-4435-8d35-ccd3c55fc885",sourceId:"f59d1621-e9cb-409e-b5a6-c3bf8f54c89a",targetId:"ee2bad1b-23ee-4ae9-9be1-8122ab874bd1",type:"AggregationRelationship"},{id:"3e68cb1b-070d-4a76-848c-1e97fd4a2f34",sourceId:"f59d1621-e9cb-409e-b5a6-c3bf8f54c89a",targetId:"e08fefe2-11d1-4b06-b464-33e8ba3de4f5",type:"AggregationRelationship"},{id:"2964da42-72b5-4c39-844e-e5665ae07c6b",sourceId:"1796baf9-1822-427c-b00d-9d9d708c77c5",targetId:"d321870d-c645-4ae7-803c-833670c62ce5",type:"TriggeringRelationship"},{id:"ad2dfcef-c37c-486a-9a55-80890ea65b91",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"f96a87bf-abe4-47e4-baa5-c20ca61f3512",type:"CompositionRelationship"},{id:"6a6a1f95-5cf4-4bb7-abfe-379635658e97",sourceId:"f96a87bf-abe4-47e4-baa5-c20ca61f3512",targetId:"5ccc56fc-090b-412d-9b5c-cc3e28463675",type:"AccessRelationship"},{id:"282df2b5-2a9b-484a-8c78-a805ef5b9876",sourceId:"f96a87bf-abe4-47e4-baa5-c20ca61f3512",targetId:"d321870d-c645-4ae7-803c-833670c62ce5",type:"TriggeringRelationship"},{id:"4bb2f1e2-da67-4e79-8551-c41594bd394b",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"a77f1364-620c-4366-b712-a1ba6b3728b2",type:"CompositionRelationship"},{id:"95dfce2a-86ca-490f-ba2a-39a42e5a7fa0",sourceId:"f96a87bf-abe4-47e4-baa5-c20ca61f3512",targetId:"a77f1364-620c-4366-b712-a1ba6b3728b2",type:"TriggeringRelationship"},{id:"b9b48cf5-4b5a-4cee-b93d-53bf5a0b0e05",sourceId:"a77f1364-620c-4366-b712-a1ba6b3728b2",targetId:"0130b467-6b9e-4bab-a623-6e7b478afa08",type:"TriggeringRelationship"},{id:"075b2cfe-fa0d-4e51-8b6f-ff48f08ad186",sourceId:"08363224-1f40-4684-bfb3-82c43ef7e44a",targetId:"184f0590-2bfb-4d64-9f18-c4aae7110c10",type:"AccessRelationship"},{id:"c230a596-9cfa-4d6f-b756-0e2d82dd1997",sourceId:"05330075-41d3-4e58-a029-b79bebae0581",targetId:"821c4f3e-0a42-4e70-aa82-a48ede51106b",type:"SpecializationRelationship"},{id:"8c908dff-03a0-4fa4-bfc5-bbbc21b8778e",sourceId:"7a48989c-176e-473f-8146-95f92179b30d",targetId:"184f0590-2bfb-4d64-9f18-c4aae7110c10",type:"AssociationRelationship"},{id:"9e4773e3-c2b6-4082-b594-a6eaeb511c8c",sourceId:"7a48989c-176e-473f-8146-95f92179b30d",targetId:"0ec20625-4ce7-41ef-a21d-237e80731295",type:"AssociationRelationship"},{id:"f6733f8a-4fa4-4f8d-bbcc-9938736a2b66",sourceId:"aca28792-35e8-4539-a1a5-c0c2b2881a03",targetId:"7a48989c-176e-473f-8146-95f92179b30d",type:"AssignmentRelationship"},{id:"6669d98a-4c51-42c1-a584-0a35c35fbb68",sourceId:"75f2b7e6-aed8-4cac-895d-4ff977969044",targetId:"7a48989c-176e-473f-8146-95f92179b30d",type:"AssignmentRelationship"},{id:"cccaa276-b9db-42a1-b052-7b221f97f280",sourceId:"0ec20625-4ce7-41ef-a21d-237e80731295",targetId:"b1b9fe1f-ce17-40bf-90a1-4bc65b982c7a",type:"RealizationRelationship"},{id:"ca1512ec-2188-4f91-8206-56e35ccb5728",sourceId:"000fbe1a-6a96-4318-8a9c-970ff8cfe224",targetId:"b1b9fe1f-ce17-40bf-90a1-4bc65b982c7a",type:"RealizationRelationship"},{id:"ae19d97b-8e95-45f8-896f-e1c85a786fe9",sourceId:"ecaefc66-a017-41b3-8c5f-d4c098d5c2a2",targetId:"05330075-41d3-4e58-a029-b79bebae0581",type:"AssignmentRelationship"},{id:"7ce25438-2dce-456a-8824-653f994d2bd3",sourceId:"ecaefc66-a017-41b3-8c5f-d4c098d5c2a2",targetId:"7a48989c-176e-473f-8146-95f92179b30d",type:"AssignmentRelationship"},{id:"71830a7a-044c-41e0-8595-308d29824005",sourceId:"ecaefc66-a017-41b3-8c5f-d4c098d5c2a2",targetId:"b1b9fe1f-ce17-40bf-90a1-4bc65b982c7a",type:"TriggeringRelationship"},{id:"c2cff16f-de28-4483-9627-784b7f74d2d6",sourceId:"ecaefc66-a017-41b3-8c5f-d4c098d5c2a2",targetId:"15e0e2e4-5cb4-4184-b99f-b243e95698a0",type:"AccessRelationship"},{id:"72033782-e9a1-4964-9195-35d853778385",sourceId:"b1b9fe1f-ce17-40bf-90a1-4bc65b982c7a",targetId:"15e0e2e4-5cb4-4184-b99f-b243e95698a0",type:"AccessRelationship"},{id:"69dd8fba-3397-4060-8e3c-3ea44382c2b6",sourceId:"184f0590-2bfb-4d64-9f18-c4aae7110c10",targetId:"8ecf73b7-615d-4f82-b36e-4f9b4d4cb15b",type:"CompositionRelationship"},{id:"08f40f83-82fd-46f9-9bc3-398f4d3f639a",sourceId:"184f0590-2bfb-4d64-9f18-c4aae7110c10",targetId:"3b8a1469-f141-4976-ac22-181566b6060d",type:"CompositionRelationship"},{id:"1386c5b0-1d3d-441d-88a2-b7baa02a9446",sourceId:"b1b9fe1f-ce17-40bf-90a1-4bc65b982c7a",targetId:"3b8a1469-f141-4976-ac22-181566b6060d",type:"AccessRelationship"},{id:"9b7da3b1-33bd-43a0-93a4-982de951ab09",sourceId:"d9d79ea4-da91-4af3-8f82-cd1c8ee86359",targetId:"e870e9f5-7f59-4824-af30-ef8579a37343",type:"SpecializationRelationship"},{id:"fdbb671c-9189-4b49-b974-bf8fdaa58a32",sourceId:"08363224-1f40-4684-bfb3-82c43ef7e44a",targetId:"8ddfa174-6cb6-4a88-87fc-0251fb4f604a",type:"TriggeringRelationship"},{id:"dc633835-0135-4858-8943-7195ab026660",sourceId:"538a979d-9b09-4d81-ba9f-51b83c53c948",targetId:"5eb3d282-2e16-4b65-a8b2-a50834cd6b1e",type:"CompositionRelationship"},{id:"0248199d-346d-458e-8c67-605075ea5891",sourceId:"538a979d-9b09-4d81-ba9f-51b83c53c948",targetId:"8ddfa174-6cb6-4a88-87fc-0251fb4f604a",type:"CompositionRelationship"},{id:"b83c1028-5241-42ce-90d8-d64b0c48cea0",sourceId:"5eb3d282-2e16-4b65-a8b2-a50834cd6b1e",targetId:"4de6d04d-91ed-4e7e-8e51-0479e8aa8dae",type:"ServingRelationship"},{id:"a425974b-5585-428a-aa44-d9ef50da7ebf",sourceId:"8ddfa174-6cb6-4a88-87fc-0251fb4f604a",targetId:"3b8a1469-f141-4976-ac22-181566b6060d",type:"AccessRelationship"},{id:"9c9df4b1-d3cb-420b-888d-d424811bd02c",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"9dc78692-bd0c-40bf-b5b0-53f2d5393232",type:"CompositionRelationship"},{id:"4d4c93d1-8f8e-45ff-974a-8154053a6a4a",sourceId:"aedb70e3-361b-4e96-8064-3afde3f4f3e7",targetId:"9dc78692-bd0c-40bf-b5b0-53f2d5393232",type:"AccessRelationship"},{id:"5111df22-843a-4597-acd7-277556d79692",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"f6778260-6435-4319-981d-dfdfa2987ae5",type:"CompositionRelationship"},{id:"8b78d2f6-3e2f-4b6d-ac75-4bf8418758d2",sourceId:"fb16ddf6-d40e-483b-be9d-22081c6f2322",targetId:"f6778260-6435-4319-981d-dfdfa2987ae5",type:"AccessRelationship"},{id:"e5e3011c-2c9f-4e9c-8053-038f7292adee",sourceId:"5eb3d282-2e16-4b65-a8b2-a50834cd6b1e",targetId:"1796baf9-1822-427c-b00d-9d9d708c77c5",type:"TriggeringRelationship"},{id:"f3038db4-33fb-4f89-b371-4d467c5e764c",sourceId:"000fbe1a-6a96-4318-8a9c-970ff8cfe224",targetId:"5eb3d282-2e16-4b65-a8b2-a50834cd6b1e",type:"TriggeringRelationship"},{id:"7477f123-10b3-40b4-8cd9-ad6436b51193",sourceId:"d321870d-c645-4ae7-803c-833670c62ce5",targetId:"8ddfa174-6cb6-4a88-87fc-0251fb4f604a",type:"TriggeringRelationship"},{id:"ff60962f-7a0a-47c5-8010-e721ef1dc1ff",sourceId:"8ddfa174-6cb6-4a88-87fc-0251fb4f604a",targetId:"000fbe1a-6a96-4318-8a9c-970ff8cfe224",type:"TriggeringRelationship"},{id:"390ea282-0ee3-4f52-acf5-52a50b9c839f",sourceId:"4de6d04d-91ed-4e7e-8e51-0479e8aa8dae",targetId:"1796baf9-1822-427c-b00d-9d9d708c77c5",type:"TriggeringRelationship"},{id:"32f22675-9d5e-4606-bb87-6ad1e61c801e",sourceId:"6bc437d9-918e-426f-9672-87a4c9a90ad9",targetId:"5722c922-251d-49f2-9c66-9c18e337fd16",type:"CompositionRelationship"},{id:"56e0b9df-f4ac-4c1a-b170-4b1df4c80b6d",sourceId:"c82c289a-8200-43b5-93dc-2a0936cb50c8",targetId:"5722c922-251d-49f2-9c66-9c18e337fd16",type:"AccessRelationship"},{id:"47e3a178-8f68-4155-9caf-e14a05515371",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"d94b0cf1-5062-4997-874d-24543382f923",type:"CompositionRelationship"},{id:"a03ffd85-3805-4bb0-b8f5-7d9d1f32eac3",sourceId:"f250ad4b-3a0e-40b4-b1a8-de6c4eacf250",targetId:"d94b0cf1-5062-4997-874d-24543382f923",type:"AccessRelationship"},{id:"045a7f4a-432a-44fe-acad-ba4208890d86",sourceId:"d321870d-c645-4ae7-803c-833670c62ce5",targetId:"d94b0cf1-5062-4997-874d-24543382f923",type:"AccessRelationship"},{id:"5e23059f-2c07-4951-9056-d0621a6e9ba1",sourceId:"000fbe1a-6a96-4318-8a9c-970ff8cfe224",targetId:"908271e2-701a-406a-bddd-c0de91fe1cf2",type:"CompositionRelationship"},{id:"c028ff06-5a73-48b7-bd8f-248a181c4425",sourceId:"000fbe1a-6a96-4318-8a9c-970ff8cfe224",targetId:"ee0f54dc-5e3b-450a-bf12-a4f3131644aa",type:"CompositionRelationship"},{id:"10999709-aee0-4415-b0b6-00d83a5f7686",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"fd5bc594-4b07-40ba-9f20-f1294c47dbb0",type:"CompositionRelationship"},{id:"d18efca5-f38a-4cbb-97ff-79f166efaae0",sourceId:"f96a87bf-abe4-47e4-baa5-c20ca61f3512",targetId:"fd5bc594-4b07-40ba-9f20-f1294c47dbb0",type:"AccessRelationship"},{id:"id-bebbc64b18194c9b9241beff0b0a39a3",sourceId:"37d747b4-0488-4693-acdc-0f1f72ec4b82",targetId:"id-82135a0f66b24585bcc3040bfba5a5a2",type:"RealizationRelationship"},{id:"id-4417096b117348179c87b53c8a7444d6",sourceId:"id-82135a0f66b24585bcc3040bfba5a5a2",targetId:"08363224-1f40-4684-bfb3-82c43ef7e44a",type:"ServingRelationship"},{id:"id-b02ccf7a4ec94ab7abaf64fd07b338c1",sourceId:"id-82135a0f66b24585bcc3040bfba5a5a2",targetId:"id-aab48841e6fb4ea0bb400e4bdfcbf2b5",type:"CompositionRelationship"},{id:"id-67465cfc789742e1aacff83fe9c4763e",sourceId:"id-82135a0f66b24585bcc3040bfba5a5a2",targetId:"id-3f409d7d86be4d3da1f15188ec336223",type:"CompositionRelationship"},{id:"id-4d82b1f420d2427ebae2d2c016a6e536",sourceId:"000fbe1a-6a96-4318-8a9c-970ff8cfe224",targetId:"id-05bdc16624fb46ea9771b8d73296a2ad",type:"RealizationRelationship"},{id:"id-ac292e389be74e46a82c41cc1856b0b0",sourceId:"id-05bdc16624fb46ea9771b8d73296a2ad",targetId:"08363224-1f40-4684-bfb3-82c43ef7e44a",type:"ServingRelationship"},{id:"id-85f6e1cf12df4d06977103568a461fac",sourceId:"id-05bdc16624fb46ea9771b8d73296a2ad",targetId:"id-71854db8264c49408250e21e7eed3bad",type:"CompositionRelationship"},{id:"id-3716ff5ee429497bb3133a9f89f0d1cb",sourceId:"id-05bdc16624fb46ea9771b8d73296a2ad",targetId:"id-4331794c2dda4ce7807b3be898bc2090",type:"CompositionRelationship"},{id:"id-804d3e58229f484eae3f7f4f3688fdc6",sourceId:"id-82135a0f66b24585bcc3040bfba5a5a2",targetId:"id-79ff77d94588407ba977e0a44330d952",type:"CompositionRelationship"},{id:"id-2fffa4bb57f24cfda2c1112678718d0f",sourceId:"id-05bdc16624fb46ea9771b8d73296a2ad",targetId:"id-e11f3b57b8574c7db85ea3c1b69b5f21",type:"CompositionRelationship"},{id:"id-5431a18c0ef049459220275455b7395b",sourceId:"id-05bdc16624fb46ea9771b8d73296a2ad",targetId:"id-46d43e51b60749c3bb29d292d7d57e52",type:"CompositionRelationship"},{id:"id-475222b1c8144ffaa06037b7544931b5",sourceId:"id-05bdc16624fb46ea9771b8d73296a2ad",targetId:"id-f6cc7064d57245e08bbc969dd0367011",type:"CompositionRelationship"},{id:"id-28d81e6293a44c1a8ef05f690ff2f91a",sourceId:"id-05bdc16624fb46ea9771b8d73296a2ad",targetId:"id-0a7894cf33dd43b685317550fbafefe0",type:"CompositionRelationship"},{id:"id-d50a242fb3d3451a9dd5c4ae65caa0ea",sourceId:"id-82135a0f66b24585bcc3040bfba5a5a2",targetId:"id-0facf10e8bf74057a1980d28a8f807ce",type:"CompositionRelationship"},{id:"id-304adaa943a54bd8aa51a4cd084d186b",sourceId:"id-82135a0f66b24585bcc3040bfba5a5a2",targetId:"id-7c806547f50b4b3788d155a4526517b0",type:"CompositionRelationship"},{id:"id-b37a94cbadd84143b1378f45a1cfc71b",sourceId:"id-82135a0f66b24585bcc3040bfba5a5a2",targetId:"id-c5012ca7c4a5458fa68c45568782e10d",type:"CompositionRelationship"}],l=[{id:"dd9c5769-a320-47de-91e6-92b8d0544e9b",name:"Default View",viewpoint:""},{id:"51136d96-ac83-409b-a0bd-d3959066ea32",name:"CoreServices",viewpoint:""},{id:"e08a0617-5dbf-4a30-87bc-55817be95059",name:"Use cases - data requirements",viewpoint:""},{id:"692e16ce-92c9-478d-b75c-e6ddcce2926e",name:"FAIR Data Train base architecture",viewpoint:""},{id:"068ae525-c9d9-41ff-8f23-504c57991a6c",name:"FDT interfaces and metadata",viewpoint:""},{id:"976cc28f-eaae-4feb-ba1b-0887ca28ccdd",name:"Data Station and Gateway",viewpoint:""}],u={identifier:e,archimateId:a,name:d,description:c,formats:b,source:i,sourceFile:t,sourceFormat:f,timestamp:s,tags:n,duplicates:o,language:r,elements:p,relationships:y,views:l};export{a as archimateId,u as default,c as description,o as duplicates,p as elements,b as formats,e as identifier,r as language,d as name,y as relationships,i as source,t as sourceFile,f as sourceFormat,n as tags,s as timestamp,l as views};