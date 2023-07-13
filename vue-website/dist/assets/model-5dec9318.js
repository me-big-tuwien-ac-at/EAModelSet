const e="https://me.big.tuwien.ac.at/EAModelSet/424943f6-9b04-4907-8694-150907e682d1",a="424943f6-9b04-4907-8694-150907e682d1",s="Pattern001: Repair and Maintenance",c="",t=["XML","CSV","JSON","ARCHIMATE"],d="GitHub",i="raw-data/github/archimate/pattern001.archimate",o="ARCHIMATE",b="29-06-2023 09:32:03",n=[],r=[],f="en",p=[{id:"d6f7bd93-3c1c-4676-86ba-04e089a95217",name:"Cost Conscious Customer",type:"BusinessActor",layer:"business"},{id:"040f6624-9a32-450d-b1a7-ffe75563fb35",name:"B2B Customer",type:"BusinessActor",layer:"business"},{id:"3ad5b64c-3475-4f11-a7d3-dd973c89e3c5",name:"Maintenance, Repair and Control",type:"BusinessService",layer:"business"},{id:"0a8c2e65-9ed7-4187-9726-66350b91f7d9",name:"Providing (product-based) services and results",type:"BusinessProcess",layer:"business"},{id:"77d87b96-5b46-48ed-ade1-cf6b186f95b7",name:"Manufacturers",type:"BusinessActor",layer:"business"},{id:"73297c40-27d4-47d0-bec1-e7296c3c0f85",name:"Service providers",type:"BusinessActor",layer:"business"},{id:"97d29ebc-c19c-4efb-95ea-5bc2a9c07c19",name:"Maintaining orrepairing products, components",type:"BusinessProcess",layer:"business"},{id:"341a9717-0f76-4e1e-8231-7b83810d9da8",name:"Labor",type:"BusinessRole",layer:"business"},{id:"33ff2418-a9a4-403c-bf16-da65004e3bac",name:"Payments for Functions or Results",type:"Contract",layer:"business"},{id:"e7af695f-7fba-46fb-bf77-933d627127b1",name:"Services",type:"Grouping",layer:"other"},{id:"c279e057-eb4a-47bd-bd70-fbe62847c34b",name:"Target Customers",type:"Grouping",layer:"other"},{id:"34d83bfa-416d-4293-9d9f-88e17f8dcd57",name:"Value Delivery Processes",type:"Grouping",layer:"other"},{id:"05c11a78-1429-4981-8dbc-84a4f27bc15c",name:"Partners and stakeholders",type:"Grouping",layer:"other"},{id:"ef839e95-b58c-47aa-ba72-5e307c2ca085",name:"Value creation processes",type:"Grouping",layer:"other"},{id:"fde869ba-49ce-49f5-b83b-24137158969a",name:"Revenues",type:"Grouping",layer:"other"},{id:"e2db0fd7-bc44-4ec1-8aaa-0622648920ea",name:"Costs",type:"Grouping",layer:"other"}],u=[{id:"3f042ae3-c197-423b-835d-a9a93d047623",sourceId:"c279e057-eb4a-47bd-bd70-fbe62847c34b",targetId:"d6f7bd93-3c1c-4676-86ba-04e089a95217",type:"CompositionRelationship"},{id:"25dff2a1-7451-4212-9163-790eabbc3bfb",sourceId:"c279e057-eb4a-47bd-bd70-fbe62847c34b",targetId:"040f6624-9a32-450d-b1a7-ffe75563fb35",type:"CompositionRelationship"},{id:"3baa0096-255c-4fbb-a30e-8782f4225497",sourceId:"e7af695f-7fba-46fb-bf77-933d627127b1",targetId:"3ad5b64c-3475-4f11-a7d3-dd973c89e3c5",type:"CompositionRelationship"},{id:"d2abb925-5fb3-48fe-bee7-e05c2508336e",sourceId:"34d83bfa-416d-4293-9d9f-88e17f8dcd57",targetId:"0a8c2e65-9ed7-4187-9726-66350b91f7d9",type:"CompositionRelationship"},{id:"17ef4d46-7b1a-4d3f-8bec-b53f6b41c735",sourceId:"05c11a78-1429-4981-8dbc-84a4f27bc15c",targetId:"77d87b96-5b46-48ed-ade1-cf6b186f95b7",type:"CompositionRelationship"},{id:"0ea600f8-d8b6-4e0a-9a94-b29e1f8e1b35",sourceId:"05c11a78-1429-4981-8dbc-84a4f27bc15c",targetId:"73297c40-27d4-47d0-bec1-e7296c3c0f85",type:"CompositionRelationship"},{id:"ae0f79b6-b16c-4fa5-8fa2-481c1c34d6bc",sourceId:"ef839e95-b58c-47aa-ba72-5e307c2ca085",targetId:"97d29ebc-c19c-4efb-95ea-5bc2a9c07c19",type:"CompositionRelationship"},{id:"437d2c86-56f0-47d4-959b-c91a547b846a",sourceId:"e2db0fd7-bc44-4ec1-8aaa-0622648920ea",targetId:"341a9717-0f76-4e1e-8231-7b83810d9da8",type:"CompositionRelationship"},{id:"cd0147bc-11b4-4756-a9c9-5f6177e54b6d",sourceId:"e2db0fd7-bc44-4ec1-8aaa-0622648920ea",targetId:"3ad5b64c-3475-4f11-a7d3-dd973c89e3c5",type:"CompositionRelationship"},{id:"cefaf9f5-8a1a-4e60-9f2c-d5f8d17692c0",sourceId:"fde869ba-49ce-49f5-b83b-24137158969a",targetId:"33ff2418-a9a4-403c-bf16-da65004e3bac",type:"CompositionRelationship"}],m=[{id:"a3e9f8e0-e1b4-453f-9fea-ea71d244ca06",name:"Default View",viewpoint:""}],l={identifier:e,archimateId:a,name:s,description:c,formats:t,source:d,sourceFile:i,sourceFormat:o,timestamp:b,tags:n,duplicates:r,language:f,elements:p,relationships:u,views:m};export{a as archimateId,l as default,c as description,r as duplicates,p as elements,t as formats,e as identifier,f as language,s as name,u as relationships,d as source,i as sourceFile,o as sourceFormat,n as tags,b as timestamp,m as views};