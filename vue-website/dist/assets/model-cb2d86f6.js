const e="https://me.big.tuwien.ac.at/EAModelSet/5f935242",t="5f935242",i=" the same physical entity in different contexts",a="",o=["XML","CSV","JSON","ARCHIMATE"],d="GitHub",s="raw-data/github/archimate/21_the_same_physical_entity_in_different_contexts.archimate",n="ARCHIMATE",c="29-06-2023 09:31:10",r=[],p=[],b="en",y=[{id:"9acf1739",name:"entity 1A",type:"BusinessObject",layer:"business"},{id:"bbf0a735",name:"entity 1",type:"BusinessObject",layer:"business"},{id:"9e2140ae",name:"entity 3",type:"BusinessObject",layer:"business"},{id:"3b60ca25",name:"entity 4",type:"BusinessObject",layer:"business"},{id:"b6b27588",name:"entity 5",type:"BusinessObject",layer:"business"},{id:"ed7458b6",name:"entity 6",type:"BusinessObject",layer:"business"},{id:"ef408eed",name:"entity 2 (copy)",type:"BusinessObject",layer:"business"},{id:"40fb8b33",name:"entity 1B",type:"BusinessObject",layer:"business"},{id:"01a48132",name:"entity 1C",type:"BusinessObject",layer:"business"},{id:"9edf54af",name:"data 1A",type:"DataObject",layer:"application"},{id:"c3c90480",name:"data 1B",type:"DataObject",layer:"application"},{id:"10ea5dc0",name:"data 1C",type:"DataObject",layer:"application"},{id:"f46044e1",name:"database",type:"Node",layer:"technology"},{id:"42a6bc85",name:"database",type:"Node",layer:"technology"},{id:"b4fde012",name:"database",type:"Node",layer:"technology"},{id:"df3a98e0",name:"meaning 1A",type:"Meaning",layer:"motivation"},{id:"a1a63b02",name:"meaning 1B",type:"Meaning",layer:"motivation"},{id:"d1ad0eaa",name:"meaning 1C",type:"Meaning",layer:"motivation"},{id:"8782c2a7",name:"All bounded contexts store the data locally, even though it’s the same data",type:"Meaning",layer:"motivation"},{id:"5dee04b1",name:"to reduce the coupling between contexts",type:"Outcome",layer:"motivation"},{id:"4e08efb6",name:"Bounded context A",type:"Grouping",layer:"other"},{id:"1dc2f8b6",name:"aggregate 1A",type:"Grouping",layer:"other"},{id:"fcec8adf",name:"aggregate 1",type:"Grouping",layer:"other"},{id:"0460fb9a",name:"Bounded context 2",type:"Grouping",layer:"other"},{id:"6eca19fd",name:"aggregate 3",type:"Grouping",layer:"other"},{id:"578d12d6",name:"service 1",type:"Grouping",layer:"other"},{id:"610f7ad3",name:"Bounded context 3",type:"Grouping",layer:"other"},{id:"bbbb2dfb",name:"aggregate 5",type:"Grouping",layer:"other"},{id:"0b8e36bb",name:"Bounded context 4",type:"Grouping",layer:"other"},{id:"1ecd0f02",name:"aggregate 6",type:"Grouping",layer:"other"},{id:"7985eb45",name:"Module 1",type:"Grouping",layer:"other"},{id:"4312df64",name:"Module 2",type:"Grouping",layer:"other"},{id:"7ec77965",name:"Module 3",type:"Grouping",layer:"other"},{id:"0b770bd1",name:"Module 4",type:"Grouping",layer:"other"},{id:"403b0d67",name:"Bounded context 1 (copy)",type:"Grouping",layer:"other"},{id:"1eafd22d",name:"Module 1 (copy)",type:"Grouping",layer:"other"},{id:"adef6bcb",name:"aggregate 1 (copy)",type:"Grouping",layer:"other"},{id:"56a261e6",name:"Bounded context B",type:"Grouping",layer:"other"},{id:"14bb6236",name:"aggregate 1B",type:"Grouping",layer:"other"},{id:"44c28699",name:"Bounded context C",type:"Grouping",layer:"other"},{id:"b3321988",name:"aggregate 1C",type:"Grouping",layer:"other"},{id:"6154d779",name:"translator A-B",type:"Grouping",layer:"other"},{id:"007761c4",name:"translator B-C",type:"Grouping",layer:"other"}],l=[{id:"4820eb83",sourceId:"0b8e36bb",targetId:"ed7458b6",type:"CompositionRelationship"},{id:"030053d3",sourceId:"9acf1739",targetId:"1dc2f8b6",type:"AssociationRelationship"},{id:"9f86e6d1",sourceId:"0460fb9a",targetId:"6eca19fd",type:"CompositionRelationship"},{id:"4e010186",sourceId:"b6b27588",targetId:"bbbb2dfb",type:"AssociationRelationship"},{id:"33bbf84f",sourceId:"6eca19fd",targetId:"bbbb2dfb",type:"AssociationRelationship"},{id:"8bce5463",sourceId:"fcec8adf",targetId:"6eca19fd",type:"AssociationRelationship"},{id:"ddb28270",sourceId:"6eca19fd",targetId:"578d12d6",type:"AssociationRelationship"},{id:"3d7623bf",sourceId:"bbf0a735",targetId:"fcec8adf",type:"AssociationRelationship"},{id:"1943735e",sourceId:"9e2140ae",targetId:"9acf1739",type:"AssociationRelationship"},{id:"1daf7627",sourceId:"ed7458b6",targetId:"1ecd0f02",type:"AssociationRelationship"},{id:"614364b2",sourceId:"3b60ca25",targetId:"6eca19fd",type:"AssociationRelationship"},{id:"81390849",sourceId:"1dc2f8b6",targetId:"fcec8adf",type:"AssociationRelationship"},{id:"9c941571",sourceId:"fcec8adf",targetId:"578d12d6",type:"AssociationRelationship"},{id:"f9628461",sourceId:"9e2140ae",targetId:"3b60ca25",type:"AssociationRelationship"},{id:"6857a647",sourceId:"610f7ad3",targetId:"b6b27588",type:"CompositionRelationship"},{id:"09849a86",sourceId:"4e08efb6",targetId:"fcec8adf",type:"CompositionRelationship"},{id:"383a98de",sourceId:"0460fb9a",targetId:"9e2140ae",type:"CompositionRelationship"},{id:"2e072c45",sourceId:"0460fb9a",targetId:"578d12d6",type:"CompositionRelationship"},{id:"17f74ae6",sourceId:"9e2140ae",targetId:"6eca19fd",type:"AssociationRelationship"},{id:"508ef168",sourceId:"4e08efb6",targetId:"9acf1739",type:"CompositionRelationship"},{id:"e144ff4b",sourceId:"bbbb2dfb",targetId:"1ecd0f02",type:"AssociationRelationship"},{id:"7d319d0b",sourceId:"b6b27588",targetId:"ed7458b6",type:"AssociationRelationship"},{id:"6beee282",sourceId:"610f7ad3",targetId:"bbbb2dfb",type:"CompositionRelationship"},{id:"b9ee5911",sourceId:"0460fb9a",targetId:"3b60ca25",type:"CompositionRelationship"},{id:"cda4ab58",sourceId:"9e2140ae",targetId:"b6b27588",type:"AssociationRelationship"},{id:"2b11f21c",sourceId:"0b8e36bb",targetId:"1ecd0f02",type:"CompositionRelationship"},{id:"70437f57",sourceId:"bbf0a735",targetId:"9e2140ae",type:"AssociationRelationship"},{id:"69cb7c6d",sourceId:"9acf1739",targetId:"bbf0a735",type:"SpecializationRelationship"},{id:"9f40041a",sourceId:"403b0d67",targetId:"ef408eed",type:"CompositionRelationship"},{id:"2ebcd794",sourceId:"ef408eed",targetId:"adef6bcb",type:"AssociationRelationship"},{id:"16c8d43e",sourceId:"1eafd22d",targetId:"adef6bcb",type:"CompositionRelationship"},{id:"16876b76",sourceId:"4e08efb6",targetId:"1dc2f8b6",type:"CompositionRelationship"},{id:"210b55d0",sourceId:"56a261e6",targetId:"40fb8b33",type:"CompositionRelationship"},{id:"b0492abd",sourceId:"56a261e6",targetId:"14bb6236",type:"CompositionRelationship"},{id:"375b1226",sourceId:"40fb8b33",targetId:"14bb6236",type:"AssociationRelationship"},{id:"b05f65b0",sourceId:"44c28699",targetId:"01a48132",type:"CompositionRelationship"},{id:"acd07c90",sourceId:"44c28699",targetId:"b3321988",type:"CompositionRelationship"},{id:"9054890a",sourceId:"01a48132",targetId:"b3321988",type:"AssociationRelationship"},{id:"3dde8edb",sourceId:"40fb8b33",targetId:"bbf0a735",type:"SpecializationRelationship"},{id:"12597332",sourceId:"01a48132",targetId:"bbf0a735",type:"SpecializationRelationship"},{id:"06be0824",sourceId:"1dc2f8b6",targetId:"6154d779",type:"AssociationRelationship"},{id:"70d9ca6b",sourceId:"6154d779",targetId:"14bb6236",type:"AssociationRelationship"},{id:"823a43be",sourceId:"14bb6236",targetId:"007761c4",type:"AssociationRelationship"},{id:"ca991b84",sourceId:"007761c4",targetId:"b3321988",type:"AssociationRelationship"},{id:"16e7cf78",sourceId:"4e08efb6",targetId:"df3a98e0",type:"CompositionRelationship"},{id:"eff62ac2",sourceId:"56a261e6",targetId:"a1a63b02",type:"CompositionRelationship"},{id:"bf063510",sourceId:"44c28699",targetId:"d1ad0eaa",type:"CompositionRelationship"},{id:"dd6bec5b",sourceId:"4e08efb6",targetId:"9edf54af",type:"CompositionRelationship"},{id:"b63d0efd",sourceId:"44c28699",targetId:"10ea5dc0",type:"CompositionRelationship"},{id:"d57844b7",sourceId:"1dc2f8b6",targetId:"9edf54af",type:"AssociationRelationship"},{id:"36d99351",sourceId:"14bb6236",targetId:"c3c90480",type:"AssociationRelationship"},{id:"6ae078cf",sourceId:"b3321988",targetId:"10ea5dc0",type:"AssociationRelationship"},{id:"9077f5f9",sourceId:"f46044e1",targetId:"8782c2a7",type:"AssociationRelationship"},{id:"51a09b8f",sourceId:"42a6bc85",targetId:"8782c2a7",type:"AssociationRelationship"},{id:"c30d8323",sourceId:"b4fde012",targetId:"8782c2a7",type:"AssociationRelationship"},{id:"e5d2bd39",sourceId:"4e08efb6",targetId:"f46044e1",type:"CompositionRelationship"},{id:"3da11fd0",sourceId:"56a261e6",targetId:"42a6bc85",type:"CompositionRelationship"},{id:"4f8b5cbf",sourceId:"44c28699",targetId:"b4fde012",type:"CompositionRelationship"},{id:"bf1dd258",sourceId:"9edf54af",targetId:"f46044e1",type:"AssociationRelationship"},{id:"500b976a",sourceId:"c3c90480",targetId:"42a6bc85",type:"AssociationRelationship"},{id:"3e3ff5ef",sourceId:"10ea5dc0",targetId:"b4fde012",type:"AssociationRelationship"},{id:"5b356cc7",sourceId:"8782c2a7",targetId:"5dee04b1",type:"InfluenceRelationship"}],f=[{id:"3189cd47",name:" the same physical entity in different contexts",viewpoint:""}],u={identifier:e,archimateId:t,name:i,description:a,formats:o,source:d,sourceFile:s,sourceFormat:n,timestamp:c,tags:r,duplicates:p,language:b,elements:y,relationships:l,views:f};export{t as archimateId,u as default,a as description,p as duplicates,y as elements,o as formats,e as identifier,b as language,i as name,l as relationships,d as source,s as sourceFile,n as sourceFormat,r as tags,c as timestamp,f as views};