const e="https://me.big.tuwien.ac.at/EAModelSet/d7ae4380",a="d7ae4380",t="Singleton",i="",d=["XML","CSV","JSON","ARCHIMATE"],c="GitHub",n="raw-data/github/xml/5_singleton_v1.xml",o="XML",s="29-06-2023 09:27:18",r=["DUPLICATE"],p=["raw-data/github/archimate/5_singleton_v1.archimate"],l="en",g=[{id:"cfd64535",name:"constructor disallowed",type:"ApplicationFunction",layer:"application"},{id:"id-3aa4570b",name:"get instance (method of the class)",type:"ApplicationFunction",layer:"application"},{id:"aa0feeea",name:"class singleton",type:"ApplicationComponent",layer:"application"},{id:"fa2ca260",name:"singleton instance",type:"DataObject",layer:"application"},{id:"a2c7c21c",name:"first access to singleton",type:"ApplicationProcess",layer:"application"},{id:"id-9057dd78",name:"second access to singleton",type:"ApplicationProcess",layer:"application"},{id:"e266e3e6",name:"get var",type:"ApplicationProcess",layer:"application"},{id:"d2a001b0",name:"create instance and return",type:"ApplicationProcess",layer:"application"},{id:"id-7640d3a0",name:"return instance already exists",type:"ApplicationProcess",layer:"application"},{id:"id-105cd7bc",name:"return unique instance",type:"ApplicationFunction",layer:"application"},{id:"id-0f7083e8",name:"Junction",type:"AndJunction",layer:"other"},{id:"id-1165de0c",name:"Junction",type:"OrJunction",layer:"other"}],u=[{id:"id-5e464fbc",sourceId:"id-3aa4570b",targetId:"id-0f7083e8",type:"Realization"},{id:"e91e319d",sourceId:"id-3aa4570b",targetId:"e266e3e6",type:"Composition"},{id:"id-78e9a41a",sourceId:"e266e3e6",targetId:"fa2ca260",type:"Access"},{id:"id-43d3effb",sourceId:"id-3aa4570b",targetId:"id-1165de0c",type:"Realization"},{id:"id-82e006f1",sourceId:"id-3aa4570b",targetId:"d2a001b0",type:"Composition"},{id:"a14e2d2d",sourceId:"id-3aa4570b",targetId:"id-7640d3a0",type:"Composition"},{id:"id-3d62660e",sourceId:"e266e3e6",targetId:"id-1165de0c",type:"Flow"},{id:"c1cd80fe",sourceId:"id-1165de0c",targetId:"id-7640d3a0",type:"Triggering"},{id:"id-6bf07b8b",sourceId:"id-1165de0c",targetId:"d2a001b0",type:"Triggering"},{id:"f03f3cbd",sourceId:"d2a001b0",targetId:"fa2ca260",type:"Access"},{id:"fa6a4bc8",sourceId:"id-7640d3a0",targetId:"fa2ca260",type:"Access"},{id:"id-39310671",sourceId:"aa0feeea",targetId:"cfd64535",type:"Assignment"},{id:"a2d080a1",sourceId:"aa0feeea",targetId:"id-3aa4570b",type:"Assignment"},{id:"b9a406c1",sourceId:"d2a001b0",targetId:"a2c7c21c",type:"Serving"},{id:"id-3ff1a878",sourceId:"id-7640d3a0",targetId:"id-9057dd78",type:"Serving"},{id:"d9a47579",sourceId:"a2c7c21c",targetId:"id-9057dd78",type:"Flow"},{id:"c3a4dc8b",sourceId:"id-3aa4570b",targetId:"id-105cd7bc",type:"Composition"},{id:"id-36e23772",sourceId:"id-105cd7bc",targetId:"fa2ca260",type:"Access"},{id:"id-335b0b73",sourceId:"aa0feeea",targetId:"fa2ca260",type:"Association"},{id:"d03bd4b4",sourceId:"aa0feeea",targetId:"fa2ca260",type:"Access"}],y=[{id:"e5c83a01",name:"singl",viewpoint:""},{id:"c66b6de8",name:"uml",viewpoint:""}],I={identifier:e,archimateId:a,name:t,description:i,formats:d,source:c,sourceFile:n,sourceFormat:o,timestamp:s,tags:r,duplicates:p,language:l,elements:g,relationships:u,views:y};export{a as archimateId,I as default,i as description,p as duplicates,g as elements,d as formats,e as identifier,l as language,t as name,u as relationships,c as source,n as sourceFile,o as sourceFormat,r as tags,s as timestamp,y as views};
