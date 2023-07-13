const e="https://me.big.tuwien.ac.at/EAModelSet/639c66a6",a="639c66a6",t="Adapter",i="",d=["XML","CSV","JSON","ARCHIMATE"],o="GitHub",n="raw-data/github/archimate/1_adapter_v1.archimate",p="ARCHIMATE",c="29-06-2023 09:29:40",s=[],r=[],l="en",m=[{id:"e1d43e67",name:"interface adapter (target)",type:"ApplicationInterface",layer:"application"},{id:"6ddcbd34",name:"method 1",type:"ApplicationFunction",layer:"application"},{id:"949d72f0",name:"class adapter",type:"ApplicationComponent",layer:"application"},{id:"76a1e183",name:"class adaptee",type:"ApplicationComponent",layer:"application"},{id:"56a8bd04",name:"constructor",type:"ApplicationFunction",layer:"application"},{id:"a897a04c",name:"method 2",type:"ApplicationFunction",layer:"application"},{id:"7aab5ce7",name:"create adapter",type:"ApplicationProcess",layer:"application"},{id:"66681e42",name:"call known method 1",type:"ApplicationProcess",layer:"application"},{id:"9fd7e42a",name:"Application Component",type:"ApplicationComponent",layer:"application"},{id:"354d7442",name:"method 1",type:"ApplicationFunction",layer:"application"},{id:"f4b5fde4",name:"create adaptee",type:"ApplicationProcess",layer:"application"},{id:"4f51a74e",name:"call SUPER(adaptee).method 2",type:"ApplicationProcess",layer:"application"},{id:"35e56af9",name:"client",type:"ApplicationComponent",layer:"application"},{id:"bd6cace5",name:"client",type:"ApplicationComponent",layer:"application"}],y=[{id:"db30fa61",sourceId:"e1d43e67",targetId:"7aab5ce7",type:"ServingRelationship"},{id:"be5fee7b",sourceId:"7aab5ce7",targetId:"66681e42",type:"FlowRelationship"},{id:"7ee4401e",sourceId:"6ddcbd34",targetId:"66681e42",type:"ServingRelationship"},{id:"edc9c110",sourceId:"949d72f0",targetId:"e1d43e67",type:"RealizationRelationship"},{id:"938c785d",sourceId:"e1d43e67",targetId:"6ddcbd34",type:"AssociationRelationship"},{id:"a5b59157",sourceId:"949d72f0",targetId:"56a8bd04",type:"AssignmentRelationship"},{id:"7db89fcf",sourceId:"76a1e183",targetId:"a897a04c",type:"AssignmentRelationship"},{id:"a3d921b6",sourceId:"56a8bd04",targetId:"f4b5fde4",type:"CompositionRelationship"},{id:"d827f0c7",sourceId:"354d7442",targetId:"4f51a74e",type:"CompositionRelationship"},{id:"69bfd774",sourceId:"354d7442",targetId:"6ddcbd34",type:"RealizationRelationship"},{id:"459b99dd",sourceId:"76a1e183",targetId:"f4b5fde4",type:"ServingRelationship"},{id:"1cfa1e1e",sourceId:"a897a04c",targetId:"4f51a74e",type:"ServingRelationship"},{id:"cb31f401",sourceId:"949d72f0",targetId:"354d7442",type:"AssignmentRelationship"},{id:"8844cb76",sourceId:"949d72f0",targetId:"76a1e183",type:"RealizationRelationship"},{id:"59cf1d64",sourceId:"354d7442",targetId:"f4b5fde4",type:"CompositionRelationship"},{id:"9c6d99ea",sourceId:"e1d43e67",targetId:"35e56af9",type:"ServingRelationship"},{id:"b88b6d3b",sourceId:"76a1e183",targetId:"949d72f0",type:"ServingRelationship"},{id:"75a9d8c8",sourceId:"e1d43e67",targetId:"bd6cace5",type:"ServingRelationship"},{id:"b4e5e78a",sourceId:"4f51a74e",targetId:"a897a04c",type:"FlowRelationship"},{id:"03a2b4f8",sourceId:"f4b5fde4",targetId:"76a1e183",type:"AssociationRelationship"}],f=[{id:"5bdc6d9e",name:"adapter of class",viewpoint:""},{id:"dc3f0231",name:"adapter of object",viewpoint:""},{id:"0a7c3ec3",name:"adapter of object (+ref)",viewpoint:""},{id:"a56cfdbe",name:"uml class",viewpoint:""},{id:"9f4dca46",name:"uml object",viewpoint:""}],I={identifier:e,archimateId:a,name:t,description:i,formats:d,source:o,sourceFile:n,sourceFormat:p,timestamp:c,tags:s,duplicates:r,language:l,elements:m,relationships:y,views:f};export{a as archimateId,I as default,i as description,r as duplicates,m as elements,d as formats,e as identifier,l as language,t as name,y as relationships,o as source,n as sourceFile,p as sourceFormat,s as tags,c as timestamp,f as views};