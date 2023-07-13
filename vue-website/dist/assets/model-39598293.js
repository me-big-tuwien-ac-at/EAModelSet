const e="https://me.big.tuwien.ac.at/EAModelSet/id-685c01c7-88e4-492a-bdac-37d8995f651d",a="id-685c01c7-88e4-492a-bdac-37d8995f651d",d="gsip",c="",i=["XML","CSV","JSON","ARCHIMATE"],t="GitHub",b="raw-data/github/xml/gsip.xml",o="XML",f="29-06-2023 09:26:55",p=["DUPLICATE"],n=["raw-data/github/xml/application-collaboration.xml"],r="tl",s=[{id:"id-52c76177-ee35-4b85-b371-5752120cb9e7",name:"Linked Data Store",type:"ApplicationComponent",layer:"application"},{id:"d1ae38ff-af9a-4c9a-954b-80a3ae6fc3c5",name:"Linked Data Broker",type:"ApplicationComponent",layer:"application"},{id:"id-87cf8248-62ab-4563-be3f-bf46ffc4deaf",name:"RDF Descriptions",type:"DataObject",layer:"application"},{id:"id-273135b2-3467-466c-9acc-4eb90165004a",name:"SPARQL",type:"ApplicationInterface",layer:"application"},{id:"e3a14bdf-3a72-49f4-97a9-05531252b715",name:"HTTP",type:"ApplicationInterface",layer:"application"},{id:"id-6a2c928c-a1bf-4d47-b9f7-70f939c86764",name:"Web Client",type:"ApplicationComponent",layer:"application"},{id:"id-3e035647-b194-4569-8569-cd4270c3ea33",name:"Web Resource",type:"DataObject",layer:"application"},{id:"id-6f50d55d-b4c7-4592-800e-d1bead2f7186",name:"Web Client",type:"ApplicationComponent",layer:"application"},{id:"id-8b4e0eb9-eb39-4108-a4de-a7b2ce2289c0",name:"Web Resource",type:"DataObject",layer:"application"},{id:"id-415f7d03-2585-43fe-be5d-22353c62ee31",name:"Representations",type:"DataObject",layer:"application"},{id:"e51f71a0-8e4d-46b9-937a-d6b04b142339",name:"GSIP",type:"ApplicationCollaboration",layer:"application"},{id:"id-9788940c-f856-43b7-8b3b-d3a9044e5826",name:"Web Resource",type:"DataObject",layer:"application"},{id:"id-82e3966b-dafc-4f91-b5ec-b44acdcca372",name:"Spatial Feature",type:"DataObject",layer:"application"},{id:"id-1d4198f6-7e8e-4db4-bff3-7db18447ad81",name:"Metadata",type:"DataObject",layer:"application"},{id:"ba21e118-34cc-4f4d-97ed-63cf5db6c220",name:"Web Page",type:"DataObject",layer:"application"},{id:"cf156f3d-c984-42e8-a044-343e54d29f53",name:"Map View",type:"DataObject",layer:"application"}],l=[{id:"id-2b7976db-f65d-4cee-96cb-2dfcd03d3a4e",sourceId:"d1ae38ff-af9a-4c9a-954b-80a3ae6fc3c5",targetId:"id-52c76177-ee35-4b85-b371-5752120cb9e7",type:"Serving"},{id:"id-57494477-9e9f-4fb9-88e5-a40810e7f266",sourceId:"id-52c76177-ee35-4b85-b371-5752120cb9e7",targetId:"d1ae38ff-af9a-4c9a-954b-80a3ae6fc3c5",type:"Serving"},{id:"id-5014a944-486e-4b7c-b26e-73c17e553fee",sourceId:"id-52c76177-ee35-4b85-b371-5752120cb9e7",targetId:"id-273135b2-3467-466c-9acc-4eb90165004a",type:"Composition"},{id:"b4007800-c065-489c-90cd-73ba38b77f7b",sourceId:"d1ae38ff-af9a-4c9a-954b-80a3ae6fc3c5",targetId:"e3a14bdf-3a72-49f4-97a9-05531252b715",type:"Composition"},{id:"ba757205-2a8e-485f-b3e5-0207fe8efd9c",sourceId:"e3a14bdf-3a72-49f4-97a9-05531252b715",targetId:"id-6a2c928c-a1bf-4d47-b9f7-70f939c86764",type:"Serving"},{id:"f414387d-9263-4d6a-ac44-c23e5cfa7b2b",sourceId:"id-52c76177-ee35-4b85-b371-5752120cb9e7",targetId:"id-87cf8248-62ab-4563-be3f-bf46ffc4deaf",type:"Access"},{id:"id-2aaecc67-81cd-4f84-bc3e-7557d4843570",sourceId:"id-273135b2-3467-466c-9acc-4eb90165004a",targetId:"id-6f50d55d-b4c7-4592-800e-d1bead2f7186",type:"Serving"},{id:"ff4b4e71-03ae-4621-bb3a-21880b0379d3",sourceId:"id-415f7d03-2585-43fe-be5d-22353c62ee31",targetId:"ba757205-2a8e-485f-b3e5-0207fe8efd9c",type:"Association"},{id:"id-7929e7b1-59b8-4c02-bd7d-fb8d55096aca",sourceId:"e51f71a0-8e4d-46b9-937a-d6b04b142339",targetId:"id-52c76177-ee35-4b85-b371-5752120cb9e7",type:"Composition"},{id:"e06e6f10-8dcd-448d-a448-53ecd8f3d949",sourceId:"e51f71a0-8e4d-46b9-937a-d6b04b142339",targetId:"d1ae38ff-af9a-4c9a-954b-80a3ae6fc3c5",type:"Composition"},{id:"e1aeeeea-ef4c-48bc-9eb3-00852f029cd9",sourceId:"e51f71a0-8e4d-46b9-937a-d6b04b142339",targetId:"e3a14bdf-3a72-49f4-97a9-05531252b715",type:"Composition"},{id:"id-9753e185-8f2a-4a23-bd13-7e2db88ce39b",sourceId:"e51f71a0-8e4d-46b9-937a-d6b04b142339",targetId:"id-273135b2-3467-466c-9acc-4eb90165004a",type:"Composition"},{id:"id-09e70a8d-734a-42bc-84f4-66219f74ddb1",sourceId:"id-1d4198f6-7e8e-4db4-bff3-7db18447ad81",targetId:"id-9788940c-f856-43b7-8b3b-d3a9044e5826",type:"Specialization"},{id:"c60a382f-7868-46e2-accf-5aaf99ebc663",sourceId:"cf156f3d-c984-42e8-a044-343e54d29f53",targetId:"id-9788940c-f856-43b7-8b3b-d3a9044e5826",type:"Specialization"},{id:"id-6d0a9094-8c8e-4324-a4c3-4ccdd3ead1a0",sourceId:"ba21e118-34cc-4f4d-97ed-63cf5db6c220",targetId:"id-9788940c-f856-43b7-8b3b-d3a9044e5826",type:"Specialization"},{id:"id-89df1c43-3185-4c71-9d5b-a7a83301310c",sourceId:"id-82e3966b-dafc-4f91-b5ec-b44acdcca372",targetId:"id-9788940c-f856-43b7-8b3b-d3a9044e5826",type:"Specialization"},{id:"id-80418a0e-4cb1-4a76-a0e4-6f7e03c4386e",sourceId:"e51f71a0-8e4d-46b9-937a-d6b04b142339",targetId:"id-9788940c-f856-43b7-8b3b-d3a9044e5826",type:"Access"}],y=[{id:"id-5554c6f5-6759-4988-bce3-3d294a676555",name:"Application Collaboration",viewpoint:"Application Cooperation"}],m={identifier:e,archimateId:a,name:d,description:c,formats:i,source:t,sourceFile:b,sourceFormat:o,timestamp:f,tags:p,duplicates:n,language:r,elements:s,relationships:l,views:y};export{a as archimateId,m as default,c as description,n as duplicates,s as elements,i as formats,e as identifier,r as language,d as name,l as relationships,t as source,b as sourceFile,o as sourceFormat,p as tags,f as timestamp,y as views};