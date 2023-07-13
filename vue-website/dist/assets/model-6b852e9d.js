const e="https://me.big.tuwien.ac.at/EAModelSet/0476a732-40e4-4028-ac1b-616b4966be30",a="0476a732-40e4-4028-ac1b-616b4966be30",d="Microservices Design Patterns - Saga Orchestration",c="",t=["XML","CSV","JSON","ARCHIMATE"],f="GitHub",i="raw-data/github/archimate/microservices-design-patterns.archimate",o="ARCHIMATE",b="29-06-2023 09:30:12",p=[],n=[],s="en",r=[{id:"01ead4ce-dc20-4845-bffa-a17ef91a962b",name:"Order Microservice",type:"ApplicationComponent",layer:"application"},{id:"1cfffb1a-d654-40d5-b1a2-5da267815219",name:"Payment Microservice",type:"ApplicationComponent",layer:"application"},{id:"a65f3d15-5f27-427d-8dfa-5cf144f3bd85",name:"Kafka",type:"ApplicationComponent",layer:"application"},{id:"5c925794-dc45-4fb2-84df-3e75461a30d2",name:"orderSaga topic",type:"ApplicationComponent",layer:"application"},{id:"6cedda7e-a517-426c-9b97-aca57e03ac53",name:"payments topic",type:"ApplicationComponent",layer:"application"},{id:"36b046d4-af7d-4c71-881b-95e50ce16aa9",name:"Create order http",type:"ApplicationInterface",layer:"application"},{id:"e6275b58-34fe-43d5-b767-e739e0f66019",name:"Accept order events",type:"ApplicationInterface",layer:"application"},{id:"5cd45d16-87b4-48a1-8e7b-7cba813f96fc",name:"Subscribe to order events",type:"ApplicationInterface",layer:"application"},{id:"68b882d8-d9d0-428a-93ea-6f714253beff",name:"Accept payment events",type:"ApplicationInterface",layer:"application"},{id:"57aa17f1-06cf-4f40-9380-74a67f140fec",name:"Subscribe to payment events",type:"ApplicationInterface",layer:"application"},{id:"664b2b80-529e-4ee7-b045-8d4cc7beadf2",name:"Order",type:"DataObject",layer:"application"},{id:"b4ba05d7-38bf-4a7e-b53e-71dbd191b3f2",name:"Get orders",type:"ApplicationInterface",layer:"application"},{id:"1a64b803-88b0-4a15-95db-d9f44a059db8",name:"Transaction",type:"DataObject",layer:"application"},{id:"9d5cc65c-96fc-4112-ad0e-bfe8c3542d77",name:"shipments topic",type:"ApplicationComponent",layer:"application"},{id:"1f5732cf-2a9f-4782-98ce-7b50c484f2db",name:"Shipment microservice",type:"ApplicationComponent",layer:"application"},{id:"7898dc40-7a2d-48f1-8c2a-0ce35cd86e1c",name:"Shipment",type:"DataObject",layer:"application"},{id:"5efea9d6-7061-4016-94ea-465d7e122b06",name:"Order Saga",type:"DataObject",layer:"application"}],l=[{id:"15a6b8c9-da40-4f75-84a4-a66f95e85c31",sourceId:"a65f3d15-5f27-427d-8dfa-5cf144f3bd85",targetId:"5c925794-dc45-4fb2-84df-3e75461a30d2",type:"CompositionRelationship"},{id:"fdd34e1a-d3ae-449c-a537-cbad462b2a8b",sourceId:"a65f3d15-5f27-427d-8dfa-5cf144f3bd85",targetId:"6cedda7e-a517-426c-9b97-aca57e03ac53",type:"CompositionRelationship"},{id:"27e2f84d-1098-4239-bf8b-9fde5e4081be",sourceId:"01ead4ce-dc20-4845-bffa-a17ef91a962b",targetId:"36b046d4-af7d-4c71-881b-95e50ce16aa9",type:"CompositionRelationship"},{id:"76bf49ce-34f0-4c10-8df4-d448fc102cc9",sourceId:"1cfffb1a-d654-40d5-b1a2-5da267815219",targetId:"68b882d8-d9d0-428a-93ea-6f714253beff",type:"FlowRelationship"},{id:"68d5819d-aca2-4b88-8c7c-4e020bf657ee",sourceId:"01ead4ce-dc20-4845-bffa-a17ef91a962b",targetId:"e6275b58-34fe-43d5-b767-e739e0f66019",type:"FlowRelationship"},{id:"ceea517a-2c79-472f-9ef6-5fb193235d36",sourceId:"a65f3d15-5f27-427d-8dfa-5cf144f3bd85",targetId:"e6275b58-34fe-43d5-b767-e739e0f66019",type:"CompositionRelationship"},{id:"146fc256-c480-478e-a95a-dfce21ef90af",sourceId:"5c925794-dc45-4fb2-84df-3e75461a30d2",targetId:"e6275b58-34fe-43d5-b767-e739e0f66019",type:"CompositionRelationship"},{id:"e1b53660-19fd-48d4-b1bd-f23f32327b08",sourceId:"a65f3d15-5f27-427d-8dfa-5cf144f3bd85",targetId:"5cd45d16-87b4-48a1-8e7b-7cba813f96fc",type:"CompositionRelationship"},{id:"16b6a832-f5e0-44b2-816e-8b4f4690f491",sourceId:"5c925794-dc45-4fb2-84df-3e75461a30d2",targetId:"5cd45d16-87b4-48a1-8e7b-7cba813f96fc",type:"CompositionRelationship"},{id:"ae1e8b55-84a7-40a3-9d9f-7cc4df277853",sourceId:"a65f3d15-5f27-427d-8dfa-5cf144f3bd85",targetId:"68b882d8-d9d0-428a-93ea-6f714253beff",type:"CompositionRelationship"},{id:"31a4f848-94ac-457f-8eaf-d67b88cb4390",sourceId:"a65f3d15-5f27-427d-8dfa-5cf144f3bd85",targetId:"6cedda7e-a517-426c-9b97-aca57e03ac53",type:"CompositionRelationship"},{id:"2f491b69-3ff1-4d26-9c71-2925ff900ef4",sourceId:"6cedda7e-a517-426c-9b97-aca57e03ac53",targetId:"68b882d8-d9d0-428a-93ea-6f714253beff",type:"CompositionRelationship"},{id:"881feb5b-9f50-42ca-b94b-94f369b1ae0f",sourceId:"5cd45d16-87b4-48a1-8e7b-7cba813f96fc",targetId:"1cfffb1a-d654-40d5-b1a2-5da267815219",type:"FlowRelationship"},{id:"f0202f31-4e61-43ca-a277-e01b18bef744",sourceId:"a65f3d15-5f27-427d-8dfa-5cf144f3bd85",targetId:"57aa17f1-06cf-4f40-9380-74a67f140fec",type:"CompositionRelationship"},{id:"16e6c752-c0e9-48a8-a2ea-44d14b4bc907",sourceId:"6cedda7e-a517-426c-9b97-aca57e03ac53",targetId:"57aa17f1-06cf-4f40-9380-74a67f140fec",type:"CompositionRelationship"},{id:"880da5ff-e730-48f6-918b-6e4875119db0",sourceId:"57aa17f1-06cf-4f40-9380-74a67f140fec",targetId:"01ead4ce-dc20-4845-bffa-a17ef91a962b",type:"FlowRelationship"},{id:"6edbf86b-172d-49b7-ad13-0413a5f83071",sourceId:"01ead4ce-dc20-4845-bffa-a17ef91a962b",targetId:"664b2b80-529e-4ee7-b045-8d4cc7beadf2",type:"AccessRelationship"},{id:"e3dc2a6b-f4e4-42f6-9b8a-e5e398d0102e",sourceId:"01ead4ce-dc20-4845-bffa-a17ef91a962b",targetId:"b4ba05d7-38bf-4a7e-b53e-71dbd191b3f2",type:"CompositionRelationship"},{id:"af71d923-db65-47e7-a0ca-c6aa05fe8d27",sourceId:"1cfffb1a-d654-40d5-b1a2-5da267815219",targetId:"1a64b803-88b0-4a15-95db-d9f44a059db8",type:"AccessRelationship"},{id:"0a9fcf53-d886-4b25-98b2-e7cd45b3784b",sourceId:"a65f3d15-5f27-427d-8dfa-5cf144f3bd85",targetId:"9d5cc65c-96fc-4112-ad0e-bfe8c3542d77",type:"CompositionRelationship"},{id:"e02e087a-1a82-4925-8c22-f7807febab14",sourceId:"01ead4ce-dc20-4845-bffa-a17ef91a962b",targetId:"6cedda7e-a517-426c-9b97-aca57e03ac53",type:"FlowRelationship"},{id:"278d0a14-4055-45cd-8c39-7aa58d3aad8c",sourceId:"6cedda7e-a517-426c-9b97-aca57e03ac53",targetId:"1cfffb1a-d654-40d5-b1a2-5da267815219",type:"FlowRelationship"},{id:"b1d34c1d-d2f0-42e9-87a5-7a43ee55a70e",sourceId:"1cfffb1a-d654-40d5-b1a2-5da267815219",targetId:"5c925794-dc45-4fb2-84df-3e75461a30d2",type:"FlowRelationship"},{id:"cf81fbbd-e977-4e77-9530-9cd8fe6e262c",sourceId:"5c925794-dc45-4fb2-84df-3e75461a30d2",targetId:"01ead4ce-dc20-4845-bffa-a17ef91a962b",type:"FlowRelationship"},{id:"297f5707-8a4d-4e92-891f-2241908eaef0",sourceId:"01ead4ce-dc20-4845-bffa-a17ef91a962b",targetId:"9d5cc65c-96fc-4112-ad0e-bfe8c3542d77",type:"FlowRelationship"},{id:"8474cae7-7bb8-48e6-9891-a112b4500086",sourceId:"9d5cc65c-96fc-4112-ad0e-bfe8c3542d77",targetId:"1f5732cf-2a9f-4782-98ce-7b50c484f2db",type:"FlowRelationship"},{id:"01c5438a-bb5d-4998-803a-30dcf31bd23d",sourceId:"1f5732cf-2a9f-4782-98ce-7b50c484f2db",targetId:"5c925794-dc45-4fb2-84df-3e75461a30d2",type:"FlowRelationship"},{id:"6e10348f-e5a7-49b1-872d-d8e54f9540e0",sourceId:"1f5732cf-2a9f-4782-98ce-7b50c484f2db",targetId:"7898dc40-7a2d-48f1-8c2a-0ce35cd86e1c",type:"AccessRelationship"},{id:"aadde3be-b3da-4f51-869f-43cca04e346a",sourceId:"01ead4ce-dc20-4845-bffa-a17ef91a962b",targetId:"5efea9d6-7061-4016-94ea-465d7e122b06",type:"AccessRelationship"}],I=[{id:"912723cb-0742-40d8-97f2-2b51d2ef4d68",name:"Saga-with-event-orchestration",viewpoint:""}],y={identifier:e,archimateId:a,name:d,description:c,formats:t,source:f,sourceFile:i,sourceFormat:o,timestamp:b,tags:p,duplicates:n,language:s,elements:r,relationships:l,views:I};export{a as archimateId,y as default,c as description,n as duplicates,r as elements,t as formats,e as identifier,s as language,d as name,l as relationships,f as source,i as sourceFile,o as sourceFormat,p as tags,b as timestamp,I as views};
