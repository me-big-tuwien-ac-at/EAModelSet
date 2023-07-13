const e="https://me.big.tuwien.ac.at/EAModelSet/38dbf9d3-ca37-4f87-b172-a374a2661440",a="38dbf9d3-ca37-4f87-b172-a374a2661440",d="(new model)",t="",c=["XML","CSV","JSON","ARCHIMATE"],i="GitHub",b="raw-data/github/archimate/motivation_model.archimate",o="ARCHIMATE",f="29-06-2023 09:30:38",n=[],s=[],r="en",l=[{id:"3fd26618-3a9b-4042-9d5d-9ba9134220da",name:"System-to-be ",type:"Node",layer:"technology"},{id:"5e629813-80b8-4d0d-bea9-701ec1275564",name:"Problem Domain ",type:"Node",layer:"technology"},{id:"dda0ffa2-3ecf-4649-a5a5-f33651984354",name:"System-as-is ",type:"Node",layer:"technology"},{id:"7e7654b0-de8c-441e-9ecd-5c175d941fb2",name:"Students",type:"Stakeholder",layer:"motivation"},{id:"a110e5ac-4a10-4e59-9110-c3bd39e7dad8",name:"Student well-being concerns ",type:"Driver",layer:"motivation"},{id:"4875480e-db5b-4f64-8913-a18ad912c2f2",name:"Improving the tracking and overall undestanding of a student's well-being",type:"Assessment",layer:"motivation"},{id:"8daf0cbb-8bf0-4762-aae5-b18fd3b3c9bb",name:"Provide students with better resources for managing their own personal well-being ",type:"Goal",layer:"motivation"},{id:"dbfe2d8f-5d15-460c-ba76-eca421b0ad2a",name:"Collate data from surveys to form an understanding of a studen's current well-being",type:"Principle",layer:"motivation"},{id:"145fe141-20da-4cc1-9d56-c5722fce5cc5",name:"Provide students with information to track wellbeing",type:"Requirement",layer:"motivation"},{id:"425da265-4fca-4345-9e7f-0b6a9ead70fb",name:"Scalability to handle large numbers of students",type:"Requirement",layer:"motivation"},{id:"90e76edb-7f4d-4479-af04-7ece6d573549",name:"Support multiple platforms",type:"Requirement",layer:"motivation"},{id:"1306ea2a-4602-457f-9371-a87c55c064ff",name:"Have survey and response data be stored in a database",type:"Requirement",layer:"motivation"},{id:"0160c396-7cfd-46d8-9d22-dd2833df4206",name:"Health expert",type:"Stakeholder",layer:"motivation"},{id:"920eae67-37b6-42d8-b30e-a7ece4f73a45",name:"",type:"Stakeholder",layer:"motivation"},{id:"c2c06375-bcf9-46c2-9017-3b65ac916dfb",name:"Lecturers/University staff",type:"Stakeholder",layer:"motivation"},{id:"2a9097f9-ccdd-4e7a-8af9-3cba3ebdfc1e",name:"Web based application",type:"Requirement",layer:"motivation"},{id:"0d7ec3ab-f6c6-4e9e-a6b3-566398ed1cee",name:"Android application",type:"Requirement",layer:"motivation"}],p=[{id:"8ce4f208-97b2-474e-a627-097fb5c3e944",sourceId:"3fd26618-3a9b-4042-9d5d-9ba9134220da",targetId:"145fe141-20da-4cc1-9d56-c5722fce5cc5",type:"RealizationRelationship"},{id:"cbd11f39-e7fc-42ba-a199-462871c2e34a",sourceId:"3fd26618-3a9b-4042-9d5d-9ba9134220da",targetId:"425da265-4fca-4345-9e7f-0b6a9ead70fb",type:"RealizationRelationship"},{id:"77dbac72-2de0-4659-8d45-dd1a35010a7d",sourceId:"3fd26618-3a9b-4042-9d5d-9ba9134220da",targetId:"90e76edb-7f4d-4479-af04-7ece6d573549",type:"RealizationRelationship"},{id:"28ce257f-9ad0-48f9-b196-b91c0063d242",sourceId:"3fd26618-3a9b-4042-9d5d-9ba9134220da",targetId:"1306ea2a-4602-457f-9371-a87c55c064ff",type:"RealizationRelationship"},{id:"2a39c6a9-53eb-4ca6-916b-0316f50c9357",sourceId:"145fe141-20da-4cc1-9d56-c5722fce5cc5",targetId:"dbfe2d8f-5d15-460c-ba76-eca421b0ad2a",type:"RealizationRelationship"},{id:"f4f136bf-87eb-4f4b-8a83-d2a4c7f69e80",sourceId:"425da265-4fca-4345-9e7f-0b6a9ead70fb",targetId:"dbfe2d8f-5d15-460c-ba76-eca421b0ad2a",type:"RealizationRelationship"},{id:"3149f604-019f-46fb-8bd1-64021bba36fb",sourceId:"90e76edb-7f4d-4479-af04-7ece6d573549",targetId:"dbfe2d8f-5d15-460c-ba76-eca421b0ad2a",type:"RealizationRelationship"},{id:"1b1c709d-8ca5-4392-86b7-666d9ad9b22f",sourceId:"1306ea2a-4602-457f-9371-a87c55c064ff",targetId:"dbfe2d8f-5d15-460c-ba76-eca421b0ad2a",type:"RealizationRelationship"},{id:"7d028c7b-63ba-4a53-8a8c-2e137ae363cc",sourceId:"dbfe2d8f-5d15-460c-ba76-eca421b0ad2a",targetId:"8daf0cbb-8bf0-4762-aae5-b18fd3b3c9bb",type:"RealizationRelationship"},{id:"1581c99c-bd7d-44f4-a9cc-e357ff559e9f",sourceId:"4875480e-db5b-4f64-8913-a18ad912c2f2",targetId:"8daf0cbb-8bf0-4762-aae5-b18fd3b3c9bb",type:"AssociationRelationship"},{id:"00982f67-2f7c-4552-b5c9-5bca4a4095d8",sourceId:"7e7654b0-de8c-441e-9ecd-5c175d941fb2",targetId:"a110e5ac-4a10-4e59-9110-c3bd39e7dad8",type:"AssociationRelationship"},{id:"67bccdb9-2439-4ac0-a2f6-77a1b9cd41a9",sourceId:"a110e5ac-4a10-4e59-9110-c3bd39e7dad8",targetId:"4875480e-db5b-4f64-8913-a18ad912c2f2",type:"AssociationRelationship"},{id:"17b991ea-f004-4f16-8c0e-01e414f6f377",sourceId:"5e629813-80b8-4d0d-bea9-701ec1275564",targetId:"a110e5ac-4a10-4e59-9110-c3bd39e7dad8",type:"AssociationRelationship"},{id:"a86f8c10-65d8-4ba8-957e-c1e7c6f1f802",sourceId:"3fd26618-3a9b-4042-9d5d-9ba9134220da",targetId:"5e629813-80b8-4d0d-bea9-701ec1275564",type:"SpecializationRelationship"},{id:"73d2aa9e-07c8-48a9-9997-483bb72be5d9",sourceId:"dda0ffa2-3ecf-4649-a5a5-f33651984354",targetId:"5e629813-80b8-4d0d-bea9-701ec1275564",type:"SpecializationRelationship"},{id:"41d687cb-e107-4124-9bbf-d5298d46bbb9",sourceId:"4875480e-db5b-4f64-8913-a18ad912c2f2",targetId:"dda0ffa2-3ecf-4649-a5a5-f33651984354",type:"AssociationRelationship"},{id:"ddd66920-e516-476a-9d55-d6a40f711165",sourceId:"0160c396-7cfd-46d8-9d22-dd2833df4206",targetId:"a110e5ac-4a10-4e59-9110-c3bd39e7dad8",type:"AssociationRelationship"},{id:"cfb66c82-da8e-4660-9cbd-22f63945be59",sourceId:"c2c06375-bcf9-46c2-9017-3b65ac916dfb",targetId:"a110e5ac-4a10-4e59-9110-c3bd39e7dad8",type:"AssociationRelationship"},{id:"e5fa0fd1-7191-418b-ac30-c5aa6be88b14",sourceId:"3fd26618-3a9b-4042-9d5d-9ba9134220da",targetId:"2a9097f9-ccdd-4e7a-8af9-3cba3ebdfc1e",type:"RealizationRelationship"},{id:"dbbc2292-4a93-4fb2-8c5d-c2949e21e02e",sourceId:"3fd26618-3a9b-4042-9d5d-9ba9134220da",targetId:"0d7ec3ab-f6c6-4e9e-a6b3-566398ed1cee",type:"RealizationRelationship"},{id:"1983cacd-6d0d-4b2d-a638-f751a2dd0bb1",sourceId:"2a9097f9-ccdd-4e7a-8af9-3cba3ebdfc1e",targetId:"90e76edb-7f4d-4479-af04-7ece6d573549",type:"SpecializationRelationship"},{id:"40208f75-3f20-48be-a8ab-e2ff695b65f1",sourceId:"0d7ec3ab-f6c6-4e9e-a6b3-566398ed1cee",targetId:"90e76edb-7f4d-4479-af04-7ece6d573549",type:"SpecializationRelationship"}],m=[{id:"ffb952a4-ddec-4473-8218-75783bdcbcba",name:"Default View",viewpoint:""}],y={identifier:e,archimateId:a,name:d,description:t,formats:c,source:i,sourceFile:b,sourceFormat:o,timestamp:f,tags:n,duplicates:s,language:r,elements:l,relationships:p,views:m};export{a as archimateId,y as default,t as description,s as duplicates,l as elements,c as formats,e as identifier,r as language,d as name,p as relationships,i as source,b as sourceFile,o as sourceFormat,n as tags,f as timestamp,m as views};
