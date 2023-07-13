const e="https://me.big.tuwien.ac.at/EAModelSet/5ac4a4b8-9fa0-460d-8f23-e980ae7b0713",a="5ac4a4b8-9fa0-460d-8f23-e980ae7b0713",c="Yodata",d="",t=["XML","CSV","JSON","ARCHIMATE"],i="GitHub",o="raw-data/github/archimate/yodata.archimate",s="ARCHIMATE",n="29-06-2023 09:29:47",b=[],f=[],r="en",p=[{id:"799e9c9f-b24d-4e9e-9bc0-bd9140ca112c",name:"master/root",type:"BusinessActor",layer:"business"},{id:"73f240b9-8ed5-4846-949f-34d8a700a68b",name:"Service Control Policies",type:"Contract",layer:"business"},{id:"0f583790-b516-4a11-a14b-b62b5cb15c41",name:"Business Role",type:"BusinessRole",layer:"business"},{id:"7a077337-f494-4dfd-a72d-4f1f3d6deca7",name:"FullAwsAccess",type:"BusinessRole",layer:"business"},{id:"6ec832a0-aa3a-4687-a6ba-58e72854ad25",name:"unified account activity log",type:"BusinessRole",layer:"business"},{id:"903c672b-f935-40cd-acf1-576fd81495ed",name:"unified account resource activity log",type:"BusinessRole",layer:"business"},{id:"3083ae6f-ef47-48a7-a5e9-c58ac7fb070e",name:"unified account billing metrics",type:"BusinessRole",layer:"business"},{id:"8d5c10ee-ed16-4371-894e-e8dbf481277d",name:"Yodata User Accounts",type:"BusinessActor",layer:"business"},{id:"2dd203b0-6293-41c0-b96e-3d3fd5275698",name:"admin role",type:"BusinessRole",layer:"business"},{id:"5b35e29f-4e60-4b3d-a05e-0300ed7d3622",name:"support role",type:"BusinessRole",layer:"business"},{id:"63cd2859-66e9-43b3-9cf0-46a91083580a",name:"security role",type:"BusinessRole",layer:"business"},{id:"63802595-639a-4bc2-8d6e-2f647ce7feca",name:"Customer IAM Accounts",type:"BusinessActor",layer:"business"},{id:"31158f7e-94ed-453f-ae87-ef7dc568f39a",name:"Customer Account",type:"ApplicationComponent",layer:"application"},{id:"6b48a131-84be-4f78-a2e2-6c43db22ff2c",name:"Reflex Resources",type:"ApplicationCollaboration",layer:"application"},{id:"1c41b2ca-eea7-4e4f-976d-efce785bec2e",name:"Application Service",type:"ApplicationService",layer:"application"},{id:"e8ed628a-7078-4768-a51f-50fa1bd9cfae",name:"Customer Specific Services",type:"ApplicationComponent",layer:"application"},{id:"b3c66973-5042-483e-ada4-6b18cbfba8c7",name:"Reflex Instance",type:"ApplicationComponent",layer:"application"},{id:"cc64153c-7009-4d8a-9bf8-580e1fd046bb",name:"Customer Data",type:"ApplicationComponent",layer:"application"},{id:"75499d29-bb31-4837-87f0-407f04b2fa0c",name:"BHHS Account",type:"Node",layer:"technology"},{id:"eccbb005-7c4d-4c47-a980-d48d3ea59b65",name:"Real Living Account",type:"Node",layer:"technology"},{id:"9d64b6b4-e0f4-42ee-9881-b24037788e23",name:"BHCRE Account",type:"Node",layer:"technology"},{id:"1755095e-dcbd-482a-a252-814730941f54",name:"rl.hsfaffiliates.com",type:"CommunicationNetwork",layer:"technology"},{id:"19f8680a-3d8c-46da-a0dc-32069e801a28",name:"bhhs.hsfaffiliates.com",type:"CommunicationNetwork",layer:"technology"},{id:"8084d3a0-f296-4bb1-8d60-bbbdcd04bdab",name:"reflex.bhcre.com",type:"CommunicationNetwork",layer:"technology"},{id:"6fde9c8b-953a-4270-8262-4ac548fda491",name:"dev.yodata.io",type:"CommunicationNetwork",layer:"technology"},{id:"96d4d2b6-ecd9-485f-8cf4-90f3142de733",name:"SOC2 audit required for hsoa contract",type:"Driver",layer:"motivation"},{id:"1210a6f0-89b9-4b2b-8064-eb27653b5182",name:"accedential loss of customer data will end the business as surely as a cyberattack",type:"Assessment",layer:"motivation"},{id:"097117c8-a508-4248-b64f-c235745fe5b1",name:"accedential loss of customer data will end the business as surely as a cyberattack",type:"Driver",layer:"motivation"},{id:"1560e3f0-fe94-4d64-8c0f-1e43a6a2f6ca",name:"AWS Well Architected Review Planned in Q1",type:"WorkPackage",layer:"implementation_migration"},{id:"80cc015c-7116-45c0-84b8-f1baef552273",name:"Use subaccounts to protect against accidental data loss",type:"WorkPackage",layer:"implementation_migration"},{id:"a3ca80c0-157a-4d00-ae8e-6b45517cdddc",name:"internal security review (in progres)",type:"WorkPackage",layer:"implementation_migration"},{id:"3120cb07-c796-4e07-be63-6f5c5ade1e94",name:"Work Package",type:"WorkPackage",layer:"implementation_migration"},{id:"2c254442-96b8-43bd-b563-cf6010ec5584",name:"Shared Services Act",type:"Grouping",layer:"other"},{id:"63151cc4-34dc-40d5-8484-77a292279e98",name:"Yodata Ops Act",type:"Grouping",layer:"other"},{id:"d53b5d29-ee85-4c62-b059-2b38f2e78875",name:"Customer Accounts",type:"Grouping",layer:"other"}],l=[{id:"04947c09-d2c1-4478-b3e5-6822984229fc",sourceId:"2c254442-96b8-43bd-b563-cf6010ec5584",targetId:"6ec832a0-aa3a-4687-a6ba-58e72854ad25",type:"CompositionRelationship"},{id:"4d168c38-a2ee-478f-9559-8f24d8c6cc39",sourceId:"2c254442-96b8-43bd-b563-cf6010ec5584",targetId:"903c672b-f935-40cd-acf1-576fd81495ed",type:"CompositionRelationship"},{id:"c382080a-88af-4fb0-9847-af8c83ebbc59",sourceId:"2c254442-96b8-43bd-b563-cf6010ec5584",targetId:"3083ae6f-ef47-48a7-a5e9-c58ac7fb070e",type:"CompositionRelationship"},{id:"9e8dd2f8-bc9f-4c99-9f5a-a3abeb4fe8fb",sourceId:"63151cc4-34dc-40d5-8484-77a292279e98",targetId:"8d5c10ee-ed16-4371-894e-e8dbf481277d",type:"CompositionRelationship"},{id:"c25ae528-41d1-4830-af07-e99db93af0ea",sourceId:"63151cc4-34dc-40d5-8484-77a292279e98",targetId:"2dd203b0-6293-41c0-b96e-3d3fd5275698",type:"CompositionRelationship"},{id:"0bbd2c60-23a5-4f82-9011-8b9de4bccaed",sourceId:"63151cc4-34dc-40d5-8484-77a292279e98",targetId:"5b35e29f-4e60-4b3d-a05e-0300ed7d3622",type:"CompositionRelationship"},{id:"6d5f6f99-dd60-484e-beea-64d60c1976af",sourceId:"63151cc4-34dc-40d5-8484-77a292279e98",targetId:"63cd2859-66e9-43b3-9cf0-46a91083580a",type:"CompositionRelationship"},{id:"c1530201-b238-48ce-996a-c2b557c0b734",sourceId:"d53b5d29-ee85-4c62-b059-2b38f2e78875",targetId:"1755095e-dcbd-482a-a252-814730941f54",type:"CompositionRelationship"},{id:"8643ca55-2f08-4cd3-81ba-705af2678cba",sourceId:"d53b5d29-ee85-4c62-b059-2b38f2e78875",targetId:"19f8680a-3d8c-46da-a0dc-32069e801a28",type:"CompositionRelationship"},{id:"c9d5b72f-1c99-490a-85af-ee715d99504e",sourceId:"d53b5d29-ee85-4c62-b059-2b38f2e78875",targetId:"8084d3a0-f296-4bb1-8d60-bbbdcd04bdab",type:"CompositionRelationship"},{id:"821a71b5-05d2-46ce-bcbe-4f7e700a2a61",sourceId:"d53b5d29-ee85-4c62-b059-2b38f2e78875",targetId:"6fde9c8b-953a-4270-8262-4ac548fda491",type:"CompositionRelationship"},{id:"964a443b-727d-470f-93c5-98a2b5ebd3b9",sourceId:"6b48a131-84be-4f78-a2e2-6c43db22ff2c",targetId:"31158f7e-94ed-453f-ae87-ef7dc568f39a",type:"AggregationRelationship"},{id:"4b5b2aaf-447a-48d7-983f-931f8a0fa2a3",sourceId:"31158f7e-94ed-453f-ae87-ef7dc568f39a",targetId:"b3c66973-5042-483e-ada4-6b18cbfba8c7",type:"CompositionRelationship"},{id:"ef3466c9-6412-4b7d-bdef-51a979d6c22f",sourceId:"31158f7e-94ed-453f-ae87-ef7dc568f39a",targetId:"e8ed628a-7078-4768-a51f-50fa1bd9cfae",type:"CompositionRelationship"},{id:"12dff849-5d67-4802-a34d-d5bd1af1cd9a",sourceId:"31158f7e-94ed-453f-ae87-ef7dc568f39a",targetId:"cc64153c-7009-4d8a-9bf8-580e1fd046bb",type:"CompositionRelationship"},{id:"df32ee66-6a90-4222-a134-253595088f93",sourceId:"1755095e-dcbd-482a-a252-814730941f54",targetId:"31158f7e-94ed-453f-ae87-ef7dc568f39a",type:"RealizationRelationship"},{id:"2b7dd356-7f8b-407c-a248-c337f981ec11",sourceId:"799e9c9f-b24d-4e9e-9bc0-bd9140ca112c",targetId:"7a077337-f494-4dfd-a72d-4f1f3d6deca7",type:"AssignmentRelationship"},{id:"7be98474-8ac3-43dd-aafc-27de778614bb",sourceId:"1560e3f0-fe94-4d64-8c0f-1e43a6a2f6ca",targetId:"96d4d2b6-ecd9-485f-8cf4-90f3142de733",type:"InfluenceRelationship"},{id:"eba3c0c8-b4e1-4a4b-8ae4-6699ce71a692",sourceId:"80cc015c-7116-45c0-84b8-f1baef552273",targetId:"097117c8-a508-4248-b64f-c235745fe5b1",type:"AssociationRelationship"},{id:"11bee419-3362-4139-aa5b-d90bbc3230f8",sourceId:"a3ca80c0-157a-4d00-ae8e-6b45517cdddc",targetId:"097117c8-a508-4248-b64f-c235745fe5b1",type:"InfluenceRelationship"},{id:"0fc8680c-e186-488c-b781-dabc21e6d27d",sourceId:"a3ca80c0-157a-4d00-ae8e-6b45517cdddc",targetId:"96d4d2b6-ecd9-485f-8cf4-90f3142de733",type:"InfluenceRelationship"},{id:"7e2e68e0-f879-4129-a2b0-cfa567079f56",sourceId:"80cc015c-7116-45c0-84b8-f1baef552273",targetId:"73f240b9-8ed5-4846-949f-34d8a700a68b",type:"RealizationRelationship"},{id:"3c692d6c-99a6-4840-8724-786a3df6b565",sourceId:"a3ca80c0-157a-4d00-ae8e-6b45517cdddc",targetId:"799e9c9f-b24d-4e9e-9bc0-bd9140ca112c",type:"RealizationRelationship"}],m=[{id:"f77c57a2-bcca-4cf3-94a0-48c826c917e8",name:"Default View",viewpoint:""},{id:"c3de123c-4615-4aee-b991-ee7c3530f28b",name:"AWS Account Security",viewpoint:""}],y={identifier:e,archimateId:a,name:c,description:d,formats:t,source:i,sourceFile:o,sourceFormat:s,timestamp:n,tags:b,duplicates:f,language:r,elements:p,relationships:l,views:m};export{a as archimateId,y as default,d as description,f as duplicates,p as elements,t as formats,e as identifier,r as language,c as name,l as relationships,i as source,o as sourceFile,s as sourceFormat,b as tags,n as timestamp,m as views};