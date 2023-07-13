const e="https://me.big.tuwien.ac.at/EAModelSet/4f5cd366",t="4f5cd366",a="8 Coarse-Grained Lock",i="",o=["XML","CSV","JSON","ARCHIMATE"],c="GitHub",d="raw-data/github/archimate/coarse-grained_lock.archimate",n="ARCHIMATE",p="29-06-2023 09:30:06",s=[],r=[],l="en",f=[{id:"c2f71eb0",name:"some event",type:"ApplicationEvent",layer:"application"},{id:"fa05fad2",name:"some event",type:"ApplicationEvent",layer:"application"},{id:"8fd3d5a6",name:"some event",type:"ApplicationEvent",layer:"application"},{id:"b3e743f9",name:"entity 3",type:"DataObject",layer:"application"},{id:"d6f7fd2f",name:"entity 2",type:"DataObject",layer:"application"},{id:"cdc445c6",name:"entity 1",type:"DataObject",layer:"application"},{id:"fa7ea5c0",name:"entity 6",type:"DataObject",layer:"application"},{id:"1ca52cd0",name:"entity 5",type:"DataObject",layer:"application"},{id:"e88f974a",name:"entity 4",type:"DataObject",layer:"application"},{id:"6117f925",name:"business transaction 1",type:"ApplicationEvent",layer:"application"},{id:"d5495029",name:"business transaction 2",type:"ApplicationEvent",layer:"application"},{id:"7fc19091",name:"system transaction",type:"ApplicationEvent",layer:"application"},{id:"662d2e8c",name:"system transaction",type:"ApplicationEvent",layer:"application"},{id:"9ee42825",name:"system transaction",type:"ApplicationEvent",layer:"application"},{id:"7ec30970",name:"system transaction",type:"ApplicationEvent",layer:"application"},{id:"bc9cab28",name:"domain class 1",type:"ApplicationComponent",layer:"application"},{id:"1c999d4f",name:"domain class 2",type:"ApplicationComponent",layer:"application"},{id:"f24680fa",name:"domain class 3",type:"ApplicationComponent",layer:"application"},{id:"6338fd81",name:"entity 1",type:"DataObject",layer:"application"},{id:"9f77c1bf",name:"entity 2",type:"DataObject",layer:"application"},{id:"7f08249b",name:"entity 3",type:"DataObject",layer:"application"},{id:"2e60b9f5",name:"entity 4",type:"DataObject",layer:"application"},{id:"e3492821",name:"entity 5",type:"DataObject",layer:"application"},{id:"6583e7a3",name:"entity 6",type:"DataObject",layer:"application"},{id:"6fb6c2c7",name:"lock  some object (instance 3)",type:"ApplicationEvent",layer:"application"},{id:"fd5d8a48",name:"find root of the (obj) and lock",type:"ApplicationFunction",layer:"application"},{id:"81fc259a",name:"lock root object (instance 1)",type:"ApplicationEvent",layer:"application"},{id:"d8e4581a",name:"goto root object",type:"ApplicationProcess",layer:"application"},{id:"8ae1e0b4",name:"lock root object",type:"ApplicationProcess",layer:"application"},{id:"56d50d3b",name:"database",type:"Grouping",layer:"other"},{id:"2f72205c",name:"transaction manager with implicit locks    GoF pattern: facade",type:"Grouping",layer:"other"}],y=[{id:"9fc18eab",sourceId:"d5495029",targetId:"7ec30970",type:"TriggeringRelationship"},{id:"402564b5",sourceId:"d6f7fd2f",targetId:"b3e743f9",type:"AssociationRelationship"},{id:"2853ec99",sourceId:"7ec30970",targetId:"56d50d3b",type:"TriggeringRelationship"},{id:"75eb2137",sourceId:"2f72205c",targetId:"9ee42825",type:"CompositionRelationship"},{id:"77557618",sourceId:"cdc445c6",targetId:"e88f974a",type:"AssociationRelationship"},{id:"d54c1caa",sourceId:"7fc19091",targetId:"56d50d3b",type:"TriggeringRelationship"},{id:"a9bf87a0",sourceId:"56d50d3b",targetId:"cdc445c6",type:"CompositionRelationship"},{id:"b1c4c273",sourceId:"56d50d3b",targetId:"b3e743f9",type:"CompositionRelationship"},{id:"808b3a2a",sourceId:"9ee42825",targetId:"56d50d3b",type:"TriggeringRelationship"},{id:"4c5c4a88",sourceId:"2f72205c",targetId:"6117f925",type:"CompositionRelationship"},{id:"c754c655",sourceId:"cdc445c6",targetId:"fa7ea5c0",type:"AssociationRelationship"},{id:"051f45cf",sourceId:"56d50d3b",targetId:"1ca52cd0",type:"CompositionRelationship"},{id:"09ec2002",sourceId:"2f72205c",targetId:"662d2e8c",type:"CompositionRelationship"},{id:"30ae2f0a",sourceId:"2f72205c",targetId:"7ec30970",type:"CompositionRelationship"},{id:"ff3c787c",sourceId:"fa7ea5c0",targetId:"1ca52cd0",type:"AssociationRelationship"},{id:"ba48c10e",sourceId:"6117f925",targetId:"7fc19091",type:"TriggeringRelationship"},{id:"94d51c3d",sourceId:"fa05fad2",targetId:"2f72205c",type:"TriggeringRelationship"},{id:"10ece2c5",sourceId:"8fd3d5a6",targetId:"2f72205c",type:"TriggeringRelationship"},{id:"e161b343",sourceId:"fa7ea5c0",targetId:"b3e743f9",type:"AssociationRelationship"},{id:"87a8d6f0",sourceId:"cdc445c6",targetId:"d6f7fd2f",type:"AssociationRelationship"},{id:"7e870324",sourceId:"56d50d3b",targetId:"fa7ea5c0",type:"CompositionRelationship"},{id:"7973ec54",sourceId:"d5495029",targetId:"662d2e8c",type:"TriggeringRelationship"},{id:"a92e609b",sourceId:"6117f925",targetId:"9ee42825",type:"TriggeringRelationship"},{id:"aca52a08",sourceId:"56d50d3b",targetId:"d6f7fd2f",type:"CompositionRelationship"},{id:"ebbcac4f",sourceId:"2f72205c",targetId:"d5495029",type:"CompositionRelationship"},{id:"5eb31789",sourceId:"2f72205c",targetId:"7fc19091",type:"CompositionRelationship"},{id:"563a16e8",sourceId:"662d2e8c",targetId:"56d50d3b",type:"TriggeringRelationship"},{id:"b3db237c",sourceId:"1ca52cd0",targetId:"e88f974a",type:"AssociationRelationship"},{id:"f7fd2bcf",sourceId:"c2f71eb0",targetId:"2f72205c",type:"TriggeringRelationship"},{id:"a282f764",sourceId:"56d50d3b",targetId:"e88f974a",type:"CompositionRelationship"},{id:"b7ad87aa",sourceId:"e88f974a",targetId:"b3e743f9",type:"AssociationRelationship"},{id:"49179d28",sourceId:"9f77c1bf",targetId:"7f08249b",type:"AssociationRelationship"},{id:"f6002d66",sourceId:"bc9cab28",targetId:"1c999d4f",type:"AssociationRelationship"},{id:"80b8abea",sourceId:"6583e7a3",targetId:"7f08249b",type:"AssociationRelationship"},{id:"80a76c49",sourceId:"f24680fa",targetId:"7f08249b",type:"AssociationRelationship"},{id:"963da9b4",sourceId:"1c999d4f",targetId:"f24680fa",type:"AssociationRelationship"},{id:"cdbcf177",sourceId:"6338fd81",targetId:"6583e7a3",type:"AssociationRelationship"},{id:"7433e927",sourceId:"6338fd81",targetId:"2e60b9f5",type:"AssociationRelationship"},{id:"71f9c130",sourceId:"1c999d4f",targetId:"9f77c1bf",type:"AssociationRelationship"},{id:"2efe6a87",sourceId:"6338fd81",targetId:"9f77c1bf",type:"AssociationRelationship"},{id:"e29f18d4",sourceId:"6583e7a3",targetId:"e3492821",type:"AssociationRelationship"},{id:"039f00e9",sourceId:"bc9cab28",targetId:"6338fd81",type:"AssociationRelationship"},{id:"a1d0930d",sourceId:"e3492821",targetId:"2e60b9f5",type:"AssociationRelationship"},{id:"7ae0a11b",sourceId:"2e60b9f5",targetId:"7f08249b",type:"AssociationRelationship"},{id:"cfbc0f20",sourceId:"6fb6c2c7",targetId:"fd5d8a48",type:"FlowRelationship"},{id:"a2c34ac1",sourceId:"fd5d8a48",targetId:"81fc259a",type:"FlowRelationship"},{id:"0ff31c7e",sourceId:"fd5d8a48",targetId:"d8e4581a",type:"CompositionRelationship"},{id:"068b3190",sourceId:"fd5d8a48",targetId:"8ae1e0b4",type:"CompositionRelationship"},{id:"a18b7039",sourceId:"d8e4581a",targetId:"8ae1e0b4",type:"FlowRelationship"}],I=[{id:"bd74478a",name:"Coarse-Grained Lock",viewpoint:""}],g={identifier:e,archimateId:t,name:a,description:i,formats:o,source:c,sourceFile:d,sourceFormat:n,timestamp:p,tags:s,duplicates:r,language:l,elements:f,relationships:y,views:I};export{t as archimateId,g as default,i as description,r as duplicates,f as elements,o as formats,e as identifier,l as language,a as name,y as relationships,c as source,d as sourceFile,n as sourceFormat,s as tags,p as timestamp,I as views};