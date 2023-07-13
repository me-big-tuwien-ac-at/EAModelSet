const e="https://me.big.tuwien.ac.at/EAModelSet/id-83bd5767",i="id-83bd5767",d="4a Serialized LOB",t="",a=["XML","CSV","JSON","ARCHIMATE"],c="GitHub",o="raw-data/github/xml/serialized_lob.xml",p="XML",n="29-06-2023 09:27:54",s=[],r=[],l="en",y=[{id:"id-7e6ae250",name:"class type 1",type:"ApplicationComponent",layer:"application"},{id:"id-8703bf88",name:"properties (corresponds to table columns)",type:"DataObject",layer:"application"},{id:"id-010c811f",name:"some business logic function 1",type:"ApplicationFunction",layer:"application"},{id:"id-8eb61848",name:"some business logic function 2",type:"ApplicationFunction",layer:"application"},{id:"f7acc256",name:"REF to object of type 2",type:"DataObject",layer:"application"},{id:"id-81695fe7",name:"class type 2 (IMMUTABLE)",type:"ApplicationComponent",layer:"application"},{id:"ae023e30",name:"properties (corresponds to table columns)",type:"DataObject",layer:"application"},{id:"id-57b90de5",name:"some business logic function 1 (copy)",type:"ApplicationFunction",layer:"application"},{id:"id-92cc5ef3",name:"some business logic function 2 (copy)",type:"ApplicationFunction",layer:"application"},{id:"id-49fa839a",name:"some process",type:"ApplicationProcess",layer:"application"},{id:"e5989d01",name:"some operations with domain objects",type:"ApplicationProcess",layer:"application"},{id:"id-633bfce8",name:"table",type:"DataObject",layer:"application"},{id:"id-68d92b77",name:"PK",type:"DataObject",layer:"application"},{id:"ce196740",name:"XML",type:"DataObject",layer:"application"},{id:"id-01c1462e",name:"class mapper 1",type:"ApplicationComponent",layer:"application"},{id:"id-7689d9c9",name:"Create/insert (v_object)",type:"ApplicationFunction",layer:"application"},{id:"id-44b7b247",name:"SQL insert 1 empty row",type:"ApplicationProcess",layer:"application"},{id:"id-43cd2d40",name:"call update",type:"ApplicationProcess",layer:"application"},{id:"id-2484eb2f",name:"factory (props)",type:"ApplicationFunction",layer:"application"},{id:"id-5c9a2b6e",name:"create obj of type 1 and fill properties acording with input args",type:"ApplicationProcess",layer:"application"},{id:"id-75db36a4",name:"return created object of type 'class type 1' (with object of class type 2 inside)",type:"ApplicationProcess",layer:"application"},{id:"id-2b505cc1",name:"get obj of class type 2",type:"ApplicationProcess",layer:"application"},{id:"id-2795e437",name:"Update (v_object)",type:"ApplicationFunction",layer:"application"},{id:"id-2e5f1618",name:"get props from v_object for use in update",type:"ApplicationProcess",layer:"application"},{id:"id-2667319b",name:"SQL UPDATE rows (of entity 1 and entity 2) by PK1",type:"ApplicationProcess",layer:"application"},{id:"id-7f29ff6e",name:"Delete (id)",type:"ApplicationFunction",layer:"application"},{id:"e68cffe3",name:"get id",type:"ApplicationProcess",layer:"application"},{id:"id-5f6fc540",name:"SQL delete row statement",type:"ApplicationProcess",layer:"application"},{id:"id-63236cd2",name:"Read(id)",type:"ApplicationFunction",layer:"application"},{id:"id-7bd778ac",name:"SQL select row statement",type:"ApplicationProcess",layer:"application"},{id:"id-62cbcdd6",name:"return object of type 'class type 1' (with ref to objs 1 inside)",type:"ApplicationProcess",layer:"application"},{id:"e8fa1002",name:"factory (props)",type:"ApplicationFunction",layer:"application"},{id:"id-8a86a756",name:"create obj and fill properties acording with input args",type:"ApplicationProcess",layer:"application"},{id:"id-63818cc4",name:"return created object of type 'class type 2'",type:"ApplicationProcess",layer:"application"},{id:"id-0f1b9548",name:"find object2 by PK1",type:"ApplicationFunction",layer:"application"},{id:"id-93eff468",name:"SQL select row by PK1",type:"ApplicationProcess",layer:"application"},{id:"ace00727",name:"query results transmitted to the factory, and it returns an object",type:"ApplicationProcess",layer:"application"},{id:"id-9ab77603",name:"obj1 from(XML)",type:"ApplicationFunction",layer:"application"},{id:"id-976c9dcc",name:"parse input XML",type:"ApplicationProcess",layer:"application"},{id:"id-1c17e6fa",name:"return object of type 1",type:"ApplicationProcess",layer:"application"},{id:"id-2f0270b6",name:"toXML (obj1)",type:"ApplicationFunction",layer:"application"},{id:"id-6cbfb853",name:"serialize input obj into XML",type:"ApplicationProcess",layer:"application"},{id:"id-2fdc6c98",name:"return XML",type:"ApplicationProcess",layer:"application"},{id:"id-2edc6466",name:"toXML (obj1)",type:"ApplicationFunction",layer:"application"},{id:"c1fd8488",name:"serialize input obj into XML",type:"ApplicationProcess",layer:"application"},{id:"id-33a4234e",name:"return XML",type:"ApplicationProcess",layer:"application"},{id:"id-1d0d119e",name:"obj2 from(XML)",type:"ApplicationFunction",layer:"application"},{id:"id-30812f95",name:"parse input XML",type:"ApplicationProcess",layer:"application"},{id:"id-367d6473",name:"return object of type 2",type:"ApplicationProcess",layer:"application"}],b=[{id:"e3608933",sourceId:"id-2484eb2f",targetId:"id-5c9a2b6e",type:"Composition"},{id:"e1c6c1fa",sourceId:"f7acc256",targetId:"id-81695fe7",type:"Association"},{id:"id-7398df54",sourceId:"id-5c9a2b6e",targetId:"id-2484eb2f",type:"Flow"},{id:"dcb79167",sourceId:"id-7e6ae250",targetId:"f7acc256",type:"Access"},{id:"c7142e61",sourceId:"id-7bd778ac",targetId:"id-62cbcdd6",type:"Flow"},{id:"id-3e00d73c",sourceId:"id-2b505cc1",targetId:"id-75db36a4",type:"Flow"},{id:"id-51d08a25",sourceId:"id-7f29ff6e",targetId:"id-5f6fc540",type:"Composition"},{id:"id-02578828",sourceId:"id-7f29ff6e",targetId:"e68cffe3",type:"Composition"},{id:"id-17b38526",sourceId:"id-2e5f1618",targetId:"id-2667319b",type:"Flow"},{id:"id-4322b7a2",sourceId:"id-49fa839a",targetId:"e5989d01",type:"Composition"},{id:"cc2d0828",sourceId:"id-2484eb2f",targetId:"id-75db36a4",type:"Composition"},{id:"id-84407144",sourceId:"id-633bfce8",targetId:"ce196740",type:"Composition"},{id:"id-2cecd695",sourceId:"id-2795e437",targetId:"id-2667319b",type:"Composition"},{id:"id-7b5a2642",sourceId:"id-01c1462e",targetId:"id-63236cd2",type:"Assignment"},{id:"b84c8d74",sourceId:"id-0f1b9548",targetId:"id-93eff468",type:"Composition"},{id:"f6230dbc",sourceId:"e8fa1002",targetId:"id-63818cc4",type:"Composition"},{id:"id-7a3c5770",sourceId:"id-7e6ae250",targetId:"id-8eb61848",type:"Assignment"},{id:"f9cf0232",sourceId:"id-7689d9c9",targetId:"id-44b7b247",type:"Composition"},{id:"id-94cc085a",sourceId:"id-8a86a756",targetId:"id-63818cc4",type:"Flow"},{id:"e133ae48",sourceId:"id-2b505cc1",targetId:"e8fa1002",type:"Flow"},{id:"id-593f2c80",sourceId:"id-2795e437",targetId:"e5989d01",type:"Serving"},{id:"bec09c20",sourceId:"e8fa1002",targetId:"id-8a86a756",type:"Composition"},{id:"e01fd5fd",sourceId:"id-633bfce8",targetId:"id-01c1462e",type:"Association"},{id:"d6b3364d",sourceId:"id-63236cd2",targetId:"id-7bd778ac",type:"Composition"},{id:"id-2336eded",sourceId:"id-633bfce8",targetId:"id-68d92b77",type:"Composition"},{id:"id-9f0b946d",sourceId:"ace00727",targetId:"e8fa1002",type:"Flow"},{id:"id-05e7b978",sourceId:"e68cffe3",targetId:"id-5f6fc540",type:"Flow"},{id:"id-982af1ca",sourceId:"id-7e6ae250",targetId:"id-010c811f",type:"Assignment"},{id:"b2e1f8d2",sourceId:"id-81695fe7",targetId:"ae023e30",type:"Access"},{id:"id-01644331",sourceId:"id-62cbcdd6",targetId:"id-2484eb2f",type:"Flow"},{id:"f5a87479",sourceId:"id-01c1462e",targetId:"e8fa1002",type:"Assignment"},{id:"db38067b",sourceId:"id-7689d9c9",targetId:"id-43cd2d40",type:"Composition"},{id:"e61123e7",sourceId:"id-93eff468",targetId:"ace00727",type:"Composition"},{id:"id-8da2947f",sourceId:"id-7e6ae250",targetId:"id-8703bf88",type:"Access"},{id:"afd29499",sourceId:"id-44b7b247",targetId:"id-43cd2d40",type:"Flow"},{id:"id-2a64d7dc",sourceId:"id-81695fe7",targetId:"id-57b90de5",type:"Assignment"},{id:"id-1c4361ba",sourceId:"id-01c1462e",targetId:"id-2484eb2f",type:"Assignment"},{id:"id-0fa79737",sourceId:"id-81695fe7",targetId:"id-92cc5ef3",type:"Assignment"},{id:"a1515b44",sourceId:"id-01c1462e",targetId:"id-2795e437",type:"Assignment"},{id:"e9672ed1",sourceId:"id-01c1462e",targetId:"id-7f29ff6e",type:"Assignment"},{id:"id-535d4a90",sourceId:"id-5c9a2b6e",targetId:"id-2b505cc1",type:"Flow"},{id:"id-9eb35325",sourceId:"id-2795e437",targetId:"id-2e5f1618",type:"Composition"},{id:"a93ac2d4",sourceId:"id-63236cd2",targetId:"id-62cbcdd6",type:"Composition"},{id:"id-744640d9",sourceId:"id-01c1462e",targetId:"id-0f1b9548",type:"Assignment"},{id:"id-334a8f71",sourceId:"id-01c1462e",targetId:"id-7689d9c9",type:"Assignment"},{id:"febcb1e2",sourceId:"id-81695fe7",targetId:"ce196740",type:"Association"},{id:"id-55ccba75",sourceId:"id-2484eb2f",targetId:"id-2b505cc1",type:"Composition"},{id:"id-84139315",sourceId:"id-01c1462e",targetId:"id-9ab77603",type:"Assignment"},{id:"id-30c6596a",sourceId:"id-5c9a2b6e",targetId:"id-9ab77603",type:"Realization"},{id:"id-1c20c1e3",sourceId:"id-5c9a2b6e",targetId:"id-9ab77603",type:"Flow"},{id:"a34f785b",sourceId:"id-9ab77603",targetId:"id-976c9dcc",type:"Composition"},{id:"eab24fa5",sourceId:"id-9ab77603",targetId:"id-1c17e6fa",type:"Composition"},{id:"id-42b078f2",sourceId:"id-976c9dcc",targetId:"id-1c17e6fa",type:"Flow"},{id:"id-256c3573",sourceId:"id-2f0270b6",targetId:"id-2fdc6c98",type:"Composition"},{id:"bb648a11",sourceId:"id-6cbfb853",targetId:"id-2fdc6c98",type:"Flow"},{id:"id-226891b1",sourceId:"id-2f0270b6",targetId:"id-6cbfb853",type:"Composition"},{id:"id-06a3187d",sourceId:"id-01c1462e",targetId:"id-2f0270b6",type:"Assignment"},{id:"df0e4779",sourceId:"c1fd8488",targetId:"id-33a4234e",type:"Flow"},{id:"id-7cdf5267",sourceId:"id-2edc6466",targetId:"id-33a4234e",type:"Composition"},{id:"id-718e24fb",sourceId:"id-2edc6466",targetId:"c1fd8488",type:"Composition"},{id:"ac22622a",sourceId:"id-01c1462e",targetId:"id-2edc6466",type:"Assignment"},{id:"c82b5778",sourceId:"id-1d0d119e",targetId:"id-30812f95",type:"Composition"},{id:"id-96511b85",sourceId:"id-30812f95",targetId:"id-367d6473",type:"Flow"},{id:"id-2cb5e2b1",sourceId:"id-1d0d119e",targetId:"id-367d6473",type:"Composition"},{id:"d135b637",sourceId:"id-01c1462e",targetId:"id-1d0d119e",type:"Assignment"},{id:"id-61f8c1b6",sourceId:"id-8a86a756",targetId:"id-1d0d119e",type:"Flow"},{id:"id-0e0e4e79",sourceId:"id-43cd2d40",targetId:"id-2795e437",type:"Flow"},{id:"id-08dea7c0",sourceId:"id-2667319b",targetId:"id-2f0270b6",type:"Flow"},{id:"id-7dbf15e3",sourceId:"id-6cbfb853",targetId:"id-2edc6466",type:"Flow"}],f=[{id:"ca95984b",name:"Serialized LOB",viewpoint:""}],I={identifier:e,archimateId:i,name:d,description:t,formats:a,source:c,sourceFile:o,sourceFormat:p,timestamp:n,tags:s,duplicates:r,language:l,elements:y,relationships:b,views:f};export{i as archimateId,I as default,t as description,r as duplicates,y as elements,a as formats,e as identifier,l as language,d as name,b as relationships,c as source,o as sourceFile,p as sourceFormat,s as tags,n as timestamp,f as views};