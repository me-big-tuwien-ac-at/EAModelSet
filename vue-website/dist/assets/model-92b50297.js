const e="https://me.big.tuwien.ac.at/EAModelSet/1a07e439",a="1a07e439",t="Archivatrion",i="",o=["XML","CSV","JSON","ARCHIMATE"],c="GitHub",p="raw-data/github/archimate/arch_model.archimate",n="ARCHIMATE",d="29-06-2023 09:31:23",s=[],l=[],r="eo",m=[{id:"aea9cf4d",name:"MainDB",type:"ApplicationComponent",layer:"application"},{id:"aa5e8a44",name:"ArchiveDB",type:"ApplicationComponent",layer:"application"},{id:"adc90c4d",name:"DOC",type:"DataObject",layer:"application"},{id:"451ea5cc",name:"DOC_XXXXXX",type:"DataObject",layer:"application"},{id:"4c536f98",name:"ARCH_DOC",type:"DataObject",layer:"application"},{id:"abba3ab4",name:"ARCH_DATA",type:"ApplicationComponent",layer:"application"},{id:"decb4443",name:"RPC_DATA",type:"ApplicationComponent",layer:"application"},{id:"46665850",name:"OWS",type:"ApplicationComponent",layer:"application"},{id:"7843cb83",name:"RPCHSK",type:"ApplicationComponent",layer:"application"},{id:"f9c576b4",name:"ARCH_API",type:"ApplicationInterface",layer:"application"},{id:"4905c71d",name:"PAR_ARCH_TABLES",type:"DataObject",layer:"application"},{id:"fe7185c7",name:"ARCH_PROCESS",type:"DataObject",layer:"application"},{id:"de080c24",name:"ARCH_PROCESS_TABLE",type:"DataObject",layer:"application"},{id:"8b3b960c",name:"ARCH_TABLE_OPERATION",type:"DataObject",layer:"application"}],y=[{id:"997ef645",sourceId:"adc90c4d",targetId:"451ea5cc",type:"SpecialisationRelationship"},{id:"b8d033b3",sourceId:"aa5e8a44",targetId:"abba3ab4",type:"CompositionRelationship"},{id:"7144c92c",sourceId:"aea9cf4d",targetId:"46665850",type:"CompositionRelationship"},{id:"433f95de",sourceId:"aea9cf4d",targetId:"decb4443",type:"CompositionRelationship"},{id:"42f31cfc",sourceId:"aea9cf4d",targetId:"7843cb83",type:"CompositionRelationship"},{id:"915cb672",sourceId:"451ea5cc",targetId:"4c536f98",type:"SpecialisationRelationship"},{id:"c1b29942",sourceId:"abba3ab4",targetId:"f9c576b4",type:"CompositionRelationship"},{id:"e6170db7",sourceId:"fe7185c7",targetId:"de080c24",type:"CompositionRelationship"},{id:"e519f238",sourceId:"de080c24",targetId:"8b3b960c",type:"CompositionRelationship"},{id:"5b92bfea",sourceId:"de080c24",targetId:"4905c71d",type:"CompositionRelationship"}],b=[{id:"bd9f4d96",name:"Default View",viewpoint:""}],A={identifier:e,archimateId:a,name:t,description:i,formats:o,source:c,sourceFile:p,sourceFormat:n,timestamp:d,tags:s,duplicates:l,language:r,elements:m,relationships:y,views:b};export{a as archimateId,A as default,i as description,l as duplicates,m as elements,o as formats,e as identifier,r as language,t as name,y as relationships,c as source,p as sourceFile,n as sourceFormat,s as tags,d as timestamp,b as views};
