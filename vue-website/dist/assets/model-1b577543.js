const e="https://me.big.tuwien.ac.at/EAModelSet/7b8f2a6a",a="7b8f2a6a",t="Managed Object",i="",c=["XML","CSV","JSON","ARCHIMATE"],o="GitHub",d="raw-data/github/archimate/managed_object.archimate",n="ARCHIMATE",r="29-06-2023 09:30:18",s=["DUPLICATE"],p=["raw-data/github/archimate/app_store.archimate","raw-data/github/archimate/internet_object.archimate","raw-data/github/archimate/mam.archimate","raw-data/github/archimate/mdm.archimate"],l="en",y=[{id:"f31aa324",name:"Object Manager Operator",type:"BusinessRole",layer:"business"},{id:"3308cbdc",name:"Managed Object User Operator",type:"BusinessRole",layer:"business"},{id:"d30d3230",name:"Managed Object Operator",type:"BusinessRole",layer:"business"},{id:"89783ecd",name:"Object Manager",type:"ApplicationService",layer:"application"},{id:"8ba2b12e",name:"Manager Interface",type:"ApplicationInterface",layer:"application"},{id:"eb4d53c4",name:"Managed Object User",type:"ApplicationService",layer:"application"},{id:"ff166617",name:"Object Manager Platform",type:"TechnologyService",layer:"technology"},{id:"80a4569f",name:"Object Manager Infrastructure",type:"TechnologyService",layer:"technology"},{id:"a6416861",name:"Local Connection",type:"Path",layer:"technology"},{id:"ae980dcc",name:"Managed Object",type:"TechnologyService",layer:"technology"},{id:"c79d262b",name:"Sensor",type:"TechnologyService",layer:"technology"},{id:"516086db",name:"Control",type:"TechnologyService",layer:"technology"},{id:"cb3f8c5d",name:"Internet Connection",type:"Path",layer:"technology"},{id:"9f86cdfe",name:"Object Identifier",type:"TechnologyService",layer:"technology"},{id:"7c868174",name:"Managed Object User Platform",type:"TechnologyService",layer:"technology"},{id:"212bd2de",name:"Managed Object User Infrastructure",type:"TechnologyService",layer:"technology"}],g=[{id:"17deb8c3",sourceId:"ff166617",targetId:"89783ecd",type:"UsedByRelationship"},{id:"ed2a9baa",sourceId:"80a4569f",targetId:"ff166617",type:"UsedByRelationship"},{id:"96f0eba0",sourceId:"a6416861",targetId:"ae980dcc",type:"AssociationRelationship"},{id:"63440386",sourceId:"a6416861",targetId:"80a4569f",type:"AssociationRelationship"},{id:"60133f10",sourceId:"ae980dcc",targetId:"89783ecd",type:"UsedByRelationship"},{id:"a69c219a",sourceId:"ae980dcc",targetId:"c79d262b",type:"AggregationRelationship"},{id:"ed224132",sourceId:"ae980dcc",targetId:"516086db",type:"AggregationRelationship"},{id:"846363a7",sourceId:"cb3f8c5d",targetId:"80a4569f",type:"AssociationRelationship"},{id:"af368b03",sourceId:"89783ecd",targetId:"8ba2b12e",type:"AssociationRelationship"},{id:"5a3f9ccb",sourceId:"ae980dcc",targetId:"9f86cdfe",type:"AggregationRelationship"},{id:"073e4b91",sourceId:"89783ecd",targetId:"f31aa324",type:"AssociationRelationship"},{id:"d1608623",sourceId:"8ba2b12e",targetId:"eb4d53c4",type:"UsedByRelationship"},{id:"525317db",sourceId:"7c868174",targetId:"eb4d53c4",type:"UsedByRelationship"},{id:"8da45d1e",sourceId:"cb3f8c5d",targetId:"212bd2de",type:"AssociationRelationship"},{id:"2016a409",sourceId:"212bd2de",targetId:"7c868174",type:"UsedByRelationship"},{id:"3b7014e3",sourceId:"eb4d53c4",targetId:"3308cbdc",type:"AssociationRelationship"},{id:"c57e70e3",sourceId:"3308cbdc",targetId:"f31aa324",type:"AssociationRelationship"},{id:"48813ad4",sourceId:"f31aa324",targetId:"d30d3230",type:"AssociationRelationship"},{id:"179c8847",sourceId:"ae980dcc",targetId:"d30d3230",type:"AssociationRelationship"}],b=[{id:"4ab63b7b",name:"Managed Object Total View",viewpoint:""}],h={identifier:e,archimateId:a,name:t,description:i,formats:c,source:o,sourceFile:d,sourceFormat:n,timestamp:r,tags:s,duplicates:p,language:l,elements:y,relationships:g,views:b};export{a as archimateId,h as default,i as description,p as duplicates,y as elements,c as formats,e as identifier,l as language,t as name,g as relationships,o as source,d as sourceFile,n as sourceFormat,s as tags,r as timestamp,b as views};
