const e="https://me.big.tuwien.ac.at/EAModelSet/76c05c7d",t="76c05c7d",i="Big Brother",a="",d=["XML","CSV","JSON","ARCHIMATE"],s="GitHub",o="raw-data/github/archimate/diplomova_prace_-_big_brother.archimate",n="ARCHIMATE",c="29-06-2023 09:31:44",r=[],p=[],l="en",y=[{id:"b3d53364",name:"User",type:"BusinessActor",layer:"business"},{id:"4548354d",name:"Business Role",type:"BusinessRole",layer:"business"},{id:"b4aa11c0",name:"Create Activity",type:"BusinessProcess",layer:"business"},{id:"d815d90e",name:"Work on pc",type:"BusinessService",layer:"business"},{id:"86306e6e",name:"User",type:"BusinessActor",layer:"business"},{id:"41da7a87",name:"Observer",type:"BusinessRole",layer:"business"},{id:"f84cfc52",name:"Monitoring user",type:"BusinessRole",layer:"business"},{id:"0a9dc7b6",name:"Create Event",type:"BusinessProcess",layer:"business"},{id:"c2f47549",name:"Work on pc",type:"BusinessEvent",layer:"business"},{id:"f5d3b321",name:"User view",type:"BusinessProcess",layer:"business"},{id:"64d1ebf2",name:"View historical data",type:"BusinessProcess",layer:"business"},{id:"d209b25e",name:"Application server program",type:"ApplicationComponent",layer:"application"},{id:"2b3f882d",name:"WCF service transaction User",type:"ApplicationService",layer:"application"},{id:"89a019d3",name:"Client program",type:"ApplicationComponent",layer:"application"},{id:"da8c7303",name:"Create hosting WCF service",type:"ApplicationFunction",layer:"application"},{id:"6272f2fc",name:"Monitoring user",type:"ApplicationFunction",layer:"application"},{id:"2cbeaf2d",name:"Send user information",type:"ApplicationFunction",layer:"application"},{id:"e9f31ce4",name:"Read and write from Database",type:"ApplicationFunction",layer:"application"},{id:"2e9c02ca",name:"Create monitoring events",type:"ApplicationFunction",layer:"application"},{id:"68ddf4ec",name:"Sqlite Database",type:"DataObject",layer:"application"},{id:"c9fff6f9",name:"Save user to DB",type:"ApplicationFunction",layer:"application"},{id:"7ee7c540",name:"View data",type:"ApplicationFunction",layer:"application"},{id:"10583bfd",name:"User PC",type:"Device",layer:"technology"},{id:"fe037bf4",name:"Node",type:"Node",layer:"technology"},{id:"3c136295",name:"LAN network",type:"CommunicationNetwork",layer:"technology"},{id:"aad60d45",name:"Application server",type:"Device",layer:"technology"},{id:"9e8a2e1b",name:"Communication Path",type:"Path",layer:"technology"},{id:"51f18126",name:"Client",type:"Node",layer:"technology"},{id:"5abad87c",name:"ClientProgram",type:"SystemSoftware",layer:"technology"},{id:"cc1bb3d5",name:"Application server",type:"Node",layer:"technology"},{id:"4cf01149",name:"User PC (copy)",type:"Device",layer:"technology"},{id:"99f9ade3",name:"Communication Path (copy)",type:"Path",layer:"technology"},{id:"f3b05776",name:"Application server program",type:"SystemSoftware",layer:"technology"}],b=[{id:"d72d9706",sourceId:"b3d53364",targetId:"b4aa11c0",type:"UsedByRelationship"},{id:"cf54069a",sourceId:"b4aa11c0",targetId:"d815d90e",type:"RealisationRelationship"},{id:"5e327e8d",sourceId:"b3d53364",targetId:"d815d90e",type:"RealisationRelationship"},{id:"f67a7889",sourceId:"10583bfd",targetId:"3c136295",type:"AssociationRelationship"},{id:"a0dab9d6",sourceId:"aad60d45",targetId:"3c136295",type:"AssociationRelationship"},{id:"1e73ad51",sourceId:"51f18126",targetId:"10583bfd",type:"CompositionRelationship"},{id:"c9b42614",sourceId:"51f18126",targetId:"5abad87c",type:"CompositionRelationship"},{id:"33039e73",sourceId:"51f18126",targetId:"3c136295",type:"AssociationRelationship"},{id:"d7526241",sourceId:"cc1bb3d5",targetId:"3c136295",type:"AssociationRelationship"},{id:"cb77c72c",sourceId:"d209b25e",targetId:"da8c7303",type:"AssignmentRelationship"},{id:"bc181d6b",sourceId:"89a019d3",targetId:"6272f2fc",type:"AssignmentRelationship"},{id:"f657f2d5",sourceId:"89a019d3",targetId:"2cbeaf2d",type:"AssignmentRelationship"},{id:"d609c02e",sourceId:"2cbeaf2d",targetId:"2b3f882d",type:"RealisationRelationship"},{id:"3c951d9d",sourceId:"89a019d3",targetId:"51f18126",type:"AssociationRelationship"},{id:"c0924493",sourceId:"da8c7303",targetId:"2b3f882d",type:"RealisationRelationship"},{id:"85cb233a",sourceId:"d209b25e",targetId:"cc1bb3d5",type:"AssociationRelationship"},{id:"00e78fba",sourceId:"d209b25e",targetId:"e9f31ce4",type:"AssignmentRelationship"},{id:"1d2214a9",sourceId:"d209b25e",targetId:"2e9c02ca",type:"AssignmentRelationship"},{id:"dc1ce76b",sourceId:"2b3f882d",targetId:"d209b25e",type:"UsedByRelationship"},{id:"3575de70",sourceId:"b3d53364",targetId:"f84cfc52",type:"UsedByRelationship"},{id:"0368207f",sourceId:"41da7a87",targetId:"86306e6e",type:"UsedByRelationship"},{id:"e4129ff6",sourceId:"86306e6e",targetId:"41da7a87",type:"UsedByRelationship"},{id:"5337403b",sourceId:"b3d53364",targetId:"c2f47549",type:"TriggeringRelationship"},{id:"a130e7a8",sourceId:"c2f47549",targetId:"b4aa11c0",type:"AssociationRelationship"},{id:"9e880dcf",sourceId:"b4aa11c0",targetId:"89a019d3",type:"TriggeringRelationship"},{id:"b8a7c863",sourceId:"2b3f882d",targetId:"3c136295",type:"AssociationRelationship"},{id:"68fc7c0c",sourceId:"41da7a87",targetId:"0a9dc7b6",type:"UsedByRelationship"},{id:"e78db59d",sourceId:"0a9dc7b6",targetId:"f5d3b321",type:"FlowRelationship"},{id:"43304820",sourceId:"f5d3b321",targetId:"d209b25e",type:"TriggeringRelationship"},{id:"4872ed48",sourceId:"41da7a87",targetId:"64d1ebf2",type:"UsedByRelationship"},{id:"7c34c0a6",sourceId:"64d1ebf2",targetId:"d209b25e",type:"TriggeringRelationship"},{id:"e3a01f54",sourceId:"f84cfc52",targetId:"c2f47549",type:"TriggeringRelationship"},{id:"6aa10631",sourceId:"cc1bb3d5",targetId:"d209b25e",type:"RealisationRelationship"},{id:"553c9023",sourceId:"cc1bb3d5",targetId:"d209b25e",type:"UsedByRelationship"},{id:"a04d71ab",sourceId:"51f18126",targetId:"89a019d3",type:"UsedByRelationship"},{id:"4486e72d",sourceId:"2cbeaf2d",targetId:"2b3f882d",type:"UsedByRelationship"},{id:"886d3f93",sourceId:"2b3f882d",targetId:"68ddf4ec",type:"AccessRelationship"},{id:"03e88958",sourceId:"e9f31ce4",targetId:"68ddf4ec",type:"AccessRelationship"},{id:"9430392b",sourceId:"c9fff6f9",targetId:"68ddf4ec",type:"AccessRelationship"},{id:"087833d9",sourceId:"2b3f882d",targetId:"c9fff6f9",type:"FlowRelationship"},{id:"00daf5d6",sourceId:"d209b25e",targetId:"7ee7c540",type:"AssignmentRelationship"}],u=[{id:"e5b9033d",name:"Default View",viewpoint:""}],g={identifier:e,archimateId:t,name:i,description:a,formats:d,source:s,sourceFile:o,sourceFormat:n,timestamp:c,tags:r,duplicates:p,language:l,elements:y,relationships:b,views:u};export{t as archimateId,g as default,a as description,p as duplicates,y as elements,d as formats,e as identifier,l as language,i as name,b as relationships,s as source,o as sourceFile,n as sourceFormat,r as tags,c as timestamp,u as views};