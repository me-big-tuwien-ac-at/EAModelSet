const e="https://me.big.tuwien.ac.at/EAModelSet/id-69e009be",i="id-69e009be",t="8 Implicit Lock",d="",a=["XML","CSV","JSON","ARCHIMATE"],c="GitHub",o="raw-data/github/xml/implicit_lock.xml",p="XML",n="29-06-2023 09:28:02",r=[],s=[],y="en",l=[{id:"e9d23d3a",name:"business transaction 1",type:"ApplicationEvent",layer:"application"},{id:"f6fcef03",name:"business transaction 2",type:"ApplicationEvent",layer:"application"},{id:"id-3804726e",name:"select data X",type:"ApplicationEvent",layer:"application"},{id:"baecff70",name:"select data X",type:"ApplicationEvent",layer:"application"},{id:"f16e0f33",name:"update data X",type:"ApplicationEvent",layer:"application"},{id:"id-8c146eb3",name:"update data X",type:"ApplicationEvent",layer:"application"},{id:"id-5855077d",name:"1 row inserted",type:"ApplicationEvent",layer:"application"},{id:"id-8c2cdfdb",name:"0 rows inserted",type:"ApplicationEvent",layer:"application"},{id:"eeeb57ff",name:"entity 3",type:"DataObject",layer:"application"},{id:"a3295edc",name:"entity 2",type:"DataObject",layer:"application"},{id:"f907def4",name:"entity 1",type:"DataObject",layer:"application"},{id:"id-664fd559",name:"entity 6",type:"DataObject",layer:"application"},{id:"d9097e5d",name:"entity 5",type:"DataObject",layer:"application"},{id:"id-4ba4bffb",name:"entity 4",type:"DataObject",layer:"application"},{id:"id-23573266",name:"system transaction",type:"ApplicationEvent",layer:"application"},{id:"id-49e3a95c",name:"system transaction",type:"ApplicationEvent",layer:"application"},{id:"fb5db422",name:"system transaction",type:"ApplicationEvent",layer:"application"},{id:"id-668b0175",name:"commited",type:"ApplicationEvent",layer:"application"},{id:"id-461e8584",name:"system transaction",type:"ApplicationEvent",layer:"application"},{id:"id-2f4309bd",name:"rollbacked",type:"ApplicationEvent",layer:"application"},{id:"id-89eb6552",name:"some event",type:"ApplicationEvent",layer:"application"},{id:"d459f812",name:"some event",type:"ApplicationEvent",layer:"application"},{id:"c0459c7a",name:"some event",type:"ApplicationEvent",layer:"application"},{id:"d6b234aa",name:"lock root object (instance 1)",type:"ApplicationEvent",layer:"application"},{id:"e9053d39",name:"database",type:"Grouping",layer:"other"},{id:"id-65d16830",name:"some mapper",type:"Grouping",layer:"other"},{id:"id-97d310be",name:"transaction manager with implicit locks    GoF pattern: facade",type:"Grouping",layer:"other"}],f=[{id:"b540a14d",sourceId:"f16e0f33",targetId:"e9053d39",type:"Triggering"},{id:"a1548405",sourceId:"id-8c146eb3",targetId:"e9053d39",type:"Flow"},{id:"id-4acfa29a",sourceId:"id-8c2cdfdb",targetId:"id-2f4309bd",type:"Flow"},{id:"fd1cbb5a",sourceId:"id-8c146eb3",targetId:"id-8c2cdfdb",type:"Flow"},{id:"id-052f8c77",sourceId:"f6fcef03",targetId:"id-49e3a95c",type:"Triggering"},{id:"id-6fae47c4",sourceId:"e9053d39",targetId:"id-4ba4bffb",type:"Composition"},{id:"id-491c7200",sourceId:"f907def4",targetId:"id-664fd559",type:"Association"},{id:"f498064f",sourceId:"id-5855077d",targetId:"id-668b0175",type:"Flow"},{id:"id-95580f16",sourceId:"id-23573266",targetId:"e9053d39",type:"Triggering"},{id:"bea48620",sourceId:"id-2f4309bd",targetId:"f6fcef03",type:"Flow"},{id:"ed6a6ee3",sourceId:"id-8c146eb3",targetId:"e9053d39",type:"Triggering"},{id:"f9df7d5a",sourceId:"e9053d39",targetId:"d9097e5d",type:"Composition"},{id:"e9433e31",sourceId:"id-4ba4bffb",targetId:"eeeb57ff",type:"Association"},{id:"id-1e4725ba",sourceId:"id-664fd559",targetId:"d9097e5d",type:"Association"},{id:"d4c97ee3",sourceId:"e9d23d3a",targetId:"id-23573266",type:"Triggering"},{id:"id-7e9d9a0c",sourceId:"f907def4",targetId:"a3295edc",type:"Association"},{id:"id-2ac290be",sourceId:"a3295edc",targetId:"eeeb57ff",type:"Association"},{id:"id-0fc92595",sourceId:"e9053d39",targetId:"eeeb57ff",type:"Composition"},{id:"adf588ec",sourceId:"id-49e3a95c",targetId:"e9053d39",type:"Triggering"},{id:"ee3fb6a6",sourceId:"fb5db422",targetId:"e9053d39",type:"Triggering"},{id:"id-50c92936",sourceId:"f16e0f33",targetId:"e9053d39",type:"Flow"},{id:"id-52968e8b",sourceId:"baecff70",targetId:"e9053d39",type:"Triggering"},{id:"id-9c936578",sourceId:"id-664fd559",targetId:"eeeb57ff",type:"Association"},{id:"c7cb7daf",sourceId:"f6fcef03",targetId:"id-461e8584",type:"Triggering"},{id:"id-3848b32c",sourceId:"f16e0f33",targetId:"id-5855077d",type:"Flow"},{id:"id-2c0dae2b",sourceId:"id-461e8584",targetId:"e9053d39",type:"Triggering"},{id:"af5f8cd9",sourceId:"id-3804726e",targetId:"e9053d39",type:"Triggering"},{id:"eb0ced87",sourceId:"e9053d39",targetId:"f907def4",type:"Composition"},{id:"f008441a",sourceId:"e9d23d3a",targetId:"fb5db422",type:"Triggering"},{id:"id-901275fe",sourceId:"e9053d39",targetId:"a3295edc",type:"Composition"},{id:"id-9c1b38a3",sourceId:"e9053d39",targetId:"id-664fd559",type:"Composition"},{id:"cc217f26",sourceId:"d9097e5d",targetId:"id-4ba4bffb",type:"Association"},{id:"id-804b8016",sourceId:"id-668b0175",targetId:"e9d23d3a",type:"Flow"},{id:"id-19441a09",sourceId:"f907def4",targetId:"id-4ba4bffb",type:"Association"},{id:"cc7ce6c1",sourceId:"id-97d310be",targetId:"e9d23d3a",type:"Composition"},{id:"id-3e935c5e",sourceId:"id-97d310be",targetId:"f6fcef03",type:"Composition"},{id:"id-11f69399",sourceId:"id-97d310be",targetId:"id-23573266",type:"Composition"},{id:"id-33cbacea",sourceId:"id-97d310be",targetId:"id-49e3a95c",type:"Composition"},{id:"id-8e837c46",sourceId:"id-97d310be",targetId:"fb5db422",type:"Composition"},{id:"id-0fbc3055",sourceId:"id-97d310be",targetId:"id-461e8584",type:"Composition"},{id:"id-0e828e6b",sourceId:"id-89eb6552",targetId:"id-97d310be",type:"Triggering"},{id:"id-084d3eca",sourceId:"d459f812",targetId:"id-97d310be",type:"Triggering"},{id:"e5ebce77",sourceId:"c0459c7a",targetId:"id-97d310be",type:"Triggering"}],g=[{id:"faa3c099",name:"Implicit Lock",viewpoint:""}],I={identifier:e,archimateId:i,name:t,description:d,formats:a,source:c,sourceFile:o,sourceFormat:p,timestamp:n,tags:r,duplicates:s,language:y,elements:l,relationships:f,views:g};export{i as archimateId,I as default,d as description,s as duplicates,l as elements,a as formats,e as identifier,y as language,t as name,f as relationships,c as source,o as sourceFile,p as sourceFormat,r as tags,n as timestamp,g as views};
