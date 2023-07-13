const e="https://me.big.tuwien.ac.at/EAModelSet/a6414fe3-a968-441d-aca9-f20e142b496e",a="a6414fe3-a968-441d-aca9-f20e142b496e",d="toop-framework",c="",i=["XML","CSV","JSON","ARCHIMATE"],b="GitHub",t="raw-data/github/xml/toop-framework.xml",s="XML",n="29-06-2023 09:26:39",f=["DUPLICATE"],o=["raw-data/github/archimate/toop-framework.archimate"],r="en",p=[{id:"bdaf043d-fff0-442a-903d-284aebc38566",name:"Public Service",type:"BusinessService",layer:"business"},{id:"ea330969-d63a-4495-a916-781716737d37",name:"Public Service Interface",type:"BusinessInterface",layer:"business"},{id:"id-4748b47a-60d2-4a25-ad93-b47649e3ae91",name:"Business Capability",type:"BusinessFunction",layer:"business"},{id:"d05b0f8b-4bec-491f-a028-88aeeac5b59e",name:"Business Role",type:"BusinessRole",layer:"business"},{id:"bc37c375-6db8-4de5-980b-46c7db1926cf",name:"Business Interaction",type:"BusinessInteraction",layer:"business"},{id:"id-4c8dbbbc-1b7c-4f6e-a486-4e7f05826357",name:"Business Object",type:"BusinessObject",layer:"business"},{id:"id-21b19116-bd9f-4a77-a7d0-3ab18343d634",name:"Administation",type:"BusinessActor",layer:"business"},{id:"d89c6119-1c4b-4dae-bba3-9fa5a8dbeaf8",name:"Capability Level 1",type:"BusinessFunction",layer:"business"},{id:"id-32b4ae35-29a2-463d-997c-42d76e5c9096",name:"Functionality",type:"ApplicationFunction",layer:"application"},{id:"id-9f52f1e6-5886-429f-b361-0f8c9f30cdec",name:"Component",type:"ApplicationComponent",layer:"application"},{id:"id-35c6ef88-7f63-4f00-9c32-9882f6384ca4",name:"Data Object",type:"DataObject",layer:"application"},{id:"b52d3382-8efa-4cb0-a974-cb27cd656cc8",name:"DSI Component",type:"ApplicationComponent",layer:"application"},{id:"c14044eb-61a3-4bb6-a8cd-c89ab6e1c4e6",name:"DSI Object",type:"DataObject",layer:"application"},{id:"d524c2d9-8217-4067-8abe-ad90a3670a63",name:"DSI Interface",type:"ApplicationInterface",layer:"application"},{id:"id-41e784ce-3f81-403d-9a01-c03104acb0e6",name:"DSI Service",type:"ApplicationService",layer:"application"},{id:"id-78f0c6d6-32e4-40d1-b676-b7fd3ca1bd09",name:"DSI Feature",type:"ApplicationFunction",layer:"application"}],u=[{id:"ba753fb9-49fd-42e9-90aa-f2df0f123751",sourceId:"bc37c375-6db8-4de5-980b-46c7db1926cf",targetId:"bdaf043d-fff0-442a-903d-284aebc38566",type:"Realization"},{id:"id-75db09a5-5a9b-44d2-99b0-a9c5286bbc3c",sourceId:"ea330969-d63a-4495-a916-781716737d37",targetId:"bdaf043d-fff0-442a-903d-284aebc38566",type:"Assignment"},{id:"id-24610eb8-95e4-4198-b809-9459c870fe85",sourceId:"d05b0f8b-4bec-491f-a028-88aeeac5b59e",targetId:"d89c6119-1c4b-4dae-bba3-9fa5a8dbeaf8",type:"Assignment"},{id:"id-7af74a69-d30f-46a6-9438-e643040440a7",sourceId:"id-32b4ae35-29a2-463d-997c-42d76e5c9096",targetId:"id-4748b47a-60d2-4a25-ad93-b47649e3ae91",type:"Serving"},{id:"d770b81b-e83c-4d2c-b5b7-e9c788b8c972",sourceId:"id-9f52f1e6-5886-429f-b361-0f8c9f30cdec",targetId:"id-32b4ae35-29a2-463d-997c-42d76e5c9096",type:"Assignment"},{id:"id-75012b02-bfa9-4281-8503-9f35d7691b82",sourceId:"id-4748b47a-60d2-4a25-ad93-b47649e3ae91",targetId:"bc37c375-6db8-4de5-980b-46c7db1926cf",type:"Serving"},{id:"id-26335754-9256-494f-91ae-b063b10cdcf9",sourceId:"id-4748b47a-60d2-4a25-ad93-b47649e3ae91",targetId:"id-4c8dbbbc-1b7c-4f6e-a486-4e7f05826357",type:"Access"},{id:"id-82449cf6-ae43-4d14-bf20-99bde9941c32",sourceId:"id-21b19116-bd9f-4a77-a7d0-3ab18343d634",targetId:"d05b0f8b-4bec-491f-a028-88aeeac5b59e",type:"Assignment"},{id:"id-1ad4a6ca-f04c-4b34-93c3-e2e38cdd5f01",sourceId:"id-35c6ef88-7f63-4f00-9c32-9882f6384ca4",targetId:"id-4c8dbbbc-1b7c-4f6e-a486-4e7f05826357",type:"Realization"},{id:"d7b9d3cb-88d1-409c-9bac-2816a813a394",sourceId:"id-32b4ae35-29a2-463d-997c-42d76e5c9096",targetId:"id-35c6ef88-7f63-4f00-9c32-9882f6384ca4",type:"Access"},{id:"befeb9f5-680b-4a77-80ee-531c20f302c8",sourceId:"b52d3382-8efa-4cb0-a974-cb27cd656cc8",targetId:"d524c2d9-8217-4067-8abe-ad90a3670a63",type:"Composition"},{id:"aabe38e7-b7ca-43a9-9817-9383c6dd7fba",sourceId:"d524c2d9-8217-4067-8abe-ad90a3670a63",targetId:"id-41e784ce-3f81-403d-9a01-c03104acb0e6",type:"Assignment"},{id:"ef89e428-140e-43b6-a5fb-2f0546981705",sourceId:"b52d3382-8efa-4cb0-a974-cb27cd656cc8",targetId:"id-41e784ce-3f81-403d-9a01-c03104acb0e6",type:"Realization"},{id:"id-74804e30-65c2-4ec8-b1a5-2c6a5e64d3c1",sourceId:"b52d3382-8efa-4cb0-a974-cb27cd656cc8",targetId:"c14044eb-61a3-4bb6-a8cd-c89ab6e1c4e6",type:"Access"},{id:"id-88ddba34-97ad-4456-bb28-37274becde85",sourceId:"d89c6119-1c4b-4dae-bba3-9fa5a8dbeaf8",targetId:"id-4748b47a-60d2-4a25-ad93-b47649e3ae91",type:"Composition"},{id:"id-3e21aa5c-cd69-463b-9e70-17cb48eb770d",sourceId:"id-78f0c6d6-32e4-40d1-b676-b7fd3ca1bd09",targetId:"id-32b4ae35-29a2-463d-997c-42d76e5c9096",type:"Serving"},{id:"be0e26a5-daec-4c6d-b594-a80a1ed97adf",sourceId:"b52d3382-8efa-4cb0-a974-cb27cd656cc8",targetId:"id-78f0c6d6-32e4-40d1-b676-b7fd3ca1bd09",type:"Assignment"}],l=[{id:"bca3fb7b-d5fe-428a-b7e6-76ea2efee5d1",name:"toop-business-model",viewpoint:""}],m={identifier:e,archimateId:a,name:d,description:c,formats:i,source:b,sourceFile:t,sourceFormat:s,timestamp:n,tags:f,duplicates:o,language:r,elements:p,relationships:u,views:l};export{a as archimateId,m as default,c as description,o as duplicates,p as elements,i as formats,e as identifier,r as language,d as name,u as relationships,b as source,t as sourceFile,s as sourceFormat,f as tags,n as timestamp,l as views};