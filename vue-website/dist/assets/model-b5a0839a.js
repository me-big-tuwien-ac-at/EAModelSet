const e="https://me.big.tuwien.ac.at/EAModelSet/id-8d459438",d="id-8d459438",i="Observer",t="",a=["XML","CSV","JSON","ARCHIMATE"],c="GitHub",o="raw-data/github/xml/7_observer_v1.xml",s="XML",p="29-06-2023 09:28:00",r=[],n=[],b="en",l=[{id:"id-5b32b623",name:"interface subject",type:"ApplicationInterface",layer:"application"},{id:"id-87c620e7",name:"interface observer",type:"ApplicationInterface",layer:"application"},{id:"afa7f013",name:"class concrete subject",type:"ApplicationComponent",layer:"application"},{id:"c765ebe5",name:"interface concrete observer",type:"ApplicationComponent",layer:"application"},{id:"id-53d89b6a",name:"detach (OBSERVER)",type:"ApplicationFunction",layer:"application"},{id:"id-16f08bb9",name:"attach (OBSERVER)",type:"ApplicationFunction",layer:"application"},{id:"c0980675",name:"notify ()",type:"ApplicationFunction",layer:"application"},{id:"id-2908838f",name:"get state",type:"ApplicationFunction",layer:"application"},{id:"id-3bda5c0d",name:"set state (some data)",type:"ApplicationFunction",layer:"application"},{id:"da40032d",name:"update (SUBJECT)",type:"ApplicationFunction",layer:"application"},{id:"id-5882e12f",name:"update (SUBJECT)",type:"ApplicationFunction",layer:"application"},{id:"eb3c4979",name:"subject state",type:"DataObject",layer:"application"},{id:"d9308dee",name:"observer state",type:"DataObject",layer:"application"},{id:"df7df6a9",name:"create observer",type:"ApplicationProcess",layer:"application"},{id:"be1d0c33",name:"create subject and attach observer",type:"ApplicationProcess",layer:"application"},{id:"id-7fb19d34",name:"set state of concrete object",type:"ApplicationProcess",layer:"application"},{id:"id-1eaa8aaa",name:"Application Process",type:"ApplicationProcess",layer:"application"},{id:"id-1071107d",name:"REF to observer 1",type:"ApplicationProcess",layer:"application"},{id:"id-41c8f610",name:"REF to observer 2",type:"ApplicationProcess",layer:"application"},{id:"a92afb54",name:"REF to observer 3",type:"ApplicationProcess",layer:"application"},{id:"id-97f44d28",name:"for each observers",type:"ApplicationProcess",layer:"application"},{id:"id-9b337041",name:"REF . update(this)",type:"ApplicationProcess",layer:"application"},{id:"id-4a3fd326",name:"ARRay of OBSERVERS",type:"DataObject",layer:"application"},{id:"id-949d0a3d",name:"return subject state",type:"ApplicationProcess",layer:"application"},{id:"id-2847b3ef",name:"set subject state = some data",type:"ApplicationProcess",layer:"application"},{id:"d5c2bbd3",name:"call notify",type:"ApplicationProcess",layer:"application"},{id:"id-704634d9",name:"set observer state = subject . get state",type:"ApplicationProcess",layer:"application"},{id:"id-5e488ca2",name:"get subject . state",type:"ApplicationProcess",layer:"application"}],y=[{id:"id-59a2b903",sourceId:"c0980675",targetId:"id-97f44d28",type:"Composition"},{id:"id-0ec73df2",sourceId:"id-97f44d28",targetId:"id-9b337041",type:"Composition"},{id:"id-4e52c034",sourceId:"id-9b337041",targetId:"da40032d",type:"Flow"},{id:"d9d79d56",sourceId:"id-16f08bb9",targetId:"id-4a3fd326",type:"Access"},{id:"id-867a73fe",sourceId:"id-53d89b6a",targetId:"id-4a3fd326",type:"Access"},{id:"id-84f2f977",sourceId:"id-97f44d28",targetId:"id-4a3fd326",type:"Access"},{id:"ac401a84",sourceId:"id-2908838f",targetId:"id-949d0a3d",type:"Composition"},{id:"fa962fd7",sourceId:"id-3bda5c0d",targetId:"id-2847b3ef",type:"Composition"},{id:"c68c8a74",sourceId:"id-949d0a3d",targetId:"eb3c4979",type:"Access"},{id:"id-12752bfd",sourceId:"id-3bda5c0d",targetId:"d5c2bbd3",type:"Composition"},{id:"dd97cfea",sourceId:"id-2847b3ef",targetId:"eb3c4979",type:"Access"},{id:"id-79f5bdcd",sourceId:"d5c2bbd3",targetId:"c0980675",type:"Flow"},{id:"id-67ae602b",sourceId:"id-5882e12f",targetId:"da40032d",type:"Realization"},{id:"id-3aad5f8e",sourceId:"id-5882e12f",targetId:"id-704634d9",type:"Composition"},{id:"a81faf53",sourceId:"id-5b32b623",targetId:"id-16f08bb9",type:"Association"},{id:"id-7df6048b",sourceId:"id-5b32b623",targetId:"id-53d89b6a",type:"Association"},{id:"id-34ce3642",sourceId:"id-5b32b623",targetId:"c0980675",type:"Association"},{id:"b59f20bc",sourceId:"id-5b32b623",targetId:"id-4a3fd326",type:"Association"},{id:"d4578e94",sourceId:"id-87c620e7",targetId:"da40032d",type:"Association"},{id:"d7643abc",sourceId:"afa7f013",targetId:"id-2908838f",type:"Assignment"},{id:"a21c9277",sourceId:"afa7f013",targetId:"id-3bda5c0d",type:"Assignment"},{id:"deb3033f",sourceId:"afa7f013",targetId:"eb3c4979",type:"Association"},{id:"id-572b43a0",sourceId:"c765ebe5",targetId:"id-5882e12f",type:"Assignment"},{id:"id-02b30237",sourceId:"c765ebe5",targetId:"d9308dee",type:"Association"},{id:"id-005f20db",sourceId:"id-87c620e7",targetId:"df7df6a9",type:"Serving"},{id:"c8a77f97",sourceId:"id-16f08bb9",targetId:"be1d0c33",type:"Serving"},{id:"aa874906",sourceId:"id-3bda5c0d",targetId:"id-7fb19d34",type:"Serving"},{id:"id-7eaa4fb1",sourceId:"id-704634d9",targetId:"d9308dee",type:"Access"},{id:"id-30939ac3",sourceId:"id-5882e12f",targetId:"id-5e488ca2",type:"Composition"},{id:"id-2c4d8e71",sourceId:"id-5e488ca2",targetId:"eb3c4979",type:"Access"},{id:"id-1b4775ba",sourceId:"df7df6a9",targetId:"be1d0c33",type:"Flow"},{id:"id-8d776d44",sourceId:"be1d0c33",targetId:"id-7fb19d34",type:"Flow"},{id:"id-59b7d5d5",sourceId:"c765ebe5",targetId:"id-87c620e7",type:"Realization"},{id:"id-7b29c197",sourceId:"afa7f013",targetId:"id-5b32b623",type:"Realization"},{id:"db2b6a63",sourceId:"id-87c620e7",targetId:"id-5b32b623",type:"Serving"},{id:"efde9c87",sourceId:"id-5882e12f",targetId:"eb3c4979",type:"Access"},{id:"id-9ff41bdb",sourceId:"afa7f013",targetId:"c765ebe5",type:"Serving"},{id:"id-04b6ddf8",sourceId:"id-5b32b623",targetId:"id-4a3fd326",type:"Access"},{id:"fda002fc",sourceId:"c765ebe5",targetId:"d9308dee",type:"Access"},{id:"id-2acceada",sourceId:"afa7f013",targetId:"eb3c4979",type:"Access"},{id:"be648036",sourceId:"da40032d",targetId:"id-5882e12f",type:"Flow"}],f=[{id:"b2b4b2e5",name:"observer",viewpoint:""},{id:"id-9a37ecae",name:"uml",viewpoint:""}],I={identifier:e,archimateId:d,name:i,description:t,formats:a,source:c,sourceFile:o,sourceFormat:s,timestamp:p,tags:r,duplicates:n,language:b,elements:l,relationships:y,views:f};export{d as archimateId,I as default,t as description,n as duplicates,l as elements,a as formats,e as identifier,b as language,i as name,y as relationships,c as source,o as sourceFile,s as sourceFormat,r as tags,p as timestamp,f as views};
