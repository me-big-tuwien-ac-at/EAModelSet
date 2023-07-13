const e="https://me.big.tuwien.ac.at/EAModelSet/85069f48-2ca3-48e4-8755-f456ee399f4b",a="85069f48-2ca3-48e4-8755-f456ee399f4b",d="Acceptance Platform",c="",i=["XML","CSV","JSON","ARCHIMATE"],t="GitHub",b="raw-data/github/grafico/models.archimate",f="ARCHIMATE",n="29-06-2023 09:29:29",p=[],o=[],r="en",s=[{id:"5d0baff3-0de8-4804-ba75-e3f388baa215",name:"User",type:"BusinessActor",layer:"business"},{id:"aa4f85d3-d7a1-4295-8cdc-11b7e0081b89",name:"SAML RP",type:"ApplicationComponent",layer:"application"},{id:"9e25d5da-f544-403f-99b9-e254656940f7",name:"Query",type:"ApplicationService",layer:"application"},{id:"f828d746-c3fe-45c4-8fd2-b62b12348ad9",name:"Cacheing",type:"ApplicationService",layer:"application"},{id:"5291aa83-b004-448b-ba1e-32fd89d2adb5",name:"CBS",type:"ApplicationComponent",layer:"application"},{id:"4d16fd93-5399-49d2-b664-bd67ee724673",name:"Chooser",type:"ApplicationService",layer:"application"},{id:"1e60f05a-c95d-45c1-b8c4-4ad91a6d2a6e",name:"Acceptance Framework",type:"ApplicationComponent",layer:"application"},{id:"7896a4a1-19b5-40bb-a49a-9428c0c19bac",name:"SAML IDP",type:"ApplicationComponent",layer:"application"},{id:"854debd9-30ea-4a0e-82cb-692c9079479d",name:"Persistence",type:"ApplicationService",layer:"application"},{id:"cbd10461-5839-417d-9bc2-98ad71821732",name:" OIDC RP Single Logout ",type:"ApplicationService",layer:"application"},{id:"90af4a11-3bfc-43c9-a1ba-3f1a325f688d",name:"OpenID Connect",type:"ApplicationInterface",layer:"application"},{id:"8b5d3d1b-f248-48be-8ebe-a89e7dc9c160",name:"OIDC RP",type:"ApplicationComponent",layer:"application"},{id:"c81cae10-78b8-4d50-a9d0-4c2a8785e65f",name:"Login API",type:"ApplicationInterface",layer:"application"},{id:"ef1fa86b-9d3c-47ee-911b-a43c662739e6",name:"NoSQL Database",type:"ApplicationComponent",layer:"application"},{id:"0b0b9238-f675-4be0-9977-99660323fd8c",name:"SAML RP Single Sign-On",type:"ApplicationService",layer:"application"},{id:"98d6a5d9-4c07-486a-9951-df01653126c9",name:"Switch Credential",type:"ApplicationService",layer:"application"},{id:"31d356a4-adba-4197-bfd2-f61f7ca75107",name:"OpenID Provider",type:"ApplicationComponent",layer:"application"},{id:"1c073d65-52e3-464f-b116-59800959e47f",name:"Authentication",type:"ApplicationService",layer:"application"},{id:"ad80b7a2-970d-4d3e-a0b4-13549bb377ae",name:"UI",type:"ApplicationInterface",layer:"application"},{id:"63f94673-20d0-47d2-ae4a-645c0b2fddc7",name:"OIDC RP Single Sign-On",type:"ApplicationService",layer:"application"},{id:"ec154a27-363b-412a-8062-b155207b9e96",name:"N1QL ",type:"ApplicationInterface",layer:"application"},{id:"7b55b455-86c7-4f89-a9cb-7ca86e5493be",name:"Logout API",type:"ApplicationInterface",layer:"application"},{id:"fc018052-aa65-408d-b6b2-3ebfbff00490",name:"GCKey",type:"ApplicationComponent",layer:"application"},{id:"3476d73e-e4e3-4739-a46f-8985acd69fdb",name:"SAML RP Single Logout",type:"ApplicationService",layer:"application"},{id:"31115617-1352-4c28-87a4-975a450f5ab8",name:"MBP",type:"ApplicationInterface",layer:"application"},{id:"98784cf7-424f-4745-b523-63b57071b647",name:"Logout Propagation",type:"ApplicationService",layer:"application"},{id:"a6fa7e07-0df7-497e-9fbf-f00772d97063",name:"SAML",type:"ApplicationInterface",layer:"application"},{id:"2982e50c-eb43-4902-9c6d-fd6edd71d559",name:"2nd Factor",type:"ApplicationComponent",layer:"application"},{id:"1d460b96-247b-4830-ad56-bf1032345542",name:"Acceptance Platform",type:"ApplicationComponent",layer:"application"},{id:"e8ede380-9c9c-4308-9466-4ebda09c1f06",name:"Junction",type:"Junction",layer:"other"},{id:"267c8170-e147-40ae-96bb-68a2bfae8700",name:"Sign in Canada",type:"Grouping",layer:"other"},{id:"407a0393-da97-4127-b1cc-be96e7567cbf",name:"Junction",type:"Junction",layer:"other"},{id:"15bc00fe-b4ec-446b-94f8-7425d86af546",name:"Junction",type:"Junction",layer:"other"},{id:"19dd7414-3de5-4637-b24f-cf09777146d1",name:"Junction",type:"Junction",layer:"other"},{id:"290d5080-e9c8-4544-8f6d-44261890035a",name:"Junction",type:"Junction",layer:"other"}],l=[{id:"32975e9c-d52c-469a-a41c-ee564fef10a4",sourceId:"90af4a11-3bfc-43c9-a1ba-3f1a325f688d",targetId:"aa4f85d3-d7a1-4295-8cdc-11b7e0081b89",type:"ServingRelationship"},{id:"452a0b38-6a07-4f2e-b95e-adf63ffdc980",sourceId:"1d460b96-247b-4830-ad56-bf1032345542",targetId:"31d356a4-adba-4197-bfd2-f61f7ca75107",type:"CompositionRelationship"},{id:"bb31144e-df52-46cf-a4c9-138f3e39f9d5",sourceId:"31d356a4-adba-4197-bfd2-f61f7ca75107",targetId:"19dd7414-3de5-4637-b24f-cf09777146d1",type:"RealizationRelationship"},{id:"7dbd4da6-e8f8-4bc4-b466-cf3654ae69f3",sourceId:"407a0393-da97-4127-b1cc-be96e7567cbf",targetId:"0b0b9238-f675-4be0-9977-99660323fd8c",type:"AssignmentRelationship"},{id:"8fec698b-4669-4ba3-bb35-0c77d0f8917f",sourceId:"ec154a27-363b-412a-8062-b155207b9e96",targetId:"7896a4a1-19b5-40bb-a49a-9428c0c19bac",type:"ServingRelationship"},{id:"f18949b0-05ad-4c9d-a3b5-dafbec33570d",sourceId:"ef1fa86b-9d3c-47ee-911b-a43c662739e6",targetId:"9e25d5da-f544-403f-99b9-e254656940f7",type:"RealizationRelationship"},{id:"9752c33c-9d32-4c16-92dd-eb8cacd2bfee",sourceId:"ad80b7a2-970d-4d3e-a0b4-13549bb377ae",targetId:"4d16fd93-5399-49d2-b664-bd67ee724673",type:"AssignmentRelationship"},{id:"05cc05ef-6eb9-49f5-b704-b962a0c7f628",sourceId:"ad80b7a2-970d-4d3e-a0b4-13549bb377ae",targetId:"5d0baff3-0de8-4804-ba75-e3f388baa215",type:"ServingRelationship"},{id:"6492d886-3071-4ae6-9ef9-18d4f93ee330",sourceId:"ec154a27-363b-412a-8062-b155207b9e96",targetId:"31d356a4-adba-4197-bfd2-f61f7ca75107",type:"ServingRelationship"},{id:"30786c9f-cd16-44ab-9c21-085ed233d21a",sourceId:"c81cae10-78b8-4d50-a9d0-4c2a8785e65f",targetId:"31d356a4-adba-4197-bfd2-f61f7ca75107",type:"ServingRelationship"},{id:"cb5d5ce0-03eb-4a03-a144-31db3173c370",sourceId:"fc018052-aa65-408d-b6b2-3ebfbff00490",targetId:"1e60f05a-c95d-45c1-b8c4-4ad91a6d2a6e",type:"ServingRelationship"},{id:"eb614965-1b0f-4c93-b551-3ae652a8ba1d",sourceId:"19dd7414-3de5-4637-b24f-cf09777146d1",targetId:"4d16fd93-5399-49d2-b664-bd67ee724673",type:"RealizationRelationship"},{id:"85e3400d-8b2f-4c50-af43-0d522f8169a6",sourceId:"407a0393-da97-4127-b1cc-be96e7567cbf",targetId:"3476d73e-e4e3-4739-a46f-8985acd69fdb",type:"AssignmentRelationship"},{id:"d50e70f7-ca10-4586-a02a-eac63dfa7881",sourceId:"19dd7414-3de5-4637-b24f-cf09777146d1",targetId:"98d6a5d9-4c07-486a-9951-df01653126c9",type:"RealizationRelationship"},{id:"6bdc5de3-b4e8-476d-bfad-94ec604e93d8",sourceId:"31d356a4-adba-4197-bfd2-f61f7ca75107",targetId:"63f94673-20d0-47d2-ae4a-645c0b2fddc7",type:"RealizationRelationship"},{id:"734135c6-d63e-41af-928b-766c284ca6a4",sourceId:"7896a4a1-19b5-40bb-a49a-9428c0c19bac",targetId:"3476d73e-e4e3-4739-a46f-8985acd69fdb",type:"RealizationRelationship"},{id:"b666ae39-38b9-4c7e-a7f1-a28512dfa1a7",sourceId:"90af4a11-3bfc-43c9-a1ba-3f1a325f688d",targetId:"15bc00fe-b4ec-446b-94f8-7425d86af546",type:"AssignmentRelationship"},{id:"e4c23b9a-f85c-4f88-976a-62e3afc31044",sourceId:"2982e50c-eb43-4902-9c6d-fd6edd71d559",targetId:"e8ede380-9c9c-4308-9466-4ebda09c1f06",type:"ServingRelationship"},{id:"0e461907-191d-42a0-9cd1-96be431aeb1d",sourceId:"a6fa7e07-0df7-497e-9fbf-f00772d97063",targetId:"407a0393-da97-4127-b1cc-be96e7567cbf",type:"AssignmentRelationship"},{id:"76bfab2c-0405-4ea6-82a1-b7c35621b155",sourceId:"a6fa7e07-0df7-497e-9fbf-f00772d97063",targetId:"8b5d3d1b-f248-48be-8ebe-a89e7dc9c160",type:"ServingRelationship"},{id:"be58ed79-c444-49f9-9b6f-67bdf01f1793",sourceId:"7b55b455-86c7-4f89-a9cb-7ca86e5493be",targetId:"98784cf7-424f-4745-b523-63b57071b647",type:"AssignmentRelationship"},{id:"be11f58c-2f79-4ed7-83d2-a72bc3c7a995",sourceId:"7896a4a1-19b5-40bb-a49a-9428c0c19bac",targetId:"0b0b9238-f675-4be0-9977-99660323fd8c",type:"RealizationRelationship"},{id:"96c53fd8-ab02-42ee-8559-f8206c127ab5",sourceId:"c81cae10-78b8-4d50-a9d0-4c2a8785e65f",targetId:"1c073d65-52e3-464f-b116-59800959e47f",type:"AssignmentRelationship"},{id:"0322e19d-2c9f-47c9-ac17-2778561413f3",sourceId:"1d460b96-247b-4830-ad56-bf1032345542",targetId:"ef1fa86b-9d3c-47ee-911b-a43c662739e6",type:"CompositionRelationship"},{id:"fcd52602-1a0d-4599-925b-b54a3d30060e",sourceId:"31115617-1352-4c28-87a4-975a450f5ab8",targetId:"290d5080-e9c8-4544-8f6d-44261890035a",type:"AssignmentRelationship"},{id:"ec6ea56f-45cc-4644-91ba-0d584963d786",sourceId:"31d356a4-adba-4197-bfd2-f61f7ca75107",targetId:"cbd10461-5839-417d-9bc2-98ad71821732",type:"RealizationRelationship"},{id:"30e76bd3-65f6-4c5e-a8d9-f4424a93718e",sourceId:"31115617-1352-4c28-87a4-975a450f5ab8",targetId:"1e60f05a-c95d-45c1-b8c4-4ad91a6d2a6e",type:"ServingRelationship"},{id:"df912dee-4567-489c-9a21-2c055dc7d32e",sourceId:"290d5080-e9c8-4544-8f6d-44261890035a",targetId:"f828d746-c3fe-45c4-8fd2-b62b12348ad9",type:"AssignmentRelationship"},{id:"b4acdade-e4ec-45b5-aab3-e052de2b8b1f",sourceId:"ef1fa86b-9d3c-47ee-911b-a43c662739e6",targetId:"854debd9-30ea-4a0e-82cb-692c9079479d",type:"RealizationRelationship"},{id:"d261578b-f371-42aa-830f-d99b63473797",sourceId:"ad80b7a2-970d-4d3e-a0b4-13549bb377ae",targetId:"98d6a5d9-4c07-486a-9951-df01653126c9",type:"AssignmentRelationship"},{id:"9c09ab71-de9a-487e-9d47-173b8d07d1df",sourceId:"31115617-1352-4c28-87a4-975a450f5ab8",targetId:"7896a4a1-19b5-40bb-a49a-9428c0c19bac",type:"ServingRelationship"},{id:"0848b9f5-086f-484e-977c-185d4ab296b8",sourceId:"1e60f05a-c95d-45c1-b8c4-4ad91a6d2a6e",targetId:"98784cf7-424f-4745-b523-63b57071b647",type:"RealizationRelationship"},{id:"e989009b-f930-4d3a-8b3a-1874dc9a4cdf",sourceId:"31115617-1352-4c28-87a4-975a450f5ab8",targetId:"31d356a4-adba-4197-bfd2-f61f7ca75107",type:"ServingRelationship"},{id:"77518fe4-61ca-44fb-b8c5-2fffa5c3e127",sourceId:"15bc00fe-b4ec-446b-94f8-7425d86af546",targetId:"cbd10461-5839-417d-9bc2-98ad71821732",type:"AssignmentRelationship"},{id:"4da89014-ef6d-4fe8-8883-cc533c484d63",sourceId:"e8ede380-9c9c-4308-9466-4ebda09c1f06",targetId:"1e60f05a-c95d-45c1-b8c4-4ad91a6d2a6e",type:"ServingRelationship"},{id:"b238634c-86a8-436a-a368-8bc5c673a4ad",sourceId:"290d5080-e9c8-4544-8f6d-44261890035a",targetId:"854debd9-30ea-4a0e-82cb-692c9079479d",type:"AssignmentRelationship"},{id:"6829eba3-25bf-42c4-a8ae-4dab2fc99e98",sourceId:"1e60f05a-c95d-45c1-b8c4-4ad91a6d2a6e",targetId:"1c073d65-52e3-464f-b116-59800959e47f",type:"RealizationRelationship"},{id:"65ac2df0-f4ad-426b-bcd8-b64ccc4075c0",sourceId:"5291aa83-b004-448b-ba1e-32fd89d2adb5",targetId:"1e60f05a-c95d-45c1-b8c4-4ad91a6d2a6e",type:"ServingRelationship"},{id:"05f16a5a-611d-4a3c-b2d4-4b6a01c3050d",sourceId:"90af4a11-3bfc-43c9-a1ba-3f1a325f688d",targetId:"7896a4a1-19b5-40bb-a49a-9428c0c19bac",type:"ServingRelationship"},{id:"88444f2c-1110-4647-9b6c-d2db10f187c1",sourceId:"ec154a27-363b-412a-8062-b155207b9e96",targetId:"9e25d5da-f544-403f-99b9-e254656940f7",type:"AssignmentRelationship"},{id:"e4107d3a-0f4e-4d32-89f5-42d0da1a3bab",sourceId:"ef1fa86b-9d3c-47ee-911b-a43c662739e6",targetId:"f828d746-c3fe-45c4-8fd2-b62b12348ad9",type:"RealizationRelationship"},{id:"562c2601-8716-4f71-b33b-8080d56dd655",sourceId:"15bc00fe-b4ec-446b-94f8-7425d86af546",targetId:"63f94673-20d0-47d2-ae4a-645c0b2fddc7",type:"AssignmentRelationship"},{id:"d21a9072-8c81-4252-8d9c-92718ad0817a",sourceId:"7b55b455-86c7-4f89-a9cb-7ca86e5493be",targetId:"31d356a4-adba-4197-bfd2-f61f7ca75107",type:"ServingRelationship"},{id:"62ceb304-2780-4caf-b6ba-251ae3a2c665",sourceId:"1d460b96-247b-4830-ad56-bf1032345542",targetId:"7896a4a1-19b5-40bb-a49a-9428c0c19bac",type:"CompositionRelationship"},{id:"dca34eb8-542f-447b-9c0d-5ce83f262d9d",sourceId:"5291aa83-b004-448b-ba1e-32fd89d2adb5",targetId:"e8ede380-9c9c-4308-9466-4ebda09c1f06",type:"ServingRelationship"},{id:"ee8820d7-b82c-46a8-b410-9a8278ad1c04",sourceId:"1d460b96-247b-4830-ad56-bf1032345542",targetId:"1e60f05a-c95d-45c1-b8c4-4ad91a6d2a6e",type:"CompositionRelationship"},{id:"966c0316-c73b-4988-926a-e4d11eb715f3",sourceId:"fc018052-aa65-408d-b6b2-3ebfbff00490",targetId:"e8ede380-9c9c-4308-9466-4ebda09c1f06",type:"ServingRelationship"}],y=[{id:"1a7d1f84-c177-45c3-aa8b-aaf0ca56d6c1",name:"Default View",viewpoint:""},{id:"721bd564-d3b0-4602-9ba8-db41069e17eb",name:"Composition",viewpoint:""}],I={identifier:e,archimateId:a,name:d,description:c,formats:i,source:t,sourceFile:b,sourceFormat:f,timestamp:n,tags:p,duplicates:o,language:r,elements:s,relationships:l,views:y};export{a as archimateId,I as default,c as description,o as duplicates,s as elements,i as formats,e as identifier,r as language,d as name,l as relationships,t as source,b as sourceFile,f as sourceFormat,p as tags,n as timestamp,y as views};