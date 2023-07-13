const e="https://me.big.tuwien.ac.at/EAModelSet/id-6a1178b4",i="id-6a1178b4",t="Types of consistency",d="",a=["XML","CSV","JSON","ARCHIMATE"],o="GitHub",s="raw-data/github/xml/types_of_consistency.xml",n="XML",c="29-06-2023 09:27:29",r=[],p=[],y="en",m=[{id:"id-202fec56",name:"Actor 1",type:"BusinessActor",layer:"business"},{id:"id-987339b7",name:"Actor 2",type:"BusinessActor",layer:"business"},{id:"id-4eb1e8cf",name:"Actor 1",type:"BusinessActor",layer:"business"},{id:"id-386562d2",name:"Actor 2",type:"BusinessActor",layer:"business"},{id:"id-912eabdc",name:"business transaction 1",type:"ApplicationEvent",layer:"application"},{id:"id-4e26333d",name:"business transaction 2",type:"ApplicationEvent",layer:"application"},{id:"f76cbe57",name:"distributed transaction",type:"ApplicationEvent",layer:"application"},{id:"cda25434",name:"distributed transaction (copy)",type:"ApplicationEvent",layer:"application"},{id:"dd09a709",name:"attempt to access system 1",type:"ApplicationEvent",layer:"application"},{id:"id-8d412c37",name:"attempt to access system 2",type:"ApplicationEvent",layer:"application"},{id:"b132b432",name:"Retry attempts to access the system",type:"ApplicationProcess",layer:"application"},{id:"id-4d0c95a9",name:"Retry attempts to access the system",type:"ApplicationProcess",layer:"application"},{id:"c8b3d8c7",name:"Retry attempts to commit distributed transaction",type:"ApplicationProcess",layer:"application"},{id:"f1affb1f",name:"attempt to access system 1 (copy)",type:"ApplicationEvent",layer:"application"},{id:"id-28b23906",name:"system 1 task",type:"ApplicationFunction",layer:"application"},{id:"id-2d239603",name:"system 2 task",type:"ApplicationFunction",layer:"application"},{id:"id-18879795",name:"system 1 task",type:"ApplicationFunction",layer:"application"},{id:"id-8498b088",name:"system 2 task",type:"ApplicationFunction",layer:"application"},{id:"c23d308b",name:"Meaning",type:"Meaning",layer:"motivation"},{id:"id-7fbf1dbb",name:"smaller aggregates",type:"Requirement",layer:"motivation"},{id:"id-44b6ebf8",name:"reduce transactional locking",type:"Outcome",layer:"motivation"},{id:"ba1281cb",name:"reduce consistency complexities",type:"Outcome",layer:"motivation"},{id:"id-84f4d64c",name:"system 1",type:"Grouping",layer:"other"},{id:"b8e0c309",name:"system 2",type:"Grouping",layer:"other"},{id:"id-52b275fd",name:"system 1",type:"Grouping",layer:"other"},{id:"id-9fa2f0b3",name:"system 2",type:"Grouping",layer:"other"},{id:"id-85609849",name:"Transactional Boundary",type:"Grouping",layer:"other"},{id:"id-19e695af",name:"Transactional Boundary",type:"Grouping",layer:"other"},{id:"a4c8b471",name:"Transaction 1 boundary",type:"Grouping",layer:"other"},{id:"id-4f27e0a1",name:"Transaction 2 boundary",type:"Grouping",layer:"other"}],b=[{id:"cec93f91",sourceId:"f76cbe57",targetId:"id-912eabdc",type:"Composition"},{id:"ee38f297",sourceId:"f76cbe57",targetId:"id-4e26333d",type:"Composition"},{id:"ff47e1bf",sourceId:"id-912eabdc",targetId:"id-84f4d64c",type:"Triggering"},{id:"ac3c16f5",sourceId:"id-84f4d64c",targetId:"id-912eabdc",type:"Triggering"},{id:"id-88357bdb",sourceId:"id-4e26333d",targetId:"b8e0c309",type:"Triggering"},{id:"e7ede966",sourceId:"b8e0c309",targetId:"id-4e26333d",type:"Triggering"},{id:"id-506e7559",sourceId:"cda25434",targetId:"id-8d412c37",type:"Composition"},{id:"id-250df832",sourceId:"cda25434",targetId:"dd09a709",type:"Composition"},{id:"e7bd9544",sourceId:"id-52b275fd",targetId:"dd09a709",type:"Triggering"},{id:"ef47368c",sourceId:"dd09a709",targetId:"id-52b275fd",type:"Triggering"},{id:"id-9701f2e8",sourceId:"id-8d412c37",targetId:"id-9fa2f0b3",type:"Triggering"},{id:"da862877",sourceId:"id-9fa2f0b3",targetId:"id-8d412c37",type:"Triggering"},{id:"id-8357ebbf",sourceId:"id-85609849",targetId:"id-28b23906",type:"Composition"},{id:"id-9925b26f",sourceId:"id-85609849",targetId:"id-2d239603",type:"Composition"},{id:"id-7ad13f7f",sourceId:"id-987339b7",targetId:"id-2d239603",type:"Association"},{id:"id-55b50be4",sourceId:"id-202fec56",targetId:"id-85609849",type:"Association"},{id:"id-116b2186",sourceId:"id-4eb1e8cf",targetId:"id-19e695af",type:"Association"},{id:"bb4325a4",sourceId:"id-19e695af",targetId:"id-18879795",type:"Composition"},{id:"id-2f6c7e3c",sourceId:"id-19e695af",targetId:"id-8498b088",type:"Composition"},{id:"id-89e6b0c0",sourceId:"id-386562d2",targetId:"id-4f27e0a1",type:"Association"},{id:"id-3348ebbd",sourceId:"a4c8b471",targetId:"id-18879795",type:"Composition"},{id:"id-3ea037d1",sourceId:"id-4f27e0a1",targetId:"id-8498b088",type:"Composition"},{id:"id-4b215b8d",sourceId:"id-4eb1e8cf",targetId:"a4c8b471",type:"Association"},{id:"id-54dc436c",sourceId:"id-4eb1e8cf",targetId:"id-4f27e0a1",type:"Association"},{id:"id-86e8bfbc",sourceId:"id-7fbf1dbb",targetId:"id-44b6ebf8",type:"Influence"},{id:"id-5a841013",sourceId:"id-7fbf1dbb",targetId:"ba1281cb",type:"Influence"}],l=[{id:"id-0de79f25",name:"Types of consistency",viewpoint:""}],u={identifier:e,archimateId:i,name:t,description:d,formats:a,source:o,sourceFile:s,sourceFormat:n,timestamp:c,tags:r,duplicates:p,language:y,elements:m,relationships:b,views:l};export{i as archimateId,u as default,d as description,p as duplicates,m as elements,a as formats,e as identifier,y as language,t as name,b as relationships,o as source,s as sourceFile,n as sourceFormat,r as tags,c as timestamp,l as views};