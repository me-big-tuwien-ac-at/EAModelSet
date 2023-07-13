const e="https://me.big.tuwien.ac.at/EAModelSet/a6ed29b2",a="a6ed29b2",d="6 domain services",c="",i=["XML","CSV","JSON","ARCHIMATE"],t="GitHub",b="raw-data/github/xml/6_domain_services.xml",f="XML",o="29-06-2023 09:26:34",n=["DUPLICATE"],r=["raw-data/github/archimate/6_domain_services.archimate"],p="en",s=[{id:"id-97a748a0",name:"value object 1",type:"BusinessObject",layer:"business"},{id:"e91f54f2",name:"service",type:"BusinessService",layer:"business"},{id:"id-27ed4b2d",name:"entity 2",type:"BusinessObject",layer:"business"},{id:"a95b5b3c",name:"entity 1",type:"BusinessObject",layer:"business"},{id:"id-13785d00",name:"entity 3",type:"BusinessObject",layer:"business"},{id:"ea1930e8-d85f-4cbf-b877-3e3fb376a639",name:"Business Service",type:"BusinessService",layer:"business"},{id:"f89087bd",name:"value type 1",type:"ApplicationComponent",layer:"application"},{id:"f0189e38",name:"domain service",type:"ApplicationService",layer:"application"},{id:"id-03187e29",name:"domain service",type:"ApplicationService",layer:"application"},{id:"id-6ec4e4f2-8643-48eb-88d9-fa90e06dc7fc",name:"class entity 1",type:"ApplicationComponent",layer:"application"},{id:"id-805e9a2c-6443-48ad-ae48-0a02bf202071",name:"Application Component",type:"ApplicationComponent",layer:"application"},{id:"id-6224059c-c9d3-4c98-b674-dafd3f9a856c",name:"Interface service 1",type:"ApplicationInterface",layer:"application"},{id:"id-9cc404c7-9cea-4fe2-9e22-f1268080e513",name:"class service 1",type:"ApplicationComponent",layer:"application"},{id:"id-9a927409-1566-4ab7-84ae-94b6ff615f34",name:"test (instance of entity 1)",type:"ApplicationFunction",layer:"application"},{id:"id-20d73562-05b4-4f71-97e8-b471c045ea10",name:"check (instance of entity 1)",type:"ApplicationFunction",layer:"application"},{id:"bb1b315b-b50e-4012-ac64-f01e600c2b9b",name:"ref to service 1",type:"DataObject",layer:"application"},{id:"id-727b4323-8dd5-4d95-91e8-e23eb58da60e",name:"check()",type:"ApplicationFunction",layer:"application"},{id:"f8f5e57a-37ca-4101-9410-c18bb7a75584",name:"call check(this)",type:"ApplicationProcess",layer:"application"},{id:"id-6a84ee78-cc98-4bef-9022-5bd4fe0f20d1",name:"Application Service",type:"ApplicationService",layer:"application"},{id:"id-268fe401-3331-4318-b003-d5037abeb65d",name:"domain service",type:"ApplicationService",layer:"application"},{id:"id-8a346df6-389e-4a86-a1ac-b5b4fccf236d",name:"domain service (copy)",type:"ApplicationService",layer:"application"},{id:"d6496d30-11e1-4d27-8bce-e4b4921444a8",name:"domain service (copy)",type:"ApplicationService",layer:"application"},{id:"decfb69e-93bd-482e-b7e9-1f072f3be6fb",name:"event B",type:"ApplicationEvent",layer:"application"},{id:"id-0ab6f534-9641-4746-9814-cc834197c8a8",name:"event C",type:"ApplicationEvent",layer:"application"},{id:"id-9c624ddf-2ad3-4f5e-b315-3cb2fee23338",name:"event A",type:"ApplicationEvent",layer:"application"},{id:"d6198cb3-5fd8-4d01-8123-8a2fd52eccea",name:"service 3",type:"ApplicationEvent",layer:"application"},{id:"id-0c53b1ea-0d7a-4969-8e71-c27e013cf1aa",name:"MyController",type:"ApplicationComponent",layer:"application"},{id:"b49f3677-09c8-4d34-8e6d-553d8a170c11",name:"MyService",type:"ApplicationInterface",layer:"application"},{id:"id-15b07fcd-758c-4f1e-bbb9-dcb41cb46529",name:"MyServiceImpl",type:"ApplicationComponent",layer:"application"},{id:"id-34c63294-2349-44c6-9213-21ff054d772d",name:"My",type:"ApplicationComponent",layer:"application"},{id:"id-342ac387-a8c7-4085-a06f-fe6179b8ec2b",name:"MyRepository",type:"ApplicationInterface",layer:"application"},{id:"e1b99a26-c65f-4781-beb0-0d7715b3594d",name:"do(String id,int amount)",type:"ApplicationFunction",layer:"application"},{id:"a8c12358-74f0-4cc7-8925-ca1258ec4927",name:"someMethod",type:"ApplicationFunction",layer:"application"},{id:"id-6326ebec-9080-4889-8f76-ee6f8d30dccf",name:"event from UI",type:"ApplicationEvent",layer:"application"},{id:"id-3c7b668d-12b0-4523-a983-b1b3cfbdf0bd",name:"do(int amount)",type:"ApplicationFunction",layer:"application"},{id:"e6f6e57b-a537-49fa-8dee-bafd3391cad4",name:"reference to repository",type:"DataObject",layer:"application"},{id:"id-33b0c215-6f53-492a-9008-6ab8822191a9",name:"getMyById(String id)",type:"ApplicationFunction",layer:"application"},{id:"c12572b9-957c-4a5f-8b31-5ae2e3f215aa",name:"do(String id,int amount)",type:"ApplicationFunction",layer:"application"},{id:"c11d7d85-937b-4ad3-b5f8-f4c2def688ad",name:"MyRepositoryImp",type:"ApplicationComponent",layer:"application"},{id:"id-7890148f-81ff-4c37-a1a9-48bae5e7d557",name:"Data-Level exception",type:"ApplicationEvent",layer:"application"},{id:"id-94cdd7b4-9580-4669-baa8-ca3cfa713305",name:"Service-level exception",type:"ApplicationEvent",layer:"application"},{id:"id-5ed1b916-8ec7-4528-9c57-f8c2ea87140c",name:"Domain-Level Exception",type:"ApplicationEvent",layer:"application"},{id:"b46c620f-d289-47ed-a634-577e44c82700",name:"Technology Service",type:"TechnologyService",layer:"technology"},{id:"id-8e93fe36",name:"immutable (the value can be assigned only once)",type:"Requirement",layer:"motivation"},{id:"id-91ecbf39",name:"stateless",type:"Requirement",layer:"motivation"},{id:"de70a6f5",name:"no identity",type:"Requirement",layer:"motivation"},{id:"f4ad582f-2ddb-4faa-bf2f-082357769be6",name:"orchestrate entities",type:"Meaning",layer:"motivation"},{id:"eb3303b2-2b53-473a-afe0-ef3248dc08b3",name:"encapsulate business policies",type:"Meaning",layer:"motivation"},{id:"id-1cd93188-755f-4325-848c-64833f00daed",name:"stateless  (copy)",type:"Requirement",layer:"motivation"},{id:"f1032ec4-637b-4dd4-8a7d-9df4b7e8b298",name:"no identity (copy)",type:"Requirement",layer:"motivation"},{id:"cf979aa6-6bad-481c-9576-2deee98b62cf",name:"orchestrate entities (copy)",type:"Meaning",layer:"motivation"},{id:"bc975874-8e12-4533-a302-b34f051c2996",name:"encapsulate business policies (copy)",type:"Meaning",layer:"motivation"},{id:"id-318f41be-cc89-4b2e-9950-6c7bcf61880e",name:"stateless  (copy)",type:"Requirement",layer:"motivation"},{id:"id-63372fd2-d747-4534-a291-5e22d4c339ad",name:"no identity (copy)",type:"Requirement",layer:"motivation"},{id:"b8f958f5-413f-4069-b9f4-0f68fa5b8a61",name:"orchestrate entities (copy)",type:"Meaning",layer:"motivation"},{id:"id-5ed09c5d-9bb1-42cc-9f24-a6e1256fd994",name:"encapsulate business policies (copy)",type:"Meaning",layer:"motivation"},{id:"id-80e6f856",name:"aggregate 2",type:"Grouping",layer:"other"},{id:"b8fec44a",name:"aggregate 1",type:"Grouping",layer:"other"},{id:"fed93d9b",name:"aggregate 3",type:"Grouping",layer:"other"},{id:"e7d8a228",name:"aggregate 2",type:"Grouping",layer:"other"},{id:"id-21d4881b",name:"aggregate 1",type:"Grouping",layer:"other"},{id:"id-5c2c39c3",name:"aggregate 3",type:"Grouping",layer:"other"},{id:"aa50a689-a8f4-474c-b883-1980a7eb71fa",name:"Presentation Layer (User Interface)",type:"Grouping",layer:"other"},{id:"id-69868bc9-2ef0-4380-bf16-df87ace8c994",name:"Application Layer (operational)",type:"Grouping",layer:"other"},{id:"id-2bf6b422-0663-4070-905f-ecf023c5b3bd",name:"Domain Layer (model)",type:"Grouping",layer:"other"},{id:"id-1417ab1c-2dee-4b53-9bde-20a0f6e5f77f",name:"Infrаstrсtиrе Layer",type:"Grouping",layer:"other"},{id:"d68e41ae-f044-40e8-8ee9-93d859da62ba",name:"aggregate 2 (copy)",type:"Grouping",layer:"other"},{id:"id-2456f321-a354-4c14-be0d-6a3f4c6b996a",name:"aggregate 1 (copy)",type:"Grouping",layer:"other"},{id:"id-7e5b1636-57d2-4aa0-b2df-1d3b51a7e666",name:"aggregate 2 (copy)",type:"Grouping",layer:"other"},{id:"id-27bb4626-63e6-4e88-bf28-3dede6cb404f",name:"aggregate 1 (copy)",type:"Grouping",layer:"other"},{id:"id-1bb8dd85-8b3b-4177-b275-1fbc98ac5a6f",name:"aggregate 2",type:"Grouping",layer:"other"},{id:"id-79826cb6-751a-410b-877a-d5c36b37a3a9",name:"aggregate 1",type:"Grouping",layer:"other"},{id:"d52deed1-9f5b-4aca-bb57-8f7ab93feca0",name:"aggregate 3",type:"Grouping",layer:"other"}],y=[{id:"id-1f9b6731",sourceId:"f89087bd",targetId:"id-97a748a0",type:"Association"},{id:"id-2b0b0654",sourceId:"id-8e93fe36",targetId:"f89087bd",type:"Association"},{id:"id-39d267c9",sourceId:"id-91ecbf39",targetId:"f0189e38",type:"Association"},{id:"ff89d6d8",sourceId:"e91f54f2",targetId:"f0189e38",type:"Association"},{id:"id-1f29e6b6",sourceId:"de70a6f5",targetId:"f0189e38",type:"Association"},{id:"id-35c33a18",sourceId:"id-80e6f856",targetId:"b8fec44a",type:"Association"},{id:"id-77f5b180",sourceId:"b8fec44a",targetId:"fed93d9b",type:"Association"},{id:"id-67d4a189",sourceId:"fed93d9b",targetId:"id-80e6f856",type:"Association"},{id:"c17a5a9e",sourceId:"a95b5b3c",targetId:"id-21d4881b",type:"Association"},{id:"id-50ace280",sourceId:"e7d8a228",targetId:"id-21d4881b",type:"Association"},{id:"d35699a2",sourceId:"id-27ed4b2d",targetId:"e7d8a228",type:"Association"},{id:"ecf7a484",sourceId:"id-13785d00",targetId:"id-5c2c39c3",type:"Association"},{id:"id-3b33835b",sourceId:"id-5c2c39c3",targetId:"e7d8a228",type:"Association"},{id:"e9d6b9f4",sourceId:"id-13785d00",targetId:"id-27ed4b2d",type:"Association"},{id:"db214df4",sourceId:"id-27ed4b2d",targetId:"a95b5b3c",type:"Association"},{id:"id-668ec82f",sourceId:"a95b5b3c",targetId:"id-13785d00",type:"Association"},{id:"id-1c28a253",sourceId:"id-21d4881b",targetId:"id-5c2c39c3",type:"Association"},{id:"b41a9c6a",sourceId:"a95b5b3c",targetId:"e91f54f2",type:"Association"},{id:"id-80411668",sourceId:"id-27ed4b2d",targetId:"e91f54f2",type:"Association"},{id:"cac0d252",sourceId:"id-21d4881b",targetId:"f0189e38",type:"Association"},{id:"dc47b775",sourceId:"e7d8a228",targetId:"f0189e38",type:"Association"},{id:"eaf87e21-a0f6-45cf-9f2e-64bb45314f30",sourceId:"f0189e38",targetId:"f4ad582f-2ddb-4faa-bf2f-082357769be6",type:"Association"},{id:"id-1b95191d-8470-49c3-b535-1f23f9985a84",sourceId:"f0189e38",targetId:"eb3303b2-2b53-473a-afe0-ef3248dc08b3",type:"Association"},{id:"id-6c751671-52c0-48d4-96e3-4f8c9fbf3f30",sourceId:"id-9cc404c7-9cea-4fe2-9e22-f1268080e513",targetId:"id-20d73562-05b4-4f71-97e8-b471c045ea10",type:"Assignment"},{id:"id-35478d3e-7ada-40c3-b243-a340c5fe768a",sourceId:"id-6ec4e4f2-8643-48eb-88d9-fa90e06dc7fc",targetId:"bb1b315b-b50e-4012-ac64-f01e600c2b9b",type:"Access"},{id:"id-768d1387-f20a-47f1-b61c-ed6e0560ee67",sourceId:"bb1b315b-b50e-4012-ac64-f01e600c2b9b",targetId:"id-6224059c-c9d3-4c98-b674-dafd3f9a856c",type:"Association"},{id:"id-52eb7734-2004-4713-8706-0d60d9ddcc2b",sourceId:"id-9cc404c7-9cea-4fe2-9e22-f1268080e513",targetId:"id-6224059c-c9d3-4c98-b674-dafd3f9a856c",type:"Realization"},{id:"a34f9796-e239-4f6a-b24f-4a197efcdb2c",sourceId:"id-6ec4e4f2-8643-48eb-88d9-fa90e06dc7fc",targetId:"id-727b4323-8dd5-4d95-91e8-e23eb58da60e",type:"Assignment"},{id:"id-6d2a5dc8-f7be-439d-90b2-8a14da187310",sourceId:"id-727b4323-8dd5-4d95-91e8-e23eb58da60e",targetId:"f8f5e57a-37ca-4101-9410-c18bb7a75584",type:"Composition"},{id:"b16e2f7e-2f25-4018-8de8-b636bd97e810",sourceId:"f8f5e57a-37ca-4101-9410-c18bb7a75584",targetId:"bb1b315b-b50e-4012-ac64-f01e600c2b9b",type:"Access"},{id:"id-5390e9ef-f5e3-4e75-8d8d-178891d36b76",sourceId:"f8f5e57a-37ca-4101-9410-c18bb7a75584",targetId:"id-20d73562-05b4-4f71-97e8-b471c045ea10",type:"Flow"},{id:"id-1c0e7518-3df6-451c-97d6-f238985c6e9e",sourceId:"b46c620f-d289-47ed-a634-577e44c82700",targetId:"id-6a84ee78-cc98-4bef-9022-5bd4fe0f20d1",type:"Serving"},{id:"id-3c7c9b6d-ae7e-4641-9e79-59a922864930",sourceId:"id-6a84ee78-cc98-4bef-9022-5bd4fe0f20d1",targetId:"id-268fe401-3331-4318-b003-d5037abeb65d",type:"Serving"},{id:"id-5954afa2-7621-46c8-9a87-5e409b1124fb",sourceId:"id-268fe401-3331-4318-b003-d5037abeb65d",targetId:"ea1930e8-d85f-4cbf-b877-3e3fb376a639",type:"Serving"},{id:"id-2bc5f419-4bf9-4b94-a995-509eda96deee",sourceId:"aa50a689-a8f4-474c-b883-1980a7eb71fa",targetId:"id-1417ab1c-2dee-4b53-9bde-20a0f6e5f77f",type:"Access"},{id:"id-10c0a648-4748-48de-b132-da93db316759",sourceId:"aa50a689-a8f4-474c-b883-1980a7eb71fa",targetId:"id-69868bc9-2ef0-4380-bf16-df87ace8c994",type:"Access"},{id:"id-37f55f8e-a72a-48f3-8c1a-bd7de5b02cad",sourceId:"id-69868bc9-2ef0-4380-bf16-df87ace8c994",targetId:"id-2bf6b422-0663-4070-905f-ecf023c5b3bd",type:"Access"},{id:"da73885d-20aa-4877-9747-2f2d29770ae5",sourceId:"id-69868bc9-2ef0-4380-bf16-df87ace8c994",targetId:"id-1417ab1c-2dee-4b53-9bde-20a0f6e5f77f",type:"Access"},{id:"id-009f4bbe-a930-4240-98b7-eb7c90b1f5cc",sourceId:"aa50a689-a8f4-474c-b883-1980a7eb71fa",targetId:"id-2bf6b422-0663-4070-905f-ecf023c5b3bd",type:"Access"},{id:"id-08934d67-5c77-41b9-8d87-396d7e99902d",sourceId:"id-2bf6b422-0663-4070-905f-ecf023c5b3bd",targetId:"id-1417ab1c-2dee-4b53-9bde-20a0f6e5f77f",type:"Access"},{id:"ae260fac-d7d3-42ce-89ad-dc8a89aefd54",sourceId:"id-8a346df6-389e-4a86-a1ac-b5b4fccf236d",targetId:"cf979aa6-6bad-481c-9576-2deee98b62cf",type:"Association"},{id:"fd10acb5-5cbc-4e98-a360-3a8ec5a183ba",sourceId:"id-1cd93188-755f-4325-848c-64833f00daed",targetId:"id-8a346df6-389e-4a86-a1ac-b5b4fccf236d",type:"Association"},{id:"b45af247-0d6d-4b9d-9c7f-0914ce871d8d",sourceId:"f1032ec4-637b-4dd4-8a7d-9df4b7e8b298",targetId:"id-8a346df6-389e-4a86-a1ac-b5b4fccf236d",type:"Association"},{id:"f8610c0d-2c36-42e1-8a9f-2b428223f89b",sourceId:"d68e41ae-f044-40e8-8ee9-93d859da62ba",targetId:"id-8a346df6-389e-4a86-a1ac-b5b4fccf236d",type:"Association"},{id:"a8f8979a-c99a-4abe-8454-0931010f9748",sourceId:"d68e41ae-f044-40e8-8ee9-93d859da62ba",targetId:"id-2456f321-a354-4c14-be0d-6a3f4c6b996a",type:"Association"},{id:"fae19571-5f2d-4b2c-80ed-d607e0a125f0",sourceId:"id-8a346df6-389e-4a86-a1ac-b5b4fccf236d",targetId:"bc975874-8e12-4533-a302-b34f051c2996",type:"Association"},{id:"f4ad6939-996f-465a-b0c9-19774da33016",sourceId:"id-2456f321-a354-4c14-be0d-6a3f4c6b996a",targetId:"id-8a346df6-389e-4a86-a1ac-b5b4fccf236d",type:"Association"},{id:"id-39358e8b-08b9-448f-87c5-2a315837baa5",sourceId:"id-7e5b1636-57d2-4aa0-b2df-1d3b51a7e666",targetId:"id-27bb4626-63e6-4e88-bf28-3dede6cb404f",type:"Association"},{id:"id-95c1c9f7-24b1-4371-b73f-cab606b4ea88",sourceId:"d6496d30-11e1-4d27-8bce-e4b4921444a8",targetId:"id-5ed09c5d-9bb1-42cc-9f24-a6e1256fd994",type:"Association"},{id:"id-6129071d-5c40-4dd8-9a35-37114cfcaaa8",sourceId:"id-318f41be-cc89-4b2e-9950-6c7bcf61880e",targetId:"d6496d30-11e1-4d27-8bce-e4b4921444a8",type:"Association"},{id:"d47dfbb1-accb-4baf-b03d-7b630a41389f",sourceId:"id-63372fd2-d747-4534-a291-5e22d4c339ad",targetId:"d6496d30-11e1-4d27-8bce-e4b4921444a8",type:"Association"},{id:"id-6a07503b-b0a7-44ec-b50a-1b61d5aed7b8",sourceId:"d6496d30-11e1-4d27-8bce-e4b4921444a8",targetId:"b8f958f5-413f-4069-b9f4-0f68fa5b8a61",type:"Association"},{id:"e5ab63f2-3d9e-4ffa-90d2-1aede013a8cc",sourceId:"id-7e5b1636-57d2-4aa0-b2df-1d3b51a7e666",targetId:"d6496d30-11e1-4d27-8bce-e4b4921444a8",type:"Association"},{id:"e5a94382-21c8-4c1b-a100-37f644317bb9",sourceId:"id-27bb4626-63e6-4e88-bf28-3dede6cb404f",targetId:"d6496d30-11e1-4d27-8bce-e4b4921444a8",type:"Association"},{id:"aa8d4c06-95e7-4354-bd09-5004979076ab",sourceId:"d6198cb3-5fd8-4d01-8123-8a2fd52eccea",targetId:"id-1bb8dd85-8b3b-4177-b275-1fbc98ac5a6f",type:"Association"},{id:"id-9cebf0f9-48bb-438f-a446-201a7e7a6d58",sourceId:"id-79826cb6-751a-410b-877a-d5c36b37a3a9",targetId:"d6198cb3-5fd8-4d01-8123-8a2fd52eccea",type:"Association"},{id:"id-035cd1d3-6c5e-42c7-af28-040493278714",sourceId:"id-79826cb6-751a-410b-877a-d5c36b37a3a9",targetId:"id-9c624ddf-2ad3-4f5e-b315-3cb2fee23338",type:"Flow"},{id:"id-20aad130-25d1-4609-b37e-3b6daf11a208",sourceId:"id-9c624ddf-2ad3-4f5e-b315-3cb2fee23338",targetId:"d6198cb3-5fd8-4d01-8123-8a2fd52eccea",type:"Flow"},{id:"id-24d95b59-a096-4f70-885e-044b6263c4d2",sourceId:"id-0ab6f534-9641-4746-9814-cc834197c8a8",targetId:"id-79826cb6-751a-410b-877a-d5c36b37a3a9",type:"Flow"},{id:"id-5e1c92dd-b425-45ab-9df7-64ed9480c0aa",sourceId:"id-1bb8dd85-8b3b-4177-b275-1fbc98ac5a6f",targetId:"id-0ab6f534-9641-4746-9814-cc834197c8a8",type:"Flow"},{id:"id-55ab17d7-dc4a-49b8-bd7b-2fc8116d04ca",sourceId:"decfb69e-93bd-482e-b7e9-1f072f3be6fb",targetId:"id-1bb8dd85-8b3b-4177-b275-1fbc98ac5a6f",type:"Flow"},{id:"cb25995b-92f3-4424-81dd-2525f71b9891",sourceId:"id-1bb8dd85-8b3b-4177-b275-1fbc98ac5a6f",targetId:"id-79826cb6-751a-410b-877a-d5c36b37a3a9",type:"Association"},{id:"id-68632e05-4ab5-4f02-9e2f-d0471df8b456",sourceId:"d6198cb3-5fd8-4d01-8123-8a2fd52eccea",targetId:"decfb69e-93bd-482e-b7e9-1f072f3be6fb",type:"Flow"},{id:"id-36448673-f3be-426d-8dab-932c3a7f5516",sourceId:"id-15b07fcd-758c-4f1e-bbb9-dcb41cb46529",targetId:"b49f3677-09c8-4d34-8e6d-553d8a170c11",type:"Realization"},{id:"id-933162b5-51a6-44b8-aa3d-f09cdda42afc",sourceId:"id-0c53b1ea-0d7a-4969-8e71-c27e013cf1aa",targetId:"a8c12358-74f0-4cc7-8925-ca1258ec4927",type:"Assignment"},{id:"c263bb9f-ca82-4bb2-930f-930f1996234f",sourceId:"id-6326ebec-9080-4889-8f76-ee6f8d30dccf",targetId:"a8c12358-74f0-4cc7-8925-ca1258ec4927",type:"Triggering"},{id:"id-22c36430-177b-4104-9c3a-b51113fcecf7",sourceId:"a8c12358-74f0-4cc7-8925-ca1258ec4927",targetId:"e1b99a26-c65f-4781-beb0-0d7715b3594d",type:"Triggering"},{id:"id-09c240d8-c56d-413f-af90-1482b737eddc",sourceId:"id-34c63294-2349-44c6-9213-21ff054d772d",targetId:"id-3c7b668d-12b0-4523-a983-b1b3cfbdf0bd",type:"Assignment"},{id:"id-34a3f005-5118-4a54-bbcf-7c41391d645d",sourceId:"id-15b07fcd-758c-4f1e-bbb9-dcb41cb46529",targetId:"e6f6e57b-a537-49fa-8dee-bafd3391cad4",type:"Access"},{id:"id-3b62ed7e-6f76-4e91-bf0e-3dd71fcb1be4",sourceId:"e6f6e57b-a537-49fa-8dee-bafd3391cad4",targetId:"id-342ac387-a8c7-4085-a06f-fe6179b8ec2b",type:"Association"},{id:"e39fab07-0582-4683-820c-69c49a9b8d53",sourceId:"id-15b07fcd-758c-4f1e-bbb9-dcb41cb46529",targetId:"c12572b9-957c-4a5f-8b31-5ae2e3f215aa",type:"Assignment"},{id:"be48116f-dc8b-4643-9769-5db601dd4adc",sourceId:"c12572b9-957c-4a5f-8b31-5ae2e3f215aa",targetId:"id-3c7b668d-12b0-4523-a983-b1b3cfbdf0bd",type:"Triggering"},{id:"e0f08ef1-6d06-4fbf-a92e-ae56e2c60c11",sourceId:"c12572b9-957c-4a5f-8b31-5ae2e3f215aa",targetId:"id-33b0c215-6f53-492a-9008-6ab8822191a9",type:"Triggering"},{id:"e86ded81-aa7a-4000-8039-458b8c2f83f9",sourceId:"c11d7d85-937b-4ad3-b5f8-f4c2def688ad",targetId:"id-342ac387-a8c7-4085-a06f-fe6179b8ec2b",type:"Realization"},{id:"f09a384c-c6a1-4398-a16c-ec2a8b8b8f2d",sourceId:"id-33b0c215-6f53-492a-9008-6ab8822191a9",targetId:"c12572b9-957c-4a5f-8b31-5ae2e3f215aa",type:"Flow"},{id:"id-60aa1d03-b60e-4b62-a2b6-27c0cf994235",sourceId:"id-3c7b668d-12b0-4523-a983-b1b3cfbdf0bd",targetId:"c12572b9-957c-4a5f-8b31-5ae2e3f215aa",type:"Flow"},{id:"aa01e2df-3577-446e-8aed-bd485607c153",sourceId:"c12572b9-957c-4a5f-8b31-5ae2e3f215aa",targetId:"id-0c53b1ea-0d7a-4969-8e71-c27e013cf1aa",type:"Flow"}],l=[{id:"id-128714c9",name:"domain services",viewpoint:""},{id:"b1ab7ab3-2193-4440-adbf-a8a46520d46e",name:"example 1",viewpoint:""},{id:"cce7d51a-4721-4dca-a598-510112aaf1cf",name:"example 2",viewpoint:""},{id:"acbd94b0-42ce-44d9-b2c4-4b0c51c11f96",name:"example 3",viewpoint:""},{id:"id-8327bf27-0536-4341-8bd4-959760081a59",name:"domain services example 4",viewpoint:""},{id:"baa7710d-a13b-43fe-9453-a13ca7ea1201",name:"domain services wrap exceptions",viewpoint:""}],g={identifier:e,archimateId:a,name:d,description:c,formats:i,source:t,sourceFile:b,sourceFormat:f,timestamp:o,tags:n,duplicates:r,language:p,elements:s,relationships:y,views:l};export{a as archimateId,g as default,c as description,r as duplicates,s as elements,i as formats,e as identifier,p as language,d as name,y as relationships,t as source,b as sourceFile,f as sourceFormat,n as tags,o as timestamp,l as views};