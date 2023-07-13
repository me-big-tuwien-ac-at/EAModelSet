const e="https://me.big.tuwien.ac.at/EAModelSet/id-0d24b44e",i="id-0d24b44e",t="8 Optimistic Offline Lock",d="",a=["XML","CSV","JSON","ARCHIMATE"],c="GitHub",o="raw-data/github/xml/optimistic_offline_lock.xml",p="XML",n="29-06-2023 09:27:12",r=[],s=[],l="en",y=[{id:"bde049ba",name:"entity 1",type:"DataObject",layer:"application"},{id:"e8d6e426",name:"entity 2",type:"DataObject",layer:"application"},{id:"id-9a12a208",name:"entity 3",type:"DataObject",layer:"application"},{id:"id-87daa07d",name:"entity 4",type:"DataObject",layer:"application"},{id:"a1ca124b",name:"entity 5",type:"DataObject",layer:"application"},{id:"id-7772f4d0",name:"entity 6",type:"DataObject",layer:"application"},{id:"id-5c057722",name:"class 1",type:"ApplicationComponent",layer:"application"},{id:"efc41e89",name:"method 1",type:"ApplicationFunction",layer:"application"},{id:"id-5220fe9c",name:"step1",type:"ApplicationProcess",layer:"application"},{id:"f9fc3bb0",name:"step 2",type:"ApplicationProcess",layer:"application"},{id:"id-2a6b9935",name:"method 2",type:"ApplicationFunction",layer:"application"},{id:"cf17a61e",name:"step1",type:"ApplicationProcess",layer:"application"},{id:"d498a534",name:"step 2",type:"ApplicationProcess",layer:"application"},{id:"ca784ff4",name:"properties",type:"DataObject",layer:"application"},{id:"id-1b133012",name:"class 2",type:"ApplicationComponent",layer:"application"},{id:"id-2dcd83dd",name:"business transaction 1",type:"ApplicationEvent",layer:"application"},{id:"id-63b4276e",name:"end business transaction 1",type:"ApplicationEvent",layer:"application"},{id:"a77a5bbf",name:"system transaction (start business transaction)",type:"ApplicationEvent",layer:"application"},{id:"dd47b789",name:"system transaction (TRY to commit)",type:"ApplicationEvent",layer:"application"},{id:"id-968a128b",name:"system transaction (start business transaction)",type:"ApplicationEvent",layer:"application"},{id:"id-69eb60fb",name:"system transaction (TRY to commit)",type:"ApplicationEvent",layer:"application"},{id:"fa701164",name:"business transaction 2",type:"ApplicationEvent",layer:"application"},{id:"cd05792d",name:"end business transaction 2",type:"ApplicationEvent",layer:"application"},{id:"b7d51ccb",name:"select data X",type:"ApplicationEvent",layer:"application"},{id:"a4e62df2",name:"select data X",type:"ApplicationEvent",layer:"application"},{id:"edb5b2dd",name:"update data X",type:"ApplicationEvent",layer:"application"},{id:"ccf5f3f7",name:"update data X",type:"ApplicationEvent",layer:"application"},{id:"id-0df72564",name:"1 row inserted",type:"ApplicationEvent",layer:"application"},{id:"id-3d70ff19",name:"0 rows inserted",type:"ApplicationEvent",layer:"application"},{id:"id-17776e27",name:"commited",type:"ApplicationEvent",layer:"application"},{id:"b82a1807",name:"rollbacked",type:"ApplicationEvent",layer:"application"},{id:"id-31753904",name:"database",type:"Grouping",layer:"other"}],b=[{id:"id-48d2c87c",sourceId:"id-5220fe9c",targetId:"f9fc3bb0",type:"Flow"},{id:"id-17ee7d6a",sourceId:"id-7772f4d0",targetId:"a1ca124b",type:"Association"},{id:"id-4c0a610e",sourceId:"id-7772f4d0",targetId:"id-9a12a208",type:"Association"},{id:"faf7725a",sourceId:"id-2a6b9935",targetId:"d498a534",type:"Composition"},{id:"id-2226b3c0",sourceId:"cf17a61e",targetId:"d498a534",type:"Flow"},{id:"id-5c94cb8f",sourceId:"id-5c057722",targetId:"id-2a6b9935",type:"Assignment"},{id:"id-811c3486",sourceId:"id-5c057722",targetId:"ca784ff4",type:"Access"},{id:"id-8b07b540",sourceId:"id-87daa07d",targetId:"id-9a12a208",type:"Association"},{id:"df98466b",sourceId:"id-5c057722",targetId:"efc41e89",type:"Assignment"},{id:"id-2f7bc0df",sourceId:"e8d6e426",targetId:"id-9a12a208",type:"Association"},{id:"id-9a58f9a1",sourceId:"a1ca124b",targetId:"id-87daa07d",type:"Association"},{id:"id-2e45d360",sourceId:"efc41e89",targetId:"f9fc3bb0",type:"Composition"},{id:"id-3118f934",sourceId:"id-2a6b9935",targetId:"cf17a61e",type:"Composition"},{id:"id-0dedd38d",sourceId:"bde049ba",targetId:"e8d6e426",type:"Association"},{id:"id-6d29c776",sourceId:"efc41e89",targetId:"id-5220fe9c",type:"Composition"},{id:"id-3c052ee3",sourceId:"bde049ba",targetId:"id-7772f4d0",type:"Association"},{id:"id-42721d6b",sourceId:"bde049ba",targetId:"id-87daa07d",type:"Association"},{id:"bd6fcfb9",sourceId:"id-31753904",targetId:"id-9a12a208",type:"Composition"},{id:"id-05a77a1f",sourceId:"id-31753904",targetId:"e8d6e426",type:"Composition"},{id:"bcf9717e",sourceId:"id-31753904",targetId:"bde049ba",type:"Composition"},{id:"id-61762da0",sourceId:"id-31753904",targetId:"id-7772f4d0",type:"Composition"},{id:"c31ab571",sourceId:"id-31753904",targetId:"a1ca124b",type:"Composition"},{id:"id-7e9094bf",sourceId:"id-31753904",targetId:"id-87daa07d",type:"Composition"},{id:"ccb430ef",sourceId:"id-2dcd83dd",targetId:"a77a5bbf",type:"Triggering"},{id:"id-8fd252ba",sourceId:"a77a5bbf",targetId:"b7d51ccb",type:"Triggering"},{id:"f4938e3e",sourceId:"b7d51ccb",targetId:"id-31753904",type:"Triggering"},{id:"id-67a1fd28",sourceId:"id-2dcd83dd",targetId:"dd47b789",type:"Triggering"},{id:"id-440c1002",sourceId:"dd47b789",targetId:"edb5b2dd",type:"Triggering"},{id:"f6897446",sourceId:"fa701164",targetId:"id-968a128b",type:"Triggering"},{id:"id-83de31ea",sourceId:"id-968a128b",targetId:"a4e62df2",type:"Triggering"},{id:"id-0996e0b6",sourceId:"a4e62df2",targetId:"id-31753904",type:"Triggering"},{id:"id-36f5508b",sourceId:"fa701164",targetId:"id-69eb60fb",type:"Triggering"},{id:"a35c7efe",sourceId:"id-69eb60fb",targetId:"ccf5f3f7",type:"Triggering"},{id:"id-27b8bda1",sourceId:"edb5b2dd",targetId:"id-31753904",type:"Flow"},{id:"id-0a021c6b",sourceId:"ccf5f3f7",targetId:"id-31753904",type:"Flow"},{id:"c9f812fe",sourceId:"edb5b2dd",targetId:"id-31753904",type:"Triggering"},{id:"id-59399c0c",sourceId:"ccf5f3f7",targetId:"id-31753904",type:"Triggering"},{id:"id-0ed42c9d",sourceId:"edb5b2dd",targetId:"id-0df72564",type:"Flow"},{id:"d2dedaef",sourceId:"ccf5f3f7",targetId:"id-3d70ff19",type:"Flow"},{id:"id-182ea8c9",sourceId:"id-0df72564",targetId:"id-17776e27",type:"Flow"},{id:"id-6921df61",sourceId:"id-3d70ff19",targetId:"b82a1807",type:"Flow"},{id:"id-828460a9",sourceId:"id-17776e27",targetId:"id-2dcd83dd",type:"Flow"},{id:"id-26a698cc",sourceId:"b82a1807",targetId:"fa701164",type:"Flow"}],f=[{id:"ba015cb8",name:"Optimistic Offline Lock",viewpoint:""}],g={identifier:e,archimateId:i,name:t,description:d,formats:a,source:c,sourceFile:o,sourceFormat:p,timestamp:n,tags:r,duplicates:s,language:l,elements:y,relationships:b,views:f};export{i as archimateId,g as default,d as description,s as duplicates,y as elements,a as formats,e as identifier,l as language,t as name,b as relationships,c as source,o as sourceFile,p as sourceFormat,r as tags,n as timestamp,f as views};
