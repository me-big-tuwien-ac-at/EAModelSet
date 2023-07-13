const e="https://me.big.tuwien.ac.at/EAModelSet/id-927678e3-c472-4843-8a66-8e2e3311cb24",a="id-927678e3-c472-4843-8a66-8e2e3311cb24",d="(new model)",c="",i=["XML","CSV","JSON","ARCHIMATE"],b="GitHub",t="raw-data/github/xml/componentesnotification.xml",f="XML",o="29-06-2023 09:27:57",n=["DUPLICATE"],r=["raw-data/github/xml/componentesau.xml"],p="es",l=[{id:"id-8b1dccef-883e-4dc3-86ce-b2c4a86fea47",name:"Identity WSO2",type:"ApplicationComponent",layer:"application"},{id:"id-58a0ffb9-a247-42ad-8b3e-582183c971ec",name:"Cliente dist",type:"ApplicationComponent",layer:"application"},{id:"df6b40b7-67a0-4413-8b00-dbab2c035b33",name:"Api Manager",type:"ApplicationComponent",layer:"application"},{id:"id-55d78253-464c-4637-8033-a150ca75621d",name:"Identity WSO2",type:"ApplicationService",layer:"application"},{id:"b7e2b95e-f8b8-4c05-8e58-6863317a0299",name:"API Manager",type:"ApplicationService",layer:"application"},{id:"id-741aa5fb-260f-4519-a4dd-99cd894d93e4",name:"Application Service",type:"ApplicationService",layer:"application"},{id:"c6333abf-2758-440d-a768-7f98cd7d0320",name:"API's (crud o mid)",type:"ApplicationService",layer:"application"},{id:"id-45a89576-c440-48a4-bc92-03b42aefe7ef",name:"",type:"ApplicationComponent",layer:"application"},{id:"cc7ba1f9-856a-473e-98e1-7100c4a6b290",name:"notification_lib",type:"ApplicationCollaboration",layer:"application"},{id:"id-0a4e7b09-8985-4d98-b775-46bbf5c8bf58",name:"Cliente js",type:"ApplicationService",layer:"application"},{id:"b35bf312-b491-43cd-9e3d-a0275efa5339",name:"API CRUD configuración",type:"ApplicationService",layer:"application"},{id:"id-19a50fd2-a7d9-40de-9285-46cb64ff1e1e",name:"Servicio websocket notificación",type:"ApplicationService",layer:"application"},{id:"id-71a2eacc-456e-4aaf-9466-b52fb2d6081d",name:"notificaciones_lib",type:"ApplicationComponent",layer:"application"},{id:"id-883b0161-61d0-4720-a6cf-ca6732152789",name:"base de datos o",type:"DataObject",layer:"application"},{id:"id-08629c95-16ff-4853-947e-d1c2672f0cba",name:"WSO2",type:"Node",layer:"technology"},{id:"id-6d23e50d-0ee2-45a6-a731-7c62cc7738fb",name:"",type:"Node",layer:"technology"},{id:"ad3e7e5f-c01b-4cbd-b384-4bb91b3fc229",name:"Identity WSO2",type:"SystemSoftware",layer:"technology"},{id:"id-5ab3bafe-3ddf-47eb-923c-e39737d889a3",name:"servidor api golang",type:"Node",layer:"technology"},{id:"id-9b03b13d-5560-4b52-b6ae-2c8f51c2e35a",name:"Servidor BD WSO2",type:"Node",layer:"technology"},{id:"a3fa2c91-f43a-4456-a5c2-218f0b3264fa",name:"Servidor ws",type:"Node",layer:"technology"},{id:"id-33e8db1e-39f2-41d1-aa77-7318d4fdaee7",name:"Servidor api configuracion",type:"Node",layer:"technology"},{id:"id-46cd73c3-9bfc-4c15-a338-039ae45da5f9",name:"Servidor WSO2",type:"Node",layer:"technology"},{id:"a2895e9b-343a-44f3-9c53-2c081b3dd325",name:"Servidor Postgres",type:"Node",layer:"technology"},{id:"id-33831e36-9157-40bf-8d06-1cffe69e5796",name:"Schema Configuracion",type:"Artifact",layer:"technology"},{id:"ff31ddc7-6633-4aa7-890d-953a289cac57",name:"Schema API",type:"Artifact",layer:"technology"},{id:"a0076bc1-166b-4030-b11f-ef50019bba93",name:"servidor del cliente",type:"Node",layer:"technology"}],s=[{id:"id-6e6f298e-aa06-41bb-bd0c-5ceb02a1507d",sourceId:"id-55d78253-464c-4637-8033-a150ca75621d",targetId:"b7e2b95e-f8b8-4c05-8e58-6863317a0299",type:"Serving"},{id:"id-6fba1d23-51b8-41e5-92de-d1b9d8b12088",sourceId:"id-55d78253-464c-4637-8033-a150ca75621d",targetId:"b7e2b95e-f8b8-4c05-8e58-6863317a0299",type:"Association"},{id:"id-4d9f015d-26a3-47ea-b102-dc1aca0d1294",sourceId:"id-71a2eacc-456e-4aaf-9466-b52fb2d6081d",targetId:"id-19a50fd2-a7d9-40de-9285-46cb64ff1e1e",type:"Triggering"},{id:"id-4621a8c6-869d-4071-859b-2613b98712e5",sourceId:"id-71a2eacc-456e-4aaf-9466-b52fb2d6081d",targetId:"c6333abf-2758-440d-a768-7f98cd7d0320",type:"Triggering"},{id:"f288ce83-aeb8-42e4-8342-a7088d6d6629",sourceId:"id-19a50fd2-a7d9-40de-9285-46cb64ff1e1e",targetId:"b7e2b95e-f8b8-4c05-8e58-6863317a0299",type:"Flow"},{id:"id-5c8ba46f-50a0-4632-9a7a-ce45e3b8d45d",sourceId:"id-45a89576-c440-48a4-bc92-03b42aefe7ef",targetId:"id-0a4e7b09-8985-4d98-b775-46bbf5c8bf58",type:"Triggering"},{id:"id-93f83d7d-7b24-4eb7-ae5d-e9412fa55eaf",sourceId:"b7e2b95e-f8b8-4c05-8e58-6863317a0299",targetId:"id-0a4e7b09-8985-4d98-b775-46bbf5c8bf58",type:"Triggering"},{id:"a200fa29-bf89-4d21-9811-cc674bed4284",sourceId:"id-19a50fd2-a7d9-40de-9285-46cb64ff1e1e",targetId:"b35bf312-b491-43cd-9e3d-a0275efa5339",type:"Triggering"},{id:"id-00784493-f08e-41d3-b1a0-69854035ab62",sourceId:"id-0a4e7b09-8985-4d98-b775-46bbf5c8bf58",targetId:"id-55d78253-464c-4637-8033-a150ca75621d",type:"Triggering"},{id:"id-936ffe41-6b2b-4d4a-bc55-d04f5fd79634",sourceId:"id-55d78253-464c-4637-8033-a150ca75621d",targetId:"id-0a4e7b09-8985-4d98-b775-46bbf5c8bf58",type:"Triggering"},{id:"f90768b0-2ee5-495a-a449-fb5a0c22a9f7",sourceId:"b35bf312-b491-43cd-9e3d-a0275efa5339",targetId:"id-71a2eacc-456e-4aaf-9466-b52fb2d6081d",type:"Triggering"},{id:"id-7f4fb1fc-8e84-4139-a37b-d544dd1b0fc8",sourceId:"id-71a2eacc-456e-4aaf-9466-b52fb2d6081d",targetId:"b35bf312-b491-43cd-9e3d-a0275efa5339",type:"Triggering"},{id:"id-48c4e753-c4e2-4bae-bc55-e46798fe9b64",sourceId:"c6333abf-2758-440d-a768-7f98cd7d0320",targetId:"id-71a2eacc-456e-4aaf-9466-b52fb2d6081d",type:"Triggering"},{id:"id-844f73cb-5efb-4695-89f5-a7e135e92b7b",sourceId:"id-19a50fd2-a7d9-40de-9285-46cb64ff1e1e",targetId:"id-0a4e7b09-8985-4d98-b775-46bbf5c8bf58",type:"Triggering"},{id:"id-6d3d4a37-5f3e-4d43-a9b1-cada153a5135",sourceId:"id-5ab3bafe-3ddf-47eb-923c-e39737d889a3",targetId:"id-19a50fd2-a7d9-40de-9285-46cb64ff1e1e",type:"Realization"},{id:"ff7a1443-871e-4940-b9e3-008b27058215",sourceId:"id-5ab3bafe-3ddf-47eb-923c-e39737d889a3",targetId:"id-71a2eacc-456e-4aaf-9466-b52fb2d6081d",type:"Realization"},{id:"id-073b5b0a-9cb5-4a3e-ab3c-b43ac9a18f9f",sourceId:"id-5ab3bafe-3ddf-47eb-923c-e39737d889a3",targetId:"c6333abf-2758-440d-a768-7f98cd7d0320",type:"Realization"},{id:"id-827986a0-59ad-4da2-9bdb-f8af8dc00c42",sourceId:"id-5ab3bafe-3ddf-47eb-923c-e39737d889a3",targetId:"b35bf312-b491-43cd-9e3d-a0275efa5339",type:"Realization"},{id:"id-9370f905-3b92-44f5-841b-7f66ed5b592d",sourceId:"a3fa2c91-f43a-4456-a5c2-218f0b3264fa",targetId:"id-19a50fd2-a7d9-40de-9285-46cb64ff1e1e",type:"Realization"},{id:"id-4c397646-2330-4337-b606-36ea5dc8f0fc",sourceId:"id-33e8db1e-39f2-41d1-aa77-7318d4fdaee7",targetId:"b35bf312-b491-43cd-9e3d-a0275efa5339",type:"Realization"},{id:"id-9dc59bf7-8baa-40b1-ac91-1d4c5e9845c5",sourceId:"id-46cd73c3-9bfc-4c15-a338-039ae45da5f9",targetId:"id-55d78253-464c-4637-8033-a150ca75621d",type:"Realization"},{id:"id-9c6b2512-250b-45de-b8ba-338291ab9ca0",sourceId:"id-46cd73c3-9bfc-4c15-a338-039ae45da5f9",targetId:"b7e2b95e-f8b8-4c05-8e58-6863317a0299",type:"Realization"},{id:"id-559c7dd0-2dc4-4f1d-ada5-9c7f70c9acf8",sourceId:"id-46cd73c3-9bfc-4c15-a338-039ae45da5f9",targetId:"id-9b03b13d-5560-4b52-b6ae-2c8f51c2e35a",type:"Association"},{id:"d0b90744-ffae-49bc-970d-8a51a60caba5",sourceId:"c6333abf-2758-440d-a768-7f98cd7d0320",targetId:"ff31ddc7-6633-4aa7-890d-953a289cac57",type:"Association"},{id:"d7e73d76-de39-4bb3-8b94-e1d1d73d0c64",sourceId:"a2895e9b-343a-44f3-9c53-2c081b3dd325",targetId:"id-33831e36-9157-40bf-8d06-1cffe69e5796",type:"Assignment"},{id:"f4cd836d-c7a3-4ade-ae36-122c965ecebf",sourceId:"id-33e8db1e-39f2-41d1-aa77-7318d4fdaee7",targetId:"id-33831e36-9157-40bf-8d06-1cffe69e5796",type:"Association"},{id:"id-5c02b8d9-0a3a-4e40-9f04-bda2de608cc8",sourceId:"a2895e9b-343a-44f3-9c53-2c081b3dd325",targetId:"ff31ddc7-6633-4aa7-890d-953a289cac57",type:"Assignment"},{id:"id-3fcf2652-3473-4877-a0fa-0096dc1a8f60",sourceId:"a0076bc1-166b-4030-b11f-ef50019bba93",targetId:"id-0a4e7b09-8985-4d98-b775-46bbf5c8bf58",type:"Realization"}],y=[{id:"b311b121-0357-41c5-bbe1-4e05b4f6e672",name:"Propuesta",viewpoint:""},{id:"id-61379973-6479-4e7c-ad15-a78bf98d9200",name:"Actual",viewpoint:""}],g={identifier:e,archimateId:a,name:d,description:c,formats:i,source:b,sourceFile:t,sourceFormat:f,timestamp:o,tags:n,duplicates:r,language:p,elements:l,relationships:s,views:y};export{a as archimateId,g as default,c as description,r as duplicates,l as elements,i as formats,e as identifier,p as language,d as name,s as relationships,b as source,t as sourceFile,f as sourceFormat,n as tags,o as timestamp,y as views};