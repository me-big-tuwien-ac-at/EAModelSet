const e="https://me.big.tuwien.ac.at/EAModelSet/aa25824a",t="aa25824a",a="event sourcing",i="",c=["XML","CSV","JSON","ARCHIMATE"],n="GitHub",d="raw-data/github/xml/6_event_sourcing.xml",o="XML",s="29-06-2023 09:27:03",r=["DUPLICATE"],p=["raw-data/github/archimate/6_event_sourcing.archimate"],l="en",b=[{id:"id-8794d1c0",name:"entity 1",type:"BusinessObject",layer:"business"},{id:"id-14c61bfe",name:"entity 1",type:"BusinessObject",layer:"business"},{id:"id-287114fa",name:"table 1",type:"DataObject",layer:"application"},{id:"c9406b02",name:"persistence table (event sourcing)",type:"DataObject",layer:"application"},{id:"id-03b1e8b3",name:"event type",type:"DataObject",layer:"application"},{id:"id-7beb2964",name:"event content",type:"DataObject",layer:"application"},{id:"f0a96881",name:"aggregate name",type:"DataObject",layer:"application"},{id:"id-0de516be",name:"ordinal number",type:"DataObject",layer:"application"},{id:"cc8e9126",name:"Application Event",type:"ApplicationEvent",layer:"application"},{id:"id-47caee49",name:"aggregate 1",type:"Grouping",layer:"other"},{id:"f0cc4a65",name:"aggregate 1",type:"Grouping",layer:"other"}],m=[{id:"id-43de4979",sourceId:"c9406b02",targetId:"id-0de516be",type:"Composition"},{id:"id-14df45bd",sourceId:"id-287114fa",targetId:"id-47caee49",type:"Association"},{id:"id-22fad559",sourceId:"c9406b02",targetId:"id-03b1e8b3",type:"Composition"},{id:"a71742e4",sourceId:"id-47caee49",targetId:"id-8794d1c0",type:"Association"},{id:"id-122f4445",sourceId:"c9406b02",targetId:"f0a96881",type:"Composition"},{id:"id-57c012c6",sourceId:"f0cc4a65",targetId:"id-14c61bfe",type:"Association"},{id:"a03ed7b6",sourceId:"c9406b02",targetId:"id-7beb2964",type:"Composition"},{id:"f737d38f",sourceId:"f0cc4a65",targetId:"c9406b02",type:"Association"},{id:"a06e073b",sourceId:"cc8e9126",targetId:"f0cc4a65",type:"Influence"}],u=[{id:"id-36eea90a",name:"event sourcing",viewpoint:""}],g={identifier:e,archimateId:t,name:a,description:i,formats:c,source:n,sourceFile:d,sourceFormat:o,timestamp:s,tags:r,duplicates:p,language:l,elements:b,relationships:m,views:u};export{t as archimateId,g as default,i as description,p as duplicates,b as elements,c as formats,e as identifier,l as language,a as name,m as relationships,n as source,d as sourceFile,o as sourceFormat,r as tags,s as timestamp,u as views};