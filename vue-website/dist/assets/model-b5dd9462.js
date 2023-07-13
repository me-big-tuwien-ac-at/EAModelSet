const e="https://me.big.tuwien.ac.at/EAModelSet/5b89998c",t="5b89998c",a="Factory Method",i="",c=["XML","CSV","JSON","ARCHIMATE"],o="GitHub",d="raw-data/github/archimate/3_factory_method_v1.archimate",p="ARCHIMATE",n="29-06-2023 09:31:04",s=[],r=[],l="en",y=[{id:"f0178dd6",name:"create subclass",type:"ApplicationProcess",layer:"application"},{id:"58474efc",name:"construct some object",type:"ApplicationProcess",layer:"application"},{id:"c11a49a4",name:"get result",type:"ApplicationProcess",layer:"application"},{id:"332dc3be",name:"Application Process",type:"ApplicationProcess",layer:"application"},{id:"65e8c2fb",name:" class creator",type:"ApplicationComponent",layer:"application"},{id:"75517e16",name:"",type:"ApplicationComponent",layer:"application"},{id:"3438cb90",name:"ABSTRACT fabric method",type:"ApplicationFunction",layer:"application"},{id:"fca74ac2",name:"construct algoritm",type:"ApplicationFunction",layer:"application"},{id:"f57c3dc4",name:"construct algoritm",type:"ApplicationFunction",layer:"application"},{id:"de51f2fe",name:"step",type:"ApplicationProcess",layer:"application"},{id:"23ab14f4",name:"step",type:"ApplicationProcess",layer:"application"},{id:"10090f3d",name:"subclass concrete creator A",type:"ApplicationComponent",layer:"application"},{id:"15a55d10",name:"fabric method",type:"ApplicationFunction",layer:"application"},{id:"4ca8af6e",name:"construct algoritm (copy)",type:"ApplicationFunction",layer:"application"},{id:"426d61c5",name:"step (copy)",type:"ApplicationProcess",layer:"application"},{id:"0c9ad89b",name:"step (copy)",type:"ApplicationProcess",layer:"application"},{id:"dd317821",name:"method 1",type:"ApplicationFunction",layer:"application"},{id:"86b0b487",name:"method 3",type:"ApplicationFunction",layer:"application"},{id:"0ee48ef4",name:"method 2",type:"ApplicationFunction",layer:"application"},{id:"b07d7a0d",name:"subclass concrete product A",type:"ApplicationComponent",layer:"application"},{id:"be7baef4",name:"getResult A",type:"ApplicationFunction",layer:"application"},{id:"7193d7a1",name:" interface product",type:"ApplicationInterface",layer:"application"},{id:"15a5997e",name:"method 1",type:"ApplicationFunction",layer:"application"},{id:"8c065b8e",name:"method 2",type:"ApplicationFunction",layer:"application"},{id:"5a812095",name:"method 3",type:"ApplicationFunction",layer:"application"},{id:"d61802f9",name:"create concrete product A",type:"ApplicationProcess",layer:"application"},{id:"6498e4ad",name:"step (copy)",type:"ApplicationProcess",layer:"application"},{id:"1fc316dc",name:"call fabric",type:"ApplicationProcess",layer:"application"},{id:"a9dc5fcf",name:"subclass concrete creator B",type:"ApplicationComponent",layer:"application"},{id:"9c157b91",name:"fabric method",type:"ApplicationFunction",layer:"application"},{id:"8353b3d9",name:"create concrete product B",type:"ApplicationProcess",layer:"application"},{id:"8030101a",name:"method 1",type:"ApplicationFunction",layer:"application"},{id:"242ffb34",name:"method 3",type:"ApplicationFunction",layer:"application"},{id:"d86b17d7",name:"method 2",type:"ApplicationFunction",layer:"application"},{id:"ec8780de",name:"subclass concrete product B",type:"ApplicationComponent",layer:"application"}],f=[{id:"9708f0d0",sourceId:"f57c3dc4",targetId:"23ab14f4",type:"RealizationRelationship"},{id:"609e8f54",sourceId:"f57c3dc4",targetId:"de51f2fe",type:"RealizationRelationship"},{id:"afa8bf16",sourceId:"de51f2fe",targetId:"23ab14f4",type:"FlowRelationship"},{id:"5aed6700",sourceId:"65e8c2fb",targetId:"3438cb90",type:"AssignmentRelationship"},{id:"812b0741",sourceId:"65e8c2fb",targetId:"f57c3dc4",type:"AssignmentRelationship"},{id:"720abe53",sourceId:"10090f3d",targetId:"4ca8af6e",type:"AssignmentRelationship"},{id:"27082ac2",sourceId:"4ca8af6e",targetId:"426d61c5",type:"RealizationRelationship"},{id:"ca149613",sourceId:"426d61c5",targetId:"0c9ad89b",type:"FlowRelationship"},{id:"e3ef8e5e",sourceId:"10090f3d",targetId:"15a55d10",type:"AssignmentRelationship"},{id:"0b5d2e3c",sourceId:"4ca8af6e",targetId:"0c9ad89b",type:"RealizationRelationship"},{id:"11fd6307",sourceId:"10090f3d",targetId:"65e8c2fb",type:"SpecializationRelationship"},{id:"932442f2",sourceId:"15a55d10",targetId:"3438cb90",type:"SpecializationRelationship"},{id:"7e182290",sourceId:"b07d7a0d",targetId:"7193d7a1",type:"RealizationRelationship"},{id:"1ffa31d7",sourceId:"7193d7a1",targetId:"15a5997e",type:"AssociationRelationship"},{id:"fdde9057",sourceId:"b07d7a0d",targetId:"dd317821",type:"AssignmentRelationship"},{id:"59c9f4d6",sourceId:"7193d7a1",targetId:"8c065b8e",type:"AssociationRelationship"},{id:"b467239c",sourceId:"b07d7a0d",targetId:"86b0b487",type:"AssignmentRelationship"},{id:"c8ff4aac",sourceId:"b07d7a0d",targetId:"be7baef4",type:"AssignmentRelationship"},{id:"e017caa7",sourceId:"7193d7a1",targetId:"5a812095",type:"AssociationRelationship"},{id:"836d7a40",sourceId:"b07d7a0d",targetId:"0ee48ef4",type:"AssignmentRelationship"},{id:"a7d29e82",sourceId:"d61802f9",targetId:"6498e4ad",type:"FlowRelationship"},{id:"2850a0b4",sourceId:"15a55d10",targetId:"d61802f9",type:"CompositionRelationship"},{id:"ea031341",sourceId:"15a55d10",targetId:"6498e4ad",type:"CompositionRelationship"},{id:"ede14cbb",sourceId:"5a812095",targetId:"de51f2fe",type:"ServingRelationship"},{id:"f41f67c7",sourceId:"8c065b8e",targetId:"23ab14f4",type:"ServingRelationship"},{id:"3a4e3273",sourceId:"b07d7a0d",targetId:"d61802f9",type:"ServingRelationship"},{id:"d8c1e366",sourceId:"f57c3dc4",targetId:"1fc316dc",type:"CompositionRelationship"},{id:"64ac7a87",sourceId:"1fc316dc",targetId:"de51f2fe",type:"FlowRelationship"},{id:"229f0c64",sourceId:"3438cb90",targetId:"1fc316dc",type:"ServingRelationship"},{id:"7701c614",sourceId:"10090f3d",targetId:"f0178dd6",type:"ServingRelationship"},{id:"de7ef2a5",sourceId:"f57c3dc4",targetId:"58474efc",type:"ServingRelationship"},{id:"442636ef",sourceId:"f57c3dc4",targetId:"c11a49a4",type:"ServingRelationship"},{id:"7ab9cc92",sourceId:"a9dc5fcf",targetId:"9c157b91",type:"AssignmentRelationship"},{id:"df9bc263",sourceId:"ec8780de",targetId:"8030101a",type:"AssignmentRelationship"},{id:"b6fbca26",sourceId:"ec8780de",targetId:"d86b17d7",type:"AssignmentRelationship"},{id:"3339ff48",sourceId:"ec8780de",targetId:"242ffb34",type:"AssignmentRelationship"},{id:"e79f2885",sourceId:"ec8780de",targetId:"8353b3d9",type:"ServingRelationship"},{id:"190d221f",sourceId:"9c157b91",targetId:"8353b3d9",type:"CompositionRelationship"},{id:"e1832044",sourceId:"ec8780de",targetId:"7193d7a1",type:"RealizationRelationship"},{id:"a29abed1",sourceId:"a9dc5fcf",targetId:"65e8c2fb",type:"SpecializationRelationship"},{id:"efebe453",sourceId:"f0178dd6",targetId:"58474efc",type:"FlowRelationship"},{id:"14d245fe",sourceId:"b07d7a0d",targetId:"10090f3d",type:"ServingRelationship"},{id:"ef87ef20",sourceId:"1fc316dc",targetId:"3438cb90",type:"FlowRelationship"},{id:"87c3c6f4",sourceId:"3438cb90",targetId:"15a55d10",type:"FlowRelationship"},{id:"27d59870",sourceId:"de51f2fe",targetId:"5a812095",type:"FlowRelationship"},{id:"ab4e2a40",sourceId:"23ab14f4",targetId:"8c065b8e",type:"FlowRelationship"},{id:"74f9192b",sourceId:"5a812095",targetId:"86b0b487",type:"FlowRelationship"},{id:"a1cd8b4d",sourceId:"8c065b8e",targetId:"0ee48ef4",type:"FlowRelationship"}],I=[{id:"c5f4a274",name:"factory",viewpoint:""},{id:"394ba2b4",name:"uml",viewpoint:""}],m={identifier:e,archimateId:t,name:a,description:i,formats:c,source:o,sourceFile:d,sourceFormat:p,timestamp:n,tags:s,duplicates:r,language:l,elements:y,relationships:f,views:I};export{t as archimateId,m as default,i as description,r as duplicates,y as elements,c as formats,e as identifier,l as language,a as name,f as relationships,o as source,d as sourceFile,p as sourceFormat,s as tags,n as timestamp,I as views};