const e="https://me.big.tuwien.ac.at/EAModelSet/ccce616f-9bd9-4e17-86e8-25514b07678c",a="ccce616f-9bd9-4e17-86e8-25514b07678c",d="SegmentArchitecture_Informasjonsforvaltning - NÅSITUASJON",c="Beskriver baseline-arkitekturen (nåsituasjon) i Informasjonsforvaltningsdomenet.",t=["XML","CSV","JSON","ARCHIMATE"],i="GitHub",f="raw-data/github/grafico/sa_informasjonsforvaltning_baseline.archimate",b="ARCHIMATE",o="29-06-2023 09:29:17",n=[],p=[],r="nb",s=[{id:"fc85792b-d8a8-4872-aba3-8e8d182d7f51",name:"registration-auth",type:"ApplicationComponent",layer:"application"},{id:"f2a2ff35-a9cd-4801-b2af-a2de3eb17bf1",name:"harvester-api",type:"ApplicationComponent",layer:"application"},{id:"3e6bb26e-e816-4f20-98dc-d3030c41704d",name:"harvester GUI",type:"ApplicationInterface",layer:"application"},{id:"5253b596-e75f-454b-9925-cafa72ea6547",name:"harvester-api API",type:"ApplicationInterface",layer:"application"},{id:"d8820cf2-1bf3-4ac4-a168-78f3942d276a",name:"registration GUI",type:"ApplicationInterface",layer:"application"},{id:"53543756-bc48-40d4-91df-37c697878806",name:"search-api",type:"ApplicationComponent",layer:"application"},{id:"7823c1fc-91dd-46f1-b20e-0745e03966d2",name:"registration-api",type:"ApplicationComponent",layer:"application"},{id:"bfa6343c-a074-46d1-a9dd-dbd32c30c48d",name:"search GUI",type:"ApplicationInterface",layer:"application"},{id:"8e0d843f-826f-4f08-be73-da0638bba50e",name:"concept-cat API",type:"ApplicationInterface",layer:"application"},{id:"89337213-83a8-4036-ac1f-797ed9cbf510",name:"registration-react",type:"ApplicationComponent",layer:"application"},{id:"f3749090-2fa0-461b-bf84-4943ba2ff334",name:"api-cat",type:"ApplicationComponent",layer:"application"},{id:"ddca48e3-25cc-4582-836c-8af3a8c9a97d",name:"registration-api API",type:"ApplicationInterface",layer:"application"},{id:"66b88164-4861-42be-a601-29ef99af7f0c",name:"reference-data",type:"ApplicationComponent",layer:"application"},{id:"6676af9e-dc36-4edb-b38b-53d1f1761a37",name:"search",type:"ApplicationComponent",layer:"application"},{id:"36432d8b-2d0e-4dc9-98d7-a5eb32bc0811",name:"api-cat API",type:"ApplicationInterface",layer:"application"},{id:"d9d362b3-1ae1-4179-b02b-f1e039fb7a85",name:"search-api API",type:"ApplicationInterface",layer:"application"},{id:"43aa450e-0394-41e5-bc7c-ca4d3141350e",name:"concept-cat",type:"ApplicationComponent",layer:"application"},{id:"18aad649-3a34-4ab2-b85b-ff5cf37ecac1",name:"harvester",type:"ApplicationComponent",layer:"application"},{id:"0f777e19-5ec1-4477-b493-95c53a70a740",name:"Nasjonalt",type:"Location",layer:"other"},{id:"694c8f12-abb5-4a53-b3d6-571df5c1cda3",name:"Felles",type:"Grouping",layer:"other"},{id:"f0227591-4815-4551-87e4-11eab84f94bd",name:"Søkeløsning",type:"Grouping",layer:"other"},{id:"d397c06a-208a-4cc0-8473-6aa93a2e8a9e",name:"Høsteløsning",type:"Grouping",layer:"other"},{id:"96328e35-d998-4c7c-8684-7e6ca395097c",name:"Virksomhet",type:"Location",layer:"other"},{id:"0d2e642c-20ca-4fe8-b484-fed37daa019c",name:"Registreringsløsning",type:"Grouping",layer:"other"}],l=[{id:"9eec6e24-c34e-4650-8835-6c24eb619563",sourceId:"0f777e19-5ec1-4477-b493-95c53a70a740",targetId:"f3749090-2fa0-461b-bf84-4943ba2ff334",type:"CompositionRelationship"},{id:"1c90aa62-f72d-4673-9f32-4d2bd3a4c46c",sourceId:"fc85792b-d8a8-4872-aba3-8e8d182d7f51",targetId:"ddca48e3-25cc-4582-836c-8af3a8c9a97d",type:"ServingRelationship"},{id:"8b12a587-b2b4-4502-8e9a-621a1bd7d613",sourceId:"0f777e19-5ec1-4477-b493-95c53a70a740",targetId:"43aa450e-0394-41e5-bc7c-ca4d3141350e",type:"CompositionRelationship"},{id:"d46c8e13-22b1-4355-8bb0-6a3ce2bca8b6",sourceId:"6676af9e-dc36-4edb-b38b-53d1f1761a37",targetId:"bfa6343c-a074-46d1-a9dd-dbd32c30c48d",type:"RealizationRelationship"},{id:"98693f1a-baf6-49de-ac0e-a7e4e0ec5604",sourceId:"f0227591-4815-4551-87e4-11eab84f94bd",targetId:"d9d362b3-1ae1-4179-b02b-f1e039fb7a85",type:"CompositionRelationship"},{id:"e4593393-51a3-443a-ae40-03e38d26c7b5",sourceId:"66b88164-4861-42be-a601-29ef99af7f0c",targetId:"53543756-bc48-40d4-91df-37c697878806",type:"ServingRelationship"},{id:"3adc24a3-48bc-457d-b99c-93ecea7ccad9",sourceId:"d397c06a-208a-4cc0-8473-6aa93a2e8a9e",targetId:"3e6bb26e-e816-4f20-98dc-d3030c41704d",type:"AggregationRelationship"},{id:"e9f1ece0-fc48-44de-8c28-a720913e9aea",sourceId:"43aa450e-0394-41e5-bc7c-ca4d3141350e",targetId:"8e0d843f-826f-4f08-be73-da0638bba50e",type:"RealizationRelationship"},{id:"550f05e5-71d8-4522-9e10-b3c05e642659",sourceId:"f0227591-4815-4551-87e4-11eab84f94bd",targetId:"43aa450e-0394-41e5-bc7c-ca4d3141350e",type:"CompositionRelationship"},{id:"7924877b-a830-45a4-8b0d-2f63f05c8682",sourceId:"f0227591-4815-4551-87e4-11eab84f94bd",targetId:"53543756-bc48-40d4-91df-37c697878806",type:"CompositionRelationship"},{id:"46f8b19f-5969-4ef2-8ae9-11f4ed7ef014",sourceId:"0f777e19-5ec1-4477-b493-95c53a70a740",targetId:"53543756-bc48-40d4-91df-37c697878806",type:"CompositionRelationship"},{id:"414b02ae-2f94-4310-857a-98cbffd91fc7",sourceId:"ddca48e3-25cc-4582-836c-8af3a8c9a97d",targetId:"89337213-83a8-4036-ac1f-797ed9cbf510",type:"ServingRelationship"},{id:"f69df663-fe0b-4776-9e73-e341a3f5d568",sourceId:"f0227591-4815-4551-87e4-11eab84f94bd",targetId:"36432d8b-2d0e-4dc9-98d7-a5eb32bc0811",type:"CompositionRelationship"},{id:"3de1b2ea-825b-4de7-b099-41c77fb3dc78",sourceId:"d397c06a-208a-4cc0-8473-6aa93a2e8a9e",targetId:"5253b596-e75f-454b-9925-cafa72ea6547",type:"AggregationRelationship"},{id:"03596046-be4c-4e0f-9b31-47f262d47bee",sourceId:"d397c06a-208a-4cc0-8473-6aa93a2e8a9e",targetId:"18aad649-3a34-4ab2-b85b-ff5cf37ecac1",type:"AggregationRelationship"},{id:"ba8c9237-c21c-46bf-ba8c-a22e044b8ea5",sourceId:"0d2e642c-20ca-4fe8-b484-fed37daa019c",targetId:"d8820cf2-1bf3-4ac4-a168-78f3942d276a",type:"CompositionRelationship"},{id:"353c4e84-d653-4c97-8d97-cdabb62b4bf7",sourceId:"0d2e642c-20ca-4fe8-b484-fed37daa019c",targetId:"ddca48e3-25cc-4582-836c-8af3a8c9a97d",type:"CompositionRelationship"},{id:"51c8108c-cab7-4d12-93be-0989c4749a8c",sourceId:"694c8f12-abb5-4a53-b3d6-571df5c1cda3",targetId:"66b88164-4861-42be-a601-29ef99af7f0c",type:"CompositionRelationship"},{id:"ac38bc37-a81d-4c02-91e1-8823339f0ba6",sourceId:"0d2e642c-20ca-4fe8-b484-fed37daa019c",targetId:"7823c1fc-91dd-46f1-b20e-0745e03966d2",type:"CompositionRelationship"},{id:"bfd557f3-896f-4925-9145-5c236235dd3b",sourceId:"f0227591-4815-4551-87e4-11eab84f94bd",targetId:"6676af9e-dc36-4edb-b38b-53d1f1761a37",type:"CompositionRelationship"},{id:"b0183041-2a80-45f8-a5d9-982386410016",sourceId:"f3749090-2fa0-461b-bf84-4943ba2ff334",targetId:"36432d8b-2d0e-4dc9-98d7-a5eb32bc0811",type:"RealizationRelationship"},{id:"19929f04-ebcb-44e4-a182-566ccaed02bb",sourceId:"f0227591-4815-4551-87e4-11eab84f94bd",targetId:"bfa6343c-a074-46d1-a9dd-dbd32c30c48d",type:"CompositionRelationship"},{id:"54eced99-c1d2-490d-9666-fddc8f3bfa07",sourceId:"f0227591-4815-4551-87e4-11eab84f94bd",targetId:"f3749090-2fa0-461b-bf84-4943ba2ff334",type:"CompositionRelationship"},{id:"3e56f8a5-ff54-4645-8a64-550f2117cd82",sourceId:"53543756-bc48-40d4-91df-37c697878806",targetId:"d9d362b3-1ae1-4179-b02b-f1e039fb7a85",type:"RealizationRelationship"},{id:"c2ba48ac-0f8a-462c-88e1-97e2ba454169",sourceId:"d9d362b3-1ae1-4179-b02b-f1e039fb7a85",targetId:"6676af9e-dc36-4edb-b38b-53d1f1761a37",type:"ServingRelationship"},{id:"989b9a1c-7ade-4530-a15f-268dfea82b8a",sourceId:"89337213-83a8-4036-ac1f-797ed9cbf510",targetId:"d8820cf2-1bf3-4ac4-a168-78f3942d276a",type:"RealizationRelationship"},{id:"7bf0b52b-5372-4835-a17a-33664ea0acf3",sourceId:"d397c06a-208a-4cc0-8473-6aa93a2e8a9e",targetId:"f2a2ff35-a9cd-4801-b2af-a2de3eb17bf1",type:"AggregationRelationship"},{id:"28bcf110-8c4d-4074-b903-ef9e74c2fe26",sourceId:"f2a2ff35-a9cd-4801-b2af-a2de3eb17bf1",targetId:"5253b596-e75f-454b-9925-cafa72ea6547",type:"RealizationRelationship"},{id:"7e5908db-fe14-45bf-9d27-33ab25e48a48",sourceId:"66b88164-4861-42be-a601-29ef99af7f0c",targetId:"7823c1fc-91dd-46f1-b20e-0745e03966d2",type:"ServingRelationship"},{id:"864f824c-42ff-45c8-acd7-e53fa24b566b",sourceId:"0f777e19-5ec1-4477-b493-95c53a70a740",targetId:"6676af9e-dc36-4edb-b38b-53d1f1761a37",type:"CompositionRelationship"},{id:"a0d4398c-cb5f-43d2-858d-b68d246f0dc7",sourceId:"8e0d843f-826f-4f08-be73-da0638bba50e",targetId:"6676af9e-dc36-4edb-b38b-53d1f1761a37",type:"ServingRelationship"},{id:"9b5d1eb6-4ba0-490c-b1ca-9222b53ffff5",sourceId:"0d2e642c-20ca-4fe8-b484-fed37daa019c",targetId:"fc85792b-d8a8-4872-aba3-8e8d182d7f51",type:"CompositionRelationship"},{id:"2246dfef-fed0-435e-b8af-e0b220357cf4",sourceId:"36432d8b-2d0e-4dc9-98d7-a5eb32bc0811",targetId:"6676af9e-dc36-4edb-b38b-53d1f1761a37",type:"ServingRelationship"},{id:"0bed5e04-1146-409b-a730-956f5b36bbf3",sourceId:"18aad649-3a34-4ab2-b85b-ff5cf37ecac1",targetId:"3e6bb26e-e816-4f20-98dc-d3030c41704d",type:"RealizationRelationship"},{id:"8c2664c2-8c97-4894-996b-01f9887bb914",sourceId:"0f777e19-5ec1-4477-b493-95c53a70a740",targetId:"36432d8b-2d0e-4dc9-98d7-a5eb32bc0811",type:"CompositionRelationship"},{id:"299e5f55-7bca-43c9-8d0d-43844d3ef97a",sourceId:"0f777e19-5ec1-4477-b493-95c53a70a740",targetId:"f2a2ff35-a9cd-4801-b2af-a2de3eb17bf1",type:"CompositionRelationship"},{id:"f5b0d839-feb5-422a-b47e-d31b97946b90",sourceId:"0d2e642c-20ca-4fe8-b484-fed37daa019c",targetId:"89337213-83a8-4036-ac1f-797ed9cbf510",type:"CompositionRelationship"},{id:"b7066234-1e98-4cd7-a6a8-1df0fe6ae78e",sourceId:"5253b596-e75f-454b-9925-cafa72ea6547",targetId:"18aad649-3a34-4ab2-b85b-ff5cf37ecac1",type:"ServingRelationship"},{id:"ecce0faa-3148-4879-bf20-d65d6bb48f57",sourceId:"f0227591-4815-4551-87e4-11eab84f94bd",targetId:"8e0d843f-826f-4f08-be73-da0638bba50e",type:"CompositionRelationship"},{id:"274cac55-9f06-4483-9293-1941efa38c9b",sourceId:"7823c1fc-91dd-46f1-b20e-0745e03966d2",targetId:"ddca48e3-25cc-4582-836c-8af3a8c9a97d",type:"RealizationRelationship"},{id:"e355b669-d478-40cf-a18c-20b024955b08",sourceId:"66b88164-4861-42be-a601-29ef99af7f0c",targetId:"f2a2ff35-a9cd-4801-b2af-a2de3eb17bf1",type:"ServingRelationship"}],I=[{id:"0a0773b1-e37f-4b78-960e-d1c7e1830bdf",name:"Informasjonsforvaltning Applications med grensesnitt - Nåsituasjon",viewpoint:""}],g={identifier:e,archimateId:a,name:d,description:c,formats:t,source:i,sourceFile:f,sourceFormat:b,timestamp:o,tags:n,duplicates:p,language:r,elements:s,relationships:l,views:I};export{a as archimateId,g as default,c as description,p as duplicates,s as elements,t as formats,e as identifier,r as language,d as name,l as relationships,i as source,f as sourceFile,b as sourceFormat,n as tags,o as timestamp,I as views};
