const e="https://me.big.tuwien.ac.at/EAModelSet/aa75e859-893b-4ab8-9c4f-05dba01bc667",a="aa75e859-893b-4ab8-9c4f-05dba01bc667",d="architecture scenario",c="",t=["XML","CSV","JSON","ARCHIMATE"],i="GitHub",b="raw-data/github/xml/architecture_scenario.xml",f="XML",n="29-06-2023 09:28:10",o=["DUPLICATE"],r=["raw-data/github/archimate/architecture_scenario.archimate"],p="de",s=[{id:"id-461757ff-b95e-4616-ae0d-be5439c05222",name:"Docker Plattform",type:"ApplicationComponent",layer:"application"},{id:"id-3403e6d9-97d3-4f94-89d7-25c5a068a0fb",name:"Container Shop",type:"ApplicationComponent",layer:"application"},{id:"id-834d6ddd-ba7e-4047-955b-e1671a27a828",name:"Container DB",type:"ApplicationComponent",layer:"application"},{id:"id-8bc3dc1a-ff1f-4ef3-a8fb-7743d0870255",name:"ERP",type:"ApplicationComponent",layer:"application"},{id:"id-454cc065-f522-425c-bf46-16cddd15e9bf",name:"ERP FI",type:"ApplicationComponent",layer:"application"},{id:"id-3adbf534-ad35-4afe-a9a5-b4b886cac002",name:"ERP MM",type:"ApplicationComponent",layer:"application"},{id:"dd30c017-1638-4e63-a652-ce0ca8cce89d",name:"HW B",type:"Device",layer:"technology"},{id:"bc16b6c2-4326-4c4f-9b37-c02b451be931",name:"HW A",type:"Device",layer:"technology"},{id:"id-27c6c6be-ba08-453a-a9cf-d334762f44aa",name:"Rack",type:"Node",layer:"technology"},{id:"b65ca177-61bf-4793-80e1-fda32db1ed18",name:"Operating System",type:"SystemSoftware",layer:"technology"},{id:"id-5e85d6bc-f9c4-4aa7-8c9c-57ac07f1992f",name:"Operating System",type:"SystemSoftware",layer:"technology"}],l=[{id:"a9a9bd50-785e-49cd-85d4-960fd2497445",sourceId:"id-27c6c6be-ba08-453a-a9cf-d334762f44aa",targetId:"bc16b6c2-4326-4c4f-9b37-c02b451be931",type:"Serving"},{id:"id-36ab03df-6d04-4b7e-afa4-0a3b4503399e",sourceId:"id-27c6c6be-ba08-453a-a9cf-d334762f44aa",targetId:"dd30c017-1638-4e63-a652-ce0ca8cce89d",type:"Serving"},{id:"c945fdd2-ebcc-4ddd-acdd-d52c3ff30e7d",sourceId:"bc16b6c2-4326-4c4f-9b37-c02b451be931",targetId:"b65ca177-61bf-4793-80e1-fda32db1ed18",type:"Serving"},{id:"id-07936fd3-5e4b-458e-adac-1880d5820642",sourceId:"b65ca177-61bf-4793-80e1-fda32db1ed18",targetId:"id-461757ff-b95e-4616-ae0d-be5439c05222",type:"Serving"},{id:"a84cee9e-97d6-4454-bb5f-0469633e2f09",sourceId:"id-461757ff-b95e-4616-ae0d-be5439c05222",targetId:"id-3403e6d9-97d3-4f94-89d7-25c5a068a0fb",type:"Serving"},{id:"id-3709f843-e2db-4b98-b6dc-b7561b5580f5",sourceId:"id-461757ff-b95e-4616-ae0d-be5439c05222",targetId:"id-834d6ddd-ba7e-4047-955b-e1671a27a828",type:"Serving"},{id:"id-4ae65550-9034-4da8-bf37-ded42fad5a82",sourceId:"id-834d6ddd-ba7e-4047-955b-e1671a27a828",targetId:"id-3403e6d9-97d3-4f94-89d7-25c5a068a0fb",type:"Serving"},{id:"a6a4da07-2cfd-40e0-bb08-622818e82f41",sourceId:"id-5e85d6bc-f9c4-4aa7-8c9c-57ac07f1992f",targetId:"id-8bc3dc1a-ff1f-4ef3-a8fb-7743d0870255",type:"Serving"},{id:"fbc9bdf9-5671-48e2-a8e0-abcd0394de72",sourceId:"dd30c017-1638-4e63-a652-ce0ca8cce89d",targetId:"id-5e85d6bc-f9c4-4aa7-8c9c-57ac07f1992f",type:"Serving"},{id:"c76f5462-e942-4836-915b-a05e8d6b3d05",sourceId:"id-8bc3dc1a-ff1f-4ef3-a8fb-7743d0870255",targetId:"id-3adbf534-ad35-4afe-a9a5-b4b886cac002",type:"Serving"},{id:"id-24449e97-1c61-4055-974d-e07c39c99c25",sourceId:"id-8bc3dc1a-ff1f-4ef3-a8fb-7743d0870255",targetId:"id-454cc065-f522-425c-bf46-16cddd15e9bf",type:"Serving"}],m=[{id:"cc118a1f-6d28-4883-851b-78f1de27ae45",name:"Default View",viewpoint:""}],y={identifier:e,archimateId:a,name:d,description:c,formats:t,source:i,sourceFile:b,sourceFormat:f,timestamp:n,tags:o,duplicates:r,language:p,elements:s,relationships:l,views:m};export{a as archimateId,y as default,c as description,r as duplicates,s as elements,t as formats,e as identifier,p as language,d as name,l as relationships,i as source,b as sourceFile,f as sourceFormat,o as tags,n as timestamp,m as views};