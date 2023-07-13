const e="https://me.big.tuwien.ac.at/EAModelSet/55476f78-659e-4040-81f4-312432ccdd0c",a="55476f78-659e-4040-81f4-312432ccdd0c",d="7 Trading",c="",b=["XML","CSV","JSON","ARCHIMATE"],i="GitHub",s="raw-data/github/archimate/7_trading.archimate",t="ARCHIMATE",f="29-06-2023 09:30:31",o=[],n=[],r="en",p=[{id:"4da9f714-6865-4471-9519-a85dee20d57f",name:"amount",type:"BusinessObject",layer:"business"},{id:"74729056-f8a1-413c-a314-790df98e5178",name:"party",type:"BusinessObject",layer:"business"},{id:"3b708bb9-12ff-420b-a7c9-ab06d81f54d1",name:"contract",type:"BusinessObject",layer:"business"},{id:"34be6bc4-a83a-45a7-aa0a-7a65a0b6a44d",name:"instrument",type:"BusinessObject",layer:"business"},{id:"615d1d60-8d1c-49bd-81d3-d3fb0aad464f",name:"price",type:"BusinessObject",layer:"business"},{id:"437c51cc-3914-4e62-8818-54193601e75e",name:"money",type:"BusinessObject",layer:"business"},{id:"88b8c901-acc1-4bbc-88bf-5bddf1e09fe5",name:"short [derived]",type:"BusinessObject",layer:"business"},{id:"ff643b83-5cab-468a-9672-efa66e2fd672",name:"long [derived]",type:"BusinessObject",layer:"business"},{id:"fd81e407-2370-491c-b719-09884ba7208b",name:"portfolio",type:"BusinessObject",layer:"business"},{id:"71c24e89-a6ed-4eff-aa11-6ce85349feca",name:"portfolio filter",type:"BusinessObject",layer:"business"},{id:"5c5fe99e-adad-405a-a7a5-b72fc56b1286",name:"Date",type:"BusinessObject",layer:"business"},{id:"6fc53c12-f473-4a9f-a319-ef4a04cf4364",name:"boolean routine",type:"BusinessObject",layer:"business"},{id:"b282545f-b6cb-4516-80be-72bb29d966ae",name:"set operation",type:"BusinessObject",layer:"business"},{id:"130b56e7-1857-428c-87fa-35a4b3b0c508",name:"contract filter",type:"BusinessObject",layer:"business"},{id:"b067bcbe-948b-45f0-8031-5f99d4d3fb26",name:"hard coded filter",type:"BusinessObject",layer:"business"},{id:"7196c46b-3040-4e60-97d5-888097eb8974",name:"set filter",type:"BusinessObject",layer:"business"},{id:"084f3783-1b80-4a41-adfc-2e5b7c83fdde",name:"is included (contract)",type:"BusinessFunction",layer:"business"},{id:"24d11223-a6bb-4baa-b567-ba631e3d866c",name:"select contracts (collection of contracts)",type:"BusinessFunction",layer:"business"},{id:"d871738b-d2ba-4400-910d-5b371e1e2bc9",name:"value (scenario)",type:"BusinessFunction",layer:"business"},{id:"1aaeee9e-751d-4d9a-9fa5-3962ca348e1d",name:"value (scenario)",type:"BusinessFunction",layer:"business"},{id:"33dc7259-7fe6-49af-8dff-83b5ea5059c5",name:"for each contract in collection",type:"BusinessProcess",layer:"business"},{id:"7704b7e8-c8a4-4a13-b96d-408fb020646a",name:"call , and add to result if yes",type:"BusinessProcess",layer:"business"},{id:"8926fb2f-e50a-44a3-abc3-d439a9130731",name:"quote",type:"BusinessObject",layer:"business"},{id:"3d7e952b-ae39-48ba-843e-d1f658ae2b00",name:"bid",type:"BusinessObject",layer:"business"},{id:"214706c3-9db3-4808-8cf5-6e05ba812782",name:"offer",type:"BusinessObject",layer:"business"},{id:"87257a05-e80c-4cb3-ab7b-0e3932f017e0",name:"mid",type:"BusinessObject",layer:"business"},{id:"8dc3553f-f120-4f02-9ff4-9772a3b3ba18",name:"spread",type:"BusinessObject",layer:"business"},{id:"010dac23-44fa-478f-a805-c08cd54dcd8e",name:"Business Object",type:"BusinessObject",layer:"business"},{id:"4f6a8407-defe-477e-ad08-3ee2ea51a645",name:"price",type:"BusinessObject",layer:"business"},{id:"48b4af33-fb5b-4c07-9422-d434ae823155",name:"two-way quote",type:"BusinessObject",layer:"business"},{id:"b668367c-11e2-4f91-b425-d766b08a3bde",name:"one-way quote",type:"BusinessObject",layer:"business"},{id:"cf01f4a4-ecb2-4e07-b1e5-63a235dcfcf0",name:"scenario element /price",type:"BusinessObject",layer:"business"},{id:"2ae0c1af-c858-464f-a192-b96360bf1930",name:"scenario",type:"BusinessObject",layer:"business"},{id:"e36d1b91-0466-4812-84f7-b5dd2b855ed6",name:"party",type:"BusinessObject",layer:"business"},{id:"19e891b0-c408-424b-950a-f91089671e4e",name:"timepoint",type:"BusinessObject",layer:"business"},{id:"c4e2686c-908c-43da-9a41-25ad09a27bae",name:"market indicator",type:"BusinessObject",layer:"business"},{id:"d9d4cda2-220f-41c2-a4dd-da1c2156826c",name:"sourced scenario element",type:"BusinessObject",layer:"business"},{id:"e894b015-59dc-4c40-8069-2eea587d9b14",name:"calculated scenario element",type:"BusinessObject",layer:"business"},{id:"813cd054-96d7-4c58-8ecf-b217a1703c23",name:"cross rate scenario element",type:"BusinessObject",layer:"business"},{id:"12362afd-2c75-47d3-900d-847d8893caa7",name:"source index",type:"BusinessObject",layer:"business"},{id:"cf48951b-bf2f-45f0-8e00-ad742cc46610",name:"information source",type:"BusinessObject",layer:"business"},{id:"7ec7da8d-d9a5-46fd-880a-26800f719eff",name:"formula",type:"BusinessObject",layer:"business"},{id:"7dc551bd-af9c-454f-a979-84a0afb54ea8",name:"spread = bid-offer",type:"Requirement",layer:"motivation"},{id:"1bc95840-9bb6-4e86-be62-a013424bd4b7",name:"mid=(bid+offer)/2",type:"Requirement",layer:"motivation"},{id:"8f9a783a-c8ad-41b1-81ba-38a1ebccfe87",name:"bid==offer",type:"Constraint",layer:"motivation"},{id:"944aa19d-32f1-4897-86d8-da8af8f3eeac",name:".",type:"Grouping",layer:"other"}],u=[{id:"dfb06c2c-0505-4e1c-92bd-2be9cc949133",sourceId:"3b708bb9-12ff-420b-a7c9-ab06d81f54d1",targetId:"4da9f714-6865-4471-9519-a85dee20d57f",type:"CompositionRelationship"},{id:"45036fba-bd58-4c6c-a287-853d68c08059",sourceId:"3b708bb9-12ff-420b-a7c9-ab06d81f54d1",targetId:"615d1d60-8d1c-49bd-81d3-d3fb0aad464f",type:"CompositionRelationship"},{id:"7d6ef4ca-5343-4a59-ba51-145033c26755",sourceId:"615d1d60-8d1c-49bd-81d3-d3fb0aad464f",targetId:"437c51cc-3914-4e62-8818-54193601e75e",type:"AggregationRelationship"},{id:"88a95c25-3a53-4b2f-bb3b-3d1499a3628a",sourceId:"3b708bb9-12ff-420b-a7c9-ab06d81f54d1",targetId:"34be6bc4-a83a-45a7-aa0a-7a65a0b6a44d",type:"AssociationRelationship"},{id:"d72a9cb6-3feb-4eba-9322-96bb02ff7485",sourceId:"3b708bb9-12ff-420b-a7c9-ab06d81f54d1",targetId:"74729056-f8a1-413c-a314-790df98e5178",type:"AssociationRelationship"},{id:"77226197-516e-4635-a5fe-7fdc2a920894",sourceId:"3b708bb9-12ff-420b-a7c9-ab06d81f54d1",targetId:"74729056-f8a1-413c-a314-790df98e5178",type:"AssociationRelationship"},{id:"0d84d597-56c5-47a0-b3b2-eb9f5f3b6c14",sourceId:"3b708bb9-12ff-420b-a7c9-ab06d81f54d1",targetId:"74729056-f8a1-413c-a314-790df98e5178",type:"AssociationRelationship"},{id:"96e5243e-2b8d-4776-bd25-e1781e2e898b",sourceId:"3b708bb9-12ff-420b-a7c9-ab06d81f54d1",targetId:"74729056-f8a1-413c-a314-790df98e5178",type:"AssociationRelationship"},{id:"c925958d-8452-400e-9b1d-bc203e362113",sourceId:"88b8c901-acc1-4bbc-88bf-5bddf1e09fe5",targetId:"3b708bb9-12ff-420b-a7c9-ab06d81f54d1",type:"SpecializationRelationship"},{id:"b4e1905f-9386-48bf-a778-d43de03dd4b0",sourceId:"ff643b83-5cab-468a-9672-efa66e2fd672",targetId:"3b708bb9-12ff-420b-a7c9-ab06d81f54d1",type:"SpecializationRelationship"},{id:"7015e3f9-51c0-4655-9e00-06db4086c6a0",sourceId:"130b56e7-1857-428c-87fa-35a4b3b0c508",targetId:"71c24e89-a6ed-4eff-aa11-6ce85349feca",type:"SpecializationRelationship"},{id:"370f097d-962b-4234-aebd-0b15c241329c",sourceId:"b067bcbe-948b-45f0-8031-5f99d4d3fb26",targetId:"71c24e89-a6ed-4eff-aa11-6ce85349feca",type:"SpecializationRelationship"},{id:"f04a00f5-2122-45c9-9372-81f1e9dd26d9",sourceId:"7196c46b-3040-4e60-97d5-888097eb8974",targetId:"71c24e89-a6ed-4eff-aa11-6ce85349feca",type:"SpecializationRelationship"},{id:"2103fcc5-ce7f-4d12-a1c8-2c7e16ca7101",sourceId:"130b56e7-1857-428c-87fa-35a4b3b0c508",targetId:"5c5fe99e-adad-405a-a7a5-b72fc56b1286",type:"AssociationRelationship"},{id:"4957dbf0-0ac2-466f-bf56-e622cc164be9",sourceId:"130b56e7-1857-428c-87fa-35a4b3b0c508",targetId:"5c5fe99e-adad-405a-a7a5-b72fc56b1286",type:"AssociationRelationship"},{id:"e3eea668-6769-45a9-8d44-df63f2d982e0",sourceId:"130b56e7-1857-428c-87fa-35a4b3b0c508",targetId:"34be6bc4-a83a-45a7-aa0a-7a65a0b6a44d",type:"AssociationRelationship"},{id:"ce9ed4bd-0e93-4015-a33e-288b8e50149c",sourceId:"130b56e7-1857-428c-87fa-35a4b3b0c508",targetId:"74729056-f8a1-413c-a314-790df98e5178",type:"AssociationRelationship"},{id:"6b125194-b94b-46e5-9264-2079aabaeedc",sourceId:"130b56e7-1857-428c-87fa-35a4b3b0c508",targetId:"74729056-f8a1-413c-a314-790df98e5178",type:"AssociationRelationship"},{id:"75933771-1d60-4de5-b465-102e23ec9e84",sourceId:"b067bcbe-948b-45f0-8031-5f99d4d3fb26",targetId:"6fc53c12-f473-4a9f-a319-ef4a04cf4364",type:"AssociationRelationship"},{id:"97725de2-4a37-4c7b-9765-97b466b6cbd4",sourceId:"7196c46b-3040-4e60-97d5-888097eb8974",targetId:"b282545f-b6cb-4516-80be-72bb29d966ae",type:"AssociationRelationship"},{id:"0196adc1-271b-40f1-8dea-f312e29995d5",sourceId:"fd81e407-2370-491c-b719-09884ba7208b",targetId:"71c24e89-a6ed-4eff-aa11-6ce85349feca",type:"AssociationRelationship"},{id:"f48eb2a1-da7c-499f-826b-6617a0202010",sourceId:"fd81e407-2370-491c-b719-09884ba7208b",targetId:"3b708bb9-12ff-420b-a7c9-ab06d81f54d1",type:"AssociationRelationship"},{id:"7d24d843-5405-46a3-a098-3808288202f0",sourceId:"7196c46b-3040-4e60-97d5-888097eb8974",targetId:"fd81e407-2370-491c-b719-09884ba7208b",type:"AssociationRelationship"},{id:"c7f78a37-b994-4990-83c9-def2a54f7e17",sourceId:"084f3783-1b80-4a41-adfc-2e5b7c83fdde",targetId:"71c24e89-a6ed-4eff-aa11-6ce85349feca",type:"AssociationRelationship"},{id:"0dd254fa-a4b0-4f96-aa00-765832553e5a",sourceId:"24d11223-a6bb-4baa-b567-ba631e3d866c",targetId:"71c24e89-a6ed-4eff-aa11-6ce85349feca",type:"AssociationRelationship"},{id:"fe18370b-f42e-49c0-bfc5-314f9fd4f8fb",sourceId:"3b708bb9-12ff-420b-a7c9-ab06d81f54d1",targetId:"1aaeee9e-751d-4d9a-9fa5-3962ca348e1d",type:"AssociationRelationship"},{id:"559c1a82-37be-4ecf-be36-034d4e214eae",sourceId:"fd81e407-2370-491c-b719-09884ba7208b",targetId:"d871738b-d2ba-4400-910d-5b371e1e2bc9",type:"AssociationRelationship"},{id:"7c3141d7-884f-412c-afc4-f964529439da",sourceId:"24d11223-a6bb-4baa-b567-ba631e3d866c",targetId:"33dc7259-7fe6-49af-8dff-83b5ea5059c5",type:"CompositionRelationship"},{id:"a97f5103-aa15-4d4d-af4e-6fddf4269488",sourceId:"33dc7259-7fe6-49af-8dff-83b5ea5059c5",targetId:"7704b7e8-c8a4-4a13-b96d-408fb020646a",type:"CompositionRelationship"},{id:"56e12826-28cb-4506-922f-17f00a5a0e53",sourceId:"7704b7e8-c8a4-4a13-b96d-408fb020646a",targetId:"084f3783-1b80-4a41-adfc-2e5b7c83fdde",type:"FlowRelationship"},{id:"e7ec721e-a249-4717-99df-b3cbd78db293",sourceId:"8926fb2f-e50a-44a3-abc3-d439a9130731",targetId:"3d7e952b-ae39-48ba-843e-d1f658ae2b00",type:"CompositionRelationship"},{id:"179c0088-fd3f-44ac-bd2f-d65133bae9f6",sourceId:"8926fb2f-e50a-44a3-abc3-d439a9130731",targetId:"214706c3-9db3-4808-8cf5-6e05ba812782",type:"CompositionRelationship"},{id:"18e2794e-0cb1-462d-9d11-043f2b19a249",sourceId:"8926fb2f-e50a-44a3-abc3-d439a9130731",targetId:"87257a05-e80c-4cb3-ab7b-0e3932f017e0",type:"CompositionRelationship"},{id:"faddab82-dee6-4fde-8266-e6719a4b6c02",sourceId:"8926fb2f-e50a-44a3-abc3-d439a9130731",targetId:"8dc3553f-f120-4f02-9ff4-9772a3b3ba18",type:"CompositionRelationship"},{id:"fbd6ea20-548d-405e-a82f-51595c219ed0",sourceId:"87257a05-e80c-4cb3-ab7b-0e3932f017e0",targetId:"1bc95840-9bb6-4e86-be62-a013424bd4b7",type:"AssociationRelationship"},{id:"f580115c-6a1d-4339-b491-5c56594f5157",sourceId:"8dc3553f-f120-4f02-9ff4-9772a3b3ba18",targetId:"7dc551bd-af9c-454f-a979-84a0afb54ea8",type:"AssociationRelationship"},{id:"37552212-e6ed-48df-9253-3aa0141cf40f",sourceId:"34be6bc4-a83a-45a7-aa0a-7a65a0b6a44d",targetId:"4f6a8407-defe-477e-ad08-3ee2ea51a645",type:"CompositionRelationship"},{id:"91f86c35-481e-4f82-aebc-7b2b15655619",sourceId:"4f6a8407-defe-477e-ad08-3ee2ea51a645",targetId:"8926fb2f-e50a-44a3-abc3-d439a9130731",type:"AggregationRelationship"},{id:"24a727c1-8ccd-4181-bc5f-29515f9c5cde",sourceId:"8926fb2f-e50a-44a3-abc3-d439a9130731",targetId:"48b4af33-fb5b-4c07-9422-d434ae823155",type:"CompositionRelationship"},{id:"aa819bba-c31a-4c0b-b540-22f52d0d1f61",sourceId:"b668367c-11e2-4f91-b425-d766b08a3bde",targetId:"8926fb2f-e50a-44a3-abc3-d439a9130731",type:"SpecializationRelationship"},{id:"062248d9-de36-45f9-914f-94592845a0a4",sourceId:"b668367c-11e2-4f91-b425-d766b08a3bde",targetId:"8f9a783a-c8ad-41b1-81ba-38a1ebccfe87",type:"AssociationRelationship"},{id:"86ce1e11-2627-4add-9340-eae33e51f2c4",sourceId:"cf01f4a4-ecb2-4e07-b1e5-63a235dcfcf0",targetId:"c4e2686c-908c-43da-9a41-25ad09a27bae",type:"AssociationRelationship"},{id:"68d2dcdb-0807-40d8-a2cb-0073ba990798",sourceId:"cf01f4a4-ecb2-4e07-b1e5-63a235dcfcf0",targetId:"8926fb2f-e50a-44a3-abc3-d439a9130731",type:"AssociationRelationship"},{id:"333434c1-01b6-42a2-8198-37b6e4fb07d0",sourceId:"cf01f4a4-ecb2-4e07-b1e5-63a235dcfcf0",targetId:"2ae0c1af-c858-464f-a192-b96360bf1930",type:"AssociationRelationship"},{id:"a6f55026-9f59-4bc4-aa60-58422f10b32f",sourceId:"2ae0c1af-c858-464f-a192-b96360bf1930",targetId:"74729056-f8a1-413c-a314-790df98e5178",type:"AssociationRelationship"},{id:"aba60500-3230-431e-9cab-a3f8bdca72a5",sourceId:"2ae0c1af-c858-464f-a192-b96360bf1930",targetId:"19e891b0-c408-424b-950a-f91089671e4e",type:"AssociationRelationship"},{id:"e8aee181-77d6-492e-ba48-97f37a593ee8",sourceId:"34be6bc4-a83a-45a7-aa0a-7a65a0b6a44d",targetId:"c4e2686c-908c-43da-9a41-25ad09a27bae",type:"SpecializationRelationship"},{id:"b2505989-3905-4421-b46d-bfa1c8675dc9",sourceId:"d9d4cda2-220f-41c2-a4dd-da1c2156826c",targetId:"cf01f4a4-ecb2-4e07-b1e5-63a235dcfcf0",type:"SpecializationRelationship"},{id:"e0e1ddfa-f021-4960-8cff-b4f0e9c774d8",sourceId:"e894b015-59dc-4c40-8069-2eea587d9b14",targetId:"cf01f4a4-ecb2-4e07-b1e5-63a235dcfcf0",type:"SpecializationRelationship"},{id:"bffd56e5-7f96-4797-92f0-4f48f3691973",sourceId:"d9d4cda2-220f-41c2-a4dd-da1c2156826c",targetId:"12362afd-2c75-47d3-900d-847d8893caa7",type:"AssociationRelationship"},{id:"94499e39-72d0-4149-a792-2b5c3cb3bac2",sourceId:"12362afd-2c75-47d3-900d-847d8893caa7",targetId:"cf48951b-bf2f-45f0-8e00-ad742cc46610",type:"AssociationRelationship"},{id:"27dcb38b-67c8-47cd-8f8e-d29b90aa8b06",sourceId:"813cd054-96d7-4c58-8ecf-b217a1703c23",targetId:"cf01f4a4-ecb2-4e07-b1e5-63a235dcfcf0",type:"AssociationRelationship"},{id:"82d0cdfc-5442-47e0-b002-3936f5ef2fa7",sourceId:"cf01f4a4-ecb2-4e07-b1e5-63a235dcfcf0",targetId:"813cd054-96d7-4c58-8ecf-b217a1703c23",type:"CompositionRelationship"},{id:"3bd2fdd4-f082-4189-8c64-ea0d70a9c080",sourceId:"813cd054-96d7-4c58-8ecf-b217a1703c23",targetId:"cf01f4a4-ecb2-4e07-b1e5-63a235dcfcf0",type:"CompositionRelationship"},{id:"1af2a871-1f95-428c-89c9-b58c185cdce8",sourceId:"944aa19d-32f1-4897-86d8-da8af8f3eeac",targetId:"d9d4cda2-220f-41c2-a4dd-da1c2156826c",type:"CompositionRelationship"},{id:"30c047d3-614a-4a4e-b54e-edf166450af2",sourceId:"944aa19d-32f1-4897-86d8-da8af8f3eeac",targetId:"813cd054-96d7-4c58-8ecf-b217a1703c23",type:"CompositionRelationship"},{id:"91c0809d-e1a2-4152-8752-fb28c83f1c1d",sourceId:"944aa19d-32f1-4897-86d8-da8af8f3eeac",targetId:"e894b015-59dc-4c40-8069-2eea587d9b14",type:"CompositionRelationship"},{id:"24b82678-cc18-4e7c-a13c-5ad02b8337cb",sourceId:"cf01f4a4-ecb2-4e07-b1e5-63a235dcfcf0",targetId:"944aa19d-32f1-4897-86d8-da8af8f3eeac",type:"CompositionRelationship"},{id:"cc730645-4c44-4bb5-9d29-051816220793",sourceId:"813cd054-96d7-4c58-8ecf-b217a1703c23",targetId:"cf01f4a4-ecb2-4e07-b1e5-63a235dcfcf0",type:"AssociationRelationship"},{id:"13a5ceda-74cd-42a5-88c7-a6f480e5409d",sourceId:"813cd054-96d7-4c58-8ecf-b217a1703c23",targetId:"cf01f4a4-ecb2-4e07-b1e5-63a235dcfcf0",type:"AssociationRelationship"},{id:"f248fb73-ad01-4aa1-914f-1eab314496d7",sourceId:"e894b015-59dc-4c40-8069-2eea587d9b14",targetId:"7ec7da8d-d9a5-46fd-880a-26800f719eff",type:"AssociationRelationship"},{id:"f7e69456-7e5e-489f-a39a-74fce2984efc",sourceId:"e894b015-59dc-4c40-8069-2eea587d9b14",targetId:"cf01f4a4-ecb2-4e07-b1e5-63a235dcfcf0",type:"AssociationRelationship"}],y=[{id:"fc9ec19b-391e-4e67-a842-fdcc92e28008",name:"Trading",viewpoint:""},{id:"c17a515d-8eb6-49f7-aa14-36b75aa5174e",name:"1 Contract",viewpoint:""},{id:"3486f0fd-3e11-4bd4-9046-ff5fe8eab357",name:"2 Portfolio",viewpoint:""},{id:"8ad7c611-dff9-471c-a65e-9f659af50af4",name:"3 Quote ",viewpoint:""},{id:"2b4b8434-74b0-402f-8688-f0f7a711c166",name:"4 Scenario",viewpoint:""}],l={identifier:e,archimateId:a,name:d,description:c,formats:b,source:i,sourceFile:s,sourceFormat:t,timestamp:f,tags:o,duplicates:n,language:r,elements:p,relationships:u,views:y};export{a as archimateId,l as default,c as description,n as duplicates,p as elements,b as formats,e as identifier,r as language,d as name,u as relationships,i as source,s as sourceFile,t as sourceFormat,o as tags,f as timestamp,y as views};
