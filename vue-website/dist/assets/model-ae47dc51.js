const e="https://me.big.tuwien.ac.at/EAModelSet/64d64165",a="64d64165",t="5 Query Object",i="",c=["XML","CSV","JSON","ARCHIMATE"],o="GitHub",p="raw-data/github/archimate/query_object.archimate",d="ARCHIMATE",n="29-06-2023 09:31:08",s=[],r=[],l="en",y=[{id:"3795f7f8",name:"class type 1",type:"ApplicationComponent",layer:"application"},{id:"0254e6f4",name:"class type 2",type:"ApplicationComponent",layer:"application"},{id:"3d57787a",name:"class type 3",type:"ApplicationComponent",layer:"application"},{id:"65309052",name:"some process",type:"ApplicationProcess",layer:"application"},{id:"37b06de2",name:"construct some query object",type:"ApplicationProcess",layer:"application"},{id:"3d99cec3",name:"find operation",type:"ApplicationProcess",layer:"application"},{id:"cb855d46",name:"class mapper",type:"ApplicationComponent",layer:"application"},{id:"8d55cace",name:"Create/insert (v_object)",type:"ApplicationFunction",layer:"application"},{id:"9ae9b6ca",name:"factory (props)",type:"ApplicationFunction",layer:"application"},{id:"df6a3937",name:"Update (v_object)",type:"ApplicationFunction",layer:"application"},{id:"d090c822",name:"Delete (id)",type:"ApplicationFunction",layer:"application"},{id:"f46122a6",name:"Read(id)",type:"ApplicationFunction",layer:"application"},{id:"11245f1e",name:"Find(query object)",type:"ApplicationFunction",layer:"application"},{id:"5da84f93",name:"some map",type:"DataObject",layer:"application"},{id:"bbfa8a46",name:"entity 1",type:"DataObject",layer:"application"},{id:"aa8a8a62",name:"entity 4",type:"DataObject",layer:"application"},{id:"66af1083",name:"entity 6",type:"DataObject",layer:"application"},{id:"b9f4c438",name:"entity 5",type:"DataObject",layer:"application"},{id:"05a07b41",name:"entity 3",type:"DataObject",layer:"application"},{id:"92c2ba5f",name:"entity 2",type:"DataObject",layer:"application"},{id:"8aa185b1",name:"property A",type:"DataObject",layer:"application"},{id:"2d96b460",name:"property B",type:"DataObject",layer:"application"},{id:"81ba59c5",name:"property C",type:"DataObject",layer:"application"},{id:"2195927b",name:"property D",type:"DataObject",layer:"application"},{id:"172a10e7",name:"property E",type:"DataObject",layer:"application"},{id:"0ee663ea",name:"property F",type:"DataObject",layer:"application"},{id:"e30aca93",name:"column A",type:"DataObject",layer:"application"},{id:"ae338af5",name:"column B",type:"DataObject",layer:"application"},{id:"f1c354ed",name:"column C",type:"DataObject",layer:"application"},{id:"77fee630",name:"column D",type:"DataObject",layer:"application"},{id:"5c75f4c3",name:"column E",type:"DataObject",layer:"application"},{id:"87cb90fd",name:"column F",type:"DataObject",layer:"application"},{id:"ee9cfb80",name:"class query object",type:"ApplicationComponent",layer:"application"},{id:"0c861856",name:"class criteria",type:"ApplicationComponent",layer:"application"},{id:"ec087012",name:"class type name",type:"DataObject",layer:"application"},{id:"48425340",name:"array of criterias",type:"DataObject",layer:"application"},{id:"eeab701e",name:"class property name",type:"DataObject",layer:"application"},{id:"505e0850",name:"propery value",type:"DataObject",layer:"application"},{id:"e5382066",name:"Data Object",type:"DataObject",layer:"application"},{id:"ac6eb208",name:"file map class 1 to entity 1 (metadata mapping) ",type:"Artifact",layer:"technology"},{id:"4513cc77",name:"file map class 2 to entity 2 (metadata mapping) ",type:"Artifact",layer:"technology"},{id:"7e248677",name:"file map class 3 to entity 3 (metadata mapping) ",type:"Artifact",layer:"technology"},{id:"40649643",name:"database",type:"Grouping",layer:"other"}],b=[{id:"11fe2785",sourceId:"aa8a8a62",targetId:"bbfa8a46",type:"AssociationRelationship"},{id:"3355fc68",sourceId:"3795f7f8",targetId:"0254e6f4",type:"AssociationRelationship"},{id:"8e0c2379",sourceId:"cb855d46",targetId:"df6a3937",type:"AssignmentRelationship"},{id:"dec52159",sourceId:"ac6eb208",targetId:"bbfa8a46",type:"AssociationRelationship"},{id:"adc80226",sourceId:"40649643",targetId:"05a07b41",type:"CompositionRelationship"},{id:"395fad59",sourceId:"cb855d46",targetId:"8d55cace",type:"AssignmentRelationship"},{id:"9fbdbbd9",sourceId:"11245f1e",targetId:"40649643",type:"AccessRelationship"},{id:"0ce719a6",sourceId:"aa8a8a62",targetId:"05a07b41",type:"AssociationRelationship"},{id:"4880189c",sourceId:"cb855d46",targetId:"5da84f93",type:"AccessRelationship"},{id:"4bb7c3fa",sourceId:"4513cc77",targetId:"92c2ba5f",type:"AssociationRelationship"},{id:"b8f8158e",sourceId:"3795f7f8",targetId:"ac6eb208",type:"AssociationRelationship"},{id:"c1ed2d5e",sourceId:"cb855d46",targetId:"f46122a6",type:"AssignmentRelationship"},{id:"82c36b3e",sourceId:"40649643",targetId:"92c2ba5f",type:"CompositionRelationship"},{id:"8f221836",sourceId:"37b06de2",targetId:"5da84f93",type:"AccessRelationship"},{id:"bd82cd11",sourceId:"3d99cec3",targetId:"11245f1e",type:"FlowRelationship"},{id:"50af651a",sourceId:"3795f7f8",targetId:"cb855d46",type:"ServingRelationship"},{id:"65dd1f10",sourceId:"7e248677",targetId:"05a07b41",type:"AssociationRelationship"},{id:"cdbc412e",sourceId:"aa8a8a62",targetId:"66af1083",type:"AssociationRelationship"},{id:"1dccfe70",sourceId:"05a07b41",targetId:"92c2ba5f",type:"AssociationRelationship"},{id:"282bed3a",sourceId:"b9f4c438",targetId:"05a07b41",type:"AssociationRelationship"},{id:"61090de6",sourceId:"0254e6f4",targetId:"4513cc77",type:"AssociationRelationship"},{id:"8e906545",sourceId:"bbfa8a46",targetId:"92c2ba5f",type:"AssociationRelationship"},{id:"f296570e",sourceId:"40649643",targetId:"b9f4c438",type:"CompositionRelationship"},{id:"9b58d3be",sourceId:"40649643",targetId:"aa8a8a62",type:"CompositionRelationship"},{id:"e67c4ad1",sourceId:"65309052",targetId:"3d99cec3",type:"CompositionRelationship"},{id:"12562a8d",sourceId:"66af1083",targetId:"92c2ba5f",type:"AssociationRelationship"},{id:"b22f8e2a",sourceId:"3d57787a",targetId:"7e248677",type:"AssociationRelationship"},{id:"cd1318f3",sourceId:"65309052",targetId:"37b06de2",type:"CompositionRelationship"},{id:"79fd892b",sourceId:"66af1083",targetId:"b9f4c438",type:"AssociationRelationship"},{id:"a6777709",sourceId:"cb855d46",targetId:"9ae9b6ca",type:"AssignmentRelationship"},{id:"3e81a126",sourceId:"cb855d46",targetId:"d090c822",type:"AssignmentRelationship"},{id:"9eb1ce6a",sourceId:"0254e6f4",targetId:"3d57787a",type:"AssociationRelationship"},{id:"f6060058",sourceId:"37b06de2",targetId:"3d99cec3",type:"FlowRelationship"},{id:"be6d39db",sourceId:"40649643",targetId:"bbfa8a46",type:"CompositionRelationship"},{id:"7e6019d5",sourceId:"cb855d46",targetId:"11245f1e",type:"AssignmentRelationship"},{id:"59a4edf4",sourceId:"0254e6f4",targetId:"cb855d46",type:"ServingRelationship"},{id:"3c7c0d33",sourceId:"40649643",targetId:"66af1083",type:"CompositionRelationship"},{id:"a55a55c5",sourceId:"3d57787a",targetId:"cb855d46",type:"ServingRelationship"},{id:"b7e58196",sourceId:"3795f7f8",targetId:"8aa185b1",type:"AccessRelationship"},{id:"db2372ae",sourceId:"3795f7f8",targetId:"2d96b460",type:"AccessRelationship"},{id:"34e1a487",sourceId:"0254e6f4",targetId:"81ba59c5",type:"AccessRelationship"},{id:"e6643d37",sourceId:"0254e6f4",targetId:"2195927b",type:"AccessRelationship"},{id:"1927cd8e",sourceId:"3d57787a",targetId:"172a10e7",type:"AccessRelationship"},{id:"f2b00193",sourceId:"3d57787a",targetId:"0ee663ea",type:"AccessRelationship"},{id:"cbb2cd27",sourceId:"bbfa8a46",targetId:"e30aca93",type:"CompositionRelationship"},{id:"c7a3f9ba",sourceId:"bbfa8a46",targetId:"ae338af5",type:"CompositionRelationship"},{id:"a4812ad1",sourceId:"92c2ba5f",targetId:"f1c354ed",type:"CompositionRelationship"},{id:"7b01fb4e",sourceId:"92c2ba5f",targetId:"77fee630",type:"CompositionRelationship"},{id:"e07f27f3",sourceId:"05a07b41",targetId:"5c75f4c3",type:"CompositionRelationship"},{id:"9b7c1a2d",sourceId:"05a07b41",targetId:"87cb90fd",type:"CompositionRelationship"},{id:"3e9fd37d",sourceId:"ee9cfb80",targetId:"ec087012",type:"AccessRelationship"},{id:"7c83ef28",sourceId:"ee9cfb80",targetId:"48425340",type:"AccessRelationship"},{id:"74e21da3",sourceId:"48425340",targetId:"0c861856",type:"AssociationRelationship"},{id:"25e4c6d4",sourceId:"0c861856",targetId:"eeab701e",type:"AccessRelationship"},{id:"a385bd0d",sourceId:"0c861856",targetId:"505e0850",type:"AccessRelationship"},{id:"45f3c892",sourceId:"0c861856",targetId:"e5382066",type:"AccessRelationship"},{id:"9c1fc12b",sourceId:"37b06de2",targetId:"ee9cfb80",type:"FlowRelationship"}],I=[{id:"304c95c0",name:"Query Object",viewpoint:""}],m={identifier:e,archimateId:a,name:t,description:i,formats:c,source:o,sourceFile:p,sourceFormat:d,timestamp:n,tags:s,duplicates:r,language:l,elements:y,relationships:b,views:I};export{a as archimateId,m as default,i as description,r as duplicates,y as elements,c as formats,e as identifier,l as language,t as name,b as relationships,o as source,p as sourceFile,d as sourceFormat,s as tags,n as timestamp,I as views};