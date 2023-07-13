const e="https://me.big.tuwien.ac.at/EAModelSet/id-47233919",i="id-47233919",d="Iterator",a="",t=["XML","CSV","JSON","ARCHIMATE"],c="GitHub",o="raw-data/github/xml/4_iterator_v1.xml",p="XML",r="29-06-2023 09:27:12",n=[],s=[],I="en",y=[{id:"id-3d74c0be",name:"get iterator from aggregate",type:"ApplicationProcess",layer:"application"},{id:"id-39e16f4f",name:"next item in iterator",type:"ApplicationProcess",layer:"application"},{id:"eddc9a3a",name:"creator",type:"ApplicationComponent",layer:"application"},{id:"id-4e17cc0f",name:"create iterator",type:"ApplicationFunction",layer:"application"},{id:"f37e5d1c",name:"construct algoritm",type:"ApplicationFunction",layer:"application"},{id:"id-4d9a4134",name:"step",type:"ApplicationProcess",layer:"application"},{id:"af0ce369",name:"step",type:"ApplicationProcess",layer:"application"},{id:"c0482ce5",name:"call fabric",type:"ApplicationProcess",layer:"application"},{id:"id-9912acc6",name:"subclass concrete aggregate A",type:"ApplicationComponent",layer:"application"},{id:"id-313fd5ef",name:"create iterator",type:"ApplicationFunction",layer:"application"},{id:"f7864475",name:"create concrete iterator A (this)",type:"ApplicationProcess",layer:"application"},{id:"id-41032782",name:"constructor (AGGREGATE)",type:"ApplicationFunction",layer:"application"},{id:"fc182f7f",name:"next",type:"ApplicationFunction",layer:"application"},{id:"id-8683eaec",name:"first",type:"ApplicationFunction",layer:"application"},{id:"id-5245d9ca",name:"subclass product concrete iterator A",type:"ApplicationComponent",layer:"application"},{id:"a840b94a",name:"interface iterator",type:"ApplicationInterface",layer:"application"},{id:"f5277413",name:"constructor (AGGREGATE)",type:"ApplicationFunction",layer:"application"},{id:"a00d26b2",name:"first",type:"ApplicationFunction",layer:"application"},{id:"id-8df90b12",name:"next",type:"ApplicationFunction",layer:"application"},{id:"id-2739bdf6",name:"subclass concrete aggregate B",type:"ApplicationComponent",layer:"application"},{id:"id-6cbab361",name:"create iterator",type:"ApplicationFunction",layer:"application"},{id:"aff5c846",name:"create concrete iterator B",type:"ApplicationProcess",layer:"application"},{id:"id-411e9964",name:"constructor (AGGREGATE)",type:"ApplicationFunction",layer:"application"},{id:"id-5ec4146f",name:"next",type:"ApplicationFunction",layer:"application"},{id:"id-5c92c2f4",name:"first",type:"ApplicationFunction",layer:"application"},{id:"c3a9d7ce",name:"concrete iterator B",type:"ApplicationComponent",layer:"application"},{id:"id-265f513d",name:"interface aggregate",type:"ApplicationInterface",layer:"application"},{id:"dcc3afe9",name:"return iterator",type:"ApplicationProcess",layer:"application"},{id:"id-6ce034fa",name:"return iterator",type:"ApplicationProcess",layer:"application"},{id:"id-22423687",name:"return iterator",type:"ApplicationProcess",layer:"application"},{id:"id-3df1c490",name:"is Done",type:"ApplicationFunction",layer:"application"},{id:"id-3130837a",name:"is Done",type:"ApplicationFunction",layer:"application"},{id:"id-4ee812a2",name:"is Done",type:"ApplicationFunction",layer:"application"},{id:"id-5da79910",name:"current item",type:"ApplicationFunction",layer:"application"},{id:"id-1bbe1ae5",name:"current item",type:"ApplicationFunction",layer:"application"},{id:"a19b93e1",name:"current item",type:"ApplicationFunction",layer:"application"},{id:"e4a83c13",name:"Data Object",type:"DataObject",layer:"application"},{id:"f18a18bd",name:"REF to aggregate",type:"DataObject",layer:"application"},{id:"id-9076dac3",name:"current position",type:"DataObject",layer:"application"},{id:"id-29724a65",name:"REF to aggregate",type:"DataObject",layer:"application"},{id:"af2b23f0",name:"set REF=input parameter",type:"ApplicationProcess",layer:"application"},{id:"id-9661cd10",name:"set POSITION=0",type:"ApplicationProcess",layer:"application"},{id:"id-5ac8cba6",name:"POSITION++",type:"ApplicationProcess",layer:"application"},{id:"id-5dc648ed",name:"IF POSITION  >= REF.count return TRUE",type:"ApplicationProcess",layer:"application"},{id:"ba829b0e",name:"return REF[POSITION]",type:"ApplicationProcess",layer:"application"},{id:"d785305e",name:"constructor (AGGREGATE)",type:"ApplicationFunction",layer:"application"},{id:"id-9ac8fc67",name:"set REF=input parameter",type:"ApplicationProcess",layer:"application"},{id:"id-97b22207",name:"next",type:"ApplicationFunction",layer:"application"},{id:"id-7aa6fe87",name:"POSITION++",type:"ApplicationProcess",layer:"application"},{id:"id-024b800e",name:"first",type:"ApplicationFunction",layer:"application"},{id:"id-54b1354b",name:"set POSITION=0",type:"ApplicationProcess",layer:"application"},{id:"id-1272e1ab",name:"subclass product  concrete iterator B",type:"ApplicationComponent",layer:"application"},{id:"id-1118db4c",name:"is Done",type:"ApplicationFunction",layer:"application"},{id:"id-6b3ecb17",name:"IF POSITION  >= REF.count return TRUE",type:"ApplicationProcess",layer:"application"},{id:"id-3daaa51c",name:"current item",type:"ApplicationFunction",layer:"application"},{id:"a112836c",name:"return REF[POSITION]",type:"ApplicationProcess",layer:"application"},{id:"id-2ce1aab1",name:"current position",type:"DataObject",layer:"application"},{id:"id-9a1b2f27",name:"REF to aggregate",type:"DataObject",layer:"application"},{id:"id-875579ab",name:"if not end",type:"ApplicationFunction",layer:"application"},{id:"ce171db8",name:"some operation on get item",type:"ApplicationProcess",layer:"application"},{id:"id-7f7c450f",name:"client",type:"ApplicationComponent",layer:"application"},{id:"id-816c1ae9",name:"create iterator A (this) (copy)",type:"ApplicationProcess",layer:"application"}],l=[{id:"adc5b480",sourceId:"id-5245d9ca",targetId:"fc182f7f",type:"Assignment"},{id:"id-76245b56",sourceId:"id-313fd5ef",targetId:"f7864475",type:"Composition"},{id:"ecc948d3",sourceId:"id-5245d9ca",targetId:"a840b94a",type:"Realization"},{id:"id-7720efe6",sourceId:"a00d26b2",targetId:"af0ce369",type:"Serving"},{id:"f9cbc684",sourceId:"eddc9a3a",targetId:"id-4e17cc0f",type:"Assignment"},{id:"e511977a",sourceId:"f37e5d1c",targetId:"id-4d9a4134",type:"Realization"},{id:"id-6b1c6d89",sourceId:"id-9912acc6",targetId:"id-3d74c0be",type:"Serving"},{id:"id-77d4fc71",sourceId:"id-2739bdf6",targetId:"eddc9a3a",type:"Specialization"},{id:"e3232b7a",sourceId:"c3a9d7ce",targetId:"id-411e9964",type:"Assignment"},{id:"id-503a8ede",sourceId:"id-4e17cc0f",targetId:"c0482ce5",type:"Serving"},{id:"id-019bc5ea",sourceId:"a840b94a",targetId:"f5277413",type:"Association"},{id:"id-9ef468e9",sourceId:"id-2739bdf6",targetId:"id-6cbab361",type:"Assignment"},{id:"id-489570f7",sourceId:"c3a9d7ce",targetId:"aff5c846",type:"Serving"},{id:"id-7668561e",sourceId:"id-8df90b12",targetId:"id-4d9a4134",type:"Serving"},{id:"id-05ce8544",sourceId:"c3a9d7ce",targetId:"id-5c92c2f4",type:"Assignment"},{id:"d045a047",sourceId:"f37e5d1c",targetId:"c0482ce5",type:"Composition"},{id:"dd5452fa",sourceId:"id-5245d9ca",targetId:"id-8683eaec",type:"Assignment"},{id:"d218e84b",sourceId:"f37e5d1c",targetId:"id-39e16f4f",type:"Serving"},{id:"c5f6833b",sourceId:"id-9912acc6",targetId:"eddc9a3a",type:"Specialization"},{id:"f3080808",sourceId:"a840b94a",targetId:"id-8df90b12",type:"Association"},{id:"d42717ca",sourceId:"id-4d9a4134",targetId:"af0ce369",type:"Flow"},{id:"id-0bec52eb",sourceId:"id-6cbab361",targetId:"aff5c846",type:"Composition"},{id:"id-68af1099",sourceId:"id-9912acc6",targetId:"id-313fd5ef",type:"Assignment"},{id:"id-742c2184",sourceId:"c0482ce5",targetId:"id-4d9a4134",type:"Flow"},{id:"id-0dd804cf",sourceId:"id-5245d9ca",targetId:"id-41032782",type:"Assignment"},{id:"fdd916b6",sourceId:"f37e5d1c",targetId:"af0ce369",type:"Realization"},{id:"id-6ec2cb94",sourceId:"c3a9d7ce",targetId:"a840b94a",type:"Realization"},{id:"id-1406b99e",sourceId:"c3a9d7ce",targetId:"id-5ec4146f",type:"Assignment"},{id:"id-9e1e49fd",sourceId:"a840b94a",targetId:"a00d26b2",type:"Association"},{id:"e7347737",sourceId:"id-5245d9ca",targetId:"f7864475",type:"Serving"},{id:"ada96bd0",sourceId:"eddc9a3a",targetId:"f37e5d1c",type:"Assignment"},{id:"id-47287201",sourceId:"id-9912acc6",targetId:"id-265f513d",type:"Realization"},{id:"e08c7363",sourceId:"id-2739bdf6",targetId:"id-265f513d",type:"Realization"},{id:"id-2f467422",sourceId:"id-265f513d",targetId:"id-4e17cc0f",type:"Association"},{id:"id-574dcf9c",sourceId:"id-265f513d",targetId:"f37e5d1c",type:"Association"},{id:"id-2de4e321",sourceId:"id-313fd5ef",targetId:"dcc3afe9",type:"Composition"},{id:"c05a79a5",sourceId:"id-6cbab361",targetId:"id-6ce034fa",type:"Composition"},{id:"id-37991f78",sourceId:"f7864475",targetId:"dcc3afe9",type:"Flow"},{id:"b6315259",sourceId:"aff5c846",targetId:"id-6ce034fa",type:"Flow"},{id:"id-4485c12f",sourceId:"id-4e17cc0f",targetId:"id-22423687",type:"Composition"},{id:"id-457bcd99",sourceId:"a840b94a",targetId:"id-3df1c490",type:"Association"},{id:"b93fae20",sourceId:"id-5245d9ca",targetId:"id-3130837a",type:"Assignment"},{id:"e13948dd",sourceId:"c3a9d7ce",targetId:"id-4ee812a2",type:"Assignment"},{id:"id-724c555e",sourceId:"a840b94a",targetId:"id-22423687",type:"Serving"},{id:"be6aefaa",sourceId:"id-5245d9ca",targetId:"id-1bbe1ae5",type:"Assignment"},{id:"c54fb504",sourceId:"c3a9d7ce",targetId:"a19b93e1",type:"Assignment"},{id:"id-501b7027",sourceId:"a840b94a",targetId:"id-5da79910",type:"Association"},{id:"d5fec6e4",sourceId:"id-41032782",targetId:"f18a18bd",type:"Access"},{id:"d58cc304",sourceId:"f5277413",targetId:"id-22423687",type:"Serving"},{id:"id-48390a37",sourceId:"f5277413",targetId:"f18a18bd",type:"Access"},{id:"id-1700ad41",sourceId:"id-265f513d",targetId:"f18a18bd",type:"Association"},{id:"id-04d66a00",sourceId:"id-41032782",targetId:"af2b23f0",type:"Composition"},{id:"id-48ab9bfe",sourceId:"id-8683eaec",targetId:"id-9661cd10",type:"Composition"},{id:"c544526d",sourceId:"fc182f7f",targetId:"id-5ac8cba6",type:"Composition"},{id:"e3aa9b00",sourceId:"id-3130837a",targetId:"id-5dc648ed",type:"Composition"},{id:"id-2cf6f93a",sourceId:"id-1bbe1ae5",targetId:"ba829b0e",type:"Composition"},{id:"id-52b40476",sourceId:"af2b23f0",targetId:"id-29724a65",type:"Access"},{id:"id-0c89b5b9",sourceId:"id-5ac8cba6",targetId:"id-9076dac3",type:"Access"},{id:"id-4d142de5",sourceId:"id-9661cd10",targetId:"id-9076dac3",type:"Access"},{id:"b8d0a023",sourceId:"id-5dc648ed",targetId:"id-29724a65",type:"Access"},{id:"id-4d302c21",sourceId:"id-5dc648ed",targetId:"id-9076dac3",type:"Access"},{id:"id-09ffc863",sourceId:"ba829b0e",targetId:"id-9076dac3",type:"Access"},{id:"id-7e800b33",sourceId:"ba829b0e",targetId:"id-29724a65",type:"Access"},{id:"babe76b6",sourceId:"id-3daaa51c",targetId:"a112836c",type:"Composition"},{id:"id-143eeee6",sourceId:"id-024b800e",targetId:"id-54b1354b",type:"Composition"},{id:"ef2ad925",sourceId:"id-54b1354b",targetId:"id-2ce1aab1",type:"Access"},{id:"id-61bb2cfc",sourceId:"id-6b3ecb17",targetId:"id-9a1b2f27",type:"Access"},{id:"c63064fa",sourceId:"id-6b3ecb17",targetId:"id-2ce1aab1",type:"Access"},{id:"id-52fe9774",sourceId:"id-1272e1ab",targetId:"id-97b22207",type:"Assignment"},{id:"id-4debd6fd",sourceId:"id-9ac8fc67",targetId:"id-9a1b2f27",type:"Access"},{id:"id-5c571135",sourceId:"a112836c",targetId:"id-9a1b2f27",type:"Access"},{id:"id-5ad30639",sourceId:"id-1272e1ab",targetId:"d785305e",type:"Assignment"},{id:"fb5101c9",sourceId:"id-1272e1ab",targetId:"id-024b800e",type:"Assignment"},{id:"d7399b45",sourceId:"id-97b22207",targetId:"id-7aa6fe87",type:"Composition"},{id:"bba0848a",sourceId:"id-1272e1ab",targetId:"id-1118db4c",type:"Assignment"},{id:"c048d2f5",sourceId:"id-1118db4c",targetId:"id-6b3ecb17",type:"Composition"},{id:"id-4c25cc45",sourceId:"d785305e",targetId:"id-9ac8fc67",type:"Composition"},{id:"c5c421d4",sourceId:"id-7aa6fe87",targetId:"id-2ce1aab1",type:"Access"},{id:"id-31994a2b",sourceId:"id-1272e1ab",targetId:"id-3daaa51c",type:"Assignment"},{id:"id-7c37577a",sourceId:"a112836c",targetId:"id-2ce1aab1",type:"Access"},{id:"id-0a7d635f",sourceId:"id-1272e1ab",targetId:"a840b94a",type:"Realization"},{id:"id-0d6b3906",sourceId:"id-1272e1ab",targetId:"aff5c846",type:"Serving"},{id:"id-9ed0d63a",sourceId:"id-22423687",targetId:"id-3d74c0be",type:"Serving"},{id:"b5833744",sourceId:"id-39e16f4f",targetId:"id-875579ab",type:"Composition"},{id:"ac1e8ba0",sourceId:"id-875579ab",targetId:"ce171db8",type:"Composition"},{id:"id-941c78fa",sourceId:"id-3d74c0be",targetId:"id-39e16f4f",type:"Flow"},{id:"id-9ecf8d8a",sourceId:"id-8df90b12",targetId:"id-39e16f4f",type:"Serving"},{id:"e365a190",sourceId:"id-3df1c490",targetId:"id-875579ab",type:"Serving"},{id:"c5236a30",sourceId:"id-5da79910",targetId:"ce171db8",type:"Serving"},{id:"id-4fe46fe5",sourceId:"id-265f513d",targetId:"id-7f7c450f",type:"Serving"},{id:"id-3b32c9e5",sourceId:"a840b94a",targetId:"id-7f7c450f",type:"Serving"},{id:"id-16199de9",sourceId:"id-5245d9ca",targetId:"id-313fd5ef",type:"Serving"},{id:"id-888250e5",sourceId:"id-9912acc6",targetId:"id-5245d9ca",type:"Serving"},{id:"id-3c8c068c",sourceId:"a840b94a",targetId:"f18a18bd",type:"Access"},{id:"id-6a3855ba",sourceId:"id-5245d9ca",targetId:"id-29724a65",type:"Access"},{id:"id-16e05a7c",sourceId:"id-5245d9ca",targetId:"id-9076dac3",type:"Access"},{id:"d71c8c11",sourceId:"id-1272e1ab",targetId:"id-9a1b2f27",type:"Access"},{id:"id-05a20e82",sourceId:"id-1272e1ab",targetId:"id-2ce1aab1",type:"Access"},{id:"id-469252fc",sourceId:"id-22423687",targetId:"a840b94a",type:"Flow"},{id:"dafdadb1",sourceId:"id-4e17cc0f",targetId:"id-816c1ae9",type:"Composition"},{id:"dcbe5edc",sourceId:"f7864475",targetId:"id-5245d9ca",type:"Flow"},{id:"id-6cdad9d8",sourceId:"aff5c846",targetId:"id-1272e1ab",type:"Flow"},{id:"b6e434f7",sourceId:"id-8df90b12",targetId:"fc182f7f",type:"Flow"},{id:"id-6c02bbb0",sourceId:"id-3df1c490",targetId:"id-3130837a",type:"Flow"},{id:"e290626b",sourceId:"id-5da79910",targetId:"id-1bbe1ae5",type:"Flow"}],b=[{id:"id-5b004a8e",name:"iter",viewpoint:""},{id:"id-6e7565ec",name:"uml",viewpoint:""}],f={identifier:e,archimateId:i,name:d,description:a,formats:t,source:c,sourceFile:o,sourceFormat:p,timestamp:r,tags:n,duplicates:s,language:I,elements:y,relationships:l,views:b};export{i as archimateId,f as default,a as description,s as duplicates,y as elements,t as formats,e as identifier,I as language,d as name,l as relationships,c as source,o as sourceFile,p as sourceFormat,n as tags,r as timestamp,b as views};
