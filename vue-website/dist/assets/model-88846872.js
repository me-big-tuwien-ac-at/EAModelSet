const e="https://me.big.tuwien.ac.at/EAModelSet/2ab2e079-ef01-4293-b00b-7e18cb578fdf",a="2ab2e079-ef01-4293-b00b-7e18cb578fdf",d="Portal Cliente",c="",i=["XML","CSV","JSON","ARCHIMATE"],t="GitHub",b="raw-data/github/archimate/portalcliente.archimate",f="ARCHIMATE",o="29-06-2023 09:29:50",p=[],n=[],r="en",l=[{id:"2bf3f09c-c4d5-4574-a0d8-aa62f2599af4",name:"Backoffice User",type:"BusinessActor",layer:"business"},{id:"6b6e2aab-7951-4bf6-b4cc-6527621be23b",name:"Customer",type:"BusinessActor",layer:"business"},{id:"id-2941c865b34f4059a79fd577bd25c6aa",name:"Customer",type:"BusinessActor",layer:"business"},{id:"a9a70591-837b-4f9b-b0fa-80c4c4fa23f5",name:"Portal Cliente Platform",type:"ApplicationComponent",layer:"application"},{id:"d83b1f8b-c17e-40aa-bdb4-63e5ead691ec",name:"API Gateway (External)",type:"ApplicationComponent",layer:"application"},{id:"f2abebc8-57e3-4fdc-ae7f-2b9c6007418e",name:"API Gateway (Internal)",type:"ApplicationComponent",layer:"application"},{id:"d182d9c6-db6c-4434-87c7-3ef4f9202e63",name:"Customer Front End",type:"ApplicationComponent",layer:"application"},{id:"8a231b49-3d4c-4b31-a3ad-9a63d75a1c78",name:"Backoffice Front End",type:"ApplicationComponent",layer:"application"},{id:"a55a89e4-7836-4d6b-9554-fbadf6a180c2",name:"Microservices Middleware",type:"ApplicationComponent",layer:"application"},{id:"32fb682d-0e5f-41d1-b5a7-476fd7859b2b",name:"Portal Cliente DB",type:"ApplicationComponent",layer:"application"},{id:"4569ab45-2618-4b0d-99c9-fd00f523e88f",name:"Microservices",type:"ApplicationComponent",layer:"application"},{id:"e2e797b5-ce73-4494-b069-0d5660a1d7c8",name:"SESAME",type:"ApplicationComponent",layer:"application"},{id:"18aa9388-bee3-4df2-b534-0f6ca2b3c404",name:"Message Broker",type:"ApplicationComponent",layer:"application"},{id:"0b5c0457-b810-4fae-ba3f-0fe738559fc7",name:"DWH - ODS",type:"ApplicationComponent",layer:"application"},{id:"15e7e544-d83f-4726-96c8-bbdbbc62b5e8",name:"ELK",type:"ApplicationComponent",layer:"application"},{id:"2fb6d866-5582-44fa-87c9-4aeb7681d124",name:"Message Sender Connector",type:"ApplicationInterface",layer:"application"},{id:"15146cbb-071e-48fa-a570-094f1017b4fc",name:"Notification Service",type:"ApplicationService",layer:"application"},{id:"218c4eba-aa7e-4cdc-8da2-25502465f47b",name:"Document Connector",type:"ApplicationInterface",layer:"application"},{id:"cfbf410b-edac-48ac-adbf-70024ffc2906",name:"Document Manager",type:"ApplicationService",layer:"application"},{id:"5c9893c3-0a16-42c4-9bdf-9fee0e0791bc",name:"Policy",type:"ApplicationService",layer:"application"},{id:"da084da7-4ada-428f-8d59-e32c9bef370e",name:"Claims",type:"ApplicationService",layer:"application"},{id:"9fb5f099-2170-4612-9682-3907359af531",name:"Payments",type:"ApplicationService",layer:"application"},{id:"03e5e142-bfd1-41e3-8926-d0eab2250292",name:"Procedures",type:"ApplicationService",layer:"application"},{id:"89726dd4-e7db-4812-9b4a-9b7db5ad0729",name:"Procedure Types",type:"DataObject",layer:"application"},{id:"dcfa74fd-b240-4db9-8bf9-10e36ae1357b",name:"Procedures",type:"DataObject",layer:"application"},{id:"3628a39a-4f1f-4909-82ad-8d3aac9b3d0c",name:"Procedure Details",type:"DataObject",layer:"application"},{id:"787a5d73-f8e2-46e7-b1d8-044d61159cbc",name:"Procedure Status",type:"DataObject",layer:"application"},{id:"c9a6a8f7-c354-4f3f-b498-4894ee0a1dc5",name:"Document Types",type:"DataObject",layer:"application"},{id:"327fccd9-6a56-463c-85cd-46329c3fe003",name:"Document Status",type:"DataObject",layer:"application"},{id:"c961f3c2-25e6-4d54-b00d-2825abd73274",name:"Documents",type:"DataObject",layer:"application"},{id:"id-ba03e5d20cdc4eada516d2a0e51088a1",name:"Customer Frontend (JBoss)",type:"ApplicationComponent",layer:"application"},{id:"id-608c2abcc8c44b259450b7fbcd8fe305",name:"API Gateway External (Mashery)",type:"ApplicationComponent",layer:"application"},{id:"id-9b022f69616442168d77012c217ba659",name:"API Gateway Internal (Mashery)",type:"ApplicationComponent",layer:"application"},{id:"id-5a8a165995e1463185a308231feae2a1",name:"Portal Cliente Platform",type:"ApplicationComponent",layer:"application"},{id:"id-ec27fad8e9d747898fd02bd627dca7b4",name:"Microservices: Access data (API REST)",type:"ApplicationComponent",layer:"application"},{id:"id-98f3521cfeb14d3f839b877199a74850",name:"Database Portal Cliente",type:"ApplicationComponent",layer:"application"},{id:"id-2ca8ee2f830f4fea9596bcd31217699b",name:"API DWH",type:"ApplicationComponent",layer:"application"},{id:"id-ffe27bc7b4944b279d71ed17eae003a0",name:"Microservices: Security (API REST)",type:"ApplicationComponent",layer:"application"},{id:"id-42b982d4dd5342388cf6d8ff270f7dc2",name:"Security Server (Oracle)",type:"ApplicationComponent",layer:"application"},{id:"id-52855a41ce85460c817324a8847fe9c0",name:"ELK",type:"ApplicationComponent",layer:"application"},{id:"id-dcb1cd962f184443a7b1435775ef0508",name:"Notifications Platform",type:"ApplicationComponent",layer:"application"},{id:"id-e76507c6123a4a86a7edb7da16933407",name:"Publisher (API REST)",type:"ApplicationComponent",layer:"application"},{id:"id-d0c2b81a8a9e4d26a51d1f332dc9065b",name:"Message Streaming (Kafka)",type:"ApplicationComponent",layer:"application"},{id:"id-3b43a4bcf85f4ec798839287078b0897",name:"Subscriber (API REST)",type:"ApplicationComponent",layer:"application"},{id:"id-4fc643d16c0f43f78571ddc32f4feb28",name:"",type:"ApplicationComponent",layer:"application"},{id:"id-a5139e3024af44bc9847c06d3d0e3325",name:"Notification Provider (MDirector)",type:"ApplicationComponent",layer:"application"},{id:"id-50e3fdbc8a0c4e61876d04f83d50f637",name:"Document Manager Platform",type:"ApplicationComponent",layer:"application"},{id:"id-ac506c60be2a44d8b66bf1e4c2d5304b",name:"Publisher (API REST)",type:"ApplicationComponent",layer:"application"},{id:"id-2f9ad0f0fd7641e696b33ca1a4050ceb",name:"Message Streaming (Kafka)",type:"ApplicationComponent",layer:"application"},{id:"id-7fcf22a793264c718f4e22d3bfe22bfb",name:"Subscriber (API REST)",type:"ApplicationComponent",layer:"application"},{id:"id-5e4d5635342e4627b8885f12cb9e78b2",name:"Document Manager",type:"ApplicationComponent",layer:"application"},{id:"id-16bbd69cd060474b9ffeb2d9bb4b4d63",name:"Secret Manager (Hashicorp Vault)",type:"ApplicationComponent",layer:"application"},{id:"86e00dcd-42bf-4c6b-878e-68c01dfe4476",name:"Procedures",type:"Grouping",layer:"other"},{id:"a79e9d64-f854-407b-99f7-2d3ff347b5a5",name:"Documents",type:"Grouping",layer:"other"}],s=[{id:"e1fb77d8-eef7-410a-9e45-623b2e462b42",sourceId:"d83b1f8b-c17e-40aa-bdb4-63e5ead691ec",targetId:"f2abebc8-57e3-4fdc-ae7f-2b9c6007418e",type:"FlowRelationship"},{id:"1c0afe23-cab2-41b2-ae0e-e178252e9234",sourceId:"d182d9c6-db6c-4434-87c7-3ef4f9202e63",targetId:"d83b1f8b-c17e-40aa-bdb4-63e5ead691ec",type:"FlowRelationship"},{id:"83baa149-0d12-48ae-afcd-7e5e11bd1349",sourceId:"8a231b49-3d4c-4b31-a3ad-9a63d75a1c78",targetId:"f2abebc8-57e3-4fdc-ae7f-2b9c6007418e",type:"FlowRelationship"},{id:"114ec637-0547-4a6d-8b50-91614ab9f258",sourceId:"a9a70591-837b-4f9b-b0fa-80c4c4fa23f5",targetId:"a55a89e4-7836-4d6b-9554-fbadf6a180c2",type:"CompositionRelationship"},{id:"2d87bff5-4f2d-47f2-a58e-17feba687b3c",sourceId:"2bf3f09c-c4d5-4574-a0d8-aa62f2599af4",targetId:"8a231b49-3d4c-4b31-a3ad-9a63d75a1c78",type:"FlowRelationship"},{id:"f6e988bb-5c6a-414e-bb77-8683d9fe12a7",sourceId:"6b6e2aab-7951-4bf6-b4cc-6527621be23b",targetId:"d182d9c6-db6c-4434-87c7-3ef4f9202e63",type:"FlowRelationship"},{id:"1579cf14-c0ec-42a9-8287-b39bc3bc1c10",sourceId:"a9a70591-837b-4f9b-b0fa-80c4c4fa23f5",targetId:"32fb682d-0e5f-41d1-b5a7-476fd7859b2b",type:"CompositionRelationship"},{id:"c0a5ec1b-e2a7-4af9-bb55-b206f1c55c9d",sourceId:"f2abebc8-57e3-4fdc-ae7f-2b9c6007418e",targetId:"a55a89e4-7836-4d6b-9554-fbadf6a180c2",type:"FlowRelationship"},{id:"ac2b3408-8b2d-41e2-9fa7-4daa40e403b4",sourceId:"a9a70591-837b-4f9b-b0fa-80c4c4fa23f5",targetId:"4569ab45-2618-4b0d-99c9-fd00f523e88f",type:"CompositionRelationship"},{id:"655ef712-664e-4662-b12e-d5e0186cc509",sourceId:"a55a89e4-7836-4d6b-9554-fbadf6a180c2",targetId:"4569ab45-2618-4b0d-99c9-fd00f523e88f",type:"FlowRelationship"},{id:"35de9fbd-c006-4925-a539-b661716271d0",sourceId:"8a231b49-3d4c-4b31-a3ad-9a63d75a1c78",targetId:"e2e797b5-ce73-4494-b069-0d5660a1d7c8",type:"FlowRelationship"},{id:"5556225e-7988-4651-800b-db18437aa9d1",sourceId:"4569ab45-2618-4b0d-99c9-fd00f523e88f",targetId:"32fb682d-0e5f-41d1-b5a7-476fd7859b2b",type:"FlowRelationship"},{id:"bad0ab1a-496a-436c-a7c0-4c1c1782feb8",sourceId:"a55a89e4-7836-4d6b-9554-fbadf6a180c2",targetId:"18aa9388-bee3-4df2-b534-0f6ca2b3c404",type:"FlowRelationship"},{id:"5799a0f1-a5a1-48a3-b9b5-0207dceaaf41",sourceId:"18aa9388-bee3-4df2-b534-0f6ca2b3c404",targetId:"4569ab45-2618-4b0d-99c9-fd00f523e88f",type:"FlowRelationship"},{id:"97ac2034-0c8d-49fd-b737-3a880f01888b",sourceId:"4569ab45-2618-4b0d-99c9-fd00f523e88f",targetId:"18aa9388-bee3-4df2-b534-0f6ca2b3c404",type:"FlowRelationship"},{id:"e43b6984-5235-4d8c-b20c-f37de1c4cddc",sourceId:"4569ab45-2618-4b0d-99c9-fd00f523e88f",targetId:"0b5c0457-b810-4fae-ba3f-0fe738559fc7",type:"FlowRelationship"},{id:"06cf25ff-c9de-4428-b225-1d922c6eea8e",sourceId:"4569ab45-2618-4b0d-99c9-fd00f523e88f",targetId:"15e7e544-d83f-4726-96c8-bbdbbc62b5e8",type:"FlowRelationship"},{id:"edeba54d-6585-45aa-942a-8f3d0af6fc2c",sourceId:"4569ab45-2618-4b0d-99c9-fd00f523e88f",targetId:"2fb6d866-5582-44fa-87c9-4aeb7681d124",type:"FlowRelationship"},{id:"3212c2f2-b21a-4601-80ca-517f5ff9b11f",sourceId:"2fb6d866-5582-44fa-87c9-4aeb7681d124",targetId:"15146cbb-071e-48fa-a570-094f1017b4fc",type:"FlowRelationship"},{id:"df56ab51-4aa8-4f9d-99cd-5b358098c578",sourceId:"218c4eba-aa7e-4cdc-8da2-25502465f47b",targetId:"cfbf410b-edac-48ac-adbf-70024ffc2906",type:"FlowRelationship"},{id:"a7d99986-a7fc-4741-b151-b9cb30c0cd94",sourceId:"4569ab45-2618-4b0d-99c9-fd00f523e88f",targetId:"218c4eba-aa7e-4cdc-8da2-25502465f47b",type:"FlowRelationship"},{id:"a6b14ac0-40de-4cc0-aff5-5654347cc7fb",sourceId:"4569ab45-2618-4b0d-99c9-fd00f523e88f",targetId:"5c9893c3-0a16-42c4-9bdf-9fee0e0791bc",type:"AssignmentRelationship"},{id:"65c58f56-fb6e-4b11-ae94-11cb8d1ae6c4",sourceId:"4569ab45-2618-4b0d-99c9-fd00f523e88f",targetId:"da084da7-4ada-428f-8d59-e32c9bef370e",type:"AssignmentRelationship"},{id:"ecd597a9-3730-4927-bb7c-2b6e4b85efed",sourceId:"4569ab45-2618-4b0d-99c9-fd00f523e88f",targetId:"9fb5f099-2170-4612-9682-3907359af531",type:"AssignmentRelationship"},{id:"f21e8e6f-0d0f-4b0b-a04e-eb11e6038c20",sourceId:"4569ab45-2618-4b0d-99c9-fd00f523e88f",targetId:"03e5e142-bfd1-41e3-8926-d0eab2250292",type:"AssignmentRelationship"},{id:"6ab93006-dcde-4d79-b50e-b2eb711b61d6",sourceId:"86e00dcd-42bf-4c6b-878e-68c01dfe4476",targetId:"89726dd4-e7db-4812-9b4a-9b7db5ad0729",type:"CompositionRelationship"},{id:"1203cd8a-a086-4a1e-bcd3-019e095d63ad",sourceId:"86e00dcd-42bf-4c6b-878e-68c01dfe4476",targetId:"dcfa74fd-b240-4db9-8bf9-10e36ae1357b",type:"CompositionRelationship"},{id:"679c6237-552c-43b0-97cb-3826b33f417f",sourceId:"86e00dcd-42bf-4c6b-878e-68c01dfe4476",targetId:"3628a39a-4f1f-4909-82ad-8d3aac9b3d0c",type:"CompositionRelationship"},{id:"d134f089-2c11-411c-a48c-d302d32cfea3",sourceId:"86e00dcd-42bf-4c6b-878e-68c01dfe4476",targetId:"787a5d73-f8e2-46e7-b1d8-044d61159cbc",type:"CompositionRelationship"},{id:"8b1761d2-25be-4dcf-bfa1-6916580a7f44",sourceId:"dcfa74fd-b240-4db9-8bf9-10e36ae1357b",targetId:"89726dd4-e7db-4812-9b4a-9b7db5ad0729",type:"AssociationRelationship"},{id:"c44e9886-99c9-4855-bb25-692325bf2487",sourceId:"dcfa74fd-b240-4db9-8bf9-10e36ae1357b",targetId:"787a5d73-f8e2-46e7-b1d8-044d61159cbc",type:"AssociationRelationship"},{id:"ebb70ead-7a91-412e-8466-78daa5f0c47f",sourceId:"3628a39a-4f1f-4909-82ad-8d3aac9b3d0c",targetId:"dcfa74fd-b240-4db9-8bf9-10e36ae1357b",type:"AssociationRelationship"},{id:"7bdeaa10-fe9d-46fa-abf7-80bf5073cad5",sourceId:"a79e9d64-f854-407b-99f7-2d3ff347b5a5",targetId:"c9a6a8f7-c354-4f3f-b498-4894ee0a1dc5",type:"CompositionRelationship"},{id:"f2b5fbc7-b5e3-4d6e-8b2b-93f4738f59cf",sourceId:"a79e9d64-f854-407b-99f7-2d3ff347b5a5",targetId:"327fccd9-6a56-463c-85cd-46329c3fe003",type:"CompositionRelationship"},{id:"14e5b1ce-1cdc-4f5c-94c7-8e468b3dac73",sourceId:"a79e9d64-f854-407b-99f7-2d3ff347b5a5",targetId:"c961f3c2-25e6-4d54-b00d-2825abd73274",type:"CompositionRelationship"},{id:"f984be2a-c327-4c8d-aa03-27d41af72dd7",sourceId:"c961f3c2-25e6-4d54-b00d-2825abd73274",targetId:"c9a6a8f7-c354-4f3f-b498-4894ee0a1dc5",type:"AssociationRelationship"},{id:"f44ae090-4dcf-4928-8c8e-636630f14582",sourceId:"c961f3c2-25e6-4d54-b00d-2825abd73274",targetId:"327fccd9-6a56-463c-85cd-46329c3fe003",type:"AssociationRelationship"},{id:"id-249a8f3f320241e184383a9ebdfe400a",sourceId:"id-2941c865b34f4059a79fd577bd25c6aa",targetId:"id-ba03e5d20cdc4eada516d2a0e51088a1",type:"FlowRelationship"},{id:"id-3737fb8ed07d4968b4059498093c5a03",sourceId:"id-ba03e5d20cdc4eada516d2a0e51088a1",targetId:"id-608c2abcc8c44b259450b7fbcd8fe305",type:"FlowRelationship"},{id:"id-4183be18e06a45a6817c224eddb628f5",sourceId:"id-608c2abcc8c44b259450b7fbcd8fe305",targetId:"id-9b022f69616442168d77012c217ba659",type:"FlowRelationship"},{id:"id-055c94b2cbd040d6831cf88eea040914",sourceId:"id-5a8a165995e1463185a308231feae2a1",targetId:"id-ec27fad8e9d747898fd02bd627dca7b4",type:"CompositionRelationship"},{id:"id-fdd617e23b9444c186b423a272b251b8",sourceId:"id-9b022f69616442168d77012c217ba659",targetId:"id-ec27fad8e9d747898fd02bd627dca7b4",type:"FlowRelationship"},{id:"id-a3dd53b3dd504fb1a3d0da3b0620c1fa",sourceId:"id-ec27fad8e9d747898fd02bd627dca7b4",targetId:"id-9b022f69616442168d77012c217ba659",type:"FlowRelationship"},{id:"id-b28b7f7d61bd4cf79bdaf6d28d77f1d5",sourceId:"id-5a8a165995e1463185a308231feae2a1",targetId:"id-98f3521cfeb14d3f839b877199a74850",type:"CompositionRelationship"},{id:"id-ec6620344bd84403b51fb262b26f3a05",sourceId:"id-ec27fad8e9d747898fd02bd627dca7b4",targetId:"id-98f3521cfeb14d3f839b877199a74850",type:"FlowRelationship"},{id:"id-1fcf12accc1d4b78952549c506229028",sourceId:"id-ec27fad8e9d747898fd02bd627dca7b4",targetId:"id-2ca8ee2f830f4fea9596bcd31217699b",type:"FlowRelationship"},{id:"id-5fb1d89a52db4158b12b49307eab7507",sourceId:"id-5a8a165995e1463185a308231feae2a1",targetId:"id-ffe27bc7b4944b279d71ed17eae003a0",type:"CompositionRelationship"},{id:"id-69ecd3cb25214b098a3fc4dc86505d61",sourceId:"id-9b022f69616442168d77012c217ba659",targetId:"id-ffe27bc7b4944b279d71ed17eae003a0",type:"FlowRelationship"},{id:"id-b671225afeb6403b943e275a8ae038de",sourceId:"id-ffe27bc7b4944b279d71ed17eae003a0",targetId:"id-42b982d4dd5342388cf6d8ff270f7dc2",type:"FlowRelationship"},{id:"id-0101ec86c9b64f108eb60eece783f3e0",sourceId:"id-5a8a165995e1463185a308231feae2a1",targetId:"id-52855a41ce85460c817324a8847fe9c0",type:"FlowRelationship"},{id:"id-2fd57a0d13ad4a09adfdaad1e9f43775",sourceId:"id-dcb1cd962f184443a7b1435775ef0508",targetId:"id-e76507c6123a4a86a7edb7da16933407",type:"CompositionRelationship"},{id:"id-baf55a1152d249e1874ca4c0b9d68a4a",sourceId:"id-dcb1cd962f184443a7b1435775ef0508",targetId:"id-d0c2b81a8a9e4d26a51d1f332dc9065b",type:"CompositionRelationship"},{id:"id-5ddcf4e99102492e947df7d2f66ee59a",sourceId:"id-dcb1cd962f184443a7b1435775ef0508",targetId:"id-3b43a4bcf85f4ec798839287078b0897",type:"CompositionRelationship"},{id:"id-18ffe1effa124d83b07dbb98c47a7843",sourceId:"id-ec27fad8e9d747898fd02bd627dca7b4",targetId:"id-e76507c6123a4a86a7edb7da16933407",type:"FlowRelationship"},{id:"id-db3904f8e1f6485ebf307325bec155e1",sourceId:"id-e76507c6123a4a86a7edb7da16933407",targetId:"id-d0c2b81a8a9e4d26a51d1f332dc9065b",type:"FlowRelationship"},{id:"id-99e917ee2b454b0da3f3c7dea32e349f",sourceId:"id-d0c2b81a8a9e4d26a51d1f332dc9065b",targetId:"id-3b43a4bcf85f4ec798839287078b0897",type:"FlowRelationship"},{id:"id-496a67e7871e49a7a84c888f102332d0",sourceId:"id-3b43a4bcf85f4ec798839287078b0897",targetId:"id-a5139e3024af44bc9847c06d3d0e3325",type:"FlowRelationship"},{id:"id-1a0c7b867bba4d32bcd4355b67d745ed",sourceId:"id-50e3fdbc8a0c4e61876d04f83d50f637",targetId:"id-7fcf22a793264c718f4e22d3bfe22bfb",type:"CompositionRelationship"},{id:"id-2f2d7ca606474a9faaa519f926dd39d8",sourceId:"id-2f9ad0f0fd7641e696b33ca1a4050ceb",targetId:"id-7fcf22a793264c718f4e22d3bfe22bfb",type:"FlowRelationship"},{id:"id-9b325e24d45b47fd89e7776f2370af1d",sourceId:"id-50e3fdbc8a0c4e61876d04f83d50f637",targetId:"id-2f9ad0f0fd7641e696b33ca1a4050ceb",type:"CompositionRelationship"},{id:"id-e70f441bb5df431fa051c8d59482820c",sourceId:"id-50e3fdbc8a0c4e61876d04f83d50f637",targetId:"id-ac506c60be2a44d8b66bf1e4c2d5304b",type:"CompositionRelationship"},{id:"id-a20aa68c1a0e46f5b1d6d243cefaea52",sourceId:"id-ac506c60be2a44d8b66bf1e4c2d5304b",targetId:"id-2f9ad0f0fd7641e696b33ca1a4050ceb",type:"FlowRelationship"},{id:"id-c0259f52f30f428686e80b352db62aec",sourceId:"id-ec27fad8e9d747898fd02bd627dca7b4",targetId:"id-ac506c60be2a44d8b66bf1e4c2d5304b",type:"FlowRelationship"},{id:"id-e383d7e7baf145baa0e274d79ad8cd63",sourceId:"id-50e3fdbc8a0c4e61876d04f83d50f637",targetId:"id-5e4d5635342e4627b8885f12cb9e78b2",type:"CompositionRelationship"},{id:"id-1473543a43d042fcb4c00d70e2bc6843",sourceId:"id-7fcf22a793264c718f4e22d3bfe22bfb",targetId:"id-5e4d5635342e4627b8885f12cb9e78b2",type:"FlowRelationship"},{id:"id-d26f404d331842f18ceccd42c3f23be1",sourceId:"id-5a8a165995e1463185a308231feae2a1",targetId:"id-16bbd69cd060474b9ffeb2d9bb4b4d63",type:"FlowRelationship"}],y=[{id:"bd0a6d1e-18ae-40a1-a5f8-e10710132e5c",name:"Components",viewpoint:""},{id:"dcb569e7-46f0-4fd6-be94-7f87b44b0672",name:"ER",viewpoint:""},{id:"id-73f1b3c5addb4986a0882524c2a40b8a",name:"Components_v2",viewpoint:""},{id:"3213f5ac-c074-463e-b2c5-4a806687171a",name:"Default View",viewpoint:""}],m={identifier:e,archimateId:a,name:d,description:c,formats:i,source:t,sourceFile:b,sourceFormat:f,timestamp:o,tags:p,duplicates:n,language:r,elements:l,relationships:s,views:y};export{a as archimateId,m as default,c as description,n as duplicates,l as elements,i as formats,e as identifier,r as language,d as name,s as relationships,t as source,b as sourceFile,f as sourceFormat,p as tags,o as timestamp,y as views};
