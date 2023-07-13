const e="https://me.big.tuwien.ac.at/EAModelSet/372288bf",t="372288bf",a="4b Single Table Inheritance",i="",p=["XML","CSV","JSON","ARCHIMATE"],o="GitHub",d="raw-data/github/archimate/single_table_inheritance.archimate",c="ARCHIMATE",n="29-06-2023 09:31:30",s=[],r=[],l="en",y=[{id:"d053fa8a",name:"some process",type:"ApplicationProcess",layer:"application"},{id:"4d240beb",name:"find some data objects",type:"ApplicationProcess",layer:"application"},{id:"46b1b6b7",name:"update 1 object",type:"ApplicationProcess",layer:"application"},{id:"3f1163b1",name:"change some object some properties for update",type:"ApplicationProcess",layer:"application"},{id:"d4cd85ec",name:"some business logic on object",type:"ApplicationProcess",layer:"application"},{id:"0c7d8b7c",name:"class type 1",type:"ApplicationComponent",layer:"application"},{id:"ee1ee414",name:"properties (corresponds to table columns)",type:"DataObject",layer:"application"},{id:"5be1626b",name:"some business logic function 1",type:"ApplicationFunction",layer:"application"},{id:"3fa3823d",name:"some business logic function 2",type:"ApplicationFunction",layer:"application"},{id:"43a07c76",name:"class subtype 2",type:"ApplicationComponent",layer:"application"},{id:"c742c168",name:"class subtype 3",type:"ApplicationComponent",layer:"application"},{id:"f1701007",name:"table",type:"DataObject",layer:"application"},{id:"29ca205c",name:"entity 2",type:"DataObject",layer:"application"},{id:"c51778df",name:"entity 3",type:"DataObject",layer:"application"},{id:"68432368",name:"class mapper 1",type:"ApplicationComponent",layer:"application"},{id:"4188ebf9",name:"Create/insert (v_object)",type:"ApplicationFunction",layer:"application"},{id:"20841a6f",name:"get props from v_object for use in insert",type:"ApplicationProcess",layer:"application"},{id:"d23ab3db",name:"SQL insert 1 row statement",type:"ApplicationProcess",layer:"application"},{id:"b370d7a7",name:"factory (props)",type:"ApplicationFunction",layer:"application"},{id:"5d9d73cf",name:"create obj and fill properties acording with input args",type:"ApplicationProcess",layer:"application"},{id:"5bfe5fb3",name:"return created object of type 'class type 1'",type:"ApplicationProcess",layer:"application"},{id:"22564600",name:"Update (v_object)",type:"ApplicationFunction",layer:"application"},{id:"c0ae5b85",name:"get props from v_object for use in update",type:"ApplicationProcess",layer:"application"},{id:"b50db0e5",name:"SQL update 1 row statement",type:"ApplicationProcess",layer:"application"},{id:"c4e21ad8",name:"Delete (id)",type:"ApplicationFunction",layer:"application"},{id:"0a1d07a1",name:"get id",type:"ApplicationProcess",layer:"application"},{id:"b5092ee6",name:"SQL delete 1 row statement",type:"ApplicationProcess",layer:"application"},{id:"8ba1eca9",name:"Read(id)",type:"ApplicationFunction",layer:"application"},{id:"a30437c0",name:"SQL select 1 row statement",type:"ApplicationProcess",layer:"application"},{id:"12f83529",name:"return object of type 'class type 1'",type:"ApplicationProcess",layer:"application"},{id:"b043ae20",name:"Find(parameters)",type:"ApplicationFunction",layer:"application"},{id:"c9bfe78a",name:"SQL select rows statement",type:"ApplicationProcess",layer:"application"},{id:"62a7f301",name:"return array of objects of type 'class type 1'",type:"ApplicationProcess",layer:"application"},{id:"b0fe2c99",name:"class mapper 2",type:"ApplicationComponent",layer:"application"},{id:"6aa9c90a",name:"class mapper 3",type:"ApplicationComponent",layer:"application"},{id:"0bfa0eba",name:"Application Function",type:"ApplicationFunction",layer:"application"},{id:"ec5fd4dd",name:"class mapper 2",type:"ApplicationComponent",layer:"application"},{id:"2fc8a571",name:"Create/insert (v_object)",type:"ApplicationFunction",layer:"application"},{id:"71be4489",name:"factory (props)",type:"ApplicationFunction",layer:"application"},{id:"c1e3bde5",name:"Update (v_object)",type:"ApplicationFunction",layer:"application"},{id:"ad79ca79",name:"Delete (id)",type:"ApplicationFunction",layer:"application"},{id:"6f960ee2",name:"Read(id)",type:"ApplicationFunction",layer:"application"},{id:"05281eb0",name:"Find(parameters)",type:"ApplicationFunction",layer:"application"},{id:"825ad3cf",name:"class mapper 3",type:"ApplicationComponent",layer:"application"},{id:"3273b067",name:"Create/insert (v_object)",type:"ApplicationFunction",layer:"application"},{id:"44581ea3",name:"factory (props)",type:"ApplicationFunction",layer:"application"},{id:"49f391a0",name:"Update (v_object) ",type:"ApplicationFunction",layer:"application"},{id:"fdffb322",name:"Delete (id)",type:"ApplicationFunction",layer:"application"},{id:"557b6fe9",name:"Read(id)",type:"ApplicationFunction",layer:"application"},{id:"5b3544f6",name:"Find(parameters)",type:"ApplicationFunction",layer:"application"},{id:"f08656f1",name:"Primary Key",type:"DataObject",layer:"application"},{id:"939e4e36",name:"clas type",type:"DataObject",layer:"application"},{id:"e4c43526",name:"columns for type 1",type:"DataObject",layer:"application"},{id:"2e7905d6",name:"columns for type 2",type:"DataObject",layer:"application"},{id:"419416fc",name:"columns for type 3",type:"DataObject",layer:"application"}],b=[{id:"bbe166a5",sourceId:"68432368",targetId:"c4e21ad8",type:"AssignmentRelationship"},{id:"ab7a050f",sourceId:"c4e21ad8",targetId:"b5092ee6",type:"CompositionRelationship"},{id:"34eab69d",sourceId:"29ca205c",targetId:"c51778df",type:"AssociationRelationship"},{id:"e1dbbece",sourceId:"d053fa8a",targetId:"d4cd85ec",type:"CompositionRelationship"},{id:"3284015b",sourceId:"b50db0e5",targetId:"f1701007",type:"AccessRelationship"},{id:"6559bc48",sourceId:"b043ae20",targetId:"c9bfe78a",type:"CompositionRelationship"},{id:"d598acbf",sourceId:"68432368",targetId:"4188ebf9",type:"AssignmentRelationship"},{id:"0f571f29",sourceId:"b370d7a7",targetId:"62a7f301",type:"ServingRelationship"},{id:"ad3084b0",sourceId:"43a07c76",targetId:"b0fe2c99",type:"ServingRelationship"},{id:"97870d05",sourceId:"5d9d73cf",targetId:"5bfe5fb3",type:"FlowRelationship"},{id:"43fb19cd",sourceId:"8ba1eca9",targetId:"12f83529",type:"CompositionRelationship"},{id:"7e16dc05",sourceId:"b0fe2c99",targetId:"29ca205c",type:"AssociationRelationship"},{id:"e29858f1",sourceId:"f1701007",targetId:"29ca205c",type:"AssociationRelationship"},{id:"a4e14133",sourceId:"68432368",targetId:"22564600",type:"AssignmentRelationship"},{id:"938b1758",sourceId:"b370d7a7",targetId:"12f83529",type:"ServingRelationship"},{id:"30b2f660",sourceId:"c4e21ad8",targetId:"f1701007",type:"AccessRelationship"},{id:"25955bf0",sourceId:"b043ae20",targetId:"4d240beb",type:"ServingRelationship"},{id:"3ed68378",sourceId:"3f1163b1",targetId:"ee1ee414",type:"AccessRelationship"},{id:"e5efcdb1",sourceId:"22564600",targetId:"46b1b6b7",type:"ServingRelationship"},{id:"459ebf45",sourceId:"6aa9c90a",targetId:"c51778df",type:"AssociationRelationship"},{id:"deb76f95",sourceId:"3f1163b1",targetId:"46b1b6b7",type:"FlowRelationship"},{id:"d0805405",sourceId:"a30437c0",targetId:"f1701007",type:"AccessRelationship"},{id:"741740ef",sourceId:"68432368",targetId:"b370d7a7",type:"AssignmentRelationship"},{id:"ddac2594",sourceId:"b043ae20",targetId:"62a7f301",type:"CompositionRelationship"},{id:"99ee8bfc",sourceId:"22564600",targetId:"c0ae5b85",type:"CompositionRelationship"},{id:"cf647814",sourceId:"d23ab3db",targetId:"f1701007",type:"AccessRelationship"},{id:"a8c3b26d",sourceId:"0c7d8b7c",targetId:"3fa3823d",type:"AssignmentRelationship"},{id:"f82c3ea9",sourceId:"a30437c0",targetId:"12f83529",type:"FlowRelationship"},{id:"d1510c97",sourceId:"0c7d8b7c",targetId:"5be1626b",type:"AssignmentRelationship"},{id:"cf8eb617",sourceId:"c9bfe78a",targetId:"62a7f301",type:"FlowRelationship"},{id:"fe02d47a",sourceId:"68432368",targetId:"b043ae20",type:"AssignmentRelationship"},{id:"0e3567b1",sourceId:"d053fa8a",targetId:"4d240beb",type:"CompositionRelationship"},{id:"8f857739",sourceId:"0c7d8b7c",targetId:"ee1ee414",type:"AccessRelationship"},{id:"5b027d69",sourceId:"4d240beb",targetId:"d4cd85ec",type:"FlowRelationship"},{id:"fd66beec",sourceId:"22564600",targetId:"b50db0e5",type:"CompositionRelationship"},{id:"98c560bf",sourceId:"b370d7a7",targetId:"5d9d73cf",type:"CompositionRelationship"},{id:"8d89564d",sourceId:"5be1626b",targetId:"ee1ee414",type:"AccessRelationship"},{id:"434a3726",sourceId:"68432368",targetId:"8ba1eca9",type:"AssignmentRelationship"},{id:"7861533d",sourceId:"c4e21ad8",targetId:"0a1d07a1",type:"CompositionRelationship"},{id:"b40afc37",sourceId:"c9bfe78a",targetId:"f1701007",type:"AccessRelationship"},{id:"aebcf2c7",sourceId:"20841a6f",targetId:"d23ab3db",type:"FlowRelationship"},{id:"25b68d73",sourceId:"4188ebf9",targetId:"d23ab3db",type:"CompositionRelationship"},{id:"03985575",sourceId:"8ba1eca9",targetId:"a30437c0",type:"CompositionRelationship"},{id:"692ea35f",sourceId:"0a1d07a1",targetId:"b5092ee6",type:"FlowRelationship"},{id:"a11b06e0",sourceId:"d053fa8a",targetId:"46b1b6b7",type:"CompositionRelationship"},{id:"b0aec483",sourceId:"b370d7a7",targetId:"5bfe5fb3",type:"CompositionRelationship"},{id:"50a9116c",sourceId:"c0ae5b85",targetId:"b50db0e5",type:"FlowRelationship"},{id:"2ec21361",sourceId:"5be1626b",targetId:"d4cd85ec",type:"ServingRelationship"},{id:"aa23a367",sourceId:"d053fa8a",targetId:"3f1163b1",type:"CompositionRelationship"},{id:"8862b194",sourceId:"d4cd85ec",targetId:"3f1163b1",type:"FlowRelationship"},{id:"e0a9dd48",sourceId:"c742c168",targetId:"6aa9c90a",type:"ServingRelationship"},{id:"e7ef5f67",sourceId:"4188ebf9",targetId:"20841a6f",type:"CompositionRelationship"},{id:"dda4ed23",sourceId:"0c7d8b7c",targetId:"68432368",type:"ServingRelationship"},{id:"aa7c6278",sourceId:"43a07c76",targetId:"0c7d8b7c",type:"SpecializationRelationship"},{id:"64713c43",sourceId:"c742c168",targetId:"43a07c76",type:"SpecializationRelationship"},{id:"8b9d0965",sourceId:"68432368",targetId:"0bfa0eba",type:"AssignmentRelationship"},{id:"ff8ead2c",sourceId:"ec5fd4dd",targetId:"6f960ee2",type:"AssignmentRelationship"},{id:"5fa377fc",sourceId:"ec5fd4dd",targetId:"71be4489",type:"AssignmentRelationship"},{id:"d6217bbd",sourceId:"ec5fd4dd",targetId:"05281eb0",type:"AssignmentRelationship"},{id:"e6455302",sourceId:"ec5fd4dd",targetId:"c1e3bde5",type:"AssignmentRelationship"},{id:"b75ce349",sourceId:"ec5fd4dd",targetId:"2fc8a571",type:"AssignmentRelationship"},{id:"3eda3a73",sourceId:"ec5fd4dd",targetId:"ad79ca79",type:"AssignmentRelationship"},{id:"1041866e",sourceId:"825ad3cf",targetId:"fdffb322",type:"AssignmentRelationship"},{id:"b7a6884f",sourceId:"825ad3cf",targetId:"5b3544f6",type:"AssignmentRelationship"},{id:"72bd01f6",sourceId:"825ad3cf",targetId:"557b6fe9",type:"AssignmentRelationship"},{id:"25ff6b90",sourceId:"825ad3cf",targetId:"49f391a0",type:"AssignmentRelationship"},{id:"3c22839a",sourceId:"825ad3cf",targetId:"44581ea3",type:"AssignmentRelationship"},{id:"dbd63a93",sourceId:"825ad3cf",targetId:"3273b067",type:"AssignmentRelationship"},{id:"a4a68bff",sourceId:"43a07c76",targetId:"ec5fd4dd",type:"ServingRelationship"},{id:"e13879bb",sourceId:"c742c168",targetId:"825ad3cf",type:"ServingRelationship"},{id:"b590974d",sourceId:"f1701007",targetId:"f08656f1",type:"CompositionRelationship"},{id:"8da833e4",sourceId:"f1701007",targetId:"939e4e36",type:"CompositionRelationship"},{id:"b032d91a",sourceId:"f1701007",targetId:"e4c43526",type:"CompositionRelationship"},{id:"f7585b9e",sourceId:"f1701007",targetId:"2e7905d6",type:"CompositionRelationship"},{id:"ada61d6f",sourceId:"f1701007",targetId:"419416fc",type:"CompositionRelationship"},{id:"fe4268a0",sourceId:"68432368",targetId:"e4c43526",type:"AccessRelationship"},{id:"862914ff",sourceId:"ec5fd4dd",targetId:"2e7905d6",type:"AccessRelationship"},{id:"0ec1fc47",sourceId:"825ad3cf",targetId:"419416fc",type:"AccessRelationship"},{id:"b4e087da",sourceId:"ec5fd4dd",targetId:"e4c43526",type:"AccessRelationship"},{id:"95b6f5ce",sourceId:"825ad3cf",targetId:"2e7905d6",type:"AccessRelationship"},{id:"303b086f",sourceId:"825ad3cf",targetId:"e4c43526",type:"AccessRelationship"}],f=[{id:"f6a09000",name:"Single Table Inheritance",viewpoint:""}],I={identifier:e,archimateId:t,name:a,description:i,formats:p,source:o,sourceFile:d,sourceFormat:c,timestamp:n,tags:s,duplicates:r,language:l,elements:y,relationships:b,views:f};export{t as archimateId,I as default,i as description,r as duplicates,y as elements,p as formats,e as identifier,l as language,a as name,b as relationships,o as source,d as sourceFile,c as sourceFormat,s as tags,n as timestamp,f as views};
