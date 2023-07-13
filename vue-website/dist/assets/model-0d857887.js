const e="https://me.big.tuwien.ac.at/EAModelSet/37698e05",t="37698e05",i="4a Association Table Mapping",a="",o=["XML","CSV","JSON","ARCHIMATE"],p="GitHub",d="raw-data/github/archimate/association_table_mapping.archimate",c="ARCHIMATE",n="29-06-2023 09:31:47",s=[],r=[],l="en",y=[{id:"9189fa7d",name:"class type 1",type:"ApplicationComponent",layer:"application"},{id:"af2bc544",name:"class type 2",type:"ApplicationComponent",layer:"application"},{id:"646f1165",name:"variable (array of references to objects of class type 2)",type:"DataObject",layer:"application"},{id:"10a68fe6",name:"entity 1",type:"DataObject",layer:"application"},{id:"60120108",name:"entity 1-entity 2",type:"DataObject",layer:"application"},{id:"d661fc2b",name:"foreign key to entity 1",type:"DataObject",layer:"application"},{id:"25024c63",name:"class mapper 2",type:"ApplicationComponent",layer:"application"},{id:"2501f6e0",name:"Create (v_object)",type:"ApplicationFunction",layer:"application"},{id:"18976650",name:"SQL insert 2 empty row",type:"ApplicationProcess",layer:"application"},{id:"d973e7d4",name:"call update",type:"ApplicationProcess",layer:"application"},{id:"70559708",name:"factory (props)",type:"ApplicationFunction",layer:"application"},{id:"7ac479cc",name:"create obj and fill properties acording with input args",type:"ApplicationProcess",layer:"application"},{id:"30de8eaa",name:"return created object of type 'class type 2'",type:"ApplicationProcess",layer:"application"},{id:"3744ce7e",name:"Update (v_object)",type:"ApplicationFunction",layer:"application"},{id:"4b69826f",name:"get props from v_object for use in update",type:"ApplicationProcess",layer:"application"},{id:"db2b97e6",name:"SQL update entity 2 row statement",type:"ApplicationProcess",layer:"application"},{id:"635f51cb",name:"Delete (id)",type:"ApplicationFunction",layer:"application"},{id:"309146b2",name:"get id",type:"ApplicationProcess",layer:"application"},{id:"72aa37df",name:"SQL delete entity 2 row statement",type:"ApplicationProcess",layer:"application"},{id:"40d53bd2",name:"Read(id)",type:"ApplicationFunction",layer:"application"},{id:"867b3e6f",name:"SQL select entity 2 row statement",type:"ApplicationProcess",layer:"application"},{id:"fefe4979",name:"return object of type 'class type 2'",type:"ApplicationProcess",layer:"application"},{id:"c01387e4",name:"Find(parameters)",type:"ApplicationFunction",layer:"application"},{id:"53eb7adc",name:"SQL select entity 2 rows statement",type:"ApplicationProcess",layer:"application"},{id:"1143e8f0",name:"return array of objects of type 'class type 2'",type:"ApplicationProcess",layer:"application"},{id:"a02e0378",name:"class mapper 1",type:"ApplicationComponent",layer:"application"},{id:"380ddd92",name:"Create/insert (v_object)",type:"ApplicationFunction",layer:"application"},{id:"8648d650",name:"SQL insert 1 empty row",type:"ApplicationProcess",layer:"application"},{id:"5ad450eb",name:"call update",type:"ApplicationProcess",layer:"application"},{id:"86c6dba7",name:"factory (props)",type:"ApplicationFunction",layer:"application"},{id:"b2a0ed50",name:"create obj of type 1 and fill properties acording with input args",type:"ApplicationProcess",layer:"application"},{id:"111786c9",name:"return created object of type 'class type 1'",type:"ApplicationProcess",layer:"application"},{id:"59ce531b",name:"get ref to object of type 2, and add into arr",type:"ApplicationProcess",layer:"application"},{id:"3ee05c8d",name:"Update (v_object)",type:"ApplicationFunction",layer:"application"},{id:"ca17e5c5",name:"get props from v_object for use in update",type:"ApplicationProcess",layer:"application"},{id:"33f96d08",name:"SQL update entity 1 row statement",type:"ApplicationProcess",layer:"application"},{id:"b30b5d72",name:"Delete (id)",type:"ApplicationFunction",layer:"application"},{id:"6b69f613",name:"get id",type:"ApplicationProcess",layer:"application"},{id:"c7a46af6",name:"SQL delete entity 1 row statement",type:"ApplicationProcess",layer:"application"},{id:"dd995298",name:"Read(id)",type:"ApplicationFunction",layer:"application"},{id:"fd08b99e",name:"SQL select entity 1 row statement",type:"ApplicationProcess",layer:"application"},{id:"8581f390",name:"return object of type 'class type 1' (with refs to objs 1 inside)",type:"ApplicationProcess",layer:"application"},{id:"06765ccf",name:"get ref to object of type 2 by FK",type:"ApplicationProcess",layer:"application"},{id:"87cd2224",name:"Find(parameters)",type:"ApplicationFunction",layer:"application"},{id:"cdc7b83e",name:"SQL select entity 1 rows statement",type:"ApplicationProcess",layer:"application"},{id:"0f834eec",name:"return array of objects of type 'class type 1'",type:"ApplicationProcess",layer:"application"},{id:"11fe0a0d",name:"get refs to objects of type 1 by FK",type:"ApplicationProcess",layer:"application"},{id:"7afa7235",name:"class type 3",type:"ApplicationComponent",layer:"application"},{id:"8989f43f",name:"class mapper 3",type:"ApplicationComponent",layer:"application"},{id:"ee5cb40c",name:"entity 2",type:"DataObject",layer:"application"},{id:"aba27e7f",name:"foreign key to entity 2",type:"DataObject",layer:"application"},{id:"3a2714b4",name:"primary key 2",type:"DataObject",layer:"application"},{id:"c0106197",name:"primary key 1",type:"DataObject",layer:"application"},{id:"93d67037",name:"SQL select entity 1-entity 2 rows by PK1",type:"ApplicationProcess",layer:"application"},{id:"ec07491f",name:"return object of type 1",type:"ApplicationProcess",layer:"application"},{id:"ca40175e",name:"for each row",type:"ApplicationProcess",layer:"application"},{id:"f47f4a91",name:"add ref to array",type:"ApplicationProcess",layer:"application"},{id:"e70455b4",name:"SQL DELETE entity1-entity2 rows by PK1",type:"ApplicationProcess",layer:"application"},{id:"624f0b37",name:"for each row (copy)",type:"ApplicationProcess",layer:"application"},{id:"2088dad0",name:"get ref to object of type 1 by FK (copy)",type:"ApplicationProcess",layer:"application"},{id:"8ee08bd6",name:"add ref to array of obj 1 (copy)",type:"ApplicationProcess",layer:"application"},{id:"6d29605b",name:"add all the rows in the table again",type:"ApplicationProcess",layer:"application"},{id:"f638663d",name:"for each elements of array of refs",type:"ApplicationProcess",layer:"application"},{id:"30e06fba",name:"SQL INSERT entity 1-entity 2 rows",type:"ApplicationProcess",layer:"application"},{id:"97eb14ca",name:"add ref to array of obj 1 (copy) (copy)",type:"ApplicationProcess",layer:"application"}],I=[{id:"384dd1cb",sourceId:"70559708",targetId:"30de8eaa",type:"CompositionRelationship"},{id:"a518fa7d",sourceId:"3ee05c8d",targetId:"ca17e5c5",type:"CompositionRelationship"},{id:"925626f8",sourceId:"a02e0378",targetId:"380ddd92",type:"AssignmentRelationship"},{id:"e63f161e",sourceId:"11fe0a0d",targetId:"0f834eec",type:"FlowRelationship"},{id:"5c6e9429",sourceId:"25024c63",targetId:"c01387e4",type:"AssignmentRelationship"},{id:"7d9461cf",sourceId:"6b69f613",targetId:"c7a46af6",type:"FlowRelationship"},{id:"7ab96b33",sourceId:"380ddd92",targetId:"5ad450eb",type:"CompositionRelationship"},{id:"ab97e9fd",sourceId:"06765ccf",targetId:"40d53bd2",type:"FlowRelationship"},{id:"56efa049",sourceId:"3ee05c8d",targetId:"33f96d08",type:"CompositionRelationship"},{id:"cbf4dad5",sourceId:"53eb7adc",targetId:"1143e8f0",type:"FlowRelationship"},{id:"e01e312e",sourceId:"a02e0378",targetId:"10a68fe6",type:"AssociationRelationship"},{id:"ebfd30ee",sourceId:"25024c63",targetId:"70559708",type:"AssignmentRelationship"},{id:"8dc30291",sourceId:"635f51cb",targetId:"309146b2",type:"CompositionRelationship"},{id:"17872efb",sourceId:"93d67037",targetId:"60120108",type:"AssociationRelationship"},{id:"d483f1b6",sourceId:"c01387e4",targetId:"53eb7adc",type:"CompositionRelationship"},{id:"e9516985",sourceId:"86c6dba7",targetId:"59ce531b",type:"CompositionRelationship"},{id:"344a35cb",sourceId:"7ac479cc",targetId:"30de8eaa",type:"FlowRelationship"},{id:"5f30a934",sourceId:"b30b5d72",targetId:"c7a46af6",type:"CompositionRelationship"},{id:"953cd871",sourceId:"87cd2224",targetId:"0f834eec",type:"CompositionRelationship"},{id:"9c43e4e0",sourceId:"40d53bd2",targetId:"fefe4979",type:"CompositionRelationship"},{id:"8ba9f4c7",sourceId:"3744ce7e",targetId:"4b69826f",type:"CompositionRelationship"},{id:"24581a06",sourceId:"dd995298",targetId:"8581f390",type:"CompositionRelationship"},{id:"25e0d041",sourceId:"59ce531b",targetId:"40d53bd2",type:"FlowRelationship"},{id:"01a26d13",sourceId:"a02e0378",targetId:"b30b5d72",type:"AssignmentRelationship"},{id:"bbbe2cd6",sourceId:"18976650",targetId:"d973e7d4",type:"FlowRelationship"},{id:"977e5b8d",sourceId:"2501f6e0",targetId:"d973e7d4",type:"CompositionRelationship"},{id:"f71c1649",sourceId:"59ce531b",targetId:"111786c9",type:"FlowRelationship"},{id:"e326b30c",sourceId:"4b69826f",targetId:"db2b97e6",type:"FlowRelationship"},{id:"0093f486",sourceId:"40d53bd2",targetId:"867b3e6f",type:"CompositionRelationship"},{id:"9bfea6f5",sourceId:"25024c63",targetId:"635f51cb",type:"AssignmentRelationship"},{id:"c72e7b20",sourceId:"ca17e5c5",targetId:"33f96d08",type:"FlowRelationship"},{id:"dfcbe4d9",sourceId:"dd995298",targetId:"06765ccf",type:"CompositionRelationship"},{id:"2c5af4f1",sourceId:"9189fa7d",targetId:"a02e0378",type:"ServingRelationship"},{id:"6a52e825",sourceId:"b30b5d72",targetId:"6b69f613",type:"CompositionRelationship"},{id:"65a35647",sourceId:"a02e0378",targetId:"86c6dba7",type:"AssignmentRelationship"},{id:"2aeea04c",sourceId:"cdc7b83e",targetId:"11fe0a0d",type:"FlowRelationship"},{id:"99ce88f1",sourceId:"309146b2",targetId:"72aa37df",type:"FlowRelationship"},{id:"f987a2aa",sourceId:"635f51cb",targetId:"72aa37df",type:"CompositionRelationship"},{id:"7289d15b",sourceId:"11fe0a0d",targetId:"40d53bd2",type:"FlowRelationship"},{id:"9bddc42a",sourceId:"70559708",targetId:"7ac479cc",type:"CompositionRelationship"},{id:"c67a05b4",sourceId:"b2a0ed50",targetId:"59ce531b",type:"FlowRelationship"},{id:"3cecd339",sourceId:"86c6dba7",targetId:"111786c9",type:"CompositionRelationship"},{id:"d36604ff",sourceId:"c0106197",targetId:"d661fc2b",type:"AssociationRelationship"},{id:"89beeddc",sourceId:"a02e0378",targetId:"87cd2224",type:"AssignmentRelationship"},{id:"4bcd1162",sourceId:"af2bc544",targetId:"25024c63",type:"ServingRelationship"},{id:"974185cb",sourceId:"87cd2224",targetId:"11fe0a0d",type:"CompositionRelationship"},{id:"ec06f92c",sourceId:"60120108",targetId:"d661fc2b",type:"CompositionRelationship"},{id:"4ced3dbd",sourceId:"380ddd92",targetId:"8648d650",type:"CompositionRelationship"},{id:"ee0624e8",sourceId:"2501f6e0",targetId:"18976650",type:"CompositionRelationship"},{id:"086f8a77",sourceId:"86c6dba7",targetId:"b2a0ed50",type:"CompositionRelationship"},{id:"9f2085db",sourceId:"06765ccf",targetId:"8581f390",type:"FlowRelationship"},{id:"9e0b592b",sourceId:"a02e0378",targetId:"dd995298",type:"AssignmentRelationship"},{id:"bb9a32a3",sourceId:"3744ce7e",targetId:"db2b97e6",type:"CompositionRelationship"},{id:"3b7a187f",sourceId:"dd995298",targetId:"fd08b99e",type:"CompositionRelationship"},{id:"653f1cdc",sourceId:"8648d650",targetId:"5ad450eb",type:"FlowRelationship"},{id:"95ebdb04",sourceId:"87cd2224",targetId:"cdc7b83e",type:"CompositionRelationship"},{id:"7f441194",sourceId:"25024c63",targetId:"2501f6e0",type:"AssignmentRelationship"},{id:"182781f6",sourceId:"a02e0378",targetId:"3ee05c8d",type:"AssignmentRelationship"},{id:"0eb53192",sourceId:"25024c63",targetId:"40d53bd2",type:"AssignmentRelationship"},{id:"f70ad881",sourceId:"25024c63",targetId:"3744ce7e",type:"AssignmentRelationship"},{id:"58340684",sourceId:"867b3e6f",targetId:"fefe4979",type:"FlowRelationship"},{id:"35b13970",sourceId:"c01387e4",targetId:"1143e8f0",type:"CompositionRelationship"},{id:"524a3e75",sourceId:"fd08b99e",targetId:"06765ccf",type:"FlowRelationship"},{id:"d3dc4062",sourceId:"7afa7235",targetId:"25024c63",type:"ServingRelationship"},{id:"cf74afdd",sourceId:"25024c63",targetId:"ee5cb40c",type:"AssociationRelationship"},{id:"3e32372f",sourceId:"60120108",targetId:"aba27e7f",type:"CompositionRelationship"},{id:"cc213678",sourceId:"ee5cb40c",targetId:"3a2714b4",type:"CompositionRelationship"},{id:"d2af3783",sourceId:"10a68fe6",targetId:"c0106197",type:"CompositionRelationship"},{id:"4f49e820",sourceId:"aba27e7f",targetId:"3a2714b4",type:"AssociationRelationship"},{id:"1cce30cd",sourceId:"9189fa7d",targetId:"646f1165",type:"AccessRelationship"},{id:"08322dde",sourceId:"dd995298",targetId:"93d67037",type:"CompositionRelationship"},{id:"80434b7e",sourceId:"93d67037",targetId:"06765ccf",type:"CompositionRelationship"},{id:"3aa1ac2a",sourceId:"fd08b99e",targetId:"ec07491f",type:"CompositionRelationship"},{id:"f4ee9198",sourceId:"93d67037",targetId:"ca40175e",type:"CompositionRelationship"},{id:"cf32e30a",sourceId:"ca40175e",targetId:"06765ccf",type:"CompositionRelationship"},{id:"e4cadcd9",sourceId:"ca40175e",targetId:"f47f4a91",type:"CompositionRelationship"},{id:"4fe2ab21",sourceId:"fd08b99e",targetId:"93d67037",type:"FlowRelationship"},{id:"f4939856",sourceId:"93d67037",targetId:"8581f390",type:"FlowRelationship"},{id:"bb253012",sourceId:"06765ccf",targetId:"f47f4a91",type:"FlowRelationship"},{id:"b45c5821",sourceId:"2088dad0",targetId:"8ee08bd6",type:"FlowRelationship"},{id:"87f07bbd",sourceId:"624f0b37",targetId:"2088dad0",type:"CompositionRelationship"},{id:"121ed6ae",sourceId:"e70455b4",targetId:"624f0b37",type:"CompositionRelationship"},{id:"82b2f9e3",sourceId:"624f0b37",targetId:"8ee08bd6",type:"CompositionRelationship"},{id:"9bacd5e7",sourceId:"3ee05c8d",targetId:"e70455b4",type:"CompositionRelationship"},{id:"4748cfa4",sourceId:"30e06fba",targetId:"97eb14ca",type:"FlowRelationship"},{id:"6b4faad5",sourceId:"6d29605b",targetId:"f638663d",type:"CompositionRelationship"},{id:"030d8c6b",sourceId:"f638663d",targetId:"30e06fba",type:"CompositionRelationship"},{id:"d0c49d9a",sourceId:"f638663d",targetId:"97eb14ca",type:"CompositionRelationship"},{id:"5222ad51",sourceId:"3ee05c8d",targetId:"6d29605b",type:"CompositionRelationship"},{id:"4e29b0db",sourceId:"30e06fba",targetId:"60120108",type:"AssociationRelationship"},{id:"f43dc9dd",sourceId:"ca17e5c5",targetId:"e70455b4",type:"FlowRelationship"},{id:"0bbea077",sourceId:"e70455b4",targetId:"6d29605b",type:"FlowRelationship"},{id:"ff511c2a",sourceId:"646f1165",targetId:"af2bc544",type:"AssociationRelationship"},{id:"bf018e00",sourceId:"86c6dba7",targetId:"93d67037",type:"CompositionRelationship"},{id:"431bd213",sourceId:"b2a0ed50",targetId:"93d67037",type:"FlowRelationship"},{id:"b42c3075",sourceId:"93d67037",targetId:"111786c9",type:"FlowRelationship"},{id:"7c271fa2",sourceId:"fd08b99e",targetId:"8581f390",type:"FlowRelationship"},{id:"05365e3e",sourceId:"8581f390",targetId:"86c6dba7",type:"FlowRelationship"},{id:"2407765b",sourceId:"70559708",targetId:"fefe4979",type:"ServingRelationship"},{id:"740833dd",sourceId:"86c6dba7",targetId:"8581f390",type:"ServingRelationship"},{id:"75ee0cc2",sourceId:"fefe4979",targetId:"70559708",type:"FlowRelationship"},{id:"80137032",sourceId:"380ddd92",targetId:"3ee05c8d",type:"FlowRelationship"},{id:"329a177e",sourceId:"d973e7d4",targetId:"3744ce7e",type:"FlowRelationship"}],f=[{id:"54074a6d",name:"Association Table Mapping",viewpoint:""}],b={identifier:e,archimateId:t,name:i,description:a,formats:o,source:p,sourceFile:d,sourceFormat:c,timestamp:n,tags:s,duplicates:r,language:l,elements:y,relationships:I,views:f};export{t as archimateId,b as default,a as description,r as duplicates,y as elements,o as formats,e as identifier,l as language,i as name,I as relationships,p as source,d as sourceFile,c as sourceFormat,s as tags,n as timestamp,f as views};