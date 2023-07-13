const e="https://me.big.tuwien.ac.at/EAModelSet/id-b3a748acaeab4db5a99d18998a9d8145",a="id-b3a748acaeab4db5a99d18998a9d8145",d="BigID-DataDiscovery",i="",c=["XML","CSV","JSON","ARCHIMATE"],b="GitHub",t="raw-data/github/archimate/bigid_model.archimate",f="ARCHIMATE",o="29-06-2023 09:30:24",n=[],r=[],l="en",s=[{id:"id-3a5e71e066e241f8add96202dc632134",name:"Biz End Users",type:"BusinessActor",layer:"business"},{id:"id-2221bd7fcfd646458b949657adbca950",name:"Data Stewards",type:"BusinessActor",layer:"business"},{id:"id-1f6e7a9cf94148158f7251b9707b8618",name:"Technologists",type:"BusinessActor",layer:"business"},{id:"id-9e81291bab5c42abbb73a4a5237c1915",name:"Data Analysis / Data Profiling",type:"BusinessService",layer:"business"},{id:"id-2f8a38cc137a4a19ac1073a9f8ff22ac",name:"BigID Data Discovery - UI",type:"ApplicationComponent",layer:"application"},{id:"id-32ce9027dcb44b4ebf6346e9cc3d2e48",name:"Data Discovery Scan",type:"ApplicationEvent",layer:"application"},{id:"id-5a8323609b47442ba561c2ad6148937b",name:"All CNO Source  systems",type:"ApplicationComponent",layer:"application"},{id:"id-dc74abc01caf4557adce9b02f9ef22f8",name:"Discover PII",type:"ApplicationService",layer:"application"},{id:"id-3847d1ef7235461bb755148015a8b2ce",name:"Manage Policies",type:"ApplicationService",layer:"application"},{id:"id-2679e18a0e4645f5957ce1917980bbe1",name:"Discover PII",type:"ApplicationService",layer:"application"},{id:"id-73126f0e6a584460a1af3ef3fe41d536",name:"Manage Policies",type:"ApplicationService",layer:"application"},{id:"id-fd6a26e02b5f486da18cbbbbd6a05b10",name:"BigID/CNO OnPrem",type:"Node",layer:"technology"},{id:"id-a853c2ae708846a8b31c5d23c98d4278",name:"CloudFlare Reverse Proxy",type:"TechnologyCollaboration",layer:"technology"},{id:"id-db5cce31d8b34711b22dbe6c7ebab672",name:"CNO On-prem",type:"Node",layer:"technology"},{id:"id-4ac838e3910f4ea9a8540c5548e29a33",name:"Indiana Scanner x3 ",type:"TechnologyService",layer:"technology"},{id:"id-2a2a64bb730b449d9624a38e8a93f479",name:"CNO FW (firewall)",type:"TechnologyService",layer:"technology"},{id:"id-e9d07dcef29f46c9876ee2a7f4d257db",name:"BigID AWS Cloud - VPC",type:"Node",layer:"technology"},{id:"id-95b6c1870c1845e8b92da43641d58bc9",name:"ALB - Application Load Balancer",type:"TechnologyCollaboration",layer:"technology"},{id:"id-66f7212463de4d0db29ac7f34aa08b15",name:"Auto Scaling",type:"TechnologyCollaboration",layer:"technology"},{id:"id-fcece206165641fb9eafcb8e8bce7199",name:"Kubernetes Resources BigID Cluster",type:"Node",layer:"technology"},{id:"id-d0b64d608b4d4742ab5fb32558beeb64",name:"MongoDB - Atlas",type:"Node",layer:"technology"},{id:"id-aa6f0f2e09264940b0000857464677df",name:"CNO on prem hosts",type:"Node",layer:"technology"},{id:"id-ce6f175f4f124a7e8c69b87f3382d80a",name:"CNO On-prem",type:"TechnologyCollaboration",layer:"technology"},{id:"id-cb4502dbb8824fe993310903333d6c72",name:"BigID Webapp/API gateway",type:"TechnologyService",layer:"technology"},{id:"id-50c7aaafd2ba450e9ae8d3f03eca3480",name:"Web Auth and Routing app",type:"TechnologyService",layer:"technology"},{id:"id-86293f34a9d04e97b96a9db7e54df89f",name:"Orchestrator pods",type:"TechnologyService",layer:"technology"},{id:"id-c74216d6142947f6a9b563cac46d8414",name:"Rabbit MQ",type:"TechnologyService",layer:"technology"},{id:"id-480ae6f399c34f22b227bfde69612658",name:"MongoDB",type:"TechnologyService",layer:"technology"},{id:"id-8bbd7df1cd43485c8a48cdfa5de61c09",name:"Scanner pods",type:"TechnologyService",layer:"technology"},{id:"id-279701dc7f2a4b63b5e8216981772ace",name:"Internet Gateway",type:"Node",layer:"technology"},{id:"id-1a3b230879d14f3baf919f84494b68ab",name:"ALB - Application Load Balancer",type:"Node",layer:"technology"},{id:"id-1bbbcbe92f3140898d1f2c3a3a4055f8",name:"Technology Collaboration",type:"TechnologyCollaboration",layer:"technology"},{id:"id-2534198555904849b48a4a715ec6fbed",name:"System Software",type:"SystemSoftware",layer:"technology"},{id:"id-80fdd8ff2ad345a2a540e1e65d7fc1b5",name:"ALB - Application Load Balancer",type:"TechnologyCollaboration",layer:"technology"},{id:"id-fae675d615e74734a65533b3d66af42e",name:"Node",type:"Node",layer:"technology"},{id:"id-2e619dc69e0149f1a20dbb05b4855f1b",name:"Web application firewall 1",type:"Node",layer:"technology"},{id:"id-9c1b976ab6724bb7b80f02e61b676331",name:"Web application firewall 2",type:"Node",layer:"technology"},{id:"id-7b821d1ad56b40ae9aa9b4855d2c2b31",name:"Correlator pods",type:"TechnologyService",layer:"technology"},{id:"id-2b4fc0b16c2a40d9837e58021a5f7ee1",name:"Cyberark",type:"TechnologyService",layer:"technology"}],p=[{id:"id-cac178319a3a4481b1e35e410c2e869f",sourceId:"id-1f6e7a9cf94148158f7251b9707b8618",targetId:"id-9e81291bab5c42abbb73a4a5237c1915",type:"RealizationRelationship"},{id:"id-bb506a100e5047368834a34b3989e868",sourceId:"id-3a5e71e066e241f8add96202dc632134",targetId:"id-9e81291bab5c42abbb73a4a5237c1915",type:"RealizationRelationship"},{id:"id-6d2acabf42994669899a094d18338c75",sourceId:"id-2221bd7fcfd646458b949657adbca950",targetId:"id-9e81291bab5c42abbb73a4a5237c1915",type:"RealizationRelationship"},{id:"id-d10a6a1891134631ad435cf353647892",sourceId:"id-2f8a38cc137a4a19ac1073a9f8ff22ac",targetId:"id-dc74abc01caf4557adce9b02f9ef22f8",type:"ServingRelationship"},{id:"id-c8715b4ae818476ab43c0b61111ce265",sourceId:"id-2f8a38cc137a4a19ac1073a9f8ff22ac",targetId:"id-dc74abc01caf4557adce9b02f9ef22f8",type:"ServingRelationship"},{id:"id-d223dfc92d894a658d3be720a35dbf9a",sourceId:"id-2f8a38cc137a4a19ac1073a9f8ff22ac",targetId:"id-2221bd7fcfd646458b949657adbca950",type:"ServingRelationship"},{id:"id-788fa8f1a3564bb5add80503e7ed11bc",sourceId:"id-a853c2ae708846a8b31c5d23c98d4278",targetId:"id-4ac838e3910f4ea9a8540c5548e29a33",type:"RealizationRelationship"},{id:"id-d0887dd0da854ecab96be4982f628e6c",sourceId:"id-db5cce31d8b34711b22dbe6c7ebab672",targetId:"id-4ac838e3910f4ea9a8540c5548e29a33",type:"RealizationRelationship"},{id:"id-e493ccea11804406ace5de723bab8436",sourceId:"id-4ac838e3910f4ea9a8540c5548e29a33",targetId:"id-a853c2ae708846a8b31c5d23c98d4278",type:"TriggeringRelationship"},{id:"id-5c61542bd44e414fa6a80dcce557edbd",sourceId:"id-db5cce31d8b34711b22dbe6c7ebab672",targetId:"id-2a2a64bb730b449d9624a38e8a93f479",type:"RealizationRelationship"},{id:"id-f2a791dd304643b7a7e923a42c2343bb",sourceId:"id-66f7212463de4d0db29ac7f34aa08b15",targetId:"id-95b6c1870c1845e8b92da43641d58bc9",type:"SpecializationRelationship"},{id:"id-6498aff0d3434079866e5d65c1ef4fb7",sourceId:"id-66f7212463de4d0db29ac7f34aa08b15",targetId:"id-fcece206165641fb9eafcb8e8bce7199",type:"RealizationRelationship"},{id:"id-0c9f3159a97c47a8a401c79e75eeff2b",sourceId:"id-95b6c1870c1845e8b92da43641d58bc9",targetId:"id-d0b64d608b4d4742ab5fb32558beeb64",type:"FlowRelationship"},{id:"id-38e222de5de749608abe1cbb00c5e11d",sourceId:"id-d0b64d608b4d4742ab5fb32558beeb64",targetId:"id-95b6c1870c1845e8b92da43641d58bc9",type:"FlowRelationship"},{id:"id-d0a896a85d9a4d8daa10cf90ddf970c5",sourceId:"id-32ce9027dcb44b4ebf6346e9cc3d2e48",targetId:"id-fcece206165641fb9eafcb8e8bce7199",type:"FlowRelationship"},{id:"id-3d73de7d7f43479c8eed66cacb6d486b",sourceId:"id-a853c2ae708846a8b31c5d23c98d4278",targetId:"id-2f8a38cc137a4a19ac1073a9f8ff22ac",type:"ServingRelationship"},{id:"id-4cabb76f0bf24518a46de3358e52d465",sourceId:"id-2a2a64bb730b449d9624a38e8a93f479",targetId:"id-279701dc7f2a4b63b5e8216981772ace",type:"FlowRelationship"},{id:"id-07ce22379d554155817c83f3867d21c4",sourceId:"id-279701dc7f2a4b63b5e8216981772ace",targetId:"id-2a2a64bb730b449d9624a38e8a93f479",type:"FlowRelationship"},{id:"id-f0f4cf71d8e84a7dac5087e912eda716",sourceId:"id-2a2a64bb730b449d9624a38e8a93f479",targetId:"id-279701dc7f2a4b63b5e8216981772ace",type:"FlowRelationship"},{id:"id-92c2bb9de2554027b7aba4f3c99715fb",sourceId:"id-279701dc7f2a4b63b5e8216981772ace",targetId:"id-2a2a64bb730b449d9624a38e8a93f479",type:"FlowRelationship"},{id:"id-5537e249590c44e78a1a8a67054674af",sourceId:"id-5a8323609b47442ba561c2ad6148937b",targetId:"id-32ce9027dcb44b4ebf6346e9cc3d2e48",type:"FlowRelationship"},{id:"id-473d0b16464f4b4996295c0c325bde1f",sourceId:"id-fd6a26e02b5f486da18cbbbbd6a05b10",targetId:"id-db5cce31d8b34711b22dbe6c7ebab672",type:"RealizationRelationship"},{id:"id-2fd5e5750ae246428f2ce8f9eb447ac0",sourceId:"id-a853c2ae708846a8b31c5d23c98d4278",targetId:"id-32ce9027dcb44b4ebf6346e9cc3d2e48",type:"TriggeringRelationship"},{id:"id-06d0e26212994a37b1e4c0a7a91f6cac",sourceId:"id-aa6f0f2e09264940b0000857464677df",targetId:"id-5a8323609b47442ba561c2ad6148937b",type:"ServingRelationship"},{id:"id-4d38ead134b94228862e855034c100ed",sourceId:"id-a853c2ae708846a8b31c5d23c98d4278",targetId:"id-279701dc7f2a4b63b5e8216981772ace",type:"FlowRelationship"},{id:"id-fca0d5f7e2ac47b6b31aa9590e9846c5",sourceId:"id-279701dc7f2a4b63b5e8216981772ace",targetId:"id-a853c2ae708846a8b31c5d23c98d4278",type:"FlowRelationship"},{id:"id-00610ca9488b4e95b0b5627b201243c0",sourceId:"id-95b6c1870c1845e8b92da43641d58bc9",targetId:"id-fcece206165641fb9eafcb8e8bce7199",type:"RealizationRelationship"},{id:"id-a439b918549146c09c9b66945d45e4a2",sourceId:"id-ce6f175f4f124a7e8c69b87f3382d80a",targetId:"id-4ac838e3910f4ea9a8540c5548e29a33",type:"RealizationRelationship"},{id:"id-ce0912443e8e483587ebb91563102abd",sourceId:"id-ce6f175f4f124a7e8c69b87f3382d80a",targetId:"id-2a2a64bb730b449d9624a38e8a93f479",type:"RealizationRelationship"},{id:"id-1f6634f520714db0a8a7558c8825a216",sourceId:"id-5a8323609b47442ba561c2ad6148937b",targetId:"id-ce6f175f4f124a7e8c69b87f3382d80a",type:"ServingRelationship"},{id:"id-08c0e4d1a14440f8aa4c17742ab64870",sourceId:"id-4ac838e3910f4ea9a8540c5548e29a33",targetId:"id-32ce9027dcb44b4ebf6346e9cc3d2e48",type:"ServingRelationship"},{id:"id-d7abff74cf224b83b74dca08bcc4dad4",sourceId:"id-fcece206165641fb9eafcb8e8bce7199",targetId:"id-cb4502dbb8824fe993310903333d6c72",type:"RealizationRelationship"},{id:"id-2fcd01c5e42947bcb0b9b8220e76bbd8",sourceId:"id-cb4502dbb8824fe993310903333d6c72",targetId:"id-50c7aaafd2ba450e9ae8d3f03eca3480",type:"TriggeringRelationship"},{id:"id-60d8af630ef34ba9b0e6ce63e4f1c829",sourceId:"id-50c7aaafd2ba450e9ae8d3f03eca3480",targetId:"id-86293f34a9d04e97b96a9db7e54df89f",type:"ServingRelationship"},{id:"id-6f26a06f19f946319a259ee9f7756a14",sourceId:"id-50c7aaafd2ba450e9ae8d3f03eca3480",targetId:"id-86293f34a9d04e97b96a9db7e54df89f",type:"TriggeringRelationship"},{id:"id-1ca7408df0674befa1d0fb962747dc12",sourceId:"id-86293f34a9d04e97b96a9db7e54df89f",targetId:"id-c74216d6142947f6a9b563cac46d8414",type:"ServingRelationship"},{id:"id-1975c74db7a94bd19bf1ce549495e9c8",sourceId:"id-c74216d6142947f6a9b563cac46d8414",targetId:"id-8bbd7df1cd43485c8a48cdfa5de61c09",type:"ServingRelationship"},{id:"id-e90555524b3c409bb9fd29f596b26f35",sourceId:"id-8bbd7df1cd43485c8a48cdfa5de61c09",targetId:"id-c74216d6142947f6a9b563cac46d8414",type:"ServingRelationship"},{id:"id-ae47874a62f046cda450354d0029b69d",sourceId:"id-8bbd7df1cd43485c8a48cdfa5de61c09",targetId:"id-480ae6f399c34f22b227bfde69612658",type:"ServingRelationship"},{id:"id-421d6a576f144d76b6ba078dbf7dea64",sourceId:"id-7b821d1ad56b40ae9aa9b4855d2c2b31",targetId:"id-d0b64d608b4d4742ab5fb32558beeb64",type:"FlowRelationship"},{id:"id-82f974932f73419d9438af44a146fcf7",sourceId:"id-c74216d6142947f6a9b563cac46d8414",targetId:"id-d0b64d608b4d4742ab5fb32558beeb64",type:"FlowRelationship"},{id:"id-704bdcbaf1cc4194b0a99af2d9938c4b",sourceId:"id-86293f34a9d04e97b96a9db7e54df89f",targetId:"id-d0b64d608b4d4742ab5fb32558beeb64",type:"FlowRelationship"},{id:"id-610bd937b3054be58fafd62d03eb6697",sourceId:"id-ce6f175f4f124a7e8c69b87f3382d80a",targetId:"id-a853c2ae708846a8b31c5d23c98d4278",type:"FlowRelationship"},{id:"id-1e0f6eeca8e845ec9af513ff4f2d33e4",sourceId:"id-cb4502dbb8824fe993310903333d6c72",targetId:"id-86293f34a9d04e97b96a9db7e54df89f",type:"TriggeringRelationship"},{id:"id-c62ef61517564e5c829e2ee552bd5523",sourceId:"id-279701dc7f2a4b63b5e8216981772ace",targetId:"id-e9d07dcef29f46c9876ee2a7f4d257db",type:"AssignmentRelationship"},{id:"id-8e610a7f288a4df79e234eeeae9b493c",sourceId:"id-1a3b230879d14f3baf919f84494b68ab",targetId:"id-e9d07dcef29f46c9876ee2a7f4d257db",type:"AssignmentRelationship"},{id:"id-386f5506dbeb49f8995942ad25a21026",sourceId:"id-2534198555904849b48a4a715ec6fbed",targetId:"id-e9d07dcef29f46c9876ee2a7f4d257db",type:"AssignmentRelationship"},{id:"id-b15f03d1712449e7b266f8603ac8ea84",sourceId:"id-80fdd8ff2ad345a2a540e1e65d7fc1b5",targetId:"id-e9d07dcef29f46c9876ee2a7f4d257db",type:"AssignmentRelationship"},{id:"id-ddf8b39d5ec140289b48413ff80f1ba6",sourceId:"id-80fdd8ff2ad345a2a540e1e65d7fc1b5",targetId:"id-2e619dc69e0149f1a20dbb05b4855f1b",type:"AssignmentRelationship"},{id:"id-106dda45f4244be3939fffebf719c2b6",sourceId:"id-80fdd8ff2ad345a2a540e1e65d7fc1b5",targetId:"id-9c1b976ab6724bb7b80f02e61b676331",type:"AssignmentRelationship"},{id:"id-f66fd3588266480ea33861e46ae24451",sourceId:"id-279701dc7f2a4b63b5e8216981772ace",targetId:"id-80fdd8ff2ad345a2a540e1e65d7fc1b5",type:"FlowRelationship"},{id:"id-2ab9241d9a8649079d82fa18f7284ca7",sourceId:"id-80fdd8ff2ad345a2a540e1e65d7fc1b5",targetId:"id-95b6c1870c1845e8b92da43641d58bc9",type:"FlowRelationship"},{id:"id-b12e902d7150482982b70b50ea474147",sourceId:"id-279701dc7f2a4b63b5e8216981772ace",targetId:"id-95b6c1870c1845e8b92da43641d58bc9",type:"FlowRelationship"},{id:"id-96bfb8cb893f407b8d62588e80ba3849",sourceId:"id-95b6c1870c1845e8b92da43641d58bc9",targetId:"id-279701dc7f2a4b63b5e8216981772ace",type:"FlowRelationship"},{id:"id-80ece305b02a4648b99cfec81126bdc8",sourceId:"id-4ac838e3910f4ea9a8540c5548e29a33",targetId:"id-2a2a64bb730b449d9624a38e8a93f479",type:"FlowRelationship"},{id:"id-f1d40d7dbb044ad5bd75447f79f6b847",sourceId:"id-fcece206165641fb9eafcb8e8bce7199",targetId:"id-7b821d1ad56b40ae9aa9b4855d2c2b31",type:"RealizationRelationship"},{id:"id-d1097ba04d864812902973a0d13b4034",sourceId:"id-7b821d1ad56b40ae9aa9b4855d2c2b31",targetId:"id-c74216d6142947f6a9b563cac46d8414",type:"TriggeringRelationship"},{id:"id-e20749daf0844a5b9c50fc1eb897fa1b",sourceId:"id-c74216d6142947f6a9b563cac46d8414",targetId:"id-7b821d1ad56b40ae9aa9b4855d2c2b31",type:"ServingRelationship"},{id:"id-8261096c2822475a81a4a30f2441efba",sourceId:"id-7b821d1ad56b40ae9aa9b4855d2c2b31",targetId:"id-c74216d6142947f6a9b563cac46d8414",type:"ServingRelationship"},{id:"id-19817abf20bc4a59920878f3143ebfb3",sourceId:"id-ce6f175f4f124a7e8c69b87f3382d80a",targetId:"id-2b4fc0b16c2a40d9837e58021a5f7ee1",type:"RealizationRelationship"},{id:"id-2d43ca6dd56941cfa2c232f7575c3953",sourceId:"id-4ac838e3910f4ea9a8540c5548e29a33",targetId:"id-2b4fc0b16c2a40d9837e58021a5f7ee1",type:"ServingRelationship"},{id:"id-635a26dcc0af4c7997e300bd819e7820",sourceId:"id-2f8a38cc137a4a19ac1073a9f8ff22ac",targetId:"id-3a5e71e066e241f8add96202dc632134",type:"ServingRelationship"},{id:"id-1b1ee716a72c46539b83a9c041252019",sourceId:"id-2f8a38cc137a4a19ac1073a9f8ff22ac",targetId:"id-1f6e7a9cf94148158f7251b9707b8618",type:"ServingRelationship"},{id:"id-f6b444ad77604550ba4fd42640f47882",sourceId:"id-3847d1ef7235461bb755148015a8b2ce",targetId:"id-2221bd7fcfd646458b949657adbca950",type:"ServingRelationship"},{id:"id-6e4ab2b890604359b659c5ebce2e43f3",sourceId:"id-2f8a38cc137a4a19ac1073a9f8ff22ac",targetId:"id-2221bd7fcfd646458b949657adbca950",type:"ServingRelationship"},{id:"id-22ce9597ac824087a36cc9ee42f4a186",sourceId:"id-2f8a38cc137a4a19ac1073a9f8ff22ac",targetId:"id-dc74abc01caf4557adce9b02f9ef22f8",type:"RealizationRelationship"},{id:"id-a0ba40ce07cb4724a274f929930fe4e9",sourceId:"id-2f8a38cc137a4a19ac1073a9f8ff22ac",targetId:"id-3847d1ef7235461bb755148015a8b2ce",type:"RealizationRelationship"},{id:"id-a93a1a94e523432c8db3b6d9fa05576c",sourceId:"id-2f8a38cc137a4a19ac1073a9f8ff22ac",targetId:"id-32ce9027dcb44b4ebf6346e9cc3d2e48",type:"TriggeringRelationship"},{id:"id-e9609795a234458d87a71be3cb072821",sourceId:"id-2f8a38cc137a4a19ac1073a9f8ff22ac",targetId:"id-2679e18a0e4645f5957ce1917980bbe1",type:"RealizationRelationship"},{id:"id-3752e8285b6a469f9c2f8e5d0660322b",sourceId:"id-2f8a38cc137a4a19ac1073a9f8ff22ac",targetId:"id-73126f0e6a584460a1af3ef3fe41d536",type:"RealizationRelationship"}],y=[{id:"id-24616c9cbf61423bbb9b629b185657d7",name:"BigID-DataDiscovery",viewpoint:""}],g={identifier:e,archimateId:a,name:d,description:i,formats:c,source:b,sourceFile:t,sourceFormat:f,timestamp:o,tags:n,duplicates:r,language:l,elements:s,relationships:p,views:y};export{a as archimateId,g as default,i as description,r as duplicates,s as elements,c as formats,e as identifier,l as language,d as name,p as relationships,b as source,t as sourceFile,f as sourceFormat,n as tags,o as timestamp,y as views};
