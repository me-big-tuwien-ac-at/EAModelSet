const e="https://me.big.tuwien.ac.at/EAModelSet/id-7c7c2197",d="id-7c7c2197",a="6a Front Controller",c="",b=["XML","CSV","JSON","ARCHIMATE"],i="GitHub",t="raw-data/github/xml/front_controller.xml",f="XML",o="29-06-2023 09:27:44",n=[],p=[],r="en",s=[{id:"id-9626147a-56e7-4170-b65b-91792cf459bc",name:"event 1",type:"ApplicationEvent",layer:"application"},{id:"f3520843-8e1c-4bbd-87e3-7b1422865dca",name:"event 2",type:"ApplicationEvent",layer:"application"},{id:"c11bdf11-b3a6-4f41-8659-79ddae13150b",name:"event 3",type:"ApplicationEvent",layer:"application"},{id:"id-16c72d0e-29e4-4ff1-b92e-92d3a984e901",name:"class handler (front controller)",type:"ApplicationComponent",layer:"application"},{id:"id-57596a6e-812a-4e6e-9fd9-dcf6d7873ebe",name:"class Controller 2",type:"ApplicationComponent",layer:"application"},{id:"a98a2528-de84-41b6-8765-c73ee42372e5",name:"class Controller 3",type:"ApplicationComponent",layer:"application"},{id:"e5a280ab-c1d3-4718-8329-fe095be6c55a",name:"HTML",type:"DataObject",layer:"application"},{id:"id-931b1bc7-b74b-4a2c-b553-1dfb7ae77617",name:"entity 1",type:"DataObject",layer:"application"},{id:"id-56c45031-7ee6-4f38-bc69-7c82ecbb005d",name:"entity 2",type:"DataObject",layer:"application"},{id:"id-7a0dbe87-81f7-4706-88d5-eb0ca7f6fecb",name:"entity 3",type:"DataObject",layer:"application"},{id:"a355e4d8-a98a-4f1c-84af-c9505e4f7f51",name:"entity 4",type:"DataObject",layer:"application"},{id:"id-9c3272a9-5fe4-44f8-99a7-1a4b759b9cb1",name:"entity 5",type:"DataObject",layer:"application"},{id:"ef5e97d8-9a42-4dfa-bfeb-338ba7a4b00b",name:"entity 6",type:"DataObject",layer:"application"},{id:"id-08f6bf06-ef90-44cd-8d52-9bcc72e96204",name:"class handler (front controller) (copy)",type:"ApplicationComponent",layer:"application"},{id:"id-3cddf8bf-d85f-4781-bce3-38201cdfb96d",name:"command 1 (get object and forward to jsp)",type:"ApplicationComponent",layer:"application"},{id:"id-71c7bb80-167d-49c4-ba7d-eb0d611f802d",name:"command2",type:"ApplicationComponent",layer:"application"},{id:"id-9b60cc5a-2e20-4618-9db3-7790bb01d955",name:"command3",type:"ApplicationComponent",layer:"application"},{id:"id-2d012706-d75f-41b3-8156-ced71d90f813",name:"superclass command",type:"ApplicationComponent",layer:"application"},{id:"id-39265932-dabe-45aa-bbff-a21e370de8d0",name:"handle (request)",type:"ApplicationFunction",layer:"application"},{id:"id-7cd07498-2bac-48a2-9c5d-87da5b110d46",name:"select command",type:"ApplicationProcess",layer:"application"},{id:"id-9906f8a4-817c-4687-accc-f48799eb53f6",name:"call command",type:"ApplicationProcess",layer:"application"},{id:"c399ca08-39a8-4e15-a6c7-0e6bd067e026",name:"Views",type:"Grouping",layer:"other"},{id:"b4dc893b-49d4-4feb-b93e-db017a6b9da0",name:"Model",type:"Grouping",layer:"other"},{id:"id-3639990b-9a51-4c12-843b-073a5008ced4",name:"some mapping classes",type:"Grouping",layer:"other"},{id:"id-1022fbf6-daea-4a4e-9423-648c97f40187",name:"database",type:"Grouping",layer:"other"}],l=[{id:"id-938612fe-f4bf-4a36-b2a0-a8b6c801c02a",sourceId:"id-3cddf8bf-d85f-4781-bce3-38201cdfb96d",targetId:"c399ca08-39a8-4e15-a6c7-0e6bd067e026",type:"Flow"},{id:"id-8ac9ce83-ec5a-438d-9a5f-1d4027a92c4b",sourceId:"id-1022fbf6-daea-4a4e-9423-648c97f40187",targetId:"id-56c45031-7ee6-4f38-bc69-7c82ecbb005d",type:"Composition"},{id:"id-9c8c74b1-0620-4d9d-8771-bd81f846e0e7",sourceId:"a98a2528-de84-41b6-8765-c73ee42372e5",targetId:"b4dc893b-49d4-4feb-b93e-db017a6b9da0",type:"Flow"},{id:"f37a45c9-faee-478c-81bb-778c1105a44d",sourceId:"a355e4d8-a98a-4f1c-84af-c9505e4f7f51",targetId:"id-7a0dbe87-81f7-4706-88d5-eb0ca7f6fecb",type:"Association"},{id:"id-66595a45-8da9-4df5-b47d-fa039b46f448",sourceId:"c399ca08-39a8-4e15-a6c7-0e6bd067e026",targetId:"e5a280ab-c1d3-4718-8329-fe095be6c55a",type:"Triggering"},{id:"id-83ee4d4a-8ada-4d34-a6f8-7c5bfc20999e",sourceId:"c399ca08-39a8-4e15-a6c7-0e6bd067e026",targetId:"b4dc893b-49d4-4feb-b93e-db017a6b9da0",type:"Flow"},{id:"ae550ff2-0d5e-4972-8e35-d13718ba5709",sourceId:"id-9c3272a9-5fe4-44f8-99a7-1a4b759b9cb1",targetId:"a355e4d8-a98a-4f1c-84af-c9505e4f7f51",type:"Association"},{id:"ff8163f6-a1fe-4d56-ab80-515959b11576",sourceId:"id-57596a6e-812a-4e6e-9fd9-dcf6d7873ebe",targetId:"b4dc893b-49d4-4feb-b93e-db017a6b9da0",type:"Flow"},{id:"id-3e61696f-56fa-45cc-8e42-83be56c6b3e1",sourceId:"id-1022fbf6-daea-4a4e-9423-648c97f40187",targetId:"ef5e97d8-9a42-4dfa-bfeb-338ba7a4b00b",type:"Composition"},{id:"f03f1035-f4ee-4e5c-9637-c314414e6911",sourceId:"b4dc893b-49d4-4feb-b93e-db017a6b9da0",targetId:"id-3639990b-9a51-4c12-843b-073a5008ced4",type:"Access"},{id:"c8b0c925-f0a5-4d6a-acad-572c5de42ef3",sourceId:"id-3639990b-9a51-4c12-843b-073a5008ced4",targetId:"id-1022fbf6-daea-4a4e-9423-648c97f40187",type:"Access"},{id:"id-4d8785fa-0e4f-43d4-b70b-26b6bd2d0bce",sourceId:"f3520843-8e1c-4bbd-87e3-7b1422865dca",targetId:"id-57596a6e-812a-4e6e-9fd9-dcf6d7873ebe",type:"Triggering"},{id:"id-1e23bc27-c87b-4037-ac10-22018ebeddb1",sourceId:"id-9626147a-56e7-4170-b65b-91792cf459bc",targetId:"id-39265932-dabe-45aa-bbff-a21e370de8d0",type:"Triggering"},{id:"id-251e15ae-585b-404b-93a0-22d164bb581d",sourceId:"id-931b1bc7-b74b-4a2c-b553-1dfb7ae77617",targetId:"ef5e97d8-9a42-4dfa-bfeb-338ba7a4b00b",type:"Association"},{id:"id-6e923051-e1fe-48df-b460-367971aa5767",sourceId:"id-1022fbf6-daea-4a4e-9423-648c97f40187",targetId:"id-7a0dbe87-81f7-4706-88d5-eb0ca7f6fecb",type:"Composition"},{id:"db40ea79-c822-4bb9-83db-f3ce71a3b8be",sourceId:"id-9906f8a4-817c-4687-accc-f48799eb53f6",targetId:"id-3cddf8bf-d85f-4781-bce3-38201cdfb96d",type:"Flow"},{id:"f1dc6416-8851-41f1-8e3e-4756fc645d3a",sourceId:"id-931b1bc7-b74b-4a2c-b553-1dfb7ae77617",targetId:"id-56c45031-7ee6-4f38-bc69-7c82ecbb005d",type:"Association"},{id:"e0f0cf29-b725-4dc6-9050-53b4fbac2e3d",sourceId:"ef5e97d8-9a42-4dfa-bfeb-338ba7a4b00b",targetId:"id-9c3272a9-5fe4-44f8-99a7-1a4b759b9cb1",type:"Association"},{id:"id-101977ed-b5ff-4596-8b3d-32eff849dc7c",sourceId:"id-1022fbf6-daea-4a4e-9423-648c97f40187",targetId:"id-931b1bc7-b74b-4a2c-b553-1dfb7ae77617",type:"Composition"},{id:"e8a025d6-24d0-4f2c-b655-548d3b7595df",sourceId:"id-931b1bc7-b74b-4a2c-b553-1dfb7ae77617",targetId:"a355e4d8-a98a-4f1c-84af-c9505e4f7f51",type:"Association"},{id:"id-89b7c617-8d5d-4444-b91a-5235edc5f3b8",sourceId:"id-56c45031-7ee6-4f38-bc69-7c82ecbb005d",targetId:"id-7a0dbe87-81f7-4706-88d5-eb0ca7f6fecb",type:"Association"},{id:"id-172c6cb3-b6cb-4994-894b-2302011f0992",sourceId:"id-1022fbf6-daea-4a4e-9423-648c97f40187",targetId:"id-9c3272a9-5fe4-44f8-99a7-1a4b759b9cb1",type:"Composition"},{id:"id-0c16ab14-1ab9-49ae-9602-31483be95ecc",sourceId:"c11bdf11-b3a6-4f41-8659-79ddae13150b",targetId:"a98a2528-de84-41b6-8765-c73ee42372e5",type:"Triggering"},{id:"id-849f4832-047b-48be-ada3-37f302195bcd",sourceId:"ef5e97d8-9a42-4dfa-bfeb-338ba7a4b00b",targetId:"id-7a0dbe87-81f7-4706-88d5-eb0ca7f6fecb",type:"Association"},{id:"id-07d1be6e-9aed-4da3-b7e8-ae4fd8c9f50b",sourceId:"id-1022fbf6-daea-4a4e-9423-648c97f40187",targetId:"a355e4d8-a98a-4f1c-84af-c9505e4f7f51",type:"Composition"},{id:"id-3b9f71ce-d9bc-4949-8ea8-3d66e5bcb101",sourceId:"id-3cddf8bf-d85f-4781-bce3-38201cdfb96d",targetId:"id-2d012706-d75f-41b3-8156-ced71d90f813",type:"Specialization"},{id:"id-4ac5b3e7-7fc3-4c16-8818-d923f8f7b3ae",sourceId:"id-71c7bb80-167d-49c4-ba7d-eb0d611f802d",targetId:"id-2d012706-d75f-41b3-8156-ced71d90f813",type:"Specialization"},{id:"c1455c66-3413-4edb-bb0e-224fe93d3176",sourceId:"id-9b60cc5a-2e20-4618-9db3-7790bb01d955",targetId:"id-2d012706-d75f-41b3-8156-ced71d90f813",type:"Specialization"},{id:"id-5558e6d6-d207-4638-ad10-bd0e510a3706",sourceId:"id-16c72d0e-29e4-4ff1-b92e-92d3a984e901",targetId:"id-39265932-dabe-45aa-bbff-a21e370de8d0",type:"Assignment"},{id:"a49c69ab-eb8a-42bc-9dca-6ac7432ee6cc",sourceId:"id-39265932-dabe-45aa-bbff-a21e370de8d0",targetId:"id-7cd07498-2bac-48a2-9c5d-87da5b110d46",type:"Composition"},{id:"id-48a81e4a-2085-4ed6-8553-673d51fff50c",sourceId:"id-39265932-dabe-45aa-bbff-a21e370de8d0",targetId:"id-9906f8a4-817c-4687-accc-f48799eb53f6",type:"Composition"},{id:"id-6553073b-9414-4826-be78-0c8490af591f",sourceId:"f3520843-8e1c-4bbd-87e3-7b1422865dca",targetId:"id-39265932-dabe-45aa-bbff-a21e370de8d0",type:"Triggering"},{id:"dccb6de2-8b53-4967-8fce-da9a89e3c74e",sourceId:"c11bdf11-b3a6-4f41-8659-79ddae13150b",targetId:"id-39265932-dabe-45aa-bbff-a21e370de8d0",type:"Triggering"},{id:"id-27842e5c-da18-401f-a5d7-3f2c17b2a8be",sourceId:"id-71c7bb80-167d-49c4-ba7d-eb0d611f802d",targetId:"b4dc893b-49d4-4feb-b93e-db017a6b9da0",type:"Access"},{id:"id-36bf3b5f-d65d-4780-813a-de7c57da3b3a",sourceId:"id-9906f8a4-817c-4687-accc-f48799eb53f6",targetId:"id-71c7bb80-167d-49c4-ba7d-eb0d611f802d",type:"Flow"},{id:"id-0470896c-b221-4778-af52-bee06b0e165e",sourceId:"id-9906f8a4-817c-4687-accc-f48799eb53f6",targetId:"id-9b60cc5a-2e20-4618-9db3-7790bb01d955",type:"Flow"},{id:"c2bdacb3-9425-410c-b719-877428562807",sourceId:"id-3cddf8bf-d85f-4781-bce3-38201cdfb96d",targetId:"b4dc893b-49d4-4feb-b93e-db017a6b9da0",type:"Flow"},{id:"cd067125-06fb-4dae-b8e6-641afb137eb6",sourceId:"id-71c7bb80-167d-49c4-ba7d-eb0d611f802d",targetId:"b4dc893b-49d4-4feb-b93e-db017a6b9da0",type:"Flow"},{id:"a13dad48-104a-44e4-9a05-b3f3430642d9",sourceId:"id-9b60cc5a-2e20-4618-9db3-7790bb01d955",targetId:"b4dc893b-49d4-4feb-b93e-db017a6b9da0",type:"Flow"}],y=[{id:"b7ea77a7",name:"Front Controller",viewpoint:""}],I={identifier:e,archimateId:d,name:a,description:c,formats:b,source:i,sourceFile:t,sourceFormat:f,timestamp:o,tags:n,duplicates:p,language:r,elements:s,relationships:l,views:y};export{d as archimateId,I as default,c as description,p as duplicates,s as elements,b as formats,e as identifier,r as language,a as name,l as relationships,i as source,t as sourceFile,f as sourceFormat,n as tags,o as timestamp,y as views};
