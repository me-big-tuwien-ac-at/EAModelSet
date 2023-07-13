const e="https://me.big.tuwien.ac.at/EAModelSet/83985432",t="83985432",i="4a Embedded Value",a="",o=["XML","CSV","JSON","ARCHIMATE"],p="GitHub",d="raw-data/github/archimate/embedded_value.archimate",c="ARCHIMATE",n="29-06-2023 09:30:35",s=[],r=[],l="en",y=[{id:"7603ac14",name:"class type 1",type:"ApplicationComponent",layer:"application"},{id:"501cd4d4",name:"variable (array of references to objects of class type 2)",type:"DataObject",layer:"application"},{id:"d57e6435",name:"class type 2 (IMMUTABLE)",type:"ApplicationComponent",layer:"application"},{id:"4f9f1f34",name:"entity 1",type:"DataObject",layer:"application"},{id:"6161e04e",name:"entity 2",type:"DataObject",layer:"application"},{id:"77e973f9",name:"foreign key to entity 1",type:"DataObject",layer:"application"},{id:"1992bca1",name:"class mapper 1",type:"ApplicationComponent",layer:"application"},{id:"4c369cee",name:"Create/insert (v_object)",type:"ApplicationFunction",layer:"application"},{id:"8871d5e8",name:"get props from v_object for use in insert",type:"ApplicationProcess",layer:"application"},{id:"1f0a0eed",name:"SQL insert entity 1 row statement",type:"ApplicationProcess",layer:"application"},{id:"747f47a5",name:"factory (props)",type:"ApplicationFunction",layer:"application"},{id:"4678e59b",name:"create obj of type 1 and fill properties acording with input args",type:"ApplicationProcess",layer:"application"},{id:"b0751eac",name:"return created object of type 'class type 1'",type:"ApplicationProcess",layer:"application"},{id:"066d0d74",name:"call find, and add result to arr",type:"ApplicationProcess",layer:"application"},{id:"b0d4e6dc",name:"Update (v_object)",type:"ApplicationFunction",layer:"application"},{id:"88ca7e13",name:"get props from v_object for use in update",type:"ApplicationProcess",layer:"application"},{id:"fbde07d7",name:"SQL DELETE entity2 rows by FK1",type:"ApplicationProcess",layer:"application"},{id:"9aa0f777",name:"add all the rows in the table again",type:"ApplicationProcess",layer:"application"},{id:"c30da4c7",name:"for each elements of array of refs",type:"ApplicationProcess",layer:"application"},{id:"8e244dca",name:"call insert",type:"ApplicationProcess",layer:"application"},{id:"d7dfbd0f",name:"Delete (id)",type:"ApplicationFunction",layer:"application"},{id:"17024550",name:"get id",type:"ApplicationProcess",layer:"application"},{id:"d37b8f4c",name:"SQL delete entity 1 row statement",type:"ApplicationProcess",layer:"application"},{id:"105b4823",name:"Read(id)",type:"ApplicationFunction",layer:"application"},{id:"d9b3d810",name:"SQL select entity 1 row statement",type:"ApplicationProcess",layer:"application"},{id:"4f283dab",name:"return object of type 'class type 1' (with refs to objs 1 inside)",type:"ApplicationProcess",layer:"application"},{id:"77049787",name:"factory (props)",type:"ApplicationFunction",layer:"application"},{id:"c938a2a1",name:"create obj and fill properties acording with input args",type:"ApplicationProcess",layer:"application"},{id:"a6d33424",name:"return created object of type 'class type 2'",type:"ApplicationProcess",layer:"application"},{id:"43e2fcd3",name:"find objs2 by FK",type:"ApplicationFunction",layer:"application"},{id:"592eeb4b",name:"SQL select entity 2 rows by FK1",type:"ApplicationProcess",layer:"application"},{id:"54cacba8",name:"for each row",type:"ApplicationProcess",layer:"application"},{id:"96de57f9",name:"query results transmitted to the factory, and it returns an object",type:"ApplicationProcess",layer:"application"},{id:"84198592",name:"insert into entity 2(v_object1, v_object2)",type:"ApplicationFunction",layer:"application"},{id:"5591594d",name:"get props from v_object1,2 for use in insert",type:"ApplicationProcess",layer:"application"},{id:"d3cd8aac",name:"SQL insert entity 2 row statement",type:"ApplicationProcess",layer:"application"},{id:"138b28d5",name:"class type 1",type:"ApplicationComponent",layer:"application"},{id:"c80ab702",name:"properties (corresponds to table columns)",type:"DataObject",layer:"application"},{id:"67160eb5",name:"some business logic function 1",type:"ApplicationFunction",layer:"application"},{id:"e7489597",name:"some business logic function 2",type:"ApplicationFunction",layer:"application"},{id:"dea25611",name:"REF to object of type 2",type:"DataObject",layer:"application"},{id:"a7dce3a2",name:"class type 2 (IMMUTABLE)",type:"ApplicationComponent",layer:"application"},{id:"4e068eaa",name:"properties (corresponds to table columns)",type:"DataObject",layer:"application"},{id:"a8dc9f10",name:"equal (key1, key2)",type:"ApplicationFunction",layer:"application"},{id:"2d7ee238",name:"next key()",type:"ApplicationFunction",layer:"application"},{id:"5d8eaf63",name:"some process",type:"ApplicationProcess",layer:"application"},{id:"d4b4e83c",name:"some operations with domain objects",type:"ApplicationProcess",layer:"application"},{id:"0bf73b16",name:"some operations with domain objects",type:"ApplicationProcess",layer:"application"},{id:"7fb6046e",name:"table",type:"DataObject",layer:"application"},{id:"6a394167",name:"entity 1",type:"DataObject",layer:"application"},{id:"198ed308",name:"class mapper 1",type:"ApplicationComponent",layer:"application"},{id:"7bc8a1ec",name:"Create (v_object)",type:"ApplicationFunction",layer:"application"},{id:"26974082",name:"fabric (props)",type:"ApplicationFunction",layer:"application"},{id:"040dd8c0",name:"Update (v_object)",type:"ApplicationFunction",layer:"application"},{id:"185c5876",name:"Delete (Key)",type:"ApplicationFunction",layer:"application"},{id:"7f520eda",name:"Read(Key obj)",type:"ApplicationFunction",layer:"application"},{id:"892dac50",name:"Find(parameters)",type:"ApplicationFunction",layer:"application"},{id:"565211d6",name:"entity 2",type:"DataObject",layer:"application"},{id:"927e0aa5",name:"some business logic function 1 (copy)",type:"ApplicationFunction",layer:"application"},{id:"2f56b081",name:"some business logic function 2 (copy)",type:"ApplicationFunction",layer:"application"},{id:"e4fc1099",name:"class type 1",type:"ApplicationComponent",layer:"application"},{id:"99c44edb",name:"variable (array of references to objects of class type 2)",type:"DataObject",layer:"application"},{id:"8c85c9e6",name:"class type 2 (IMMUTABLE)",type:"ApplicationComponent",layer:"application"},{id:"fe597b68",name:"entity 1",type:"DataObject",layer:"application"},{id:"a86d133a",name:"entity 2",type:"DataObject",layer:"application"},{id:"838f0680",name:"foreign key to entity 1",type:"DataObject",layer:"application"},{id:"b39ec774",name:"class mapper 1",type:"ApplicationComponent",layer:"application"},{id:"ad4cbedc",name:"Create/insert (v_object)",type:"ApplicationFunction",layer:"application"},{id:"0b26ab6a",name:"SQL insert 1 empty row",type:"ApplicationProcess",layer:"application"},{id:"96dfd3de",name:"call update",type:"ApplicationProcess",layer:"application"},{id:"db4de15d",name:"factory (props)",type:"ApplicationFunction",layer:"application"},{id:"13c1ae22",name:"create obj of type 1 and fill properties acording with input args",type:"ApplicationProcess",layer:"application"},{id:"fde8e33f",name:"return created object of type 'class type 1' (with object of class type 2 inside)",type:"ApplicationProcess",layer:"application"},{id:"a2ce9872",name:"call find, and add result to arr",type:"ApplicationProcess",layer:"application"},{id:"479fb9eb",name:"Update (v_object)",type:"ApplicationFunction",layer:"application"},{id:"e0f91ad8",name:"get props from v_object for use in update",type:"ApplicationProcess",layer:"application"},{id:"a3d33269",name:"SQL UPDATE rows (of entity 1 and entity 2) by PK1",type:"ApplicationProcess",layer:"application"},{id:"019c10f2",name:"add all the rows in the table again",type:"ApplicationProcess",layer:"application"},{id:"8d81c049",name:"for each elements of array of refs",type:"ApplicationProcess",layer:"application"},{id:"be134736",name:"call insert",type:"ApplicationProcess",layer:"application"},{id:"2ffa3405",name:"Delete (id)",type:"ApplicationFunction",layer:"application"},{id:"31e80787",name:"get id",type:"ApplicationProcess",layer:"application"},{id:"f241e2d0",name:"SQL delete row statement",type:"ApplicationProcess",layer:"application"},{id:"074ba9b8",name:"Read(id)",type:"ApplicationFunction",layer:"application"},{id:"eafbe36e",name:"SQL select row statement",type:"ApplicationProcess",layer:"application"},{id:"ecc80c8e",name:"return object of type 'class type 1' (with ref to objs 1 inside)",type:"ApplicationProcess",layer:"application"},{id:"b94ce81e",name:"factory (props)",type:"ApplicationFunction",layer:"application"},{id:"e810047c",name:"create obj and fill properties acording with input args",type:"ApplicationProcess",layer:"application"},{id:"09dbeffc",name:"return created object of type 'class type 2'",type:"ApplicationProcess",layer:"application"},{id:"c6101809",name:"find object2 by PK1",type:"ApplicationFunction",layer:"application"},{id:"f39fc254",name:"SQL select row by PK1",type:"ApplicationProcess",layer:"application"},{id:"a97e20ff",name:"for each row",type:"ApplicationProcess",layer:"application"},{id:"293b6c84",name:"query results transmitted to the factory, and it returns an object",type:"ApplicationProcess",layer:"application"},{id:"c8bbc0fc",name:"insert into entity 2(v_object1, v_object2)",type:"ApplicationFunction",layer:"application"},{id:"5c11888e",name:"get props from v_object1,2 for use in insert",type:"ApplicationProcess",layer:"application"},{id:"cc257e91",name:"SQL insert entity 2 row statement",type:"ApplicationProcess",layer:"application"},{id:"8a5f138f",name:"get obj of class type 2",type:"ApplicationProcess",layer:"application"}],b=[{id:"c3229afb",sourceId:"747f47a5",targetId:"066d0d74",type:"CompositionRelationship"},{id:"75153307",sourceId:"43e2fcd3",targetId:"066d0d74",type:"ServingRelationship"},{id:"9df638f1",sourceId:"105b4823",targetId:"4f283dab",type:"CompositionRelationship"},{id:"da36cc54",sourceId:"1992bca1",targetId:"43e2fcd3",type:"AssignmentRelationship"},{id:"f4fce783",sourceId:"7603ac14",targetId:"501cd4d4",type:"AccessRelationship"},{id:"99ce4db2",sourceId:"d9b3d810",targetId:"4f283dab",type:"FlowRelationship"},{id:"e42eb4f1",sourceId:"b0d4e6dc",targetId:"88ca7e13",type:"CompositionRelationship"},{id:"96f26c13",sourceId:"77049787",targetId:"96de57f9",type:"ServingRelationship"},{id:"7dcd974e",sourceId:"d7dfbd0f",targetId:"17024550",type:"CompositionRelationship"},{id:"d385ba38",sourceId:"6161e04e",targetId:"77e973f9",type:"CompositionRelationship"},{id:"e9e2222e",sourceId:"4c369cee",targetId:"8871d5e8",type:"CompositionRelationship"},{id:"d1962383",sourceId:"17024550",targetId:"d37b8f4c",type:"FlowRelationship"},{id:"02f5407d",sourceId:"b0d4e6dc",targetId:"9aa0f777",type:"CompositionRelationship"},{id:"ba71b511",sourceId:"fbde07d7",targetId:"9aa0f777",type:"FlowRelationship"},{id:"30e7be2e",sourceId:"c30da4c7",targetId:"8e244dca",type:"CompositionRelationship"},{id:"0249b376",sourceId:"5591594d",targetId:"d3cd8aac",type:"FlowRelationship"},{id:"044b9b78",sourceId:"8871d5e8",targetId:"1f0a0eed",type:"FlowRelationship"},{id:"0402eec0",sourceId:"1992bca1",targetId:"77049787",type:"AssignmentRelationship"},{id:"0e5f3141",sourceId:"1992bca1",targetId:"84198592",type:"AssignmentRelationship"},{id:"d0ccaf95",sourceId:"1992bca1",targetId:"4f9f1f34",type:"AssociationRelationship"},{id:"89101d21",sourceId:"88ca7e13",targetId:"fbde07d7",type:"FlowRelationship"},{id:"0dc79e7d",sourceId:"747f47a5",targetId:"4678e59b",type:"CompositionRelationship"},{id:"a3f5c863",sourceId:"9aa0f777",targetId:"c30da4c7",type:"CompositionRelationship"},{id:"e2162afd",sourceId:"592eeb4b",targetId:"54cacba8",type:"CompositionRelationship"},{id:"6e2b88ba",sourceId:"066d0d74",targetId:"b0751eac",type:"FlowRelationship"},{id:"196cbe43",sourceId:"747f47a5",targetId:"4f283dab",type:"ServingRelationship"},{id:"8b451d98",sourceId:"1992bca1",targetId:"105b4823",type:"AssignmentRelationship"},{id:"60e2b677",sourceId:"7603ac14",targetId:"1992bca1",type:"ServingRelationship"},{id:"13c79495",sourceId:"84198592",targetId:"5591594d",type:"CompositionRelationship"},{id:"608fa9bb",sourceId:"4678e59b",targetId:"066d0d74",type:"FlowRelationship"},{id:"87e8ae5c",sourceId:"1992bca1",targetId:"4c369cee",type:"AssignmentRelationship"},{id:"7ca8d504",sourceId:"77049787",targetId:"c938a2a1",type:"CompositionRelationship"},{id:"fdd7f51c",sourceId:"77049787",targetId:"a6d33424",type:"CompositionRelationship"},{id:"5b8f992b",sourceId:"1992bca1",targetId:"747f47a5",type:"AssignmentRelationship"},{id:"2d91b832",sourceId:"501cd4d4",targetId:"d57e6435",type:"AssociationRelationship"},{id:"75f51027",sourceId:"1992bca1",targetId:"6161e04e",type:"AssociationRelationship"},{id:"e00ba233",sourceId:"8e244dca",targetId:"84198592",type:"FlowRelationship"},{id:"8b1026cb",sourceId:"77e973f9",targetId:"4f9f1f34",type:"AssociationRelationship"},{id:"c39af9ce",sourceId:"d7dfbd0f",targetId:"d37b8f4c",type:"CompositionRelationship"},{id:"f36d808d",sourceId:"c938a2a1",targetId:"a6d33424",type:"FlowRelationship"},{id:"2c6c3074",sourceId:"4c369cee",targetId:"1f0a0eed",type:"CompositionRelationship"},{id:"356139cb",sourceId:"747f47a5",targetId:"b0751eac",type:"CompositionRelationship"},{id:"5320480f",sourceId:"b0d4e6dc",targetId:"fbde07d7",type:"CompositionRelationship"},{id:"a1f0cec7",sourceId:"1992bca1",targetId:"b0d4e6dc",type:"AssignmentRelationship"},{id:"51492ac0",sourceId:"43e2fcd3",targetId:"592eeb4b",type:"CompositionRelationship"},{id:"de6eb635",sourceId:"84198592",targetId:"d3cd8aac",type:"CompositionRelationship"},{id:"a79abfc3",sourceId:"54cacba8",targetId:"96de57f9",type:"CompositionRelationship"},{id:"08d0529c",sourceId:"d57e6435",targetId:"1992bca1",type:"ServingRelationship"},{id:"db1f07e1",sourceId:"1992bca1",targetId:"d7dfbd0f",type:"AssignmentRelationship"},{id:"e57684e0",sourceId:"105b4823",targetId:"d9b3d810",type:"CompositionRelationship"},{id:"4b2372c8",sourceId:"138b28d5",targetId:"dea25611",type:"AccessRelationship"},{id:"9df868cf",sourceId:"7fb6046e",targetId:"6a394167",type:"CompositionRelationship"},{id:"f26ecebc",sourceId:"a7dce3a2",targetId:"4e068eaa",type:"AccessRelationship"},{id:"1075a452",sourceId:"198ed308",targetId:"185c5876",type:"AssignmentRelationship"},{id:"5bc35cb5",sourceId:"198ed308",targetId:"7bc8a1ec",type:"AssignmentRelationship"},{id:"ae799e57",sourceId:"a7dce3a2",targetId:"565211d6",type:"AssociationRelationship"},{id:"ff44055f",sourceId:"5d8eaf63",targetId:"0bf73b16",type:"CompositionRelationship"},{id:"aa0eecc0",sourceId:"5d8eaf63",targetId:"d4b4e83c",type:"CompositionRelationship"},{id:"5186575e",sourceId:"138b28d5",targetId:"67160eb5",type:"AssignmentRelationship"},{id:"771add66",sourceId:"198ed308",targetId:"26974082",type:"AssignmentRelationship"},{id:"f018f37d",sourceId:"7f520eda",targetId:"d4b4e83c",type:"ServingRelationship"},{id:"210e9ba3",sourceId:"a7dce3a2",targetId:"a8dc9f10",type:"AssignmentRelationship"},{id:"aff335e4",sourceId:"dea25611",targetId:"a7dce3a2",type:"AssociationRelationship"},{id:"8727600d",sourceId:"7bc8a1ec",targetId:"0bf73b16",type:"ServingRelationship"},{id:"a01c8a0e",sourceId:"198ed308",targetId:"892dac50",type:"AssignmentRelationship"},{id:"293f0999",sourceId:"198ed308",targetId:"7f520eda",type:"AssignmentRelationship"},{id:"1ecae5b6",sourceId:"a7dce3a2",targetId:"2d7ee238",type:"AssignmentRelationship"},{id:"c2cfb919",sourceId:"198ed308",targetId:"7fb6046e",type:"AccessRelationship"},{id:"05de56d6",sourceId:"26974082",targetId:"0bf73b16",type:"ServingRelationship"},{id:"ec60ee0c",sourceId:"040dd8c0",targetId:"0bf73b16",type:"ServingRelationship"},{id:"c3ad7eb8",sourceId:"185c5876",targetId:"d4b4e83c",type:"ServingRelationship"},{id:"97837cff",sourceId:"198ed308",targetId:"040dd8c0",type:"AssignmentRelationship"},{id:"3a8a5766",sourceId:"892dac50",targetId:"d4b4e83c",type:"ServingRelationship"},{id:"76da6e86",sourceId:"138b28d5",targetId:"c80ab702",type:"AccessRelationship"},{id:"bac04303",sourceId:"138b28d5",targetId:"e7489597",type:"AssignmentRelationship"},{id:"ff2d80b4",sourceId:"7fb6046e",targetId:"565211d6",type:"CompositionRelationship"},{id:"c09c84fa",sourceId:"a7dce3a2",targetId:"927e0aa5",type:"AssignmentRelationship"},{id:"09d72f15",sourceId:"a7dce3a2",targetId:"2f56b081",type:"AssignmentRelationship"},{id:"0e123981",sourceId:"db4de15d",targetId:"a2ce9872",type:"CompositionRelationship"},{id:"bdeefc3e",sourceId:"c6101809",targetId:"a2ce9872",type:"ServingRelationship"},{id:"579e535f",sourceId:"074ba9b8",targetId:"ecc80c8e",type:"CompositionRelationship"},{id:"2751f9be",sourceId:"b39ec774",targetId:"c6101809",type:"AssignmentRelationship"},{id:"cd91a63b",sourceId:"e4fc1099",targetId:"99c44edb",type:"AccessRelationship"},{id:"185c4cda",sourceId:"eafbe36e",targetId:"ecc80c8e",type:"FlowRelationship"},{id:"9a32be7b",sourceId:"479fb9eb",targetId:"e0f91ad8",type:"CompositionRelationship"},{id:"83261cea",sourceId:"b94ce81e",targetId:"293b6c84",type:"ServingRelationship"},{id:"31c6755b",sourceId:"2ffa3405",targetId:"31e80787",type:"CompositionRelationship"},{id:"782053c1",sourceId:"a86d133a",targetId:"838f0680",type:"CompositionRelationship"},{id:"8504c97b",sourceId:"ad4cbedc",targetId:"0b26ab6a",type:"CompositionRelationship"},{id:"58f1e33d",sourceId:"31e80787",targetId:"f241e2d0",type:"FlowRelationship"},{id:"8a50546e",sourceId:"479fb9eb",targetId:"019c10f2",type:"CompositionRelationship"},{id:"62d90cd4",sourceId:"a3d33269",targetId:"019c10f2",type:"FlowRelationship"},{id:"4191dedb",sourceId:"8d81c049",targetId:"be134736",type:"CompositionRelationship"},{id:"4cf162ac",sourceId:"5c11888e",targetId:"cc257e91",type:"FlowRelationship"},{id:"b1b1bef8",sourceId:"0b26ab6a",targetId:"96dfd3de",type:"FlowRelationship"},{id:"4115d208",sourceId:"b39ec774",targetId:"b94ce81e",type:"AssignmentRelationship"},{id:"52a327ba",sourceId:"b39ec774",targetId:"c8bbc0fc",type:"AssignmentRelationship"},{id:"ebd80d35",sourceId:"b39ec774",targetId:"fe597b68",type:"AssociationRelationship"},{id:"05f8cf54",sourceId:"e0f91ad8",targetId:"a3d33269",type:"FlowRelationship"},{id:"f997237f",sourceId:"db4de15d",targetId:"13c1ae22",type:"CompositionRelationship"},{id:"173fa64e",sourceId:"019c10f2",targetId:"8d81c049",type:"CompositionRelationship"},{id:"b0df75b4",sourceId:"f39fc254",targetId:"a97e20ff",type:"CompositionRelationship"},{id:"54e4b0bc",sourceId:"a2ce9872",targetId:"fde8e33f",type:"FlowRelationship"},{id:"91fa29ed",sourceId:"db4de15d",targetId:"ecc80c8e",type:"ServingRelationship"},{id:"c0ed950b",sourceId:"b39ec774",targetId:"074ba9b8",type:"AssignmentRelationship"},{id:"0f9a5687",sourceId:"e4fc1099",targetId:"b39ec774",type:"ServingRelationship"},{id:"7314478a",sourceId:"c8bbc0fc",targetId:"5c11888e",type:"CompositionRelationship"},{id:"2c2527b0",sourceId:"13c1ae22",targetId:"a2ce9872",type:"FlowRelationship"},{id:"7a459aeb",sourceId:"b39ec774",targetId:"ad4cbedc",type:"AssignmentRelationship"},{id:"d6107967",sourceId:"b94ce81e",targetId:"e810047c",type:"CompositionRelationship"},{id:"519306e6",sourceId:"b94ce81e",targetId:"09dbeffc",type:"CompositionRelationship"},{id:"89df9e75",sourceId:"b39ec774",targetId:"db4de15d",type:"AssignmentRelationship"},{id:"b4ba1b08",sourceId:"99c44edb",targetId:"8c85c9e6",type:"AssociationRelationship"},{id:"2942bd1f",sourceId:"b39ec774",targetId:"a86d133a",type:"AssociationRelationship"},{id:"3fc3cf42",sourceId:"be134736",targetId:"c8bbc0fc",type:"FlowRelationship"},{id:"cdf1b337",sourceId:"838f0680",targetId:"fe597b68",type:"AssociationRelationship"},{id:"ecbfa194",sourceId:"2ffa3405",targetId:"f241e2d0",type:"CompositionRelationship"},{id:"6a4e854c",sourceId:"e810047c",targetId:"09dbeffc",type:"FlowRelationship"},{id:"30869839",sourceId:"ad4cbedc",targetId:"96dfd3de",type:"CompositionRelationship"},{id:"f12abbc4",sourceId:"db4de15d",targetId:"fde8e33f",type:"CompositionRelationship"},{id:"a895cf0e",sourceId:"479fb9eb",targetId:"a3d33269",type:"CompositionRelationship"},{id:"11b9933b",sourceId:"b39ec774",targetId:"479fb9eb",type:"AssignmentRelationship"},{id:"ad620e59",sourceId:"c6101809",targetId:"f39fc254",type:"CompositionRelationship"},{id:"5e1e8e8c",sourceId:"c8bbc0fc",targetId:"cc257e91",type:"CompositionRelationship"},{id:"8a1ef41a",sourceId:"a97e20ff",targetId:"293b6c84",type:"CompositionRelationship"},{id:"8b1a576b",sourceId:"8c85c9e6",targetId:"b39ec774",type:"ServingRelationship"},{id:"3ae9edd6",sourceId:"b39ec774",targetId:"2ffa3405",type:"AssignmentRelationship"},{id:"685d701a",sourceId:"074ba9b8",targetId:"eafbe36e",type:"CompositionRelationship"},{id:"3594e20a",sourceId:"13c1ae22",targetId:"fde8e33f",type:"FlowRelationship"},{id:"4676581b",sourceId:"ecc80c8e",targetId:"db4de15d",type:"FlowRelationship"},{id:"99555fda",sourceId:"db4de15d",targetId:"8a5f138f",type:"CompositionRelationship"},{id:"7f16714f",sourceId:"13c1ae22",targetId:"db4de15d",type:"FlowRelationship"},{id:"1a06ab72",sourceId:"13c1ae22",targetId:"8a5f138f",type:"FlowRelationship"},{id:"aa46ab01",sourceId:"8a5f138f",targetId:"fde8e33f",type:"FlowRelationship"},{id:"350a1ac6",sourceId:"8a5f138f",targetId:"b94ce81e",type:"FlowRelationship"},{id:"71804a36",sourceId:"f39fc254",targetId:"293b6c84",type:"CompositionRelationship"},{id:"0e6c0220",sourceId:"293b6c84",targetId:"b94ce81e",type:"FlowRelationship"},{id:"4bd67d9a",sourceId:"6a394167",targetId:"138b28d5",type:"AssociationRelationship"},{id:"724a2c0a",sourceId:"479fb9eb",targetId:"0bf73b16",type:"ServingRelationship"},{id:"eb259839",sourceId:"96dfd3de",targetId:"479fb9eb",type:"FlowRelationship"}],f=[{id:"f17c3225",name:"Embedded Value",viewpoint:""}],I={identifier:e,archimateId:t,name:i,description:a,formats:o,source:p,sourceFile:d,sourceFormat:c,timestamp:n,tags:s,duplicates:r,language:l,elements:y,relationships:b,views:f};export{t as archimateId,I as default,a as description,r as duplicates,y as elements,o as formats,e as identifier,l as language,i as name,b as relationships,p as source,d as sourceFile,c as sourceFormat,s as tags,n as timestamp,f as views};