const e="https://me.big.tuwien.ac.at/EAModelSet/bbb1fb27",a="bbb1fb27",i="dependency injection",d="",t=["XML","CSV","JSON","ARCHIMATE"],c="GitHub",n="raw-data/github/xml/dependency_injection.xml",o="XML",p="29-06-2023 09:27:36",r=["DUPLICATE"],f=["raw-data/github/archimate/dependency_injection.archimate"],s="en",l=[{id:"id-992c4933",name:"class implementation 1",type:"ApplicationComponent",layer:"application"},{id:"id-4b98a20d",name:"some func",type:"ApplicationFunction",layer:"application"},{id:"id-88464d10",name:"plugin factory",type:"ApplicationComponent",layer:"application"},{id:"f51a6619",name:"get plugin",type:"ApplicationFunction",layer:"application"},{id:"id-00c71422",name:"get current configuration",type:"ApplicationProcess",layer:"application"},{id:"id-430a771c",name:"create an instance of class by class name",type:"ApplicationProcess",layer:"application"},{id:"id-47f8b39e",name:"separated interface",type:"ApplicationInterface",layer:"application"},{id:"ebf62219",name:"some func",type:"ApplicationFunction",layer:"application"},{id:"id-946932c3",name:"constructor",type:"ApplicationFunction",layer:"application"},{id:"becc95cc",name:"get object",type:"ApplicationProcess",layer:"application"},{id:"b6587267",name:"class implementation 2",type:"ApplicationComponent",layer:"application"},{id:"id-8e91b051",name:"some func",type:"ApplicationFunction",layer:"application"},{id:"id-90fba05c",name:"some process",type:"ApplicationProcess",layer:"application"},{id:"e8c544bf",name:"create supertype",type:"ApplicationProcess",layer:"application"},{id:"id-794916fc",name:"call some func",type:"ApplicationProcess",layer:"application"},{id:"id-4d2a83b0",name:"current plugin class name",type:"DataObject",layer:"application"},{id:"f8051927",name:"interface 1",type:"ApplicationComponent",layer:"application"},{id:"fbcb0dce",name:"interface 2",type:"ApplicationComponent",layer:"application"},{id:"adb672f1",name:"ref to interface 2",type:"DataObject",layer:"application"},{id:"a9f396df",name:"constrcuctor (interface 2 instance)",type:"ApplicationFunction",layer:"application"},{id:"id-7a0d8f58",name:"interface 1",type:"ApplicationInterface",layer:"application"},{id:"a11a0ef0",name:"interface 2",type:"ApplicationInterface",layer:"application"},{id:"d35f1b1e",name:"interface 2 implementation 1",type:"ApplicationComponent",layer:"application"},{id:"id-1c70b19b",name:"interface 2 implementation 2",type:"ApplicationComponent",layer:"application"},{id:"id-5987a4d2",name:"Application Process",type:"ApplicationProcess",layer:"application"},{id:"cada5aff",name:"dependency injector",type:"ApplicationComponent",layer:"application"},{id:"dd44d8ec",name:"current plugin class name (copy)",type:"DataObject",layer:"application"},{id:"ac82f83c",name:"configure",type:"ApplicationFunction",layer:"application"},{id:"c2f56291",name:"getInstance (interface name)",type:"ApplicationFunction",layer:"application"},{id:"f0c1ff90",name:"constrcuctor (params)",type:"ApplicationFunction",layer:"application"},{id:"id-70f1590e",name:"params",type:"DataObject",layer:"application"},{id:"id-3fbf7fa8",name:"current plugin class name (copy) (copy)",type:"DataObject",layer:"application"},{id:"id-027b0a2d",name:"interface 1 implementation 1",type:"ApplicationComponent",layer:"application"},{id:"id-60f9cf88",name:"set a config file for the test or product environment",type:"ApplicationProcess",layer:"application"},{id:"dcbf743f",name:"Get intstance for the interface 1",type:"ApplicationProcess",layer:"application"},{id:"c2cd6391",name:"Get intstance for the interface 2",type:"ApplicationProcess",layer:"application"},{id:"id-38501faa",name:"Application Process",type:"ApplicationProcess",layer:"application"},{id:"e1a09b10",name:"config file",type:"DataObject",layer:"application"},{id:"f5518965-fdf3-4e8d-8e07-a6b3d5919436",name:"Application",type:"ApplicationComponent",layer:"application"},{id:"f17bea54-435e-44d2-9694-85d07f057858",name:"main method",type:"ApplicationFunction",layer:"application"},{id:"c6b30132-f7c6-4383-ae4c-22af0661da05",name:"DI Container",type:"ApplicationComponent",layer:"application"},{id:"de48fe46-0040-42a5-840b-52f66623c682",name:"create and run container",type:"ApplicationProcess",layer:"application"},{id:"id-5640987c-b16d-41b4-a5ac-6ba82e5909a6",name:"Controller",type:"ApplicationComponent",layer:"application"},{id:"id-9933d3be-5201-4749-a5df-ac55a7bf035b",name:"Service",type:"ApplicationComponent",layer:"application"},{id:"id-0d851d0d-09f5-4be0-9030-3db8b60287bf",name:"reference to service",type:"DataObject",layer:"application"},{id:"c3bdd8c7-9c9e-4f92-9e66-e50de466629e",name:"Data Object",type:"DataObject",layer:"application"},{id:"be78f4ca-1924-4ebf-bf6c-9a4666be83cf",name:"find and use Controller",type:"ApplicationProcess",layer:"application"},{id:"id-7b620243-2948-49ad-9dbe-2448f538c1c8",name:"",type:"ApplicationProcess",layer:"application"},{id:"ca221830-226a-4814-85bb-b5d846c9373d",name:"ref to controller",type:"DataObject",layer:"application"},{id:"id-29167641-346b-4a66-90ea-78432839355d",name:"constructor(ref to service)",type:"ApplicationFunction",layer:"application"},{id:"id-8b9f75ac",name:"properties file",type:"Artifact",layer:"technology"},{id:"id-77da45ed",name:"properties file",type:"Artifact",layer:"technology"}],b=[{id:"id-6b441cfe",sourceId:"id-992c4933",targetId:"id-4b98a20d",type:"Assignment"},{id:"id-0d1674d9",sourceId:"becc95cc",targetId:"f51a6619",type:"Flow"},{id:"id-519adda0",sourceId:"ebf62219",targetId:"id-4b98a20d",type:"Triggering"},{id:"id-5097da49",sourceId:"id-794916fc",targetId:"ebf62219",type:"Triggering"},{id:"id-59268c43",sourceId:"id-946932c3",targetId:"becc95cc",type:"Composition"},{id:"id-3f86d3e6",sourceId:"f51a6619",targetId:"id-430a771c",type:"Composition"},{id:"f7b985f8",sourceId:"id-90fba05c",targetId:"id-794916fc",type:"Composition"},{id:"id-5d96a680",sourceId:"id-00c71422",targetId:"id-4d2a83b0",type:"Access"},{id:"id-1b6db792",sourceId:"b6587267",targetId:"id-8e91b051",type:"Assignment"},{id:"id-852c8fe0",sourceId:"e8c544bf",targetId:"id-946932c3",type:"Triggering"},{id:"id-2866f18b",sourceId:"e8c544bf",targetId:"id-794916fc",type:"Triggering"},{id:"id-58c7fa2e",sourceId:"id-90fba05c",targetId:"e8c544bf",type:"Composition"},{id:"id-9f7aaaaf",sourceId:"id-00c71422",targetId:"id-430a771c",type:"Flow"},{id:"id-6b51caae",sourceId:"id-992c4933",targetId:"id-47f8b39e",type:"Realization"},{id:"f682b3e3",sourceId:"f51a6619",targetId:"id-00c71422",type:"Composition"},{id:"id-9d25f42a",sourceId:"b6587267",targetId:"id-47f8b39e",type:"Realization"},{id:"ac4a9ac2",sourceId:"id-8b9f75ac",targetId:"id-4d2a83b0",type:"Access"},{id:"id-006fba5a",sourceId:"id-88464d10",targetId:"f51a6619",type:"Assignment"},{id:"ff7c1873",sourceId:"adb672f1",targetId:"a11a0ef0",type:"Association"},{id:"id-40b92eb8",sourceId:"a9f396df",targetId:"adb672f1",type:"Access"},{id:"id-25738cd7",sourceId:"id-7a0d8f58",targetId:"adb672f1",type:"Access"},{id:"f7346ff2",sourceId:"d35f1b1e",targetId:"a11a0ef0",type:"Realization"},{id:"id-05d9e28d",sourceId:"id-1c70b19b",targetId:"a11a0ef0",type:"Realization"},{id:"a2d1360c",sourceId:"id-77da45ed",targetId:"dd44d8ec",type:"Access"},{id:"id-7b3ad10d",sourceId:"cada5aff",targetId:"ac82f83c",type:"Assignment"},{id:"id-85292296",sourceId:"cada5aff",targetId:"c2f56291",type:"Assignment"},{id:"id-7e32ebbe",sourceId:"a11a0ef0",targetId:"id-70f1590e",type:"Access"},{id:"id-6cca5e12",sourceId:"f0c1ff90",targetId:"id-70f1590e",type:"Access"},{id:"id-59b17dd5",sourceId:"ac82f83c",targetId:"id-77da45ed",type:"Association"},{id:"id-2be5df3e",sourceId:"id-77da45ed",targetId:"id-3fbf7fa8",type:"Access"},{id:"id-003a00c1",sourceId:"id-027b0a2d",targetId:"id-7a0d8f58",type:"Realization"},{id:"dde8b976",sourceId:"id-5987a4d2",targetId:"id-60f9cf88",type:"Composition"},{id:"id-3fbe9c6c",sourceId:"id-60f9cf88",targetId:"e1a09b10",type:"Association"},{id:"id-1d151577",sourceId:"id-5987a4d2",targetId:"dcbf743f",type:"Composition"},{id:"id-1636672c",sourceId:"id-5987a4d2",targetId:"c2cd6391",type:"Composition"},{id:"id-7df35815",sourceId:"id-5987a4d2",targetId:"id-38501faa",type:"Composition"},{id:"id-3cfc99e7",sourceId:"id-60f9cf88",targetId:"dcbf743f",type:"Flow"},{id:"id-04283b27",sourceId:"dcbf743f",targetId:"c2cd6391",type:"Flow"},{id:"id-54f5c2e0",sourceId:"c2cd6391",targetId:"id-38501faa",type:"Flow"},{id:"id-3b57e3a0",sourceId:"dcbf743f",targetId:"c2f56291",type:"Flow"},{id:"id-35b159b2",sourceId:"c2cd6391",targetId:"c2f56291",type:"Flow"},{id:"id-8596cc1b",sourceId:"cada5aff",targetId:"e1a09b10",type:"Access"},{id:"cf26e9a7",sourceId:"c2f56291",targetId:"e1a09b10",type:"Access"},{id:"id-8b4ca9b6",sourceId:"id-60f9cf88",targetId:"id-77da45ed",type:"Association"},{id:"id-199405a0",sourceId:"id-60f9cf88",targetId:"e1a09b10",type:"Access"},{id:"dd9047b2",sourceId:"id-7a0d8f58",targetId:"id-77da45ed",type:"Association"},{id:"id-3602f1f6",sourceId:"a11a0ef0",targetId:"id-77da45ed",type:"Association"},{id:"ae4b2471-20f2-48c0-a859-b73b6cf2c0b8",sourceId:"f5518965-fdf3-4e8d-8e07-a6b3d5919436",targetId:"f17bea54-435e-44d2-9694-85d07f057858",type:"Assignment"},{id:"id-7c508e12-ef28-4f31-99e7-9d950442357e",sourceId:"f17bea54-435e-44d2-9694-85d07f057858",targetId:"de48fe46-0040-42a5-840b-52f66623c682",type:"Composition"},{id:"id-8c6651a2-35f8-48e7-9c80-da7a4db30f82",sourceId:"de48fe46-0040-42a5-840b-52f66623c682",targetId:"c6b30132-f7c6-4383-ae4c-22af0661da05",type:"Triggering"},{id:"id-5314ff7f-556b-4984-bacc-972df0c84c6a",sourceId:"id-5640987c-b16d-41b4-a5ac-6ba82e5909a6",targetId:"id-0d851d0d-09f5-4be0-9030-3db8b60287bf",type:"Access"},{id:"id-33b0d77e-9262-450d-8b6a-3c452d360324",sourceId:"f17bea54-435e-44d2-9694-85d07f057858",targetId:"be78f4ca-1924-4ebf-bf6c-9a4666be83cf",type:"Composition"},{id:"c98f2e56-321c-4f8e-b74c-a95e50a6b5ee",sourceId:"c6b30132-f7c6-4383-ae4c-22af0661da05",targetId:"id-7b620243-2948-49ad-9dbe-2448f538c1c8",type:"Assignment"},{id:"id-46ee5646-d88a-4794-ba57-fd8e2bedffa1",sourceId:"id-0d851d0d-09f5-4be0-9030-3db8b60287bf",targetId:"id-9933d3be-5201-4749-a5df-ac55a7bf035b",type:"Association"},{id:"id-049862c8-28a7-41a1-9aab-8074c63a57cc",sourceId:"f17bea54-435e-44d2-9694-85d07f057858",targetId:"ca221830-226a-4814-85bb-b5d846c9373d",type:"Access"},{id:"fea3c334-454c-49cc-be08-fdb5e4dbe393",sourceId:"ca221830-226a-4814-85bb-b5d846c9373d",targetId:"id-5640987c-b16d-41b4-a5ac-6ba82e5909a6",type:"Association"},{id:"id-9b00a73a-1f41-40a0-a840-acb7021a7d05",sourceId:"id-5640987c-b16d-41b4-a5ac-6ba82e5909a6",targetId:"id-29167641-346b-4a66-90ea-78432839355d",type:"Assignment"}],y=[{id:"id-312af1cb",name:"dependency injection",viewpoint:""},{id:"ab7c7bbd-699c-43d7-8b0d-1857636f8941",name:"dependency injection  (composition root)",viewpoint:""}],m={identifier:e,archimateId:a,name:i,description:d,formats:t,source:c,sourceFile:n,sourceFormat:o,timestamp:p,tags:r,duplicates:f,language:s,elements:l,relationships:b,views:y};export{a as archimateId,m as default,d as description,f as duplicates,l as elements,t as formats,e as identifier,s as language,i as name,b as relationships,c as source,n as sourceFile,o as sourceFormat,r as tags,p as timestamp,y as views};