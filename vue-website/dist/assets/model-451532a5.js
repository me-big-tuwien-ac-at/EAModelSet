const e="https://me.big.tuwien.ac.at/EAModelSet/eaedaf45-d691-4aaf-ac35-02cb77856490",a="eaedaf45-d691-4aaf-ac35-02cb77856490",d="(new model)",c="",i=["XML","CSV","JSON","ARCHIMATE"],b="GitHub",f="raw-data/github/xml/layered_viewpoint.xml",t="XML",s="29-06-2023 09:28:20",n=["DUPLICATE"],r=["raw-data/github/archimate/layered_viewpoint.archimate"],o="en",p=[{id:"id-9e6d6c0d-4f52-4658-8cdc-fce8460b2583",name:"ARCARD",type:"Product",layer:"business"},{id:"d1abbde3-4b51-4cff-867c-29ed2dcdbf1f",name:"Buying service",type:"BusinessService",layer:"business"},{id:"id-3090a0d8-b588-4501-918e-fa3f956f60d1",name:"Bank transfer order",type:"BusinessEvent",layer:"business"},{id:"b5a53b9a-a5f7-4a83-b769-ddf55196837f",name:"Transfer process",type:"BusinessProcess",layer:"business"},{id:"id-2251f7a0-9fe6-4b20-950b-b900c56cd85f",name:"ARCALIBRA Transfering service",type:"BusinessService",layer:"business"},{id:"a9c2735d-8ad5-4b97-959b-963204798e83",name:"Purchase order",type:"BusinessEvent",layer:"business"},{id:"id-5de79128-ccac-49e9-8d74-b29a34814bde",name:"Purchase process",type:"BusinessProcess",layer:"business"},{id:"id-287b95c7-a165-4859-9f24-6f7b1fb9762e",name:"",type:"BusinessEvent",layer:"business"},{id:"id-640dac86-7a58-435d-b76e-9246357a9f4e",name:"Create invoice",type:"BusinessProcess",layer:"business"},{id:"id-0fd2eaae-3162-4aea-837e-c9046f9b98a0",name:"Invoice",type:"BusinessObject",layer:"business"},{id:"id-64b6cf80-aea2-4f32-a341-a2a25786a7c4",name:"Business Interaction",type:"BusinessInteraction",layer:"business"},{id:"id-85150a85-ff4d-4d22-a4e1-ca82a8178e62",name:"Client",type:"BusinessActor",layer:"business"},{id:"id-35801758-6d6e-4ae1-b22e-42bff4413cf3",name:"ARCAPP Partner",type:"BusinessActor",layer:"business"},{id:"d08d1802-e696-4159-bc63-7fb330e398eb",name:"ARCALIBRA offer",type:"BusinessEvent",layer:"business"},{id:"id-5082bb6d-6bdf-46a0-ae56-3b755a25b529",name:"Credit",type:"ApplicationFunction",layer:"application"},{id:"id-0b480d1e-0b5e-4f9f-9a10-b7f44ff79348",name:"Debit",type:"ApplicationFunction",layer:"application"},{id:"id-1ea7f0c5-8ff6-4fba-bf80-724852d16b96",name:"ARCAPP",type:"ApplicationComponent",layer:"application"},{id:"e8559328-0f8e-408f-8ba4-c9364d5e9584",name:"POS software",type:"ApplicationComponent",layer:"application"},{id:"id-056a5078-2c91-4b3a-bc8f-c5a088916c06",name:"Process purchase order",type:"ApplicationFunction",layer:"application"},{id:"id-1fdd0428-60f7-4b4f-9b50-be6ff11a1aaf",name:"Bank servers",type:"Device",layer:"technology"},{id:"id-89b6f2c1-7e21-4b38-b0c6-5ac7d418f1f8",name:"ARCA backend servers",type:"Device",layer:"technology"},{id:"id-0239a9c8-2516-4155-a162-7f8d5bbe1576",name:"Client smartphone",type:"Device",layer:"technology"},{id:"id-5ffc2911-e941-4a93-a6b7-7e22a1dbf4cb",name:"POS device",type:"Device",layer:"technology"},{id:"f8dca3ee-ba4a-44e8-bf50-3970c8eb3103",name:"Communication Network",type:"CommunicationNetwork",layer:"technology"},{id:"id-3db3d1c4-0a16-4f19-b93a-971117c548a4",name:"Smartphone OS",type:"TechnologyInterface",layer:"technology"},{id:"d81e0e60-07c8-4d7b-8428-879c1de2823b",name:"POS interface",type:"TechnologyInterface",layer:"technology"}],y=[{id:"id-3e79512d-512c-4a80-906a-6a621c2f76b2",sourceId:"d1abbde3-4b51-4cff-867c-29ed2dcdbf1f",targetId:"id-9e6d6c0d-4f52-4658-8cdc-fce8460b2583",type:"Serving"},{id:"id-72ad6058-1ab2-490b-8820-1887a22c1aee",sourceId:"id-9e6d6c0d-4f52-4658-8cdc-fce8460b2583",targetId:"d1abbde3-4b51-4cff-867c-29ed2dcdbf1f",type:"Composition"},{id:"cff5f7af-e726-4abf-af32-3e64aed80180",sourceId:"id-3090a0d8-b588-4501-918e-fa3f956f60d1",targetId:"b5a53b9a-a5f7-4a83-b769-ddf55196837f",type:"Flow"},{id:"id-60eea648-3b82-49ea-819e-5be20cbe0a82",sourceId:"id-5082bb6d-6bdf-46a0-ae56-3b755a25b529",targetId:"b5a53b9a-a5f7-4a83-b769-ddf55196837f",type:"Serving"},{id:"id-805ea5b6-175d-4e25-b106-f8c14f5cb7e5",sourceId:"id-0b480d1e-0b5e-4f9f-9a10-b7f44ff79348",targetId:"b5a53b9a-a5f7-4a83-b769-ddf55196837f",type:"Serving"},{id:"c00c0cb0-0296-4724-8e3e-1f330b8c2f79",sourceId:"id-9e6d6c0d-4f52-4658-8cdc-fce8460b2583",targetId:"id-2251f7a0-9fe6-4b20-950b-b900c56cd85f",type:"Composition"},{id:"id-8cab7a2e-63a4-4657-b275-aaf05e6a19d8",sourceId:"b5a53b9a-a5f7-4a83-b769-ddf55196837f",targetId:"id-2251f7a0-9fe6-4b20-950b-b900c56cd85f",type:"Realization"},{id:"id-7b522e81-68e5-4d04-98a0-9088ee374d29",sourceId:"id-1ea7f0c5-8ff6-4fba-bf80-724852d16b96",targetId:"id-0b480d1e-0b5e-4f9f-9a10-b7f44ff79348",type:"Association"},{id:"id-6de870f7-66aa-4861-a878-ccef2c5bd981",sourceId:"id-1ea7f0c5-8ff6-4fba-bf80-724852d16b96",targetId:"id-5082bb6d-6bdf-46a0-ae56-3b755a25b529",type:"Association"},{id:"id-2c9511b7-bc04-4c97-9481-ee43b88da4ac",sourceId:"id-1ea7f0c5-8ff6-4fba-bf80-724852d16b96",targetId:"id-0b480d1e-0b5e-4f9f-9a10-b7f44ff79348",type:"Assignment"},{id:"b5c076d8-f71d-44b7-9a48-069a6ad6ad9c",sourceId:"id-1ea7f0c5-8ff6-4fba-bf80-724852d16b96",targetId:"id-5082bb6d-6bdf-46a0-ae56-3b755a25b529",type:"Assignment"},{id:"id-27cdcd92-55c4-44d1-8388-fb4fcfdb4624",sourceId:"id-3db3d1c4-0a16-4f19-b93a-971117c548a4",targetId:"id-1ea7f0c5-8ff6-4fba-bf80-724852d16b96",type:"Association"},{id:"id-6d45ada8-a9e5-4e9f-a604-b75154f9f5c5",sourceId:"id-0239a9c8-2516-4155-a162-7f8d5bbe1576",targetId:"id-3db3d1c4-0a16-4f19-b93a-971117c548a4",type:"Association"},{id:"d707d181-2b31-4ed1-bc49-9603d43f9252",sourceId:"id-89b6f2c1-7e21-4b38-b0c6-5ac7d418f1f8",targetId:"f8dca3ee-ba4a-44e8-bf50-3970c8eb3103",type:"Association"},{id:"fd4c58b2-1ce9-4d6a-8f2a-742fea9269bb",sourceId:"id-1fdd0428-60f7-4b4f-9b50-be6ff11a1aaf",targetId:"f8dca3ee-ba4a-44e8-bf50-3970c8eb3103",type:"Association"},{id:"id-2cdbcfdb-be39-409d-9302-eac68d9c22be",sourceId:"id-0239a9c8-2516-4155-a162-7f8d5bbe1576",targetId:"f8dca3ee-ba4a-44e8-bf50-3970c8eb3103",type:"Association"},{id:"aa1462b9-4fb4-45e2-9818-4ca970be9ea4",sourceId:"id-5ffc2911-e941-4a93-a6b7-7e22a1dbf4cb",targetId:"f8dca3ee-ba4a-44e8-bf50-3970c8eb3103",type:"Association"},{id:"fdd4ae6a-8101-48eb-8bd5-5cf8a6371d10",sourceId:"d81e0e60-07c8-4d7b-8428-879c1de2823b",targetId:"id-5ffc2911-e941-4a93-a6b7-7e22a1dbf4cb",type:"Association"},{id:"c2ccfa77-202f-41a0-a9bd-a0c18a968dba",sourceId:"e8559328-0f8e-408f-8ba4-c9364d5e9584",targetId:"d81e0e60-07c8-4d7b-8428-879c1de2823b",type:"Association"},{id:"id-30f28412-0bc4-461e-a265-4db42741579c",sourceId:"e8559328-0f8e-408f-8ba4-c9364d5e9584",targetId:"id-056a5078-2c91-4b3a-bc8f-c5a088916c06",type:"Assignment"},{id:"id-881d12e4-9cf6-4f71-aa19-2dee9c416c89",sourceId:"a9c2735d-8ad5-4b97-959b-963204798e83",targetId:"id-5de79128-ccac-49e9-8d74-b29a34814bde",type:"Flow"},{id:"e320d8f9-a39b-46ad-ad51-6da9d134019f",sourceId:"id-5de79128-ccac-49e9-8d74-b29a34814bde",targetId:"d1abbde3-4b51-4cff-867c-29ed2dcdbf1f",type:"Realization"},{id:"id-71fc80a1-d25e-4bfe-a727-9c2e571ca4b6",sourceId:"id-056a5078-2c91-4b3a-bc8f-c5a088916c06",targetId:"id-5de79128-ccac-49e9-8d74-b29a34814bde",type:"Serving"},{id:"ea48ffa7-d059-4f34-a990-cad758e92297",sourceId:"id-5de79128-ccac-49e9-8d74-b29a34814bde",targetId:"id-640dac86-7a58-435d-b76e-9246357a9f4e",type:"Flow"},{id:"d1915c97-6d72-45fd-84ed-48055ae74391",sourceId:"id-85150a85-ff4d-4d22-a4e1-ca82a8178e62",targetId:"id-9e6d6c0d-4f52-4658-8cdc-fce8460b2583",type:"Association"},{id:"id-6b78fc35-9448-4742-95e7-a67d9b080711",sourceId:"id-85150a85-ff4d-4d22-a4e1-ca82a8178e62",targetId:"a9c2735d-8ad5-4b97-959b-963204798e83",type:"Triggering"},{id:"id-2568f9bb-2df2-4262-ad96-60661fc90d4c",sourceId:"id-85150a85-ff4d-4d22-a4e1-ca82a8178e62",targetId:"id-3090a0d8-b588-4501-918e-fa3f956f60d1",type:"Triggering"},{id:"id-912b2c52-26aa-4b34-96a0-605546cd41ef",sourceId:"id-0b480d1e-0b5e-4f9f-9a10-b7f44ff79348",targetId:"id-5de79128-ccac-49e9-8d74-b29a34814bde",type:"Serving"},{id:"id-0c7f1314-bb74-428b-895d-1078b3c3baa1",sourceId:"id-35801758-6d6e-4ae1-b22e-42bff4413cf3",targetId:"d08d1802-e696-4159-bc63-7fb330e398eb",type:"Triggering"},{id:"id-4e0d296d-88a2-4b41-b541-be52c5afd189",sourceId:"d08d1802-e696-4159-bc63-7fb330e398eb",targetId:"b5a53b9a-a5f7-4a83-b769-ddf55196837f",type:"Flow"}],u=[{id:"d8c59b4a-7df2-4926-aeb5-8b441f9e1e52",name:"Default View",viewpoint:""}],l={identifier:e,archimateId:a,name:d,description:c,formats:i,source:b,sourceFile:f,sourceFormat:t,timestamp:s,tags:n,duplicates:r,language:o,elements:p,relationships:y,views:u};export{a as archimateId,l as default,c as description,r as duplicates,p as elements,i as formats,e as identifier,o as language,d as name,y as relationships,b as source,f as sourceFile,t as sourceFormat,n as tags,s as timestamp,u as views};
