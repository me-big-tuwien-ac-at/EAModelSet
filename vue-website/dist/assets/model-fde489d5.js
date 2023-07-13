const e="https://me.big.tuwien.ac.at/EAModelSet/be6c596d",d="be6c596d",i="4a Dependent Mapping",t="",a=["XML","CSV","JSON","ARCHIMATE"],o="GitHub",c="raw-data/github/xml/dependent_mapping.xml",p="XML",r="29-06-2023 09:26:59",n=["DUPLICATE"],s=["raw-data/github/archimate/dependent_mapping.archimate"],y="en",l=[{id:"id-589f4d79",name:"class type 1",type:"ApplicationComponent",layer:"application"},{id:"c910f524",name:"variable (array of references to objects of class type 2)",type:"DataObject",layer:"application"},{id:"f24a4d41",name:"class type 2 (IMMUTABLE)",type:"ApplicationComponent",layer:"application"},{id:"id-28cad641",name:"entity 1",type:"DataObject",layer:"application"},{id:"ba98ce3f",name:"primary key 1",type:"DataObject",layer:"application"},{id:"id-4c8688ab",name:"entity 1-entity 2",type:"DataObject",layer:"application"},{id:"e9af99e1",name:"foreign key to entity 1",type:"DataObject",layer:"application"},{id:"id-0328713f",name:"foreign key to entity 2",type:"DataObject",layer:"application"},{id:"fe34cc09",name:"entity 2",type:"DataObject",layer:"application"},{id:"aeddb923",name:"foreign key to entity 1",type:"DataObject",layer:"application"},{id:"id-51d9f008",name:"class mapper 2",type:"ApplicationComponent",layer:"application"},{id:"id-43a99e6a",name:"Create (v_object2) and insert into (v_object1)",type:"ApplicationFunction",layer:"application"},{id:"id-8450fed8",name:"get props from v_object for use in insert",type:"ApplicationProcess",layer:"application"},{id:"c8b7881e",name:"SQL insert entity 2 row statement",type:"ApplicationProcess",layer:"application"},{id:"dd8e814e",name:"factory (props)",type:"ApplicationFunction",layer:"application"},{id:"ef1cf713",name:"create obj and fill properties acording with input args",type:"ApplicationProcess",layer:"application"},{id:"id-3f197e2f",name:"return created object of type 'class type 2'",type:"ApplicationProcess",layer:"application"},{id:"d8128ce5",name:"Update (v_object)",type:"ApplicationFunction",layer:"application"},{id:"e60de18d",name:"get props from v_object for use in update",type:"ApplicationProcess",layer:"application"},{id:"id-6d683c09",name:"SQL update entity 2 row statement",type:"ApplicationProcess",layer:"application"},{id:"eacb5409",name:"Delete (id)",type:"ApplicationFunction",layer:"application"},{id:"ded1da2a",name:"get id",type:"ApplicationProcess",layer:"application"},{id:"id-4b331086",name:"SQL delete entity 2 row statement",type:"ApplicationProcess",layer:"application"},{id:"id-1aa0dd65",name:"find objs2 by FK",type:"ApplicationFunction",layer:"application"},{id:"f8c20f3d",name:"SQL select entity 2 row statement",type:"ApplicationProcess",layer:"application"},{id:"c88c4c6e",name:"return object of type 'class type 2'",type:"ApplicationProcess",layer:"application"},{id:"id-75223437",name:"Find(parameters)",type:"ApplicationFunction",layer:"application"},{id:"e8f287a0",name:"SQL select entity 2 rows statement",type:"ApplicationProcess",layer:"application"},{id:"db80b2ef",name:"return array of objects of type 'class type 2'",type:"ApplicationProcess",layer:"application"},{id:"id-9d9d1847",name:"class mapper 1",type:"ApplicationComponent",layer:"application"},{id:"id-1ac5f376",name:"Create/insert (v_object)",type:"ApplicationFunction",layer:"application"},{id:"id-005a8fb6",name:"SQL insert 1 empty row",type:"ApplicationProcess",layer:"application"},{id:"id-1ab351f3",name:"call update",type:"ApplicationProcess",layer:"application"},{id:"dd04ea38",name:"factory (props)",type:"ApplicationFunction",layer:"application"},{id:"id-4a5c463a",name:"create obj of type 1 and fill properties acording with input args",type:"ApplicationProcess",layer:"application"},{id:"e3f75986",name:"return created object of type 'class type 1'",type:"ApplicationProcess",layer:"application"},{id:"cd112468",name:"get ref to object of type 2, and add into arr",type:"ApplicationProcess",layer:"application"},{id:"d42e9f43",name:"Update (v_object)",type:"ApplicationFunction",layer:"application"},{id:"id-6ca9f985",name:"get props from v_object for use in update",type:"ApplicationProcess",layer:"application"},{id:"id-2ff4c1ca",name:"SQL DELETE entity2 rows by FK1",type:"ApplicationProcess",layer:"application"},{id:"e679753c",name:"add all the rows in the table again",type:"ApplicationProcess",layer:"application"},{id:"id-6e1a7f0b",name:"for each elements of array of refs",type:"ApplicationProcess",layer:"application"},{id:"dfecf546",name:"call insert",type:"ApplicationProcess",layer:"application"},{id:"d23b960a",name:"Delete (id)",type:"ApplicationFunction",layer:"application"},{id:"id-38a029d5",name:"get id",type:"ApplicationProcess",layer:"application"},{id:"id-7211e7f7",name:"SQL delete entity 1 row statement",type:"ApplicationProcess",layer:"application"},{id:"id-5386f8f4",name:"Read(id)",type:"ApplicationFunction",layer:"application"},{id:"d5433a87",name:"SQL select entity 1 row statement",type:"ApplicationProcess",layer:"application"},{id:"fe810d5e",name:"return object of type 1",type:"ApplicationProcess",layer:"application"},{id:"d98e89f7",name:"return object of type 'class type 1' (with refs to objs 1 inside)",type:"ApplicationProcess",layer:"application"},{id:"id-24a219d8",name:"SQL select entity 2 rows by FK1",type:"ApplicationProcess",layer:"application"},{id:"cb8d1005",name:"for each row",type:"ApplicationProcess",layer:"application"},{id:"id-3f92aa61",name:"get ref to object of type 2 by FK",type:"ApplicationProcess",layer:"application"},{id:"bb1a66f7",name:"add ref to array",type:"ApplicationProcess",layer:"application"},{id:"cb993f2d",name:"insert into entity 2(v_object1, v_object2)",type:"ApplicationFunction",layer:"application"},{id:"id-3e7f4f15",name:"get props from v_object1,2 for use in insert",type:"ApplicationProcess",layer:"application"},{id:"id-80438e16",name:"SQL insert entity 2 row statement",type:"ApplicationProcess",layer:"application"},{id:"id-26b2ef6f",name:"SQL select entity 2 rows by FK1",type:"ApplicationProcess",layer:"application"},{id:"id-3e27b356",name:"for each row",type:"ApplicationProcess",layer:"application"},{id:"c53ceab1",name:"query results transmitted to the factory, and it returns an object",type:"ApplicationProcess",layer:"application"},{id:"efd3e870",name:"add ref to array",type:"ApplicationProcess",layer:"application"},{id:"id-11d1bf60",name:"call find, and add result to arr",type:"ApplicationProcess",layer:"application"}],f=[{id:"id-6677d65e",sourceId:"d42e9f43",targetId:"id-6ca9f985",type:"Composition"},{id:"id-70df616e",sourceId:"id-24a219d8",targetId:"cb8d1005",type:"Composition"},{id:"id-29407d37",sourceId:"d23b960a",targetId:"id-7211e7f7",type:"Composition"},{id:"id-2c8ce473",sourceId:"e8f287a0",targetId:"db80b2ef",type:"Flow"},{id:"id-5e96ac8b",sourceId:"id-51d9f008",targetId:"id-43a99e6a",type:"Assignment"},{id:"f6d34066",sourceId:"dd8e814e",targetId:"id-3f197e2f",type:"Composition"},{id:"id-22e7714f",sourceId:"id-9d9d1847",targetId:"fe34cc09",type:"Association"},{id:"id-37233bf8",sourceId:"cb8d1005",targetId:"bb1a66f7",type:"Composition"},{id:"e4072d0a",sourceId:"id-6e1a7f0b",targetId:"dfecf546",type:"Composition"},{id:"id-0070ca8a",sourceId:"id-9d9d1847",targetId:"d42e9f43",type:"Assignment"},{id:"id-0db574c7",sourceId:"id-28cad641",targetId:"ba98ce3f",type:"Composition"},{id:"id-528b80cf",sourceId:"id-4c8688ab",targetId:"e9af99e1",type:"Composition"},{id:"id-8d63aae5",sourceId:"cd112468",targetId:"e3f75986",type:"Flow"},{id:"dbe192a9",sourceId:"eacb5409",targetId:"ded1da2a",type:"Composition"},{id:"id-99121e11",sourceId:"ef1cf713",targetId:"id-3f197e2f",type:"Flow"},{id:"id-550393de",sourceId:"id-5386f8f4",targetId:"d5433a87",type:"Composition"},{id:"id-6630ad06",sourceId:"id-1aa0dd65",targetId:"f8c20f3d",type:"Composition"},{id:"id-4d045a2a",sourceId:"id-43a99e6a",targetId:"id-8450fed8",type:"Composition"},{id:"f0ff7cac",sourceId:"id-9d9d1847",targetId:"id-1ac5f376",type:"Assignment"},{id:"e6a442c2",sourceId:"d42e9f43",targetId:"id-2ff4c1ca",type:"Composition"},{id:"f71b0148",sourceId:"id-3f92aa61",targetId:"bb1a66f7",type:"Flow"},{id:"e6c5897d",sourceId:"dfecf546",targetId:"id-4c8688ab",type:"Association"},{id:"id-3c798281",sourceId:"id-6ca9f985",targetId:"id-2ff4c1ca",type:"Flow"},{id:"ad207526",sourceId:"d23b960a",targetId:"id-38a029d5",type:"Composition"},{id:"id-2141b030",sourceId:"e679753c",targetId:"id-6e1a7f0b",type:"Composition"},{id:"id-97df7ce9",sourceId:"dd04ea38",targetId:"cd112468",type:"Composition"},{id:"decb0ace",sourceId:"d8128ce5",targetId:"e60de18d",type:"Composition"},{id:"a7d03e17",sourceId:"e60de18d",targetId:"id-6d683c09",type:"Flow"},{id:"fa37b398",sourceId:"id-5386f8f4",targetId:"id-24a219d8",type:"Composition"},{id:"id-5345dd46",sourceId:"id-589f4d79",targetId:"c910f524",type:"Access"},{id:"id-02660539",sourceId:"id-2ff4c1ca",targetId:"e679753c",type:"Flow"},{id:"f4f84ae6",sourceId:"id-75223437",targetId:"db80b2ef",type:"Composition"},{id:"id-85502d24",sourceId:"id-9d9d1847",targetId:"d23b960a",type:"Assignment"},{id:"id-5dcbbb62",sourceId:"cd112468",targetId:"id-1aa0dd65",type:"Flow"},{id:"id-96dd75a6",sourceId:"dd04ea38",targetId:"id-4a5c463a",type:"Composition"},{id:"id-15b59250",sourceId:"id-51d9f008",targetId:"id-75223437",type:"Assignment"},{id:"id-304c1dc3",sourceId:"id-51d9f008",targetId:"eacb5409",type:"Assignment"},{id:"id-2f733077",sourceId:"id-1aa0dd65",targetId:"c88c4c6e",type:"Composition"},{id:"c7ac0e73",sourceId:"c53ceab1",targetId:"id-1aa0dd65",type:"Flow"},{id:"id-0dcaa543",sourceId:"d5433a87",targetId:"id-24a219d8",type:"Flow"},{id:"abfbbad9",sourceId:"ded1da2a",targetId:"id-4b331086",type:"Flow"},{id:"cc5b61fc",sourceId:"d42e9f43",targetId:"e679753c",type:"Composition"},{id:"id-3392448d",sourceId:"eacb5409",targetId:"id-4b331086",type:"Composition"},{id:"cbda3012",sourceId:"id-24a219d8",targetId:"id-4c8688ab",type:"Association"},{id:"id-3238e627",sourceId:"id-9d9d1847",targetId:"dd04ea38",type:"Assignment"},{id:"id-2407d557",sourceId:"id-8450fed8",targetId:"c8b7881e",type:"Flow"},{id:"id-99faac19",sourceId:"f8c20f3d",targetId:"c88c4c6e",type:"Flow"},{id:"e7f9999c",sourceId:"id-005a8fb6",targetId:"id-1ab351f3",type:"Flow"},{id:"id-81e1b48b",sourceId:"id-43a99e6a",targetId:"c8b7881e",type:"Composition"},{id:"id-30004a82",sourceId:"id-0328713f",targetId:"aeddb923",type:"Association"},{id:"id-92587500",sourceId:"dd04ea38",targetId:"e3f75986",type:"Composition"},{id:"id-338e1fdb",sourceId:"id-1ac5f376",targetId:"id-1ab351f3",type:"Composition"},{id:"id-67fe8005",sourceId:"ba98ce3f",targetId:"e9af99e1",type:"Association"},{id:"id-3c96a608",sourceId:"id-38a029d5",targetId:"id-7211e7f7",type:"Flow"},{id:"id-885ab4d8",sourceId:"dd8e814e",targetId:"ef1cf713",type:"Composition"},{id:"id-1b03ca99",sourceId:"d5433a87",targetId:"fe810d5e",type:"Composition"},{id:"id-1d628442",sourceId:"id-1ac5f376",targetId:"id-005a8fb6",type:"Composition"},{id:"id-56f81c6e",sourceId:"id-4c8688ab",targetId:"id-0328713f",type:"Composition"},{id:"id-6957df9c",sourceId:"id-9d9d1847",targetId:"id-28cad641",type:"Association"},{id:"fdd873aa",sourceId:"d8128ce5",targetId:"id-6d683c09",type:"Composition"},{id:"id-65b27a00",sourceId:"f24a4d41",targetId:"id-9d9d1847",type:"Serving"},{id:"e9a74371",sourceId:"id-5386f8f4",targetId:"d98e89f7",type:"Composition"},{id:"id-754cc50b",sourceId:"id-4a5c463a",targetId:"cd112468",type:"Flow"},{id:"d0b076e2",sourceId:"id-24a219d8",targetId:"d98e89f7",type:"Flow"},{id:"cc5fd1a0",sourceId:"id-51d9f008",targetId:"d8128ce5",type:"Assignment"},{id:"id-2003a50b",sourceId:"id-51d9f008",targetId:"id-1aa0dd65",type:"Assignment"},{id:"fb2b4d9e",sourceId:"id-589f4d79",targetId:"id-9d9d1847",type:"Serving"},{id:"ed203acb",sourceId:"id-75223437",targetId:"e8f287a0",type:"Composition"},{id:"id-5f9e4260",sourceId:"cb8d1005",targetId:"id-3f92aa61",type:"Composition"},{id:"c23c2e91",sourceId:"id-51d9f008",targetId:"dd8e814e",type:"Assignment"},{id:"id-6d6ea389",sourceId:"fe34cc09",targetId:"aeddb923",type:"Composition"},{id:"id-41728610",sourceId:"id-9d9d1847",targetId:"id-5386f8f4",type:"Assignment"},{id:"d57ecfed",sourceId:"c910f524",targetId:"f24a4d41",type:"Association"},{id:"id-0e693953",sourceId:"id-9d9d1847",targetId:"id-43a99e6a",type:"Assignment"},{id:"d6823f36",sourceId:"id-9d9d1847",targetId:"d8128ce5",type:"Assignment"},{id:"id-83260ef9",sourceId:"id-9d9d1847",targetId:"eacb5409",type:"Assignment"},{id:"id-74e99fd1",sourceId:"id-9d9d1847",targetId:"dd8e814e",type:"Assignment"},{id:"id-40fe3299",sourceId:"id-9d9d1847",targetId:"id-1aa0dd65",type:"Assignment"},{id:"id-6e97d113",sourceId:"id-9d9d1847",targetId:"id-75223437",type:"Assignment"},{id:"id-67b859cb",sourceId:"aeddb923",targetId:"id-28cad641",type:"Association"},{id:"cf23f8a9",sourceId:"id-3e7f4f15",targetId:"id-80438e16",type:"Flow"},{id:"id-1763f0a6",sourceId:"cb993f2d",targetId:"id-3e7f4f15",type:"Composition"},{id:"b6416492",sourceId:"cb993f2d",targetId:"id-80438e16",type:"Composition"},{id:"id-065b4d16",sourceId:"id-9d9d1847",targetId:"cb993f2d",type:"Assignment"},{id:"b6b2fde6",sourceId:"dfecf546",targetId:"cb993f2d",type:"Flow"},{id:"id-225ef693",sourceId:"c53ceab1",targetId:"efd3e870",type:"Flow"},{id:"id-4c48ee42",sourceId:"id-26b2ef6f",targetId:"id-3e27b356",type:"Composition"},{id:"id-97ae80ed",sourceId:"id-3e27b356",targetId:"efd3e870",type:"Composition"},{id:"c1eaf3f4",sourceId:"id-3e27b356",targetId:"c53ceab1",type:"Composition"},{id:"cd3c5bb2",sourceId:"dd04ea38",targetId:"id-26b2ef6f",type:"Composition"},{id:"id-628a3b86",sourceId:"id-4a5c463a",targetId:"id-26b2ef6f",type:"Flow"},{id:"d18a1d51",sourceId:"id-26b2ef6f",targetId:"e3f75986",type:"Flow"},{id:"id-823e3fee",sourceId:"d5433a87",targetId:"d98e89f7",type:"Flow"},{id:"a62789b3",sourceId:"dd04ea38",targetId:"d98e89f7",type:"Serving"},{id:"id-40a2e83e",sourceId:"dd8e814e",targetId:"c53ceab1",type:"Serving"},{id:"bc1bd0df",sourceId:"id-1aa0dd65",targetId:"id-26b2ef6f",type:"Composition"},{id:"a6f3fa0e",sourceId:"dd04ea38",targetId:"id-11d1bf60",type:"Composition"},{id:"fa4cae2a",sourceId:"id-4a5c463a",targetId:"id-11d1bf60",type:"Flow"},{id:"id-51c887be",sourceId:"id-11d1bf60",targetId:"e3f75986",type:"Flow"},{id:"id-93e09d2b",sourceId:"id-1aa0dd65",targetId:"id-11d1bf60",type:"Serving"},{id:"id-00a26e93",sourceId:"d98e89f7",targetId:"dd04ea38",type:"Flow"},{id:"id-72bdfa12",sourceId:"id-11d1bf60",targetId:"id-1aa0dd65",type:"Flow"},{id:"id-1bbeecbb",sourceId:"c53ceab1",targetId:"dd8e814e",type:"Flow"},{id:"b6c40c2f",sourceId:"id-1ab351f3",targetId:"d42e9f43",type:"Flow"}],I=[{id:"id-21caba4d",name:"Dependent Mapping",viewpoint:""}],b={identifier:e,archimateId:d,name:i,description:t,formats:a,source:o,sourceFile:c,sourceFormat:p,timestamp:r,tags:n,duplicates:s,language:y,elements:l,relationships:f,views:I};export{d as archimateId,b as default,t as description,s as duplicates,l as elements,a as formats,e as identifier,y as language,i as name,f as relationships,o as source,c as sourceFile,p as sourceFormat,n as tags,r as timestamp,I as views};
