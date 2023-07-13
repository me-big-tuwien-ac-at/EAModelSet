const e="https://me.big.tuwien.ac.at/EAModelSet/id-5ff858c6",i="id-5ff858c6",d="2 continuous integration",t="",o=["XML","CSV","JSON","ARCHIMATE"],a="GitHub",s="raw-data/github/xml/2_continuous_integration.xml",n="XML",c="29-06-2023 09:28:02",r=[],b=[],u="en",p=[{id:"d0420410",name:"entity 2",type:"BusinessObject",layer:"business"},{id:"id-39658344",name:"entity 1",type:"BusinessObject",layer:"business"},{id:"id-2112210e",name:"entity 3",type:"BusinessObject",layer:"business"},{id:"id-7ca067a9",name:"entity 4",type:"BusinessObject",layer:"business"},{id:"f45983b1",name:"Working group 1",type:"BusinessActor",layer:"business"},{id:"id-922e1d74",name:"entity 2",type:"BusinessObject",layer:"business"},{id:"b14b4137",name:"entity 1",type:"BusinessObject",layer:"business"},{id:"id-550f310b",name:"entity 3",type:"BusinessObject",layer:"business"},{id:"id-9dbd6a7e",name:"entity 4",type:"BusinessObject",layer:"business"},{id:"fc21ae93",name:"Working group 1",type:"BusinessActor",layer:"business"},{id:"d12d3679",name:"Working group 2",type:"BusinessActor",layer:"business"},{id:"fab33435",name:"Continuous communication and integration of working groups when working on a model",type:"BusinessInteraction",layer:"business"},{id:"id-46198fb8",name:"The models used in a certain context should be consistent",type:"Requirement",layer:"motivation"},{id:"id-852bbdb9",name:"Use the ubiquitous language 1",type:"Requirement",layer:"motivation"},{id:"b074d3d8",name:"The models used in a certain context should be consistent",type:"Requirement",layer:"motivation"},{id:"ee994815",name:"Use the ubiquitous language 1",type:"Requirement",layer:"motivation"},{id:"id-1b6211b4",name:"When more than one working group is working on the model (within one limited context). In order to maintain the model in its entirety as well as a single common language and a vocabulary of concepts, it is necessary to constantly integrate working groups among themselves.",type:"Outcome",layer:"motivation"},{id:"id-8b602276",name:"model 1",type:"Grouping",layer:"other"},{id:"id-0a75300b",name:"aggregate 2",type:"Grouping",layer:"other"},{id:"a1ebaace",name:"aggregate 1",type:"Grouping",layer:"other"},{id:"id-63cedd94",name:"aggregate 3",type:"Grouping",layer:"other"},{id:"b9d4cc11",name:"Bounded context 1",type:"Grouping",layer:"other"},{id:"id-999deb25",name:"aggregate 2",type:"Grouping",layer:"other"},{id:"id-4bbc05e3",name:"aggregate 1",type:"Grouping",layer:"other"},{id:"id-2e5ff6c8",name:"aggregate 3",type:"Grouping",layer:"other"}],g=[{id:"e232231c",sourceId:"d0420410",targetId:"id-39658344",type:"Association"},{id:"id-280ae508",sourceId:"id-8b602276",targetId:"a1ebaace",type:"Composition"},{id:"d205e605",sourceId:"id-7ca067a9",targetId:"id-63cedd94",type:"Association"},{id:"b821ab4f",sourceId:"id-39658344",targetId:"a1ebaace",type:"Association"},{id:"id-287703b8",sourceId:"id-8b602276",targetId:"id-2112210e",type:"Composition"},{id:"bd54060a",sourceId:"id-8b602276",targetId:"d0420410",type:"Composition"},{id:"id-3facef67",sourceId:"id-8b602276",targetId:"id-7ca067a9",type:"Composition"},{id:"b5db0923",sourceId:"f45983b1",targetId:"id-8b602276",type:"Assignment"},{id:"id-6ac73641",sourceId:"id-2112210e",targetId:"id-63cedd94",type:"Association"},{id:"e582e1a2",sourceId:"id-0a75300b",targetId:"a1ebaace",type:"Association"},{id:"id-88eaa1cf",sourceId:"d0420410",targetId:"id-0a75300b",type:"Association"},{id:"d3ac3d66",sourceId:"id-2112210e",targetId:"d0420410",type:"Association"},{id:"id-92fbaafd",sourceId:"id-8b602276",targetId:"id-39658344",type:"Composition"},{id:"c7eff283",sourceId:"id-46198fb8",targetId:"id-8b602276",type:"Association"},{id:"id-99c25192",sourceId:"id-852bbdb9",targetId:"id-8b602276",type:"Association"},{id:"id-9271acf7",sourceId:"id-8b602276",targetId:"id-63cedd94",type:"Composition"},{id:"aad90ea1",sourceId:"a1ebaace",targetId:"id-63cedd94",type:"Association"},{id:"id-71ed56fc",sourceId:"id-8b602276",targetId:"id-0a75300b",type:"Composition"},{id:"bb4dfa15",sourceId:"id-39658344",targetId:"id-2112210e",type:"Association"},{id:"bd82767c",sourceId:"id-2112210e",targetId:"id-7ca067a9",type:"Association"},{id:"e9f69a45",sourceId:"id-63cedd94",targetId:"id-0a75300b",type:"Association"},{id:"id-7b5055d4",sourceId:"id-922e1d74",targetId:"b14b4137",type:"Association"},{id:"id-1c43dc3c",sourceId:"b9d4cc11",targetId:"id-4bbc05e3",type:"Composition"},{id:"id-3534e1f3",sourceId:"id-9dbd6a7e",targetId:"id-2e5ff6c8",type:"Association"},{id:"id-1fd1ae82",sourceId:"b14b4137",targetId:"id-4bbc05e3",type:"Association"},{id:"id-145bde7e",sourceId:"b9d4cc11",targetId:"id-550f310b",type:"Composition"},{id:"e7d0a3ed",sourceId:"b9d4cc11",targetId:"id-922e1d74",type:"Composition"},{id:"f9c56225",sourceId:"b9d4cc11",targetId:"id-9dbd6a7e",type:"Composition"},{id:"cea721f2",sourceId:"fc21ae93",targetId:"fab33435",type:"Assignment"},{id:"b31d3437",sourceId:"id-550f310b",targetId:"id-2e5ff6c8",type:"Association"},{id:"id-67985e76",sourceId:"id-999deb25",targetId:"id-4bbc05e3",type:"Association"},{id:"e69d373b",sourceId:"id-922e1d74",targetId:"id-999deb25",type:"Association"},{id:"id-90317f47",sourceId:"id-550f310b",targetId:"id-922e1d74",type:"Association"},{id:"id-7a59e21b",sourceId:"b9d4cc11",targetId:"b14b4137",type:"Composition"},{id:"id-672ab2cb",sourceId:"b074d3d8",targetId:"b9d4cc11",type:"Association"},{id:"e5ed0a57",sourceId:"ee994815",targetId:"b9d4cc11",type:"Association"},{id:"id-43467555",sourceId:"b9d4cc11",targetId:"id-2e5ff6c8",type:"Composition"},{id:"id-8f7a544d",sourceId:"id-4bbc05e3",targetId:"id-2e5ff6c8",type:"Association"},{id:"id-6db8b64d",sourceId:"b9d4cc11",targetId:"id-999deb25",type:"Composition"},{id:"id-52eda7d2",sourceId:"b14b4137",targetId:"id-550f310b",type:"Association"},{id:"ad04709c",sourceId:"id-550f310b",targetId:"id-9dbd6a7e",type:"Association"},{id:"id-9e9d1ed0",sourceId:"id-2e5ff6c8",targetId:"id-999deb25",type:"Association"},{id:"id-0fe6895d",sourceId:"d12d3679",targetId:"fab33435",type:"Assignment"},{id:"b2168cb0",sourceId:"fab33435",targetId:"b9d4cc11",type:"Assignment"},{id:"id-5992c65b",sourceId:"fab33435",targetId:"id-1b6211b4",type:"Realization"}],y=[{id:"ed467895",name:"continuous integration",viewpoint:""},{id:"e08603b0-92e7-464b-8395-e68dab60bec7",name:"continuous integration (copy)",viewpoint:""}],I={identifier:e,archimateId:i,name:d,description:t,formats:o,source:a,sourceFile:s,sourceFormat:n,timestamp:c,tags:r,duplicates:b,language:u,elements:p,relationships:g,views:y};export{i as archimateId,I as default,t as description,b as duplicates,p as elements,o as formats,e as identifier,u as language,d as name,g as relationships,a as source,s as sourceFile,n as sourceFormat,r as tags,c as timestamp,y as views};
