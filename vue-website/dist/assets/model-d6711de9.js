const e="https://me.big.tuwien.ac.at/EAModelSet/id-2e02c87e-ba46-4607-b122-61343f815954",d="id-2e02c87e-ba46-4607-b122-61343f815954",a="RHPAM",c="",i=["XML","CSV","JSON","ARCHIMATE"],b="GitHub",t="raw-data/github/xml/rhpam.xml",f="XML",o="29-06-2023 09:27:57",n=[],r=[],s="en",y=[{id:"id-c89f85f9-4864-40fd-b6c1-aff4c65628e0",name:"Analyst",type:"BusinessActor",layer:"business"},{id:"id-8188af7c-46cd-45d7-90fe-38e6034cbc51",name:"Developer",type:"BusinessActor",layer:"business"},{id:"id-28b67026-d98e-4e50-82f8-894ee4357466",name:"Business Unit",type:"BusinessActor",layer:"business"},{id:"id-261b66a6-374c-448d-9113-3ef4e2bdb6de",name:"Web UI Client",type:"ApplicationComponent",layer:"application"},{id:"id-9c1d444b-0200-4ef1-b9b2-a0422f664f2c",name:"Evaluation Request",type:"ApplicationFunction",layer:"application"},{id:"id-a3f9baa0-ab4e-482b-9409-3a1b79d15736",name:"Active Processes",type:"ApplicationFunction",layer:"application"},{id:"id-22fee602-eb87-481f-9060-b926cef288b4",name:"Work Items",type:"ApplicationFunction",layer:"application"},{id:"id-587e2de1-238c-4488-96bb-879f06d7f458",name:"BC UI",type:"ApplicationComponent",layer:"application"},{id:"id-52f52922-d3c2-4a6d-8709-2fa4f0b1274e",name:"Docker",type:"SystemSoftware",layer:"technology"},{id:"id-a86d1f89-56c7-43a8-bddc-e3b6c296e47b",name:"PC",type:"Device",layer:"technology"},{id:"id-24a217dd-b074-4b6a-b989-3dcfaec6a858",name:"Communication Network",type:"CommunicationNetwork",layer:"technology"},{id:"id-4c2bae97-aa24-4317-baa0-2bb917a4653f",name:"LDAP Server",type:"Node",layer:"technology"},{id:"id-4b19c7b3-3c19-47fc-b500-3e39127b0bdd",name:"osixia/openldap",type:"SystemSoftware",layer:"technology"},{id:"id-42cd4e6a-491d-4ec6-80ee-0b38cdc8b538",name:"LDAP",type:"TechnologyInterface",layer:"technology"},{id:"id-aa48bbdf-75ac-4c3f-8d08-9c0732e27abb",name:"Directory Service",type:"TechnologyService",layer:"technology"},{id:"id-3a09f665-7505-476e-9275-6cf9d1b0c0d2",name:"KIE Engine (unmanaged)",type:"Node",layer:"technology"},{id:"id-2dc2cf73-1f52-4752-8c73-97c31642aabb",name:"JVM",type:"SystemSoftware",layer:"technology"},{id:"id-1e851f9c-394f-46e6-a5af-ea62d2c318de",name:"kie-server-spring-boot-starter",type:"SystemSoftware",layer:"technology"},{id:"id-9e45e267-8b4e-4454-8c80-e62c168b623a",name:"Tomcat",type:"SystemSoftware",layer:"technology"},{id:"id-9f4ba02d-4d04-43f0-aff4-0dfb54cb7ad0",name:"Process Data Service",type:"TechnologyService",layer:"technology"},{id:"id-41bfc271-d3c8-4aae-969c-142af365273f",name:"Process Variables Service",type:"TechnologyService",layer:"technology"},{id:"id-c0600fab-b703-46a3-a715-3d0ecea64fd3",name:"/instances",type:"TechnologyInterface",layer:"technology"},{id:"id-369dadf6-5954-446c-b791-7a3a62b66a36",name:"/variables",type:"TechnologyInterface",layer:"technology"},{id:"id-a1984d7c-ce5c-485d-a930-a82ee0424eaa",name:"Work Items Service",type:"TechnologyService",layer:"technology"},{id:"id-0aa33a40-f130-4ade-a29c-20ecabf23ca2",name:"/workitems",type:"TechnologyInterface",layer:"technology"},{id:"id-ceedba87-9673-4c3c-bf9f-0335af8050be",name:"Get Details",type:"TechnologyFunction",layer:"technology"},{id:"id-268d771a-3fd5-4439-9cd9-666119ee36fa",name:"Start Process",type:"TechnologyFunction",layer:"technology"},{id:"id-a8d700e0-570d-469c-9b89-d4dd87f61140",name:"Maven Server",type:"Node",layer:"technology"},{id:"id-f4b548de-37d8-4728-9e9f-40ce10a4e42e",name:"docker.bintray.io/jfrog/artifactory-oss",type:"SystemSoftware",layer:"technology"},{id:"id-eb1b8812-5e26-40b6-9eb6-2385cee2b2a6",name:"/artifactory/libs-release",type:"TechnologyInterface",layer:"technology"},{id:"id-b9fd4fb1-afe1-4435-bcf8-282b27ab2562",name:"Maven Repository Service",type:"TechnologyService",layer:"technology"},{id:"id-70f76068-2cbf-4c4e-9f01-8e0dbb618871",name:"/artifactory/libs-snapshot",type:"TechnologyInterface",layer:"technology"},{id:"id-5dc65aea-e636-4e8c-a417-5ad99e55713c",name:"Business Central",type:"Node",layer:"technology"},{id:"id-d0bdff98-63f4-48ae-ad3b-80510da584af",name:"custom image",type:"SystemSoftware",layer:"technology"},{id:"id-ed9553ee-14dc-4f61-88f7-c2fb78ae12e5",name:"Process Design",type:"TechnologyFunction",layer:"technology"},{id:"id-f4ce9f77-afe1-4701-a401-39619a678ccb",name:"KIE Controller (used for managed KIE instances)",type:"TechnologyFunction",layer:"technology"},{id:"id-38c86958-9f59-4293-9922-3752a62faa54",name:"Process Design Service",type:"TechnologyService",layer:"technology"},{id:"id-90516339-c9f9-4eb0-af4a-8c81dcc91c2a",name:"BC UI endpoints",type:"TechnologyInterface",layer:"technology"}],g=[{id:"id-933520a5-5ae5-40e8-89b5-61f50b175528",sourceId:"id-a86d1f89-56c7-43a8-bddc-e3b6c296e47b",targetId:"id-52f52922-d3c2-4a6d-8709-2fa4f0b1274e",type:"Assignment"},{id:"id-69c9b965-1778-4f02-8256-90f22bde9832",sourceId:"id-24a217dd-b074-4b6a-b989-3dcfaec6a858",targetId:"id-a86d1f89-56c7-43a8-bddc-e3b6c296e47b",type:"Association"},{id:"id-81986bdf-43d7-47c3-af62-c994f753ac46",sourceId:"id-4c2bae97-aa24-4317-baa0-2bb917a4653f",targetId:"id-4b19c7b3-3c19-47fc-b500-3e39127b0bdd",type:"Composition"},{id:"id-8dc7c439-b5c1-4bac-b12c-c96d7b9f06e9",sourceId:"id-42cd4e6a-491d-4ec6-80ee-0b38cdc8b538",targetId:"id-aa48bbdf-75ac-4c3f-8d08-9c0732e27abb",type:"Assignment"},{id:"id-c07e9b70-5656-4ac5-b0d5-23060f753479",sourceId:"id-4c2bae97-aa24-4317-baa0-2bb917a4653f",targetId:"id-aa48bbdf-75ac-4c3f-8d08-9c0732e27abb",type:"Realization"},{id:"id-8074b674-a3a1-4467-9f41-3a7913592f06",sourceId:"id-52f52922-d3c2-4a6d-8709-2fa4f0b1274e",targetId:"id-4b19c7b3-3c19-47fc-b500-3e39127b0bdd",type:"Serving"},{id:"id-c3f1a337-43af-4fac-ac16-dbba92024930",sourceId:"id-3a09f665-7505-476e-9275-6cf9d1b0c0d2",targetId:"id-1e851f9c-394f-46e6-a5af-ea62d2c318de",type:"Composition"},{id:"id-ffc8788c-7d39-44f2-930e-dd0db6f10c90",sourceId:"id-3a09f665-7505-476e-9275-6cf9d1b0c0d2",targetId:"id-9e45e267-8b4e-4454-8c80-e62c168b623a",type:"Composition"},{id:"id-d1a4283a-50d9-4396-b1e8-619791098fb2",sourceId:"id-9e45e267-8b4e-4454-8c80-e62c168b623a",targetId:"id-1e851f9c-394f-46e6-a5af-ea62d2c318de",type:"Serving"},{id:"id-c9e8432e-feba-47cd-a800-c2c0bc6157cd",sourceId:"id-2dc2cf73-1f52-4752-8c73-97c31642aabb",targetId:"id-9e45e267-8b4e-4454-8c80-e62c168b623a",type:"Serving"},{id:"id-aa192d14-7826-4de3-b81b-4eab17bcc5c9",sourceId:"id-3a09f665-7505-476e-9275-6cf9d1b0c0d2",targetId:"id-2dc2cf73-1f52-4752-8c73-97c31642aabb",type:"Composition"},{id:"id-c7ca3e73-358b-442e-818f-94ee91695472",sourceId:"id-a86d1f89-56c7-43a8-bddc-e3b6c296e47b",targetId:"id-2dc2cf73-1f52-4752-8c73-97c31642aabb",type:"Assignment"},{id:"id-9487067e-6c17-4106-b5f0-75679b1d66d1",sourceId:"id-42cd4e6a-491d-4ec6-80ee-0b38cdc8b538",targetId:"id-3a09f665-7505-476e-9275-6cf9d1b0c0d2",type:"Serving"},{id:"id-199f5f56-2f8c-4046-818b-c098a9d0297d",sourceId:"id-3a09f665-7505-476e-9275-6cf9d1b0c0d2",targetId:"id-9f4ba02d-4d04-43f0-aff4-0dfb54cb7ad0",type:"Realization"},{id:"id-4f0dc4f0-a3ae-47db-9724-0deb86fee1cc",sourceId:"id-c0600fab-b703-46a3-a715-3d0ecea64fd3",targetId:"id-9f4ba02d-4d04-43f0-aff4-0dfb54cb7ad0",type:"Assignment"},{id:"id-65822da2-bf9b-4609-a08a-a81db9065e7a",sourceId:"id-3a09f665-7505-476e-9275-6cf9d1b0c0d2",targetId:"id-41bfc271-d3c8-4aae-969c-142af365273f",type:"Realization"},{id:"id-5f0ec7ca-192d-44d7-9c86-7bed50eb9d93",sourceId:"id-369dadf6-5954-446c-b791-7a3a62b66a36",targetId:"id-41bfc271-d3c8-4aae-969c-142af365273f",type:"Assignment"},{id:"id-c5b57053-42a0-4906-9b84-81f1fbdb6e7d",sourceId:"id-0aa33a40-f130-4ade-a29c-20ecabf23ca2",targetId:"id-a1984d7c-ce5c-485d-a930-a82ee0424eaa",type:"Assignment"},{id:"id-66adc0e0-3091-4d11-b710-9a4b47884101",sourceId:"id-3a09f665-7505-476e-9275-6cf9d1b0c0d2",targetId:"id-a1984d7c-ce5c-485d-a930-a82ee0424eaa",type:"Realization"},{id:"id-f1bd93b8-59b7-4936-8eef-81ee5c2a09d6",sourceId:"id-ceedba87-9673-4c3c-bf9f-0335af8050be",targetId:"id-9f4ba02d-4d04-43f0-aff4-0dfb54cb7ad0",type:"Realization"},{id:"id-986ccc25-e3d4-4a40-b274-02a30de01b30",sourceId:"id-268d771a-3fd5-4439-9cd9-666119ee36fa",targetId:"id-9f4ba02d-4d04-43f0-aff4-0dfb54cb7ad0",type:"Realization"},{id:"id-5afa34cd-26bd-4695-954a-8e5fb247a8da",sourceId:"id-a8d700e0-570d-469c-9b89-d4dd87f61140",targetId:"id-f4b548de-37d8-4728-9e9f-40ce10a4e42e",type:"Composition"},{id:"id-dfda3f58-86a0-49d5-b921-be5e23864bf4",sourceId:"id-eb1b8812-5e26-40b6-9eb6-2385cee2b2a6",targetId:"id-b9fd4fb1-afe1-4435-bcf8-282b27ab2562",type:"Assignment"},{id:"id-4c030079-0ac2-4f45-890f-2bd99996ca89",sourceId:"id-a8d700e0-570d-469c-9b89-d4dd87f61140",targetId:"id-b9fd4fb1-afe1-4435-bcf8-282b27ab2562",type:"Realization"},{id:"id-2f74050b-7c06-475c-af5f-affbe587d886",sourceId:"id-70f76068-2cbf-4c4e-9f01-8e0dbb618871",targetId:"id-b9fd4fb1-afe1-4435-bcf8-282b27ab2562",type:"Assignment"},{id:"id-8de46a10-2e00-440f-8cd2-9ef8e4c6b75f",sourceId:"id-70f76068-2cbf-4c4e-9f01-8e0dbb618871",targetId:"id-3a09f665-7505-476e-9275-6cf9d1b0c0d2",type:"Serving"},{id:"id-1e375bb4-6a0e-4d0d-969a-c8f080949d07",sourceId:"id-eb1b8812-5e26-40b6-9eb6-2385cee2b2a6",targetId:"id-3a09f665-7505-476e-9275-6cf9d1b0c0d2",type:"Serving"},{id:"id-ad072d51-b3ce-4815-adaf-dc0285af8605",sourceId:"id-c0600fab-b703-46a3-a715-3d0ecea64fd3",targetId:"id-261b66a6-374c-448d-9113-3ef4e2bdb6de",type:"Serving"},{id:"id-7220ab4c-9c46-45d4-88b2-ee5e157922be",sourceId:"id-369dadf6-5954-446c-b791-7a3a62b66a36",targetId:"id-261b66a6-374c-448d-9113-3ef4e2bdb6de",type:"Serving"},{id:"id-7184eb3e-1769-4780-b171-98184ddaa8b9",sourceId:"id-0aa33a40-f130-4ade-a29c-20ecabf23ca2",targetId:"id-261b66a6-374c-448d-9113-3ef4e2bdb6de",type:"Serving"},{id:"id-f3d4a940-58bb-4f2d-a9c0-4f2e350407c9",sourceId:"id-261b66a6-374c-448d-9113-3ef4e2bdb6de",targetId:"id-9c1d444b-0200-4ef1-b9b2-a0422f664f2c",type:"Assignment"},{id:"id-707633fa-00f4-4b30-83f0-9f58a066c405",sourceId:"id-261b66a6-374c-448d-9113-3ef4e2bdb6de",targetId:"id-a3f9baa0-ab4e-482b-9409-3a1b79d15736",type:"Assignment"},{id:"id-96651505-08c0-43b7-917d-1766b0fc9f63",sourceId:"id-261b66a6-374c-448d-9113-3ef4e2bdb6de",targetId:"id-22fee602-eb87-481f-9060-b926cef288b4",type:"Assignment"},{id:"id-c64390cb-a80b-40d2-91c1-7b8c1b122c17",sourceId:"id-52f52922-d3c2-4a6d-8709-2fa4f0b1274e",targetId:"id-f4b548de-37d8-4728-9e9f-40ce10a4e42e",type:"Serving"},{id:"id-dccfad5c-fc01-4d86-8b7b-ef25ac2a3865",sourceId:"id-5dc65aea-e636-4e8c-a417-5ad99e55713c",targetId:"id-d0bdff98-63f4-48ae-ad3b-80510da584af",type:"Composition"},{id:"id-7749bd4d-bbb4-4a73-a86e-cd1ea6e7a139",sourceId:"id-52f52922-d3c2-4a6d-8709-2fa4f0b1274e",targetId:"id-d0bdff98-63f4-48ae-ad3b-80510da584af",type:"Serving"},{id:"id-d76d8e2c-2b8a-4084-9c0a-4fe9f7e4424a",sourceId:"id-70f76068-2cbf-4c4e-9f01-8e0dbb618871",targetId:"id-5dc65aea-e636-4e8c-a417-5ad99e55713c",type:"Serving"},{id:"id-bb7580df-2dbb-4a60-a65d-d38989f5e710",sourceId:"id-5dc65aea-e636-4e8c-a417-5ad99e55713c",targetId:"id-f4ce9f77-afe1-4701-a401-39619a678ccb",type:"Assignment"},{id:"id-b4b45cd3-0ad6-40cf-9928-6d1207c60609",sourceId:"id-ed9553ee-14dc-4f61-88f7-c2fb78ae12e5",targetId:"id-38c86958-9f59-4293-9922-3752a62faa54",type:"Realization"},{id:"id-43a0fbf3-e0e3-4ffb-bb98-03a7e8c69c6e",sourceId:"id-5dc65aea-e636-4e8c-a417-5ad99e55713c",targetId:"id-38c86958-9f59-4293-9922-3752a62faa54",type:"Realization"},{id:"id-4f24ad68-d7c1-4134-9cdc-7783a14386d2",sourceId:"id-90516339-c9f9-4eb0-af4a-8c81dcc91c2a",targetId:"id-38c86958-9f59-4293-9922-3752a62faa54",type:"Assignment"},{id:"id-79930444-5e5e-49b3-a653-9bc475e7d2b4",sourceId:"id-90516339-c9f9-4eb0-af4a-8c81dcc91c2a",targetId:"id-587e2de1-238c-4488-96bb-879f06d7f458",type:"Serving"},{id:"id-dec98ffc-19ca-46ec-b3a5-6c9931b94a92",sourceId:"id-587e2de1-238c-4488-96bb-879f06d7f458",targetId:"id-c89f85f9-4864-40fd-b6c1-aff4c65628e0",type:"Serving"},{id:"id-f1be8093-a9d5-42a0-9c18-c78dcd97b6e0",sourceId:"id-587e2de1-238c-4488-96bb-879f06d7f458",targetId:"id-8188af7c-46cd-45d7-90fe-38e6034cbc51",type:"Serving"},{id:"id-94a16558-6d80-41f3-8089-aa7115c8f9d1",sourceId:"id-587e2de1-238c-4488-96bb-879f06d7f458",targetId:"id-28b67026-d98e-4e50-82f8-894ee4357466",type:"Serving"}],l=[{id:"id-2433d84c-214e-4450-920e-df6735f04eaa",name:"Default View",viewpoint:""}],p={identifier:e,archimateId:d,name:a,description:c,formats:i,source:b,sourceFile:t,sourceFormat:f,timestamp:o,tags:n,duplicates:r,language:s,elements:y,relationships:g,views:l};export{d as archimateId,p as default,c as description,r as duplicates,y as elements,i as formats,e as identifier,s as language,a as name,g as relationships,b as source,t as sourceFile,f as sourceFormat,n as tags,o as timestamp,l as views};